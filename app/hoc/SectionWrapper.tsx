import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { staggerContainer } from "../motion/motion";

interface StarWrapperProps {
  idName: string;
}

// Generic type for the component
function withStarWrapper<T>(Component: FC<T>, idName: string): FC<T & StarWrapperProps> {
  return function StarWrappedComponent(props: T & StarWrapperProps) {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1) as Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-wrapper"
      >
        <i className="hash-span" id={idName}>
          &nbsp;
        </i>

        <Component {...props} />
      </motion.section>
    );
  };
}

export default withStarWrapper;
