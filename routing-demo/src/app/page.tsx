import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Welcome to My Page</h1>
      <Link href="/blog">Go to Blog</Link>
      <br />
      <Link href="/products">Go to Product Page</Link>
    </>
  );
};

export default page;
