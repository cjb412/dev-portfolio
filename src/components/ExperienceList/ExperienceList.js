import { useEffect, useState } from 'react'
import styles from "./ExperienceList.module.scss"
import ExperienceNode from "./ExperienceNode"

const ExperienceList = ({ experiences, barFont, detailFont }) => {
  const [expandedNode, setExpandedNode] = useState()
  
  return (
    <div className={styles["list"]}>
        {
            experiences.map((experience) => 
            (
                <ExperienceNode key={experience.id} experience={experience} exposed={(expandedNode !== undefined) && (expandedNode === experience.id)} barFont={barFont} detailFont={detailFont} setExpandedNode={(e) => {setExpandedNode(e)}}/>
            ))
        }
    </div>
  )
}

export default ExperienceList