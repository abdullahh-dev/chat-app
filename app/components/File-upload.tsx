"use client";
import React, { FC } from "react";
import { X } from "lucide-react";
import { FileUploadProps } from "./types";
import { UploadDropzone } from "@/utils/upload-thing/index";
import "@uploadthing/react/styles.css";
import Image from "next/image";

const FileUpload: FC<FileUploadProps> = ({ endpoint, onChange, value }) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative size-36 mt-4">
        <Image src={value} fill alt="upload" className="rounded-full" />
        <button
          className="bg-rose-600 text-white p-1 rounded-full absolute top-1
          right-[2px] shadow-sm"
          type="button"
          onClick={() => onChange("")}
        >
          <X className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log(res, "res");
        onChange(res?.[0].ufsUrl);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
