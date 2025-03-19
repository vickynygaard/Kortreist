interface ButtonProps {
    icon?: React.ReactNode;
    title: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({icon, title }) => {
    return (
        <button className={`flex flex-col items-center justify-center bg-violet-900 text-white px-4 py-2 rounded-md transition`}>
            {icon && <div className="mb-2">{icon}</div>}
            <span className="text-lg font-semibold">{title}</span>
        </button>
    );

};

export default PrimaryButton;