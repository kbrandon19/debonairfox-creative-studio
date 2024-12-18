
import { motion } from "framer-motion";
import { ComponentType } from "react";

const transitions = (OgComponent: ComponentType): React.FC => {
  const TransitionsWrapper: React.FC = () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  // Assign displayName for better debugging
  TransitionsWrapper.displayName = `TransitionsWrapper(${OgComponent.displayName || OgComponent.name || "Component"})`;

  return TransitionsWrapper;
};

export default transitions;
