import React, { useState } from "react";
import UploadExcel from "./UploadExcel";
import Modal from "../components/Modal";
import Image from "next/image";
import party from "../images/party.png";
import { FiExternalLink } from "react-icons/fi";
import axios from "axios";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
import CopyToClipboard from "./CopyToClipboard";
function Grupr() {
  const [isExcel, setisExcel] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [title, setTitle] = useState("");
  const [links, setLinks] = useState("");
  const [grupUrl, setGrupUrl] = useState("");

  const handleSubmit = () => {
    // split strings by new line
    const newLinks = links.split("\n");
    // format links input to remove empty strings
    const formattedLinks = newLinks.filter((link) => link !== "");

    // axios post request to server
    axios
      .post("/api/shortenUrls", { formattedLinks, title })
      .then((res) => {
        const { grupUrl } = res.data;
        setGrupUrl(grupUrl);
        setIsModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="shadow-md rounded-lg p-2 bg-white flex flex-wrap max-w-xl mt-10 mx-auto border-purple-200/5 border-2"
      >
        <div className="w-full md:w-[75%] p-2 order-2 md:order-none">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            placeholder="Title"
            className="p-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
          />
        </div>
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
          {isExcel ? (
            <UploadExcel title={title} />
          ) : (
            <textarea
              className="p-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
              placeholder={
                "https://www.androidpill.com/\nhttps://dribbble.com/\nhttps://www.activision.com/"
              }
              onChange={(e) => setLinks(e.target.value)}
              autoFocus={false}
              required
              rows={5}
              //   cols={20}
              //   wrap="hard"
            ></textarea>
          )}
          <div className="w-full  mt-3 order-4 md:order-none">
            <button
              // onClick={() => setIsModal(true)}
              onClick={handleSubmit}
              // type="submit"
              type="button"
              className="px-2 py-4 outline-none   rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  w-full"
            >
              Create a Grup
            </button>
          </div>
        </div>
      </form>

      {isModal && (
        <Modal setIsModal={setIsModal}>
          <>
            <h1 className="text-2xl flex items-center gap-x-2 mx-auto w-fit mb-1 md:text-3xl font-bold text-purple-400 text-center">
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
            <p className="mb-6 text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
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
                <CopyToClipboard text={grupUrl} />
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
              <div className="mt-8 flex flex-wrap justify-center w-full">
                <h3 className="w-full mb-3 text-xl font-semibold text-center text-zinc-600">
                  SHARE
                </h3>

                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev"
                  className="text-3xl mx-2 hover:opacity-80 text-sky-600"
                >
                  <BsFacebook />
                </a>
                <a
                  target="_blank"
                  href="whatsapp://send?text=Your message here"
                  className="text-3xl mx-2 hover:opacity-80 text-green-700"
                >
                  <BsWhatsapp />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/share/url?url={url}&text={text}"
                  className="text-3xl mx-2 hover:opacity-80 text-sky-400"
                >
                  <BsTelegram />
                </a>
                <a
                  target="_blank"
                  href=" https://twitter.com/intent/tweet?text=Hello, World"
                  className="text-3xl mx-2 hover:opacity-80 text-sky-400"
                >
                  <BsTwitter />
                </a>
              </div>
            </div>
          </>
        </Modal>
      )}
    </>
  );
}

export default Grupr;
