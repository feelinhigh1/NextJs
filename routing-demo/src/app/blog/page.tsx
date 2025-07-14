import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const page = () => {
  return <div>My Blog</div>;
};

export default page;
