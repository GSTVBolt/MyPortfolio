'use client'
import { motion, useAnimation, useInView } from "framer-motion"
import { SkillsMarquee } from "./skillsList/skillsMarquee"
import React, { useEffect, useRef } from "react"

export default function Skill() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <>
      <div ref={ref}>
        <motion.div className="px-10 lg:px-40 font-mono flex flex-col"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.0, delay: 0.25 }}
        >
          <div>
            <h1 className="text-base md:text-xl font-mono dark:text-white">
              <span className="text-pink-400">const</span>{' '}
              <span className="text-green-400">Techs</span>{' '}
              <span className="text-pink-400">=</span>[
            </h1>
          </div>
          <div className="flex w-full border-gray-500 border-l-2 border-opacity-30 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] justify-center align-middles">
            <SkillsMarquee />
          </div>
          <p className="text-base md:text-xl font-mono dark:text-white">]</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
          }}
        >
        </motion.div>
      </div>

    </>
  )
}

// border-gray-500 border-l-2 border-opacity-30 bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)]