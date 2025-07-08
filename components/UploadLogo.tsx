import { ChangeEventHandler, FC } from "react";
import { LucideUpload } from "./icons/lucide-upload";

export interface UploadLogoProps {
  value?: string;
  onChange?: (file: File, fileUrl: string) => any;
}

export const UploadLogo: FC<UploadLogoProps> = ({ value, onChange }) => {
  const handleLogoUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    if(!file) return;
    const url = file ? URL.createObjectURL(file) : '';
    onChange?.(file, url);
  };

  return <div className="flex items-center space-x-4">
    <div className="flex-1">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
        {value ? (
          <img src={value} id="preview" alt="Logo preview" className="h-20 w-20 object-contain" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <LucideUpload className="w-8 h-8 mb-2 text-gray-400" />
            <p className="text-sm text-gray-500">Click to upload logo</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          className="hidden"
        />
      </label>
    </div>
  </div>
}