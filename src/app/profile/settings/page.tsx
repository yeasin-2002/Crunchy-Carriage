import defaultUserImg from "@/assets/default/User.jpg";
import { InputCombo } from "@/components";
import { barlowCondensedMedium } from "@/fonts";
import Image from "next/image";
import React from "react";

const Settings = () => {
  return (
    <div className="py-6 space-y-3">
      <div className="into-center flex-col my-2 gap-y-2">
        <Image
          src={defaultUserImg}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-full size-20"
        />
        <h1 className={"text-xl font-bold " + barlowCondensedMedium.className}>
          Md Kawsar Islam Yeasin
        </h1>
      </div>

      <form className="px-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <InputCombo title="Fist Name" />
          <InputCombo title="Last Name" />
          <InputCombo
            title="email"
            type="email"
            placeholder="write your email"
          />
          <InputCombo
            title="number"
            type="number"
            placeholder="write your number"
          />
        </div>

        <button type="submit" className="btn-blue my-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default Settings;
