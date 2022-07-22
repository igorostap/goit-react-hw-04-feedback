import { SectionStyle } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      {title && <h1>{title}</h1>}
      {children}
    </SectionStyle>
  );
}
Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node,
};
