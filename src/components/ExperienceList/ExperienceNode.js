import PropTypes from 'prop-types'
import React from 'react'

import styles from "./ExperienceList.module.scss"

const ExperienceNode = ({ experience, exposed }) => {
  return (
    <div className={styles["container"]}>
        <div className={styles["bar"]}>
            {
                (experience == undefined) ? 
                <>
                No experience given.
                </>
                :
                <div className={styles["bar-text"]}>
                    <div>
                        <span>{experience.title}</span>
                        <span>{experience.employer}</span>
                    </div>

                    <div>
                        <div>{experience.date}</div>
                        {
                            (exposed) ? 
                            <div>-</div>
                            :
                            <div>+</div>
                        }
                    </div>
                </div>
            }
        </div>
        {
            (experience != undefined && exposed) ?
            <div className={styles["bar-exposed"]}>
                <div className={styles["point-list"]}>
                    {
                        experience.experiencePoints.map((point) =>
                        (
                            <span>- {point}</span>
                        ))
                    }
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