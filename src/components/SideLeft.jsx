import Logo from "../iamges/logo.png";
import User from "../iamges/user.svg";
import Alerts from "./Icons/Alerts";
import Automation from "./Icons/Automation";
import Portfolio from "./Icons/Portfolio";
import Trading from "./Icons/Trading";
import Training from "./Icons/Training";

export default function SideLeft() {
  return (
    <>
      {/* LOGO */}
      <div className="pt-[29px] pl-[29px]">
        <img src={Logo} alt="s" />
      </div>
      <ul className="pt-[46px] pl-[19px] text-[19px] flex flex-col gap-4">
        <li className="">
          <a href="/" className="flex items-center gap-3">
            <span className="w-[22px]">
              <Alerts />
            </span>
            <span className="text-white font-semibold">Alerts</span>
          </a>
        </li>
        <li className="">
          <a href="/" className="flex items-center gap-3">
            <span className="w-[22px]">
              <Training />
            </span>
            <span className="text-white ">Training</span>
          </a>
        </li>
        <li className=" opacity-30 transition-all hover:opacity-100">
          <a href="/" className="flex items-center gap-3">
            <span className="w-[22px]">
              <Automation />
            </span>
            <span className="text-white ">Automation</span>
          </a>
        </li>
        <li className=" opacity-30 transition-all hover:opacity-100">
          <a href="/" className="flex items-center gap-3">
            <span className="w-[22px]">
              <Portfolio />
            </span>
            <span className="text-white ">Portfolio</span>
          </a>
        </li>
        <li className=" opacity-30 transition-all hover:opacity-100">
          <a href="/" className="flex items-center gap-3">
            <span className="w-[22px]">
              <Trading />
            </span>
            <span className="text-white ">Trading</span>
          </a>
        </li>
      </ul>
      {/* user info */}
      <div className=" absolute bottom-0 left-0 w-full">
        <div className="pb-5 flex gap-3 justify-center items-center">
          <div>
            <img src={User} alt="" />
          </div>
          <div>
            <h5 className="text-[15px] text-white">Moni Roy</h5>
            <p className="text-[13px] text-[#979797]">Beginner</p>
          </div>
        </div>
        <p className="text-[#424242] text-[14px] text-center mb-6">
          Street Suite. 2.0
        </p>
      </div>
    </>
  );
}
