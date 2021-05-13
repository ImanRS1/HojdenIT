import { CountUp } from "countup.js"
import React from "react"

export default function CountUpNumber() {
  let testerr = 0

  const createCounter = () => {
    console.log("andra")
    const options = {
      duration: 6.2,
    }
    let demo = new CountUp("myTargetElement", 417, options)
    if (!demo.error) {
      demo.start()
    } else {
      console.error(demo.error)
    }
  }

  const createCounterr = () => {
    setTimeout(function () {
      createCounter()
    }, 500)
  }
  return (
    <div>
      <h1 id="myTargetElement" onLoad={createCounterr()}>
        0
      </h1>
    </div>
  )
}
