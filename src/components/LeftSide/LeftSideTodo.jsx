import Menu from "./Menu";
import Profile from "./Profile";

function LeftSideTodo() {
  return (
    <div className="bg-left xl:block hidden">
      <Profile />
      <Menu />
    </div>
  );
}

export default LeftSideTodo;
