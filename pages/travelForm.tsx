import { useEffect, useState } from "react";
import AddressField from "@/components/dashboard/adressField";
import TransportModeButton from "@/components/dashboard/travelButtons";
import PrimaryButton from "@/components/buttons/primaryButton";
import ReturnButton from "@/components/buttons/returnButton";
import { useRouter } from "next/router";
import { useUserAuth } from "@/components/userAuth";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const travelOptions = [
  { label: "Gange", value: "walking", iconSrc: `${basePath}/images/travelForm/gange.svg` },
  { label: "Sykkel", value: "cycling", iconSrc: `${basePath}/images/travelForm/sykkel.svg` },
  { label: "Kollektivtransport", value: "bus", iconSrc: `${basePath}/images/travelForm/kollektiv.svg` },
  { label: "Samkjøring", value: "car", iconSrc: `${basePath}/images/travelForm/carpool.svg` },
];


export default function TravelForm() {
  const { userData } = useUserAuth();
    const router = useRouter();
    //Hent og sett adresse
    const [selected, setSelected] = useState<{ label: string; value: string } | null>(null);
    const [address, setAddress] = useState("");
    //Feilmeldinger
    const [addressError, setAddressError] = useState("");
    const [transportError, setTransportError] = useState("");

    const GetUser = async () => {
      if (!userData?.accessToken) return;
    
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
        console.log("✅ Fetched user profile:", data);
    
        if (data.address) {
          setAddress(data.address);
        }
      } catch (error) {
        console.error("Feil ved henting av brukerdata:", error);
      }
    };

    useEffect(() => {
      if (userData?.accessToken) {
        GetUser();
      }
    }, [userData?.accessToken]);
    

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
    
        try {
          
          if (!userData?.accessToken || !userData?.email) {
            throw new Error("Mangler autentisering eller e-post.");
          }          
            const response = await fetch(`https://bouvetapi-frbah7fhh5cjdpfy.swedencentral-01.azurewebsites.net/api/transportEntry/upsert`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userData.accessToken}`,
              },
              body: JSON.stringify({
                email: userData.email,           
                startingAddress: address,        
                method: selected?.value,                
              }),
            });
    
            if (!response.ok) {
              throw new Error(`Serverfeil: ${response.statusText}`);
            }
          
            const result = await response.json();
            console.log("✅ Registrering vellykket:", result);
          
            alert("Reise registrert!");
            //router.push("/"); // optional redirect after success
          } catch (error) {
            console.error("Feil ved innsending:", error);
            alert("Klarte ikke å registrere turen. Prøv igjen senere.");
          }}
  
    return (
        <div className="flex flex-col items-center px-4">
            <header className="self-start">
                <ReturnButton onClick={() => router.back()} />
            </header>
            <div className="font-bold text-3xl text-violet-950 pb-6">Registrer reise</div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 w-full">
                {/*Adresse-felt */}
                <div className="w-full">
                    <AddressField 
                        userId="bruker123" //ENDRE TIL Å HENTE USER ID SENERE
                        address={address}
                        setAddress={setAddress}
                    />
                    {addressError && (<p className="text-red-800 text-sm py-2">{addressError}</p>)}
                </div>

                {/*Valg av reisemetode*/}
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
                    {transportError && (
                    <p className="text-red-800 text-sm py-2">{transportError}</p>
                    )}
                </div>

                {/*Registrer-knapp */}
                    <div id="submit" className="w-full mt-8">
                        <PrimaryButton title="Registrer" type="submit"/>
                    </div>
            </form>
        </div>
    );
  }