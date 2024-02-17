export default function StrategyAsset() {
  return (
    <>
      <div className="max-w-[130px] text-center">
        <p className="text-[#FFFFFF] text-[15px] font-semibold leading-[24.32px] mb-2">
          Strategy
        </p>
        <div className="h-[73px] w-full">
          <ul className=" leading-[24.32px] text-[13px] text-white flex flex-col items-center justify-center">
            <li className=" cursor-pointer">Big Option Buys</li>
            <li className="bg-[#53ACFF] px-2 rounded-[6px] cursor-pointer">
              Merger Arbitrage
            </li>
            <li className=" cursor-pointer">Short Reports</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[62px] mx-auto text-center ">
        <p className="text-[#FFFFFF] text-[15px] font-semibold leading-[24.32px] mb-2">
          Asset
        </p>
        <div className="h-[73px] w-full">
          <ul className=" leading-[24.32px] text-[13px] text-white flex flex-col items-center justify-center">
            <li className=" cursor-pointer">Stocks</li>
            <li className="bg-[#53ACFF] px-2 rounded-[6px] cursor-pointer">
              Options
            </li>
            <li className=" cursor-pointer">Futures</li>
          </ul>
        </div>
      </div>
    </>
  );
}
