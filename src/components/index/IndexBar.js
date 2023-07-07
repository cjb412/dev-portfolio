import styles from "../../styles/IndexBar.module.scss"
import IndexBarButton from "./IndexBarButton"

const IndexBar = () => {
  return (
    <div className={styles['index-bar']}>
        <IndexBarButton index='00' text="Home" targetId="home-section"/>
        <IndexBarButton index='01' text="About" targetId="about-section"/>
        <IndexBarButton index='02' text="Experience" targetId="experience-section"/>
        <IndexBarButton index='03' text="Projects" targetId="projects-section"/>
        <IndexBarButton index='04' text="Contact" targetId="contact-section"/>
    </div>
  )
}

export default IndexBar