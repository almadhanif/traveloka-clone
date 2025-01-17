import React from "react";

type ButtonProps = {
  text: string;
  variant: "outlineWhite" | "outlineBlack" | "solid" | "danger";
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, variant, icon, onClick, className }: ButtonProps) => {
  const variantButton = {
    outlineWhite: "border border-white p-2 rounded-lg hover:bg-black/30",
    outlineBlack: "border border-blue-500 p-2 rounded-lg hover:bg-black/20 text-black",
    solid: "p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600",
    danger: "p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600",
  }[variant];

  return (
    <button onClick={onClick} className={`${variantButton} ${className} flex justify-evenly items-center w-24`}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
