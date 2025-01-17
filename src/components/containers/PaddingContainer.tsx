import React from "react";

const PaddingContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full px-20">{children}</div>;
};

export default PaddingContainer;
