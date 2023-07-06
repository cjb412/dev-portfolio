import IntroText from './HomeText'
import { useState, useEffect } from 'react'

const HomeSection = () => {
    const [introHeight, setIntroHeight] = useState(window.innerHeight)

    // SET INTRO SECTION SIZE
    useEffect(() => {
        const handleResize = () =>
        {
          console.log(window.innerHeight)
          setIntroHeight(window.innerHeight)
        }
    
        window.addEventListener('resize', handleResize)
      })
  
    return (
    <div id='home-section' style={{height: introHeight}}>
        <IntroText />
    </div>
  )
}

export default HomeSection