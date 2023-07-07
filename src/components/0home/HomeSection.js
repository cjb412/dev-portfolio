import styles from '../../styles/HomeSection.module.scss'
import IntroText from './HomeText'
import { useState, useEffect } from 'react'

const HomeSection = () => {
    return (
    <div id='home-section'>
        <IntroText />
    </div>
  )
}

export default HomeSection