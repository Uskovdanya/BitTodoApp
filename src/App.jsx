import LeftSideTodo from "./components/LeftSide/LeftSideTodo";
import RightSideTodo from "./components//RightSide/RightSideTodo";
import "./index.css";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="container">
      <div className="grid 2xl:grid-rows-section2 xl:grid-rows-section2mediaXl lg:grid-rows-section2mediaLg md:grid-rows-section2mediaMd">
        <Header />
        <div className="grid 2xl:grid-cols-section3 xl:grid-cols-section3mediaXl lg:grid-cols-section3mediaLg md:grid-cols-section3mediaMd">
          <LeftSideTodo />
          <RightSideTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
