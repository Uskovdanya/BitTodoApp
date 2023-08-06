function Button({ open, setOpen, setSortBy }) {
  function alphabetSort() {
    setSortBy("alphabet");
    setOpen(false);
  }
  function dateSort() {
    setSortBy("date");
    setOpen(false);
  }
  return (
    <>
      <>
        <button onClick={() => setOpen(!open)} value="alphabet" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.204 15.321L16.801 13.724L17.508 14.431L15.058 16.881L14.704 17.235L14.351 16.882L11.901 14.432L12.608 13.724L14.204 15.321V7.217H15.204V15.321ZM9.304 8.914V17.018H10.304V8.914L11.901 10.511L12.608 9.804L10.158 7.354L9.803 7L9.449 7.354L7 9.804L7.707 10.511L9.304 8.914Z"
              fill="#201F1E"
            />
          </svg>
          <span className="text-[12px] font-normal">Sort by</span>
        </button>
        <div
          className={`pt-3 pb-5 pl-3 pr-[33px] gap-3 shadow-sort absolute z-10 bg-todo lg:-right-6 -right-2 ${
            open ? "block" : "hidden"
          }`}
        >
          <div
            onClick={() => alphabetSort()}
            className="text-xs leading-5 font-normal block cursor-pointer"
          >
            Alphabetical
          </div>
          <div
            onClick={() => dateSort()}
            className="text-xs leading-5 font-normal mt-3 block cursor-pointer"
          >
            Date
          </div>
        </div>
      </>
    </>
  );
}
export default Button;
