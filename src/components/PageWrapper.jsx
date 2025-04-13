/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'
/* eslint-enable no-unused-vars */

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="p-4"
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
