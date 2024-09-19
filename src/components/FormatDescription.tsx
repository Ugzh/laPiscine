import type { FC } from "react";
import { useEffect, useState } from "react";

interface FormatProps {
  description: string[];
  children: JSX.Element | string;
}
const FormatDescription: FC<FormatProps> = ({ children, description }) => {
  const [strong, setStrong] = useState([]);

  useEffect(() => {
    const strongify = (wrd: []) => {
      return setStrong(wrd);
    };

    strongify(description);
  });
  return (
    <div>
      <p>{children}</p>
      <p>
        <strong>{strong && strong}</strong>
      </p>
    </div>
  );
};

export default FormatDescription;
