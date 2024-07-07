import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const blog = () => {
  return (
    <div className="md:max-w-5xl max-w-md h-full min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <Header />
      <div className="pt-28">
        <Blog changed="Our Blog" blogPage />
        <Footer />
      </div>
    </div>
  );
};

export default blog;
