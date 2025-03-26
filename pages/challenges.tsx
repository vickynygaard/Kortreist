import { useRouter } from "next/router";
import ReturnButton from "@/components/buttons/returnButton";
import Challenge from "../components/dashboard/challenge";

export default function ChallengePage(): JSX.Element {
    const router = useRouter();
    
    return (
        <div className="flex flex-col items-center p-4 gap-4">
            <header className="self-start">
                <ReturnButton onClick={() => router.back()} />
            </header>
            <div className="flex justify-center w-full font-bold font-mono text-3xl text-violet-950 pb-6">
                Ukens utfordringer
            </div>

            <Challenge 
                title='Lang challenge-tittel'
                type= 'sykkel'
                current= {5}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {7}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {4}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {1}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {7}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {7}
                total= {10}
            />
            <Challenge 
                title='Sykle til jobb'
                type= 'sykkel'
                current= {7}
                total= {10}
            />

        </div>
    );

};