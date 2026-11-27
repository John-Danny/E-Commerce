import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faShoppingBag,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const getCssNavLink = ({ isActive }) => {
    let css =
      "inline-block w-full p-2 rounded-sm md:p-0 md:rounded-none md:text-[14px]";
    if (isActive) {
      css +=
        " bg-[#333] font-bold md:bg-transparent md:pb-1 md:border-b md:border-border";
    } else {
      css +=
        " text-[#ccc] hover:text-[#fff] hover:bg-[#333] md:hover:bg-transparent";
    }

    return css;
  };

  return (
    <header className="w-full h-12 bg-surface-black sticky top-0">
      <div className="max-w-300 h-full mx-auto">
        <nav className="h-full px-4 py-2 text-canvas flex items-center justify-between ">
          <span className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              size="base"
              className="cursor-pointer"
              onClick={() => {
                setIsOpenNav(!isOpenNav);
                document.querySelector("html").classList.add("overflow-hidden");
              }}
            />
          </span>

          <div className="flex items-center gap-4 ">
            <Link to="/" className="font-bold">
              LUMI Store
            </Link>
            <ul className="hidden md:flex items-center justify-between gap-4">
              <li>
                <NavLink to="/" end className={getCssNavLink}>
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={getCssNavLink}>
                  Sản phẩm
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className={`md:hidden w-full h-screen absolute top-0 left-0 bg-surface-black/50 z-99 ${isOpenNav ? "" : "hidden"}`}
          ></div>
          <div
            className={`md:hidden w-[50%] h-screen bg-surface-black absolute top-0 left-0 z-100 ${isOpenNav ? "" : "-translate-x-full"} transition-all duration-300 ease-out`}
          >
            <div className="w-full h-full">
              <div className="w-full flex items-center justify-between p-4 border-b border-r border-[#333]">
                <p>LUMI Store</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="base"
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpenNav(!isOpenNav);
                    document
                      .querySelector("html")
                      .classList.remove("overflow-hidden");
                  }}
                />
              </div>
              <ul className="w-full p-4 flex flex-col gap-2">
                <li className="w-full">
                  <NavLink to="/" end className={getCssNavLink}>
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className={getCssNavLink}>
                    Sản phẩm
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <FontAwesomeIcon
              icon={faUser}
              size="base"
              className="cursor-pointer"
            />
            <span className="relative">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size="base"
                  className="cursor-pointer"
                />
              </Link>
              <span className="inline-block w-4 h-4 bg-primary rounded-full text-fine-print text-center font-bold absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                2
              </span>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
