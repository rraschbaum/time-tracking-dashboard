import styled from "styled-components";

import SvgIconWork from "./icons/IconWork";
import SvgIconPlay from "./icons/IconPlay";
import SvgIconStudy from "./icons/IconStudy";
import SvgIconExcercise from "./icons/IconExercise";
import SvgIconSocial from "./icons/IconSocial";
import SvgIconSelfCare from "./icons/IconSelfCare";

const icons = {
  work: SvgIconWork,
  play: SvgIconPlay,
  study: SvgIconStudy,
  exercise: SvgIconExcercise,
  social: SvgIconSocial,
  selfCare: SvgIconSelfCare,
};

const CategoryIcon = ({ title }) => {
  const Component = icons[title];

  return (
    <Wrapper>
      <Component />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CategoryIcon;
