import React, { useState } from "react";
import Excel from "../images/Excel.png";
import Image from "next/image";
interface UploadExcelProps {
  title: string;
}
function UploadExcel({ title }: UploadExcelProps) {
  const [excelFile, setExcelFile] = useState<File[]>([]);
  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setExcelFile(e.target.files[0]);
  // };
  return (
    <div className="min-h-[150px] relative cursor-pointer border-dashed border-2 rounded-md flex items-center flex-col">
      <div className="w-10 h-10 mt-10 mb-2  text-center  rounded-full relative ">
        <Image
          src={Excel}
          alt="link"
          className="  h-full w-full "
          layout="fill"
          priority
          loading="eager"
        />
      </div>
      <h4 className="text-md font-bold text-zinc-800">
        Drag and drop files, <span className="text-purple-400">or Browse</span>
      </h4>
      <input
        // onChange={handleFileUpload}
        accept=".xlsx, .xls"
        type="file"
        required
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  );
}

export default UploadExcel;
