import SideLeft from "./components/SideLeft";
import SideRight from "./components/SideRight";
import ContentCenter from "./components/ContentCenter";
import { useState } from "react";
import Close from "./components/Icons/Close";
import Toggle from "./components/Icons/Toggle";
import Notification from "./components/Icons/Notification";
import SearchBar from "./components/SearchBar";
export default function App() {
  const [toggleSideLeft, setToggleSideLeft] = useState(false);
  const [toggleSideRight, setToggleSideRight] = useState(false);

  return (
    <div className="min-h-screen bg-[#202020] overflow-hidden">
      {/* side right */}
      <aside
        className={
          "fixed xl:left-0 left-[-210px] top-0 w-[180px] h-screen bg-[#181818] shadow-2xl shadow-black transition-all duration-300 " +
          (toggleSideLeft ? "!left-0" : "")
        }
      >
        {/* mobile close btn */}
        <button
          className=" absolute right-2 top-2 text-white xl:hidden inline-block"
          onClick={() => setToggleSideLeft(false)}
        >
          <Close />
        </button>
        <SideLeft />
      </aside>
      {/* center content */}
      <div
        className={
          "  h-screen w-full xl:pl-[200px] xl:pr-[447px] transition-all overflow-auto" +
          (toggleSideLeft ? " pl-[200px]" : "") +
          (toggleSideRight ? " pr-[447px]" : "")
        }
      >
        {/* overlay */}
        <div className="relative h-screen overflow-hidden">
          <div
            className={
              " absolute left-0 top-0 w-full h-full bg-[#202020] z-50 xl:!hidden hidden" +
              (toggleSideLeft ? " !block" : "") +
              (toggleSideRight ? " !block" : "")
            }
          ></div>

          <nav>
            <div className=" grid grid-cols-12   items-center gap- py-[19px] px-4 xl:px-0">
              <div className="sm:col-span-3 col-span-1 flex items-center gap-2">
                <button
                  className="text-white xl:hidden inline-block "
                  onClick={() => setToggleSideLeft(!toggleSideLeft)}
                >
                  <Toggle />
                </button>
                <h2 className="xl:text-[42px] lg:text-[42px]  text-3xl font-semibold text-white sm:block hidden">
                  ALERTS
                </h2>
              </div>
              <div className="sm:col-span-8 col-span-8">
                <SearchBar />
              </div>
              <div className="sm:col-span-1 col-span-3 flex items-center gap-2 justify-end">
                <div className=" relative ">
                  <button >
                    <Notification/>
                    <span className=" absolute right-0 -top-1 w-[15px] h-[15px] bg-[#118F4B] rounded-full text-white text-[12px]">
                      6
                    </span>
                  </button>
                </div>
                <button
                  className="text-white  xl:hidden inline-block"
                  onClick={() => setToggleSideRight(!toggleSideRight)}
                >
                  <Toggle />
                </button>
              </div>
            </div>
          </nav>
          <ContentCenter />
        </div>
      </div>
      {/* side left */}
      <aside
        className={
          " fixed xl:right-0 right-[-450px] top-0 h-screen py-[26px] sm:w-[427px] w-[327px] transition-all duration-300 " +
          (toggleSideRight ? "!right-0" : "")
        }
      >
        {/* mobile close btn */}
        <button
          className=" absolute left-3 top-10 text-white xl:hidden inline-block"
          onClick={() => setToggleSideRight(false)}
        >
          <Close />
        </button>
        <SideRight />
      </aside>
    </div>
  );
}
