export type Color =
  | "pink"
  | "orange"
  | "blue"
  | "purple"
  | "green"
  | "yellow"
  | "black";

export interface ColorPallet {
  color: Color;
  bg: string;
  svg?: string;
  border?: string;
  text?: string;
}

export const COLOR_TAG_PALLET: ColorPallet[] = [
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

export const COLOR_CARDS: ColorPallet[] = [
  {
    color: "pink",
    bg: "bg-[#FFEDF5]",
    svg: "bg-[#F588B9]",
  },
  {
    color: "purple",
    bg: "bg-[#EBEDFF]",
    svg: "bg-[#9FA8FE]",
  },
  {
    color: "green",
    bg: "bg-[#ECFFCE]",
    svg: "bg-[#A2B87E]",
  },
  {
    color: "blue",
    bg: "bg-[#BADAFF]",
    svg: "bg-[#6B93C0]",
  },
  {
    color: "yellow",
    bg: "bg-[#FFFAC2]",
    svg: "bg-[#CAC48E]",
  },
  {
    color: "orange",
    bg: "bg-[#FFBCAB]",
    svg: "bg-[#F28164]",
  },
];

export const colorExist = (colorArray: ColorPallet[], color: Color) => {
  return colorArray.find((c) => c.color === color);
};
