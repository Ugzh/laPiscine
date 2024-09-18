import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="h-[5px] top-0 fixed left-0 right-0 bg-[#262625] dark:bg-[#EBEDFF] origin-left z-10"
      />
    </>
  );
};

export default ScrollProgress;
