import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
function Share({ url }: { url: string }) {
  return (
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
  );
}

export default Share;
