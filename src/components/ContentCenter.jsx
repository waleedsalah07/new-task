import sDolar from "../iamges/s-dolar.svg";
import mDolar from "../iamges/m-dolars.svg";
import Ticket from "./Icons/Ticket";
import File from "./Icons/File";
import Wave from "./Icons/Wave";

export default function ContentCenter() {
  const sdolar = sDolar;
  const mdolar = mDolar;
  const myList = [
    {
      title: "AMZN",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sdolar,
    },
    {
      title: "TSLA",
      file: 200,
      rate: "-0.25 %",
      Gain: true,
      risk: "High Risk",
      riskImg: mdolar,
    },
    {
      title: "AMZN",
      file: 200,
      rate: "-0.25 %",
      Gain: true,
      risk: "High Risk",
      riskImg: mdolar,
    },
    {
      title: "MSFT",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "PYPL",
      file: 200,
      rate: "-0.25 %",
      Gain: true,
      risk: "High Risk",
      riskImg: mDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
    {
      title: "NFLX",
      file: 200,
      rate: "-0.25 %",
      Gain: false,
      risk: "Low Risk",
      riskImg: sDolar,
    },
  ];
  return (
    <>
      <div className="py-5 xl:px-0 px-4 overflow-auto h-full pb-20">
        {myList.map((list, index) => (
          <div
            key={index}
            className="grid md:grid-cols-4 grid-cols-2 text-center bg-[#313131] rounded-[7.69px] py-3 text-[15px] mb-4 text-white"
          >
            <div className="flex justify-center border-r border-[#414040] md:mb-0 mb-4">
              <div className="flex items-center text-center gap-6 min-w-[125px]">
                <span>
                  <Ticket />
                </span>
                <span>{list.title}</span>
              </div>
            </div>
            <div className="flex justify-center md:border-r md:border-[#414040] md:mb-0 mb-4">
              <div className="flex items-center text-center gap-6 min-w-[125px]">
                <span>
                  <File />
                </span>
                <span>{list.file}</span>
              </div>
            </div>
            <div className="flex justify-center border-r border-[#414040] ">
              <div className="flex  items-center gap-6 min-w-[125px]">
                <span>
                  <Wave />
                </span>
                <span
                  className={list.Gain ? "text-[#118F4B]" : "text-[#D94111]"}
                >
                  {list.rate}
                </span>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="flex items-center text-center gap-6 min-w-[125px]">
                <span>
                  <img src={list.riskImg} alt="" />
                </span>
                <span>{list.risk}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
