import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function Modal({ setIsModal, children }: any) {
  return (
    <section className="z-[100] fixed inset-0 backdrop-blur-lg flex justify-center p-3 bg-white/80 items-center">
      {/* close mobile menu button */}

      <div className=" relative lg:w-[40%] w-[90%] lg:p-5 py-8 p-3 bg-white/70 shadow rounded-md">
        <MdOutlineClose
          className="cursor-pointer text-2xl text-zinc-600  right-2 top-2 absolute "
          onClick={() => setIsModal(false)}
        />
        {children}
      </div>
    </section>
  );
}

export default Modal;
