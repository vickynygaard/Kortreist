import { useState } from "react";
import AddressField from "@/components/dashboard/adressField";
import TransportModeButton from "@/components/dashboard/travelButtons";
import PrimaryButton from "@/components/buttons/primaryButton";
import ReturnButton from "@/components/buttons/returnButton";
import { useRouter } from "next/router";

//Transport-metoder
const travelOptions = [
  { label: "Gange", iconSrc: "/images/travelForm/gange.svg" },
  { label: "Sykkel", iconSrc: "/images/travelForm/sykkel.svg" },
  { label: "Kollektivtransport", iconSrc: "/images/travelForm/kollektiv.svg" },
  { label: "Samkjøring", iconSrc: "/images/travelForm/carpool.svg" },
];

export default function TravelForm() {
    const router = useRouter();
    //Hent og sett adresse
    const [selected, setSelected] = useState<string | null>(null);
    const [address, setAddress] = useState("");
    //Feilmeldinger
    const [addressError, setAddressError] = useState("");
    const [transportError, setTransportError] = useState("");


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
          const response = await fetch("/api/travel", { //-----HUSK Å ENDRE-----
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: "bruker123", //----Endre senere----
              transportMode: 
              selected, 
              address,
              timestamp: new Date().toISOString(),
            }),
          });
    
          if (!response.ok) {
            throw new Error("En feil har oppstått under registrering.");
          }
    
          alert("Reise registrert!");
        } catch (error) {
          console.error("Feil ved innsending:", error);
          alert("Klarte ikke å registrere turen. Prøv igjen senere.");
        }
      };
  
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
                        {travelOptions.map(({ label, iconSrc }) => (
                        <TransportModeButton
                            key={label}
                            label={label}
                            icon={iconSrc}
                            selected={selected === label}
                            onClick={() => setSelected(label)}
                        />
                        ))}
                    </div>
                    {transportError && (
                    <p className="text-red-800 text-sm py-2">{transportError}</p>
                    )}
                </div>

                {/*Registrer-knapp */}
                    <div className="w-full mt-8">
                        <PrimaryButton title="Registrer" type="submit"/>
                    </div>
            </form>
        </div>
    );
  }