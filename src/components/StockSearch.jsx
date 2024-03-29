export default function StockSearch() {
  return (
    <>
      <div className="max-w-[324px] mx-auto relative mb-4">
        <input
          type="text"
          className="w-full bg-[#313131] text-[#737373] px-2 h-[27px] rounded-[5px] text-[13px] outline-none"
          placeholder="$ tICKER"
        />
        <span className=" absolute right-2 top-2">
          <svg
            width="13px"
            height="13px"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7684 16.5926C15.2817 14.9866 16.9194 10.6213 15.4263 6.84236C13.9332 3.06344 9.8747 1.30194 6.36144 2.90794C2.84818 4.51395 1.21052 8.87929 2.70362 12.6582C4.19672 16.4371 8.25517 18.1986 11.7684 16.5926Z"
                stroke="#6B6B6B"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9519 15.0069L19.3126 20.7738"
                stroke="#6B6B6B"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}
