interface ButtonProps {
    title: string;
    type?: "button" | "submit";
    onClick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({title, type = "button", onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-full bg-violet-900 text-white px-4 py-2 rounded-lg transition`}
        >
            <span className="text-lg font-semibold">{title}</span>
        </button>
    );

};

export default PrimaryButton;