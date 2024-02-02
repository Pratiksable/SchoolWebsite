import PrincipleMsg from "@/components/public/HomeComponents/PrincipleMsg";
import React from "react";

export const metadata = {
  title: "Principal's Message - The Government PU college, Rajanakunte",
  description:
    "lorem",
};

const PrinciplesMessage = () => {
  return (
    <article className="max-w-screen-lg mx-auto">
      <h1 className="text-xl font-bold text-primary-regular my-4">

        Principal&apos;s Message - Government PU college, Rajankunte

      </h1>
      <div>
        <PrincipleMsg />
      </div>
    </article>
  );
};

export default PrinciplesMessage;
