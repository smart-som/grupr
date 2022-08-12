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
      <h3 className="w-full mb-3 text-md font-semibold text-center text-zinc-600">
        Share
      </h3>

      <a
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="text-3xl mx-2 hover:opacity-80 text-sky-600"
      >
        <BsFacebook />
      </a>
      <a
        target="_blank"
        href={`whatsapp://send?text=${url}`}
        className="text-3xl mx-2 hover:opacity-80 text-green-700"
      >
        <BsWhatsapp />
      </a>
      <a
        target="_blank"
        href={`https://t.me/share/url?url=${url}&text={Checkout My Grup🔗}`}
        className="text-3xl mx-2 hover:opacity-80 text-sky-400"
      >
        <BsTelegram />
      </a>
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${url}`}
        className="text-3xl mx-2 hover:opacity-80 text-sky-400"
      >
        <BsTwitter />
      </a>
    </div>
  );
}

export default Share;
