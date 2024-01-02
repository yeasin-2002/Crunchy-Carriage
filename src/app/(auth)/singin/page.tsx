import coverImg from "@/assets/covers/ting-tian-E6DsqnZbZ4o-unsplash.jpg";
import bgVideo from "@/assets/video/providingSalt.mp4";
import { InputCombo } from "@/components";
import Link from "next/link";

const SingIn = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat  relative  min-h-screen"
      style={{ backgroundImage: `url(${coverImg.src})` }}
    >
      <form className="lg:w-1/3 w-full px-7 py-10 glass-bluer    rounded-xl  absolute top-20  lg:top-40 right-0 lg:right-10 ">
        <div className="space-y-5">
          <InputCombo
            title="Email"
            type="email"
            placeholder="write your email"
          />
          <InputCombo title="password" type="password" placeholder="*****" />

          <button type="submit" className="btn-blue my-4">
            Sing Up
          </button>
        </div>
        <p className="mt-10 text-sm space-x-2">
          <span>Don't have an account?</span>
          <Link className="text-blue-500" href="/singup">
            Sing Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SingIn;
