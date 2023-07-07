import styles from '../../styles/HomeSection.module.scss'
import IntroText from './HomeText'
import { useState, useEffect } from 'react'

const HomeSection = () => {
    const [introHeight, setIntroHeight] = useState(window.innerHeight)

    // DYNAMICALLY SIZE INTRO TO VIEWPORT HEIGHT
    useEffect(() => {
        const handleResize = () =>
        {
          console.log(window.innerHeight)
          setIntroHeight(window.innerHeight)
        }
    
        window.addEventListener('resize', handleResize)
      })
  
    return (
    <div id={styles['home-section']} style={{height: introHeight}}>
        <IntroText />
    </div>
  )
}

export default HomeSection