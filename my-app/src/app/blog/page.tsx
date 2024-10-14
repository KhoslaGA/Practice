import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

interface Props {}

const blog = (props: Props) => {
  return <div>Blog page</div>;
};

export default blog;
