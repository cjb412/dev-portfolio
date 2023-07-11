import PropTypes from 'prop-types'
import React from 'react'

import styles from "./ExperienceList.module.scss"

import cx from 'classnames'

const ExperienceNode = ({ experience, exposed, barFont, detailFont, setExpandedNode }) => {
  const toggleExpanded = () => 
  {
    if(exposed)
    {
        setExpandedNode(undefined)
    } else {
        setExpandedNode(experience.id)
    }
  }
  
    return (
    <div className={styles["container"]}>
        <div onClick={() => {toggleExpanded()}} className={styles["bar"]}>
            {
                (experience === undefined) ? 
                <>
                No experience given.
                </>
                :
                <div className={cx(styles["bar-text"], barFont)}>
                    <div className={styles["bar-left"]}>
                        <span>{experience.title}</span>
                        <span>{experience.employer}</span>
                    </div>

                    <div className={styles["bar-right"]}>
                        {
                            (exposed) ? 
                            <div className={styles["bar-end-symbol"]}>-</div>
                            :
                            <div className={styles["bar-end-symbol"]}>+</div>
                        }
                        <div>{experience.date}</div>
                    </div>
                </div>
            }
        </div>
        {
            (experience !== undefined && exposed) ?
            <div className={styles["bar-exposed"]}>
                <div className={styles["point-list"]}>
                    {experience.experiencePoints.map((point, i) =>
                    (
                         <span key={i} className={detailFont}>- {point}</span>
                    ))}
                </div>
            </div>
            :
            <></>
        }
    </div>
  )
}


ExperienceNode.defaultProps = {
    experience: undefined,
    exposed: false
}
  
ExperienceNode.propTypes = {
    fontClass: PropTypes.string,
}

export default ExperienceNode