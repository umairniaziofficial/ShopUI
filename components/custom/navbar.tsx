{
  /*Icons*/
}
import { ShoppingBag } from "lucide-react";

{
  /*Compomemts*/
}
import NavigationBar from "../groups/navigation";
import { Button } from "../ui/button";

import Link from "next/link";

import { SearchDialog } from "./search-dialog";

import { ShoppingCartSheet } from "./shopping-cart";

import { ThemeToggleButton } from "../ui/theme-toggle-button";

import { NavbarSheet } from "./mobile-navbar";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between px-[20px] py-[5px] w-full xxs:py-[10px] max-w-[1400px]">
      <div className="flex flex-row">
        <NavbarSheet />

        {/*Icon and Title*/}
        <Link
          href=""
          className="flex flex-row items-center font-thin text-wite  md:text-[18px] xxs:hidden xs:hidden md:flex  mr-12"
        >
          <ShoppingBag height={21} />
          Shop.co
        </Link>

        {/*Navigation Bar*/}
        <NavigationBar />
      </div>

      <div className="flex flex-row gap-x-3">
        <SearchDialog />

        <ShoppingCartSheet />

        <ThemeToggleButton customClass="xxs:hidden xs:hidden md:flex" />

        <Link href="sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
