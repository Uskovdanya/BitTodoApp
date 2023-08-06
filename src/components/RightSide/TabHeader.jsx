import { useState } from "react";
import Button from "./Button";

function TabHeader({
  completeFilter,
  setSortBy,
  open,
  setOpen,
  onDateSort,
  onAlphabetSort,
  sortBy,
}) {
  return (
    <div className="lg:flex lg:justify-between">
      <div className="flex lg:gap-[48px] gap-[54px] md:justify-between md:px-[10px]">
        <div className="px-2">
          <div
            onClick={() => setSortBy("all")}
            value="all"
            className={`cursor-pointer text-sm font-normal text-textColor  py-[11px] ${
              sortBy === "all" ? "font-semibold border-privacy border-b-2" : ""
            }`}
          >
            {completeFilter.all}
          </div>
        </div>
        <div className="px-2">
          <div
            onClick={() => setSortBy("active")}
            value="active"
            className={`cursor-pointer text-sm text-textColor font-normal   py-3  ${
              sortBy === "active" ? "font-semibold border-privacy border-b-2" : ""
            }`}
          >
            {completeFilter.active}
          </div>
        </div>
        <div className="px-2">
          <div
            value="completed"
            onClick={() => setSortBy("completed")}
            className={`cursor-pointer text-sm font-normal text-textColor  py-3 ${
              sortBy === "completed" ? "font-semibold border-privacy border-b-2" : ""
            }`}
          >
            {completeFilter.completed}
          </div>
        </div>
      </div>
      <div className="relative my-auto hidden lg:block">
        <Button
          open={open}
          setOpen={setOpen}
          setSortBy={setSortBy}
          onDateSort={onDateSort}
          onAlphabetSort={onAlphabetSort}
        />
      </div>
    </div>
  );
}
export default TabHeader;
