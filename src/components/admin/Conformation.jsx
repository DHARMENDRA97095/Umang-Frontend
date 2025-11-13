"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function Conformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        <Trash2 className="w-4 h-4" />
        Delete Folder
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="flex flex-col items-start space-y-4">
              <Trash2 className="w-10 h-10 text-red-600" />
              <h2 className="text-lg font-semibold">
                Are you sure you want to delete this folder?
              </h2>
              <p className="text-gray-500 text-sm">
                This action cannot be undone.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  console.log("Folder deleted");
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
