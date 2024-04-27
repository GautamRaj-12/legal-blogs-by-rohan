import React from "react";

interface HeadingProps {
  leftProp: string;
  headingText: string;
}

const Heading: React.FC<HeadingProps> = ({ leftProp, headingText }) => {
  return (
    <div className="flex justify-center">
      <span className="text-4xl font-bold mb-6 relative">
        {headingText}
        <span
          className={`inline-block w-10 h-1 rounded-sm bg-[--button-bg-color2] absolute -bottom-2 ${leftProp}`}
        ></span>
      </span>
    </div>
  );
};

export default Heading;
