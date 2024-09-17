type ScrollTrackerProps = {
  purcentage: number;
};

export const ScrollTracker = ({ purcentage }: ScrollTrackerProps) => {
  return <span className="font-bold text-xs">{purcentage}%</span>;
};
