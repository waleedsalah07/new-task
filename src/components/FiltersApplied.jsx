export default function FiltersApplied() {
  return (
    <>
      <div className="mb-4">
        <h3 className="text-white text-[26px] text-center pt-[17px] font-semibold mb-2">
          Filters
        </h3>
        <div className="max-w-[378px] m-auto">
          <p className="flex justify-between text-[14px] mb-1 pr-3">
            <span className="text-[#979797]">Filters Applied</span>
            <button className="text-white">Clear All</button>
          </p>
          <div className="rounded-[6.86px] h-[51px] bg-[#202020] p-2">
            <ul className="flex gap-2 text-[11.06px]">
              <li className="bg-[#53ACFF] px-1 rounded-[4.42px] leading-[17.93px] font-normal">
                <a href="/"> Real estate</a>
                <button className="ml-1">x</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
