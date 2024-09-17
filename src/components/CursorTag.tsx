import type { FC } from "react";
import { Cursor } from "./Cursor";
export type Color = "pink" | "orange" | "blue" | "purple" | "green" | "yellow";

interface CursorTagProps {
  href?: string;
  tag: string;
  direction?: "right" | "left";
  color: Color;
}
const COLOR_PALLET = [
  {
    color: "pink",
    bg: "bg-[#F588B9]",
    border: "border-[#D6699A]",
    text: "text-[#F588B9]",
  },
  {
    color: "orange",
    bg: "bg-[#F28164]",
    border: "border-[#D46F55]",
    text: "text-[#F28164]",
  },
  {
    color: "blue",
    bg: "bg-[#6B93C0]",
    border: "border-[#6B93C0]",
    text: "text-[#6B93C0]",
  },
  {
    color: "purple",
    bg: "bg-[#9FA8FE]",
    border: "border-[#8A92E3]",
    text: "text-[#9FA8FE]",
  },
  {
    color: "green",
    bg: "bg-[#A2B87E]",
    border: "border-[#95AE6D]",
    text: "text-[#A2B87E]",
  },
  {
    color: "yellow",
    bg: "bg-[#CAC48E]",
    border: "border-[#C2BB82]",
    text: "text-[#CAC48E]",
  },
];

const CursorTag: FC<CursorTagProps> = ({ href, tag, direction, color }) => {
  const ColorExist = (color: Color) => {
    return COLOR_PALLET.find((c) => c.color === color);
  };

  const bgColor = ColorExist(color)?.bg;
  const cursorColor = ColorExist(color)?.text;
  const borderColor = ColorExist(color)?.border;

  const tagDirection =
    direction === "left" ? "rounded-r-full" : "rounded-l-full";

  const tagStyle = `${bgColor} text-[#F3F3F3] inline-block px-4 py-1 rounded-b-full
  border-2 ${tagDirection} ${borderColor} font-semibold`;

  const cursorDirection =
    direction === "left"
      ? `absolute -left-4 ${cursorColor} -top-5 rotate-[-10deg] drop-shadow`
      : `absolute -right-4 ${cursorColor} rotate-[60deg] -top-5 drop-shadow`;
  return href ? (
    <div>
      <a href={href} className={`${tagStyle} relative`}>
        {tag}
        <Cursor className={cursorDirection} />
      </a>
    </div>
  ) : (
    <div>
      <span className={tagStyle}>{tag}</span>
    </div>
  );
};

export default CursorTag;
