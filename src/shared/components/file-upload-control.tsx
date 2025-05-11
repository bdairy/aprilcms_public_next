import React from 'react';
import { Controller } from 'react-hook-form';

interface RHFileUploadProps {
  name: string;
  control: any;
  label?: string;
  accept?: string;
  required?: boolean;
  error?: string;
}

const RHFileUpload: React.FC<RHFileUploadProps> = ({
  name,
  control,
  label,
  accept = '',
  required = false,
  error,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <input
            type="file"
            accept={accept}
            onChange={(e) => field.onChange(e.target.files?.[0])}
            className={`border px-3 py-2 w-full rounded ${
              error ? 'border-red-500' : ''
            }`}
          />
        )}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default RHFileUpload;
