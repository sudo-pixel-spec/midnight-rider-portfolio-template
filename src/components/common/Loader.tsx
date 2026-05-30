import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

type Props = {
  loading: boolean
}

const Loader = ({ loading }: Props) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          role="status"
          aria-live="polite"
          aria-label="Lorem ipsum dolor sit amet"
        >
          <motion.h1
            initial={
              shouldReduceMotion
                ? false
                : { letterSpacing: "0.5em", opacity: 0 }
            }
            animate={{ letterSpacing: "0.2em", opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.5 }}
            className="font-['Bebas_Neue'] text-7xl text-white"
          >
            LOREM
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: shouldReduceMotion ? 0 : 2 }}
            className="mt-6 h-[2px] bg-blue-500"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
