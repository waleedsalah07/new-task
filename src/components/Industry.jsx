import Communication from "./Icons/Communication";
import Consumerdiscretionary from "./Icons/Consumerdiscretionary";
import Consumerstaples from "./Icons/Consumerstaples";
import Energy from "./Icons/Energy";
import Financials from "./Icons/Financials";
import Healthcare from "./Icons/Healthcare";
import IT from "./Icons/IT";
import Industrials from "./Icons/Industrials";
import Materials from "./Icons/Materials";
import Realestate from "./Icons/Realestate";
import Utilities from "./Icons/Utilities";

export default function Industry() {
  return (
    <>
      <div>
        <p className="text-[#FFFFFF] text-[15px] flex items-center pt-1 font-semibold ">
          <span className="mt-1 mr-2">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z"
                fill="white"
              />
            </svg>
          </span>
          Industry
        </p>
      </div>
      {/* LISTS */}
      <div className="sm:flex justify-between gap-3 pt-2 mb-6">
        <ul className="ml-2 pl-2 border-l border-white text-white text-[12px] sm:mb-0 mb-3">
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Healthcare />
              </span>
              <span className=" leading-[24.32px]">Health care</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Materials />
              </span>
              <span className=" leading-[24.32px]">Materials</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Energy />
              </span>
              <span className=" leading-[24.32px]">Energy</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Consumerdiscretionary />
              </span>
              <span className=" leading-[24.32px]">Consumer discretionary</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Consumerstaples />
              </span>
              <span className=" leading-[24.32px]">Consumer staples</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Realestate />
              </span>
              <span className=" leading-[24.32px]">Real estate</span>
            </a>
          </li>
        </ul>
        <ul className="ml-2 pl-2 border-l border-white text-white text-[12px]">
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <IT />
              </span>
              <span className=" leading-[24.32px]">IT</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Communication />
              </span>
              <span className=" leading-[24.32px]">Communication</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Industrials />
              </span>
              <span className=" leading-[24.32px]">Industrials</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Utilities />
              </span>
              <span className=" leading-[24.32px]">Utilities</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2">
              <span>
                <Financials />
              </span>
              <span className=" leading-[24.32px]">Financials</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
