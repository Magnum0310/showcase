const SortButton = () => {
  return (
    <>
      <button className="flex flex-1  items-center justify-center max-sm:hidden">
        <span className=" text-[#808080ff] max-md:whitespace-nowrap">
          SORT BY:
        </span>
        <span className="px-5">PRICE</span>
      </button>
    </>
  );
};

export default SortButton;
