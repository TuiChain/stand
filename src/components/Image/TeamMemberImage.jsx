import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import ProjectImage from './ProjectImg';

const TeamMemberImage = (props) => {
  const { alt, filename } = props;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={inView? "team-wrapper__image-reveal" : "team-wrapper__image-hidden"}>
      <ProjectImage alt={alt} filename={filename} />
    </div>
  );
};

TeamMemberImage.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default TeamMemberImage;
