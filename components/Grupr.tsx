import React, { useState } from "react";
import UploadExcel from "./UploadExcel";
import Modal from "../components/Modal";
import Image from "next/image";
import party from "../images/party.png";
import { FiExternalLink } from "react-icons/fi";
import axios from "axios";
import { handleGruprSubmit } from "../helpers/handleGruprSubmit";
import CopyToClipboard from "./CopyToClipboard";
import Share from "./Share";
import { checkAuth } from "../helpers/checkAuth";

function Grupr() {
  const [isExcel, setisExcel] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [title, setTitle] = useState("This is a title");
  const [textArealinks, settextArealinks] = useState(
    "https://www.androidpill.com/\nhttps://www.dribbble.com/\nhttps://www.activision.com/\nhttps://www.google.com/"
  );
  const [grupUrl, setGrupUrl] = useState("");
  const [excelFile, setExcelFile] = useState<File[]>([]);

  const user = checkAuth();
  const createdBy = user ? user.uid : "Anonymous";
  // console.log({ createdBy });

  return (
    <>
      <form
        onSubmit={(e) =>
          handleGruprSubmit({
            isExcel,
            textArealinks,
            setGrupUrl,
            setIsModal,
            title,
            excelFile,
            createdBy,
            e,
          })
        }
        className="shadow-md rounded-lg p-2 bg-white flex flex-wrap max-w-xl mt-10 mx-auto border-purple-200/5 border-2"
      >
        {/* title  */}
        <div className="w-full md:w-[75%] p-2 order-2 md:order-none">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            value={title}
            placeholder="Title"
            className="p-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
          />
        </div>
        {/* toogle file upload component */}
        <div className="w-full md:w-[25%] p-2 order-1 md:order-none">
          <button
            onClick={() => setisExcel(!isExcel)}
            type="button"
            className={`px-2 py-3 outline-none font-semibold    rounded-md ${
              isExcel
                ? "text-purple-400 bg-purple-100"
                : "text-orange-500 bg-orange-100"
            } w-full`}
          >
            {isExcel ? " Manually" : "Import CSV"}
          </button>
        </div>

        <div className="w-full p-2 order-3 md:order-none">
          {/*  file upload component */}

          {isExcel ? (
            <UploadExcel
              setExcelFile={setExcelFile}
              excelFile={excelFile}
              title={title}
            />
          ) : (
            // manual input component
            <textarea
              className="p-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
              placeholder={
                "https://www.androidpill.com/\nhttps://www.dribbble.com/\nhttps://www.activision.com/\nhttps://www.google.com/"
              }
              onChange={(e) => settextArealinks(e.target.value)}
              autoFocus={false}
              required
              value={textArealinks}
              rows={7}
            ></textarea>
          )}
          {/* submit button */}
          <div className="w-full  mt-3 order-4 md:order-none">
            <button
              // onClick={() => setIsModal(true)}
              type="submit"
              className="px-2 py-4 outline-none   rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  w-full"
            >
              Create a Grup
            </button>
          </div>
        </div>
      </form>

      {/* Grupr success modal */}
      {isModal && (
        <Modal setIsModal={setIsModal} isModal={isModal}>
          <>
            <h1 className="text-xl flex items-center gap-x-2 mx-auto w-fit mb-1 md:text-3xl font-bold text-purple-400 text-center">
              CONGRATULATIONS!
              <Image
                src={party}
                alt="partying emoji"
                width={40}
                height={40}
                priority
                loading="eager"
              />
              {/* <span className="text-orange-500">grupn </span> */}
            </h1>
            <p className="mb-6 text-sm md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
              Grup created succesfully!
            </p>
            <div className="mx-2">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                disabled
                value={grupUrl}
                className="px-3 py-4 my-2 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
              />
            </div>
            <div className="flex flex-wrap -mt-2">
              <div className="w-full p-2  md:w-1/2">
                <CopyToClipboard type={1} text={grupUrl} />
              </div>
              <div className="w-full p-2 md:w-1/2">
                <a
                  href=""
                  target="_blank"
                  type="button"
                  className="px-2  py-4 outline-none  lg:my-2 flex gap-x-3  justify-center items-center rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  w-full"
                >
                  <FiExternalLink className="text-xl" /> Preview
                </a>
              </div>
              <Share url={grupUrl} />
            </div>
          </>
        </Modal>
      )}
    </>
  );
}

export default Grupr;
