import SearchNav from "./Icons/SearchNav";

export default function SearchBar() {
  return (
    <>
      <div className="max-w-[611px] relative ">
        <input
          type="text"
          className="w-full  h-[38px] bg-[#313131] rounded-[5px] text-white px-4"
          placeholder="Search by..."
        />
        <span className=" absolute top-2 right-3">
          <SearchNav />
        </span>
      </div>
    </>
  );
}
