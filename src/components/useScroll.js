import React from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.2, triggerOnce: true })
  if (view) {
    controls.start("show")
  } else {
    controls.start("hidden")
  }

  return [element, controls]
}
