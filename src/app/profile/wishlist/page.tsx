import { MiniItem } from "@/components/cards/MiniItem";
import React from "react";

const Wishlist = () => {
  const arr = Array.from({ length: 10 });
  return (
    <div>
      <h1 className=" text-2xl font-bold  text-center my-10 ">Wishlist</h1>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {arr.map((v, i) => {
          return <MiniItem key={i} />;
        })}
      </div>
    </div>
  );
};

export default Wishlist;
