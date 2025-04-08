import { useEffect, useState } from "react";
import AddressAutocomplete from "@/components/addressAutocomplete";
import TransportModeButton from "@/components/dashboard/travelButtons";
import PrimaryButton from "@/components/buttons/primaryButton";
import ReturnButton from "@/components/buttons/returnButton";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";
import toast, { Toaster } from "react-hot-toast";
import { useApi } from "@/hooks/useApi";
import CustomSpinner from "@/components/dashboard/customSpinner";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const travelOptions = [
  { label: "Gange", value: "walking", iconSrc: `${basePath}/images/travelForm/Gange.svg` },
  { label: "Sykkel", value: "cycling", iconSrc: `${basePath}/images/travelForm/Sykkel.svg` },
  { label: "Kollektivtransport", value: "bus", iconSrc: `${basePath}/images/travelForm/Kollektiv.svg` },
  { label: "Samkjøring", value: "car", iconSrc: `${basePath}/images/travelForm/Carpool.svg` },
];

interface UserProfile {
  address: string;
}

export default function TravelForm() {
  const { userData } = useUserAuth();
  const router = useRouter();

    // Retrieve cached profile data from localStorage
    let fallbackProfile: UserProfile | undefined;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem("travelProfile");
      if (cached) {
        try {
          fallbackProfile = JSON.parse(cached);
        } catch (error) {
          console.error("Failed to parse cached travel profile:", error);
        }
      }
    }

    const { data: userProfile, isLoading, error } = useApi<UserProfile>(
      "/api/Profile/getUser",
      userData?.accessToken,
      { fallbackData: fallbackProfile, revalidateOnMount: true, refreshInterval: 30000, enabled: !!userData?.accessToken }
    );

  // Save fetched profile data to localStorage
  useEffect(() => {
    if (userProfile && typeof window !== "undefined") {
      localStorage.setItem("travelProfile", JSON.stringify(userProfile));
    }
  }, [userProfile]);

  // Local state for address and transport selection
  const [address, setAddress] = useState("");
  const [selected, setSelected] = useState<{ label: string; value: string } | null>(null);
  const [addressError, setAddressError] = useState("");
  const [transportError, setTransportError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // When the user profile is fetched, set the address (if available)
  useEffect(() => {
    if (userProfile && userProfile.address) {
      setAddress(userProfile.address);
    }
  }, [userProfile]);

  // Show spinner while loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CustomSpinner />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!selected) {
      setTransportError("Husk å velge reisemåte.");
      hasError = true;
    } else {
      setTransportError("");
    }

    if (!address.trim()) {
      setAddressError("Addressefeltet kan ikke stå tomt.");
      hasError = true;
    } else {
      setAddressError("");
    }

    if (hasError) return;

    // Disable button immediately to prevent double-tapping
    setIsSaving(true);

    try {
      if (!userData?.accessToken || !userData?.email) {
        throw new Error("Mangler autentisering eller e-post.");
      }

      const response = await fetch(
        `https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net/api/transportEntry/upsert`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.accessToken}`,
          },
          body: JSON.stringify({
            startingAddress: address,
            method: selected?.value,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Serverfeil: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Registrering vellykket:", result);

      toast.success("Reise registrert!");
      router.push("/");
    } catch (error) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Her skjedde det noe galt, prøv å laste inn på nytt</p>
          </div>
        );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      <header className="self-start">
        <ReturnButton onClick={() => router.back()} />
      </header>
      <div className="font-bold text-3xl text-violet-950 pb-6">Registrer reise</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 w-full">
        {/* Address */}
        <div className="w-full">
          <AddressAutocomplete selectedAddress={address} setSelectedAddress={setAddress} />
          {addressError && <p className="text-customRed text-sm py-2">{addressError}</p>}
        </div>
        {/* Reisemåte */}
        <div className="w-full">
          <label className="block font-semibold text-lg pb-2">Reisemåte</label>
          <div className="grid grid-cols-2 gap-4">
            {travelOptions.map(({ label, value, iconSrc }) => (
              <TransportModeButton
                key={label}
                label={label}
                value={value}
                icon={iconSrc}
                selected={selected?.value === value}
                onClick={() => setSelected({ label, value })}
              />
            ))}
          </div>
          {transportError && <p className="text-customRed text-sm py-2">{transportError}</p>}
        </div>
        {/* Submit Button */}
        <div id="submit" className="w-full mt-8">
          <PrimaryButton title="Registrer" type="submit" disabled={isSaving} />
        </div>
      </form>
    </div>
  );
}
