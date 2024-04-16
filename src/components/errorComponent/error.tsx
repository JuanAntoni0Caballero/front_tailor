"use client";

import React, { useState, useEffect } from "react";

interface FormErrorProps {
  error: string[];
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  const [errors, setErrors] = useState<string[]>(error);

  useEffect(() => {
    setErrors(error);
  }, [error]);

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    errors.length > 0 && (
      <div
        className="flex-col justify-center items-center content-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <div>
          <h3 className="font-medium">Necesitas corregir estos errores:</h3>
          <ul className="mt-1.5 list-disc list-inside">
            {errors?.map((errorMessage, index) => (
              <li key={index}>{errorMessage}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={clearErrors}
          className="ml-2  text-red-600 hover:text-red-800 focus:outline-none m-2 p-1 border rounded-2xl border-red-800"
        >
          Clear
        </button>
      </div>
    )
  );
};

export default FormError;
