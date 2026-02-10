import { motion } from "framer-motion";
import './animations.css';
/* Cat */
const AnimatedCat = () => (
  <motion.div
    className="animated-cat"
    animate={{ x: [0, 20, 0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
  >
    🐱
  </motion.div>
);

/* Dog (optional) */
const AnimatedDog = () => (
  <motion.div
    className="animated-dog"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    🐶
  </motion.div>
);

/* Paw */
const AnimatedPaw = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`animated-paw ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0, 0.3, 0],
      scale: [0.5, 1, 1.2],
      rotate: [0, 15, -15],
    }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  >
    🐾
  </motion.div>
);

/* Heart */
const FloatingHeart = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`animated-heart ${className}`}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  >
    💛
  </motion.div>
);

export { AnimatedCat, AnimatedDog, AnimatedPaw, FloatingHeart };
