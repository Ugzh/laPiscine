import type { FC } from "react";
import { Cursor } from "./Cursor";
import { colorExist, COLOR_TAG_PALLET } from "../utils/colorUtils";
import type { Color } from "../utils/colorUtils";

interface CursorTagProps {
  href?: string;
  tag: string;
  direction?: "right" | "left";
  color: Color;
}

const CursorTag: FC<CursorTagProps> = ({ href, tag, direction, color }) => {
  const bgColor = colorExist(COLOR_TAG_PALLET, color)?.bg;
  const cursorColor = colorExist(COLOR_TAG_PALLET, color)?.text;
  const borderColor = colorExist(COLOR_TAG_PALLET, color)?.border;

  const tagDirection =
    direction === "right" ? "rounded-l-full" : "rounded-r-full";

  const tagStyle = `${bgColor} text-[#F3F3F3] inline-block px-4 py-1 rounded-b-full
  border-2 ${tagDirection} ${borderColor} font-semibold text-xs`;

  const cursorDirection =
    direction === "right"
      ? `absolute -right-3 ${cursorColor} rotate-[60deg] -top-4 drop-shadow`
      : `absolute -left-3 ${cursorColor} -top-4 rotate-[-10deg] drop-shadow`;
  return href ? (
    <>
      <a href={href} className={`${tagStyle} relative `}>
        {tag}
        <Cursor className={cursorDirection} />
      </a>
    </>
  ) : (
    <>
      <span className={`${tagStyle} relative`}>
        {tag}
        <Cursor className={cursorDirection} />
      </span>
    </>
  );
};

export default CursorTag;
