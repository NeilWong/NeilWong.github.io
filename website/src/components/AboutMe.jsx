import React from "react"

import AnimatedText from "./AnimatedText"

import PropTypes from "prop-types"

import styles from "./about-me.module.scss"

function AboutMe({ name, title, content, nouns }) {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.primary}>
          <p>
            {title}
            <span className={styles.name}>{name}</span>
          </p>
        </div>
        <div className={styles.secondary}>
          <p>
            I'm a{" "}
            <strong>
              <AnimatedText items={["developer", "problem solver"]} />
            </strong>{" "}
            from San Francisco
          </p>
        </div>
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  contet: PropTypes.string,
}

export default AboutMe
