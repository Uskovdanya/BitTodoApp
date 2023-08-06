import AddTodo from "./AddTodo";
import Search from "./Search";
import TabHeader from "./TabHeader";
import Footer from "./Footer";
import { useState } from "react";
import TodoItem from "./TodoItem";

const initialItems = [
  {
    id: 1690854554307,
    description: "Купить молоко",
    date: "Tue Aug 01 2023",
    completed: false,
  },
  {
    id: 1690854554308,
    description: "Купить хлеб",
    date: "Tue Aug 01 2023",
    completed: false,
  },
  {
    id: 1690854554309,
    description: "Сделать уроки",
    date: "Tue Aug 01 2023",
    completed: false,
  },
];

const completeFilter = {
  all: "All",
  active: "Active",
  completed: "Completed",
};

function RightSideTodo() {
  const [todos, setTodos] = useState([]);
  const [sortBy, setSortBy] = useState("all");
  const [open, setOpen] = useState(false);

  let sortedTodos;
  if (sortBy === "all") sortedTodos = todos;

  if (sortBy === "date") sortedTodos = todos;
  if (sortBy === "alphabet")
    sortedTodos = todos.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "completed") sortedTodos = todos.filter((item) => item.completed === true);

  if (sortBy === "active") sortedTodos = todos.filter((item) => item.completed === false);

  function handleDeleteItem(id) {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setTodos((todos) =>
      todos.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }

  function handleAddTodos(todo) {
    setTodos((todos) => [...todos, todo]);
    console.log(todos);
  }

  return (
    <div className="grid 2xl:grid-rows-section4 xl:grid-rows-section4mediaXl lg:grid-rows-section4mediaLg md:grid-rows-section4mediaMd  xl:grid-cols-section5 lg:grid-cols-section5Lg grid-cols-section5Md">
      <div className="bg-right flex justify-center items-center lg:px-4 px-12">
        <div className="bg-todo rounded 2xl:w-[860px] 2xl:h-[568px] xl:pt-8 lg:pt-6 pt-5 xl:pb-16 lg:pb-[56px] pb-[36px] flex flex-col xl:w-[816px] xl:h-[520px] lg:w-[738px] lg:h-[928px] md:w-[328px] md:h-[470px]">
          <Search />
          <div className="w-full h-[1px] bg-menuHover lg:mt-8 lg:mb-6 mt-5 mb-4"></div>
          <div className="xl:px-[126px] lg:px-[84px] px-[14px]">
            <AddTodo
              onHandleAddTodos={handleAddTodos}
              setSortBy={setSortBy}
              open={open}
              setOpen={setOpen}
            />
            <TabHeader
              completeFilter={completeFilter}
              setSortBy={setSortBy}
              open={open}
              setOpen={setOpen}
              sortBy={sortBy}
            />
            <div className="border-x-[1px] border-t-[1px] border-b-[1px] border-left border-solid overflow-auto xl:h-[240px] scroll-smooth lg:h-[588px] h-[198px] ">
              {todos.length > 0 ? (
                sortedTodos.map((item) => (
                  <TodoItem
                    item={item}
                    key={item.id}
                    onDeleteItem={handleDeleteItem}
                    onToggleItem={handleToggleItem}
                  />
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="134"
                    height="120"
                    viewBox="0 0 134 120"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1015_3216)">
                      <path
                        d="M68.625 0.260617L64.2648 1.38253L10.5472 15.2048L6.18709 16.3267C4.07074 16.8738 2.2583 18.2362 1.1474 20.1151C0.0365123 21.9939 -0.282112 24.2357 0.261435 26.3486L19.1679 99.5026C19.7162 101.614 21.0816 103.423 22.9646 104.531C24.8475 105.64 27.0942 105.958 29.2118 105.415L29.2231 105.412L91.6384 89.352L91.6497 89.3491C93.7661 88.802 95.5785 87.4396 96.6894 85.5608C97.8003 83.682 98.1189 81.4402 97.5754 79.3273L78.6689 6.17329C78.1206 4.06158 76.7552 2.25312 74.8722 1.14466C72.9893 0.0361991 70.7426 -0.281732 68.625 0.260617Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M69.2186 2.55528L64.0543 3.88411L11.9448 17.2926L6.78065 18.6214C5.27354 19.011 3.98285 19.9812 3.19176 21.3191C2.40066 22.6571 2.17376 24.2535 2.56083 25.7582L21.4673 98.9121C21.8577 100.416 22.8301 101.704 24.171 102.493C25.5119 103.282 27.1118 103.509 28.6198 103.123L28.6311 103.12L91.0464 87.0594L91.0577 87.0565C92.5648 86.6669 93.8555 85.6967 94.6465 84.3587C95.4376 83.0208 95.6645 81.4244 95.2774 79.9197L76.371 6.76583C75.9805 5.26205 75.0082 3.97421 73.6673 3.18485C72.3265 2.39549 70.7265 2.16908 69.2186 2.55528Z"
                        fill="white"
                      />
                      <path
                        d="M65.3191 26.2445L33.7447 34.369C33.3921 34.4597 33.0177 34.407 32.704 34.2223C32.3904 34.0377 32.1631 33.7363 32.0721 33.3844C31.9812 33.0325 32.0341 32.659 32.2191 32.346C32.4042 32.033 32.7063 31.8062 33.0589 31.7155L64.6333 23.591C64.9858 23.5006 65.3599 23.5536 65.6733 23.7382C65.9867 23.9229 66.2138 24.2242 66.3047 24.5759C66.3956 24.9276 66.3428 25.3008 66.158 25.6137C65.9732 25.9266 65.6715 26.1535 65.3191 26.2445Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M71.9613 29.3112L34.9019 38.8471C34.5493 38.9378 34.1749 38.8851 33.8613 38.7004C33.5476 38.5158 33.3203 38.2143 33.2294 37.8625C33.1384 37.5106 33.1913 37.1371 33.3763 36.8241C33.5614 36.5111 33.8635 36.2843 34.2161 36.1935L71.2755 26.6577C71.6281 26.5669 72.0025 26.6197 72.3162 26.8043C72.6298 26.989 72.8571 27.2904 72.9481 27.6423C73.039 27.9942 72.9861 28.3677 72.8011 28.6807C72.616 28.9936 72.3139 29.2204 71.9613 29.3112Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M70.5054 46.3112L38.931 54.4357C38.7564 54.4806 38.5746 54.4908 38.396 54.4656C38.2175 54.4405 38.0456 54.3805 37.8903 54.289C37.735 54.1976 37.5993 54.0765 37.4908 53.9328C37.3824 53.789 37.3034 53.6253 37.2584 53.4511C37.2134 53.2769 37.2032 53.0955 37.2284 52.9173C37.2536 52.7391 37.3138 52.5677 37.4054 52.4127C37.497 52.2577 37.6184 52.1223 37.7624 52.0141C37.9065 51.9059 38.0706 51.8271 38.2452 51.7822L69.8196 43.6577C69.9942 43.6127 70.176 43.6026 70.3546 43.6277C70.5331 43.6529 70.705 43.7129 70.8603 43.8043C71.0156 43.8958 71.1513 44.0168 71.2598 44.1606C71.3682 44.3044 71.4472 44.468 71.4922 44.6423C71.5372 44.8165 71.5474 44.9979 71.5222 45.1761C71.497 45.3542 71.4369 45.5257 71.3452 45.6807C71.2536 45.8356 71.1323 45.9711 70.9882 46.0793C70.8441 46.1874 70.68 46.2663 70.5054 46.3112Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M77.1477 49.3786L40.0883 58.9144C39.9137 58.9594 39.7319 58.9695 39.5534 58.9444C39.3748 58.9192 39.203 58.8592 39.0477 58.7678C38.8924 58.6763 38.7566 58.5553 38.6482 58.4115C38.5398 58.2677 38.4608 58.1041 38.4158 57.9298C38.3707 57.7556 38.3605 57.5742 38.3858 57.396C38.411 57.2179 38.4711 57.0464 38.5627 56.8914C38.6544 56.7365 38.7757 56.601 38.9198 56.4928C39.0639 56.3847 39.2279 56.3058 39.4025 56.2609L76.4619 46.7251C76.8145 46.6343 77.1889 46.6871 77.5025 46.8717C77.8162 47.0564 78.0435 47.3578 78.1344 47.7097C78.2254 48.0615 78.1725 48.4351 77.9875 48.748C77.8024 49.061 77.5003 49.2878 77.1477 49.3786Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M75.6918 66.3786L44.1174 74.5031C43.7648 74.5936 43.3907 74.5406 43.0772 74.356C42.7638 74.1713 42.5366 73.87 42.4457 73.5183C42.3548 73.1665 42.4076 72.7932 42.5925 72.4803C42.7773 72.1674 43.0792 71.9405 43.4316 71.8496L75.006 63.7251C75.3587 63.6343 75.733 63.6871 76.0467 63.8717C76.3604 64.0564 76.5877 64.3578 76.6786 64.7097C76.7696 65.0615 76.7167 65.4351 76.5316 65.748C76.3466 66.061 76.0445 66.2878 75.6918 66.3786Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M82.334 69.445L45.2746 78.9809C45.1 79.026 44.9181 79.0363 44.7394 79.0112C44.5607 78.9862 44.3888 78.9262 44.2333 78.8348C44.0779 78.7434 43.942 78.6223 43.8335 78.4785C43.725 78.3346 43.6459 78.1709 43.6009 77.9965C43.5558 77.8222 43.5456 77.6407 43.5709 77.4625C43.5962 77.2842 43.6564 77.1127 43.7482 76.9577C43.8399 76.8026 43.9614 76.6672 44.1056 76.559C44.2499 76.4509 44.4141 76.3721 44.5888 76.3273L81.6482 66.7915C82.0009 66.7007 82.3752 66.7535 82.6889 66.9381C83.0025 67.1228 83.2298 67.4242 83.3208 67.7761C83.4117 68.128 83.3589 68.5015 83.1738 68.8145C82.9887 69.1274 82.6867 69.3542 82.334 69.445Z"
                        fill="#F2F2F2"
                      />
                      <path
                        d="M28.3545 42.6989L17.1806 45.5741C17.0115 45.6175 16.8321 45.5921 16.6817 45.5036C16.5314 45.415 16.4223 45.2706 16.3786 45.102L13.8136 35.1775C13.7702 35.0088 13.7956 34.8298 13.8843 34.6798C13.9731 34.5298 14.1178 34.421 14.2868 34.3773L25.4607 31.5021C25.6298 31.4588 25.8092 31.4842 25.9595 31.5727C26.1099 31.6612 26.2189 31.8056 26.2627 31.9742L28.8276 41.8987C28.871 42.0674 28.8456 42.2464 28.7569 42.3965C28.6682 42.5465 28.5235 42.6553 28.3545 42.6989Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M33.5408 62.7663L22.3669 65.6415C22.1978 65.6848 22.0184 65.6594 21.8681 65.5709C21.7177 65.4824 21.6087 65.338 21.5649 65.1694L18.9999 55.2449C18.9565 55.0762 18.982 54.8972 19.0707 54.7472C19.1594 54.5971 19.3041 54.4884 19.4731 54.4447L30.647 51.5695C30.8161 51.5262 30.9955 51.5516 31.1458 51.6401C31.2962 51.7286 31.4052 51.873 31.449 52.0416L34.0139 61.9661C34.0573 62.1348 34.0319 62.3138 33.9432 62.4638C33.8545 62.6138 33.7098 62.7226 33.5408 62.7663Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M38.7272 82.8337L27.5533 85.7089C27.3842 85.7523 27.2048 85.7269 27.0545 85.6384C26.9041 85.5498 26.7951 85.4054 26.7513 85.2368L24.1864 75.3123C24.1429 75.1436 24.1684 74.9646 24.2571 74.8146C24.3458 74.6645 24.4905 74.5558 24.6595 74.5121L35.8334 71.6369C36.0025 71.5936 36.1819 71.6189 36.3323 71.7075C36.4826 71.796 36.5916 71.9404 36.6354 72.109L39.2004 82.0335C39.2438 82.2022 39.2183 82.3812 39.1296 82.5313C39.0409 82.6813 38.8962 82.7901 38.7272 82.8337Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M112.173 18.8057H47.6924C45.5062 18.8081 43.4102 19.6758 41.8643 21.2183C40.3184 22.7608 39.4489 24.8522 39.4464 27.0336V102.581C39.4489 104.762 40.3184 106.854 41.8643 108.396C43.4102 109.939 45.5062 110.806 47.6924 110.809H112.173C114.359 110.806 116.455 109.939 118.001 108.396C119.547 106.854 120.416 104.762 120.419 102.581V27.0336C120.416 24.8522 119.547 22.7608 118.001 21.2183C116.455 19.6758 114.359 18.8081 112.173 18.8057Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M112.173 21.1738H47.6924C46.1356 21.1756 44.643 21.7934 43.5421 22.8919C42.4412 23.9903 41.822 25.4797 41.8203 27.0331V102.58C41.822 104.134 42.4412 105.623 43.5421 106.722C44.643 107.82 46.1356 108.438 47.6924 108.44H112.173C113.73 108.438 115.223 107.82 116.323 106.722C117.424 105.623 118.043 104.134 118.045 102.58V27.0331C118.043 25.4797 117.424 23.9904 116.323 22.8919C115.223 21.7935 113.73 21.1756 112.173 21.1738Z"
                        fill="white"
                      />
                      <path
                        d="M118.947 120C127.261 120 134 113.276 134 104.981C134 96.6855 127.261 89.9609 118.947 89.9609C110.634 89.9609 103.894 96.6855 103.894 104.981C103.894 113.276 110.634 120 118.947 120Z"
                        fill="#0078D4"
                      />
                      <path
                        d="M126.146 103.021H120.911V97.797C120.911 97.2774 120.704 96.7791 120.336 96.4117C119.967 96.0443 119.468 95.8379 118.947 95.8379C118.427 95.8379 117.927 96.0443 117.559 96.4117C117.191 96.7791 116.984 97.2774 116.984 97.797V103.021H111.748C111.227 103.021 110.728 103.228 110.36 103.595C109.992 103.962 109.785 104.461 109.785 104.98C109.785 105.5 109.992 105.998 110.36 106.366C110.728 106.733 111.227 106.939 111.748 106.939H116.984V112.164C116.984 112.683 117.191 113.182 117.559 113.549C117.927 113.916 118.427 114.123 118.947 114.123C119.468 114.123 119.967 113.916 120.336 113.549C120.704 113.182 120.911 112.683 120.911 112.164V106.939H126.146C126.667 106.939 127.167 106.733 127.535 106.366C127.903 105.998 128.11 105.5 128.11 104.98C128.11 104.461 127.903 103.962 127.535 103.595C127.167 103.228 126.667 103.021 126.146 103.021Z"
                        fill="white"
                      />
                      <path
                        d="M102.469 62.6866H69.8613C69.6808 62.6868 69.5021 62.6515 69.3353 62.5828C69.1686 62.514 69.017 62.4131 68.8893 62.2859C68.7616 62.1586 68.6604 62.0075 68.5912 61.8411C68.5221 61.6748 68.4866 61.4965 68.4866 61.3165C68.4866 61.1364 68.5221 60.9581 68.5912 60.7918C68.6604 60.6254 68.7616 60.4743 68.8893 60.3471C69.017 60.2198 69.1686 60.1189 69.3353 60.0501C69.5021 59.9814 69.6808 59.9461 69.8613 59.9463H102.469C102.833 59.9467 103.181 60.0912 103.439 60.3481C103.696 60.6051 103.84 60.9533 103.84 61.3165C103.84 61.6796 103.696 62.0279 103.439 62.2848C103.181 62.5417 102.833 62.6862 102.469 62.6866Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M108.133 67.3116H69.8613C69.6808 67.3118 69.5021 67.2765 69.3353 67.2077C69.1686 67.139 69.017 67.0381 68.8893 66.9108C68.7616 66.7836 68.6604 66.6325 68.5912 66.4661C68.5221 66.2998 68.4866 66.1215 68.4866 65.9414C68.4866 65.7614 68.5221 65.5831 68.5912 65.4168C68.6604 65.2504 68.7616 65.0993 68.8893 64.9721C69.017 64.8448 69.1686 64.7439 69.3353 64.6751C69.5021 64.6064 69.6808 64.5711 69.8613 64.5713H108.133C108.497 64.5713 108.846 64.7156 109.104 64.9726C109.362 65.2295 109.506 65.5781 109.506 65.9414C109.506 66.3048 109.362 66.6533 109.104 66.9103C108.846 67.1672 108.497 67.3116 108.133 67.3116Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M102.469 83.4102H69.8613C69.6808 83.4104 69.5021 83.3752 69.3353 83.3064C69.1686 83.2376 69.017 83.1367 68.8893 83.0095C68.7616 82.8822 68.6604 82.7311 68.5912 82.5648C68.5221 82.3984 68.4866 82.2201 68.4866 82.0401C68.4866 81.86 68.5221 81.6817 68.5912 81.5154C68.6604 81.3491 68.7616 81.1979 68.8893 81.0707C69.017 80.9434 69.1686 80.8425 69.3353 80.7738C69.5021 80.705 69.6808 80.6697 69.8613 80.6699H102.469C102.833 80.6699 103.182 80.8143 103.44 81.0712C103.697 81.3282 103.842 81.6767 103.842 82.0401C103.842 82.4035 103.697 82.752 103.44 83.0089C103.182 83.2659 102.833 83.4102 102.469 83.4102Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M108.133 88.0353H69.8613C69.6808 88.0355 69.5021 88.0002 69.3353 87.9314C69.1686 87.8627 69.017 87.7618 68.8893 87.6345C68.7616 87.5073 68.6604 87.3561 68.5912 87.1898C68.5221 87.0235 68.4866 86.8452 68.4866 86.6651C68.4866 86.485 68.5221 86.3067 68.5912 86.1404C68.6604 85.9741 68.7616 85.823 68.8893 85.6957C69.017 85.5684 69.1686 85.4676 69.3353 85.3988C69.5021 85.33 69.6808 85.2947 69.8613 85.2949H108.133C108.314 85.2947 108.492 85.33 108.659 85.3988C108.826 85.4676 108.977 85.5684 109.105 85.6957C109.233 85.823 109.334 85.9741 109.403 86.1404C109.472 86.3067 109.508 86.485 109.508 86.6651C109.508 86.8452 109.472 87.0235 109.403 87.1898C109.334 87.3561 109.233 87.5073 109.105 87.6345C108.977 87.7618 108.826 87.8627 108.659 87.9314C108.492 88.0002 108.314 88.0355 108.133 88.0353Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M62.557 69.4108H51.0176C50.843 69.4106 50.6756 69.3413 50.5522 69.2182C50.4288 69.095 50.3593 68.928 50.3591 68.7538V58.5047C50.3593 58.3305 50.4288 58.1635 50.5522 58.0403C50.6756 57.9171 50.843 57.8478 51.0176 57.8477H62.557C62.7316 57.8478 62.899 57.9171 63.0224 58.0403C63.1458 58.1635 63.2153 58.3305 63.2155 58.5047V68.7538C63.2153 68.928 63.1458 69.095 63.0224 69.2182C62.899 69.3413 62.7316 69.4106 62.557 69.4108Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M62.557 90.1344H51.0176C50.843 90.1342 50.6756 90.0649 50.5522 89.9418C50.4288 89.8186 50.3593 89.6516 50.3591 89.4774V79.2283C50.3593 79.0541 50.4288 78.8871 50.5522 78.7639C50.6756 78.6408 50.843 78.5715 51.0176 78.5713H62.557C62.7316 78.5715 62.899 78.6408 63.0224 78.7639C63.1458 78.8871 63.2153 79.0541 63.2155 79.2283V89.4774C63.2153 89.6516 63.1458 89.8186 63.0224 89.9418C62.899 90.0649 62.7316 90.1342 62.557 90.1344Z"
                        fill="#EDEBE9"
                      />
                      <path
                        d="M102.505 39.6173H78.4647C78.1005 39.6173 77.7513 39.473 77.4938 39.216C77.2362 38.959 77.0916 38.6105 77.0916 38.2471C77.0916 37.8837 77.2362 37.5352 77.4938 37.2783C77.7513 37.0213 78.1005 36.877 78.4647 36.877H102.505C102.869 36.877 103.218 37.0213 103.476 37.2783C103.733 37.5352 103.878 37.8837 103.878 38.2471C103.878 38.6105 103.733 38.959 103.476 39.216C103.218 39.473 102.869 39.6173 102.505 39.6173Z"
                        fill="#DDDDDD"
                      />
                      <path
                        d="M108.169 44.2413H78.4647C78.2844 44.2413 78.1058 44.2059 77.9392 44.137C77.7726 44.0682 77.6213 43.9672 77.4938 43.84C77.3662 43.7128 77.2651 43.5617 77.1961 43.3955C77.1271 43.2293 77.0916 43.0511 77.0916 42.8711C77.0916 42.6912 77.1271 42.513 77.1961 42.3468C77.2651 42.1806 77.3662 42.0295 77.4938 41.9023C77.6213 41.7751 77.7726 41.6741 77.9392 41.6053C78.1058 41.5364 78.2844 41.501 78.4647 41.501H108.169C108.533 41.501 108.883 41.6453 109.14 41.9023C109.398 42.1592 109.542 42.5078 109.542 42.8711C109.542 43.2345 109.398 43.5831 109.14 43.84C108.883 44.097 108.533 44.2413 108.169 44.2413Z"
                        fill="#DDDDDD"
                      />
                      <path
                        d="M73.1443 49.8453H50.9814C50.8069 49.8452 50.6395 49.7759 50.5161 49.6527C50.3926 49.5295 50.3232 49.3625 50.323 49.1884V31.9295C50.3232 31.7553 50.3926 31.5883 50.5161 31.4651C50.6395 31.3419 50.8069 31.2727 50.9814 31.2725H73.1443C73.3189 31.2727 73.4863 31.3419 73.6097 31.4651C73.7331 31.5883 73.8026 31.7553 73.8028 31.9295V49.1884C73.8026 49.3625 73.7331 49.5295 73.6097 49.6527C73.4863 49.7759 73.3189 49.8452 73.1443 49.8453Z"
                        fill="#0078D4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1015_3216">
                        <rect width="134" height="120" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  No todos yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RightSideTodo;
