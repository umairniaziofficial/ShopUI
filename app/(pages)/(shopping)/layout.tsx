import * as React from "react";

import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
