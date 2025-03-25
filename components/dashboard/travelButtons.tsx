import Image from "next/image";

interface TransportModeProps {
    icon: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;

}

const TransportModeButton: React.FC<TransportModeProps> = ({icon, label, selected = false, onClick}) => {
    const baseButton =
    "flex flex-col items-center justify-center gap-2 w-full aspect-[5/4] border-2 rounded-xl transition";
    const selectedButton = selected
    ? "border-violet-600 bg-violet-100"
    : "border-violet-900";

    return (
            <button 
            onClick={onClick}
            className={`${baseButton} ${selectedButton}`}
            >
                <div className="w-16 h-16 relative">
                    <Image src={icon} alt={label} layout="fill" objectFit="contain" />
                </div>
                <span className="font-medium px-4">{label}</span>

            </button>

    );
};

export default TransportModeButton;