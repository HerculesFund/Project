import { React, useState } from "react";
import logo from "./../../images/logoimg.png";
import "./Header.css";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const handleToggle = () => {
    setActive2(false);
    setActive(!isActive);
  };
  const handleToggle2 = () => {
    setActive(false);
    setActive2(!isActive2);
  };

  return (
    <div className="Header">
      <div>
        <img src={logo} alt="Logo" />
        <h1>PieDAO </h1>
        <span>(beta)</span>
      </div>
      <ul>
        <li>
          <a href="#"> 🥩 Stake DOUGH</a>{" "}
        </li>
        <li className="dropdown">
          <a href="#" onClick={handleToggle} onBlur={handleToggle}>
            Products
            <svg
              class="-mr-1 ml-3px h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="drop-menu">
            <ul className={isActive ? "dropdown-show" : null}>
              <li>
                <a href="#">🥧 Indices (PIEs) </a>
              </li>
              <li>
                <a href="#">🔀 Exchange </a>
              </li>
              <li>
                <a href="#">⏲️ Ovens (Buy Gas Free) </a>
              </li>
              <li>
                <a href="#">🚜 Farms + DOUGHpamine </a>
              </li>
              <li>
                <a href="#">👛 Piefolio </a>
              </li>
              <li>
                <a href="#">🟣 Token </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="dropdown2">
          <a href="#" onClick={handleToggle2} onBlur={handleToggle2}>
            Governance
            <svg
              class="-mr-1 ml-3px h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="drop-menu2">
            <ul className={isActive2 ? "dropdown-show" : null}>
              <li>
                <a href="#">🙋 Dough Staking </a>
              </li>
              <li>
                <a href="#">📟 Staking Simulator </a>
              </li>
              <li>
                <a href="#">📈 UMA KPI Options </a>
              </li>
              <li>
                <a href="#">📢 Forum </a>
              </li>
              <li>
                <a href="#">🦅 Aragon DAO </a>
              </li>
              <li>
                <a href="#">⚡ Snapshot </a>
              </li>
              <li>
                <a href="#">🤝 Partnerships </a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="#"> Token</a>{" "}
        </li>
        <li>
          <a href="#"> Learn</a>{" "}
        </li>
        <li className="btn-gradient">
          <a href="#" className=" font-white">
            {" "}
            Connect Wallet
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
