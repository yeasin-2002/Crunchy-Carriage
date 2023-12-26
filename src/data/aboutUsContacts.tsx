import { CiMobile3 } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

export const aboutUsContacts = [
  {
    title: "ADDRESS",
    Icon: <HiOutlineBuildingOffice className="text-5xl text-gray-800" />,
    desc1: "Dhaka Cantonment",
    desc2: "Dhaka, Bangladesh",
    footer: "CHECK LOCATION",
    footerStyle: "text-green-500 ",
  },
  {
    title: "GET IN TOUCH",
    Icon: <CiMobile3 className="text-5xl text-gray-800" />,
    desc1: "Mobile: 084 3456 19 89",
    desc2: "E-mail: crunchy.carriage@gmail.com",
    footer: "",
    footerStyle: "text-gray-500",
  },
  {
    title: "HOUR OF OPERATION",
    Icon: <GoClock className="text-5xl text-gray-800" />,
    desc1: "Monday-Friday: 8am-5pm",
    desc2: "Saturday: 9am-Midday",
    footer: "SUNDAY: CLOSE",
    footerStyle: "text-red-500",
  },
];
