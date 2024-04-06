import React from "react";

interface HeadingProps {
  leftProp: string;
}

const Heading: React.FC<HeadingProps> = ({ leftProp }) => {
  return (
    <h2 className="text-4xl text-center font-bold mb-6 relative">
      Posts{" "}
      <span
        className={`inline-block w-10 h-1 rounded-sm bg-[--button-bg-color2] absolute -bottom-2 ${leftProp}`}
      ></span>
    </h2>
  );
};

export default Heading;
