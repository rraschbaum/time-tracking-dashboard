import React from "react";

import styled from "styled-components";
import { QUERIES } from "../constants";

const Card = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px;
  }
`;

export default Card;
