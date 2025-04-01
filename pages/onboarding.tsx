import { useEffect, useState } from "react";
import { useUserAuth } from "@/components/userAuth";
import { useRouter } from "next/router";
import AddressAutocomplete from "@/components/addressAutocomplete";
import leoProfanity from "leo-profanity";
import { validateName } from "@/services/validateName";

interface Company {
  companyId: number;
  name: string;
}

interface User {
  userId: number;
  name: string;
  email: string;
  companyId: number;
  nickName: string;
  address: string;
}

export default function OnboardingPage() {
  const { userData } = useUserAuth();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [nickName, setNickName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [nickNameError, setNickNameError] = useState<string | null>(null);
  const router = useRouter();

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setNickNameError(validateName(value));
  };

  useEffect(() => {
    if (!userData?.accessToken) return;

    const fetchCompanies = async () => {
      try {
        const res = await fetch(
          "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/allComp",
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );

        if (!res.ok) throw new Error("Feil ved henting av selskaper");

        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompanies();
  }, [userData?.accessToken]);

  useEffect(() => {
    if (!userData?.accessToken) return;
    const GetUser = async () => {
      try {
        const response = await fetch(
          `https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/getUser`,
          {
            headers: {
              Authorization: `Bearer ${userData.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Feil ved henting av brukerdata: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched user profile:", data);

        setUser(data);
        if (data.companyId) setSelectedCompanyId(data.companyId);
        if (data.nickName) {
          setNickName(data.nickName);
          // Validate the initial nickname
          handleNickNameChange({ target: { value: data.nickName } } as React.ChangeEvent<HTMLInputElement>);
        }
        if (data.address) setAddress(data.address);
      } catch (error) {
        console.error(error);
      }
    };
    GetUser();
  }, [userData?.accessToken]);

  const handleSubmit = async () => {
    if (!userData?.accessToken || !selectedCompanyId || !nickName || !address) {
      alert("Vennligst fyll ut alle felter.");
      return;
    }

    if (nickNameError) {
      alert("Vennligst rett opp i kallenavnfeilen før du fortsetter.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/Profile/companySet",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.accessToken}`,
          },
          body: JSON.stringify({
            companyId: selectedCompanyId,
            nickName,
            address,
          }),
        }
      );

      if (!res.ok) throw new Error("Klarte ikke oppdatere profil");

      console.log("Brukerdata oppdatert");
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-customYellow2 p-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-customViolet mb-6 text-center">
          Fullfør profilen din
        </h1>

        <label className="block mb-2 font-medium text-gray-700">Velg selskap:</label>
        <select
          className="w-full p-3 mb-4 rounded border"
          value={selectedCompanyId ?? ""}
          onChange={(e) => setSelectedCompanyId(Number(e.target.value))}
        >
          <option value="" disabled>
            Velg et selskap
          </option>
          {companies.map((company) => (
            <option key={company.companyId} value={company.companyId}>
              {company.name}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium text-gray-700">Kallenavn:</label>
        <input
          type="text"
          className="w-full p-3 mb-1 rounded border"
          value={nickName}
          onChange={handleNickNameChange}
          placeholder="F.eks. SuperPer"
        />
        {nickNameError && (
          <p className="text-red-600 text-sm mb-4">{nickNameError}</p>
        )}

        <label className="block mb-2 font-medium text-gray-700">Adresse:</label>
        <AddressAutocomplete selectedAddress={address} setSelectedAddress={setAddress} />

        <button
          onClick={handleSubmit}
          disabled={loading || Boolean(nickNameError)}
          className="w-full bg-customViolet text-white p-3 rounded font-semibold hover:opacity-90 transition"
        >
          {loading ? "Lagrer..." : "Fullfør"}
        </button>
      </div>
    </div>
  );
}
