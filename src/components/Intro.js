
import IndexBar from './IndexBar';
import IntroText from './IntroText'
import { useState, useEffect } from 'react'

const Intro = () => {
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
    <div className='intro-area' style={{height: introHeight}}>
        <IndexBar />
        <IntroText />
    </div>
  )
}

export default Intro