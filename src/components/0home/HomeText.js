import styles from '../../styles/HomeSection.module.scss'

const IntroText = () => {
  return (
    <div className={styles['home-text']}>
        <h1 className={styles['home-name']}>Chris</h1>
        <h1 className={styles['home-name']}>Blank</h1>
        <p className={styles['home-subtitle']}>Software Engineer, Full Stack Developer, Game Dev Hobbyist</p>
    </div>
  )
}

export default IntroText