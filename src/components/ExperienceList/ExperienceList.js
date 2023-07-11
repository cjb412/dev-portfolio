import styles from "./ExperienceList.module.scss"
import ExperienceNode from "./ExperienceNode"

const ExperienceList = ({ experiences }) => {
console.log(experiences.length)
  return (
    <div className={styles["list"]}>
        {
            experiences.map((experience) => 
            (
                <ExperienceNode key={experience.id} experience={experience} exposed={true}/>
            ))
        }
    </div>
  )
}

export default ExperienceList