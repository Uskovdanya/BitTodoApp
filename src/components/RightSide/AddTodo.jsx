import { useState } from "react";
import Button from "./Button";

function AddTodo({ onHandleAddTodos, setSortBy, open, setOpen }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newDate = new Date();

    const newTodo = { description, id: Date.now(), date: newDate.toDateString(), completed: false };
    console.log(newDate);
    onHandleAddTodos(newTodo);
    setDescription("");
  }
  return (
    <div className="mb-[12px] relative">
      <div className="pb-[26px] lg:block flex justify-between">
        <h2 className=" font-semibold lg:text-[22px] text-normal">Todos</h2>
        <div className="relative my-auto lg:hidden">
          <Button open={open} setOpen={setOpen} setSortBy={setSortBy} />
        </div>
      </div>
      <div className="flex">
        <form action="#" className="relative  flex gap-1 " onSubmit={handleSubmit}>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Add a todo"
            className="text-textColor pr-2 py-[6px] lg:text-sm  text-xs font-normal leading-5 pl-2 lg:w-[300px] lg:h-[32px] rounded border-[1px] border-solid self-center border-roundedColor w-[228px] h-[20px] focus:border-privacy focus:outline-none"
          ></input>
          <button
            className={`px-5  text-sm py-[6px] hover:-translate-y-1  active:translate-y-0 ${
              description ? "bg-profile text-white" : "text-gray bg-header  transition-all"
            }`}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddTodo;
