import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import ProjectImage from './ProjectImg';
import styles from './image.module.css';

const TeamMemberImage = (props) => {
  const { alt, filename, git, linkedin } = props;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={inView ? 'team-wrapper__image-reveal' : 'team-wrapper__image-hidden'}>
      <div className={styles.container}>
        <ProjectImage className={styles.image} alt={alt} filename={filename} />
        <div className={styles.overlay}>
          <div className={styles.button}>
            <div className="social-links">
              <a
                href={git}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github social-links-coloredIcon" />
              </a>
              <a
                href={linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMemberImage.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  git: PropTypes.string,
  linkedin: PropTypes.string,
};

export default TeamMemberImage;
