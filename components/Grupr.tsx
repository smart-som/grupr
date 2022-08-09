import React from "react";

function Grupr() {
  return (
    <form className="shadow-md rounded-lg p-2 bg-white flex flex-wrap max-w-xl mt-10 mx-auto">
      <div className="w-full md:w-[75%] p-2 order-2 md:order-none">
        <input
          type="text"
          required
          placeholder="Title (optional)"
          className="px-2 py-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
      </div>
      <div className="w-full md:w-[25%] p-2 order-1 md:order-none">
        <button
          type="button"
          className="px-2 py-3 outline-none font-semibold  bg-orange-100  rounded-md text-orange-500 w-full"
        >
          Import CSV
        </button>
      </div>

      <div className="w-full p-2 order-3 md:order-none">
        <textarea
          className="px-2 py-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
          placeholder={
            "https://www.androidpill.com/\nhttps://dribbble.com/\nhttps://www.activision.com/"
          }
          autoFocus={true}
          required
          rows={5}
          //   cols={20}
          //   wrap="hard"
        ></textarea>
        <div className="w-full  mt-3 order-4 md:order-none">
          <button
            type="submit"
            className="px-2 py-4 outline-none   rounded-md text-zinc-100 font-semibold bg-purple-400 w-full"
          >
            Create a Grup
          </button>
        </div>
      </div>
    </form>
  );
}

export default Grupr;
