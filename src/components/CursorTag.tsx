import type { FC } from "react";

interface CursorTagProps {
  href?: string;
  tag: string;
}

const CursorTag: FC<CursorTagProps> = ({ href, tag }) => {
  return href ? <a href={href}>{tag}</a> : <span>{tag}</span>;
};

export default CursorTag;
