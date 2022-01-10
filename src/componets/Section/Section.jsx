import React from 'react';
import PropTypes from 'prop-types';
import { SectionBlock } from './Section.styled';

const Section = ({ children }) => <SectionBlock>{children}</SectionBlock>;
Section.propType = {
  children: PropTypes.node,
};

export default Section;
