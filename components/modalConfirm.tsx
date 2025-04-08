import React from "react";

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmColor?: "red" | "green";
}

export default function ConfirmationModal({
  message,
  onConfirm,
  onCancel,
  confirmColor = "green",
}: ConfirmationModalProps) {
  const confirmButtonClasses =
    confirmColor === "red"
      ? "px-4 py-2 bg-customRed text-white rounded-full hover:bg-red-600 transition"
      : "px-4 py-2 bg-customGreen text-white rounded-full hover:bg-green-600 transition";

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 w-80 text-center">
        <p className="text-lg font-semibold text-black">{message}</p>
        <div className="mt-4 flex justify-center gap-4">
            <button onClick={onConfirm} className={confirmButtonClasses}>
            Bekreft
            </button>
            <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition"
            >
            Avbryt
            </button>
        </div>
        </div>
    </div>
    );
}
