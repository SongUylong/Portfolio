import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { ReactNode } from "react";
interface AppLayoutProps {
  children: ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-12">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
