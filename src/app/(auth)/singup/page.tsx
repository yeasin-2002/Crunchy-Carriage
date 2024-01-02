import coverImg from "@/assets/covers/brooke-lark-4J059aGa5s4-unsplash.jpg";
import { InputCombo } from "@/components";
import Link from "next/link";

const SingUp = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-center bg-no-repeat  relative  "
      style={{ backgroundImage: `url(${coverImg.src})` }}
    >
      <form className="w-1/3 px-7 py-10 glass-bluer    rounded-xl  absolute top-40 left-10 ">
        <div className="space-y-5">
          <InputCombo
            title="name"
            type="text"
            placeholder="write your Full name"
          />
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
          <span>All ready have an account?</span>
          <Link className="text-blue-500" href="/singin">
            Sing In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SingUp;
