import React from "react";
import {useState} from "react";
import menuopen from "../../assets/svgs/menuopen.svg";
import menuopen2 from "../../assets/svgs/menuopen3.svg";
import menuclose from "../../assets/svgs/menuclose.svg";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap md:mx-20 mx-10 items-center justify-between py-3">
        <div className="flex flex-row w-full xl:w-0 items-center mr-auto">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <div>
            <a
              className="text-[28px] font-semibold font-poppins leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-gray"
              href="#pablo"
            >
              Company Name
            </a>
            </div>
            <div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={navbarOpen?menuclose:menuopen2} alt="menuopen"/>
            </button>
            </div>
          </div>
        </div>
          <div
            className={
              "lg:flex items-center justify-start xs:flex-col " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none xl:ml-auto gap-x-8">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-[18px] leading-snug text-gray"
                  href="#pablo"
                >
                  <span className="ml-2 font-normal text-[#999FAE] font-Helvetica hover:text-[#A36EBA]">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-[18px] leading-snug text-gray"
                  href="#pablo"
                >
                  <span className="ml-2 font-normal text-[#999FAE] font-Helvetica hover:text-[#A36EBA]">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-[18px] leading-snug text-gray"
                  href="#pablo"
                >
                  <span className="ml-2 font-normal text-[#999FAE] font-Helvetica hover:text-[#A36EBA]">Pricing</span>
                </a>
              </li>
            </ul>
            <div className={"lg:flex rounded my-4 pl-10 hidden" +(navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
              <div className="hidden rounded relative  md:mr-0 md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg style={{transform: 'rotate(90deg)'}} className="w-5 h-5 text-[#999FAE]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-[417px] outline-none h-10 text-[#999FAE] sm:text-sm 
                    dark:placeholder-[#999FAE] rounded-md" placeholder="Search..." style={{backgroundColor:"rgba(114, 114, 114,0.1)"}}/>
              </div>
              <div className="hidden relative lg:ml-6 md:mr-0 md:block">
                <button className="bg-[#8F6EC5] font-Helvetica text-white font-bold py-2 px-4 rounded-[5px]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
      </nav>
    </>
  );
}