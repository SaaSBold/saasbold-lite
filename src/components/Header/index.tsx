"use client";
import logoLight from "@/../public/images/logo/logo-light.svg";
import logo from "@/../public/images/logo/logo.svg";
import { Menu } from "@/types/menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import ThemeSwitcher from "./ThemeSwitcher";
import { menuData } from "./menuData";
import { onScroll } from "@/libs/scrollActive";
import { usePathname } from "next/navigation";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY > 0) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-999 w-full transition-all duration-300 ease-in-out  ${
          stickyMenu
            ? "bg-white py-4 shadow dark:bg-dark xl:py-0"
            : "bg-transparent py-7 xl:py-0"
        }`}
      >
        <div className="relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:flex xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-4/12">
            <Link href="/">
              <Image
                src={logoLight}
                alt="Logo"
                className="hidden w-full dark:block"
              />
              <Image src={logo} alt="Logo" className="w-full dark:hidden" />
            </Link>

            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              onClick={navbarToggleHandler}
              aria-label="button for menu toggle"
              className="block xl:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && "!w-full delay-300"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && "!h-0 delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && "dealy-200 !h-0"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-8/12 ${
              navbarOpen &&
              "!visible relative mt-4 !h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5 shadow-lg dark:bg-gray-dark"
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-2.5">
                {menuData?.map((item: Menu, key) =>
                  !item?.path && item?.submenu ? (
                    <Dropdown stickyMenu={stickyMenu} item={item} key={key} />
                  ) : (
                    <li
                      key={key}
                      className={`${
                        item?.submenu ? "group relative" : "nav__menu"
                      } ${stickyMenu ? "xl:py-4" : "xl:py-6"}`}
                    >
                      <Link
                        href={
                          item?.path
                            ? item?.path.includes("#") && !item?.newTab
                              ? `/${item?.path}`
                              : item?.path
                            : ""
                        }
                        target={item?.newTab ? "_blank" : ""}
                        rel={item?.newTab ? "noopener noreferrer" : ""}
                        className={`flex rounded-full px-[14px] py-[3px] font-satoshi font-medium ${
                          pathUrl === item?.path
                            ? "bg-primary/5 text-primary dark:bg-white/5 dark:text-white"
                            : "text-black hover:bg-primary/5 hover:text-primary dark:text-gray-5 dark:hover:bg-white/5 dark:hover:text-white"
                        } ${item?.path?.startsWith("#") ? "menu-scroll" : ""}`}
                      >
                        {item?.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="mt-7 flex flex-wrap items-center lg:mt-0">
              <ThemeSwitcher />

              <Link
                href="#"
                className="px-5 py-2 font-satoshi font-medium text-black dark:text-white"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="rounded-full bg-primary px-5 py-2 font-satoshi font-medium text-white hover:bg-primary-dark"
              >
                Sign Up
              </Link>
            </div>
            {/* <!--=== Nav Right End ===--> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
