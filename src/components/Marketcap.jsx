export default function Marketcap() {
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
          market cap
        </p>
        <ul className="py-3 ml-3 text-white ">
          <li className="flex items-center gap-2">
            <input type="radio" name="size" />
            <span className="text-[13px] leading-[24.32px]">Micro</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="size" />
            <span className="text-[13px] leading-[24.32px]">Small</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="size" checked />
            <span className="text-[13px] leading-[24.32px]">Large</span>
          </li>
        </ul>
      </div>
    </>
  );
}
