import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { TcopyToClipboardProps } from "../types";
function CopyToClipboard({ text, type }: TcopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied) {
      // copy text to clipboard
      navigator.clipboard.writeText(text);
      // toogle copied state to change button style
      setIsCopied(true);
      // reverse copied state after 5 second
      setTimeout(() => setIsCopied(false), 3000);
    }
  };
  return type === 1 ? (
    <button
      onClick={handleCopy}
      type="button"
      className={`px-2 my-2 py-4 outline-none flex gap-x-3  justify-center items-center duration-200 rounded-md text-zinc-100 ${
        isCopied ? "bg-orange-500" : "bg-purple-400 hover:bg-purple-500"
      } font-semibold  transition-all ease-in-out   w-full`}
    >
      <FiClipboard className="text-xl" /> {isCopied ? "Copied" : "Copy"}
    </button>
  ) : (
    <button
      onClick={handleCopy}
      type="button"
      className={`px-2 my-2 py-4 outline-none flex gap-x-2 text-purple-400 justify-center items-center duration-200 rounded-md  font-semibold  transition-all ease-in-out   w-full`}
    >
      {isCopied ? (
        <>
          <span className="block md:hidden text-sm"> ✔</span>
          <span className="md:block hidden text-sm">Copied ✔</span>
        </>
      ) : (
        <>
          <FiClipboard className="text-xl" />
          <span className="md:block hidden text-sm">Copy</span>
        </>
      )}
    </button>
  );
}

export default CopyToClipboard;
