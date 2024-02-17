import FiltersApplied from "./FiltersApplied";
import Industry from "./Industry";
import Marketcap from "./Marketcap";
import RiskLevel from "./RiskLevel";
import StockSearch from "./StockSearch";
import StrategyAsset from "./StrategyAsset";

export default function SideRight() {
  return (
    <div className="h-full bg-[#181818] w-full rounded-l-[8px] shadow-lg shadow-[rgba(0,0,0,0.4)] overflow-auto pb-4 sm:pl-0 pl-4">
      {/* Filters Applied */}
      <FiltersApplied />
      {/* side body */}
      <div className="max-w-[378px] m-auto bg-[#202020] rounded-[6.86px] px-4 pt-2 pb-5">
        <h5 className=" font-semibold text-white leading-[32px] text-[15px]">
          stock
        </h5>
        {/* Stock Search */}
        <StockSearch />
        {/*  Industry */}
        <Industry />
        {/* market cap and Risk Level */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {/* market cap */}
            <Marketcap />
            {/* Risk Level */}
            <RiskLevel />
          </div>
        </div>
        {/* Strategy and Asset  */}
        <div className="mb-3">
          <div className="grid grid-cols-2 gap-2">
            <StrategyAsset />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center items-center pt-5 mb-2">
        <button className="text-white bg-[#53ACFF] rounded-[6px] h-[43px] w-[161px] font-semibold transition-all hover:bg-[#5079ff]">
          Apply
        </button>
      </div>
    </div>
  );
}
