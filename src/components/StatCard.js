import React from "react";

import styled, { keyframes } from "styled-components";
import { WEIGHTS, QUERIES } from "../constants";
import Card from "./Card";
import SvgIconEllipsis from "./icons/IconEllipsis";
import CategoryIcon from "./CategoryIcon";

const COLORS = {
  work: {
    "--card-color": "var(--color-orange)",
  },
  play: {
    "--card-color": "var(--color-aqua)",
  },
  study: {
    "--card-color": "var(--color-red)",
  },
  exercise: {
    "--card-color": "var(--color-green)",
  },
  social: {
    "--card-color": "var(--color-purple)",
  },
  selfCare: {
    "--card-color": "var(--color-yellow)",
  },
};

const StatCard = ({ title, timeframes, timeframe }) => {
  // convert title names to camelCase
  const objTitle = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  const style = COLORS[objTitle];

  const currentTimeFrame = timeframes[timeframe];

  return (
    <Wrapper style={style}>
      <IconCard>
        <IconWrapper>
          <CategoryIcon title={objTitle} />
        </IconWrapper>
      </IconCard>
      <ContentCard>
        <TopContent>
          <Category>{title}</Category>
          <EllipsisIconWrapper title="more options">
            <EllipsisIcon />
          </EllipsisIconWrapper>
        </TopContent>
        <BottomContent>
          <Hours key={timeframe}>{currentTimeFrame.current}hrs</Hours>
          <PrevHours>Last Week - {currentTimeFrame.previous}hrs</PrevHours>
        </BottomContent>
      </ContentCard>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.article`
  --margin-top: 45px;
  position: relative;
  margin-top: var(--margin-top);

  @media ${QUERIES.phoneAndSmaller} {
    --margin-top: 38px;
  }
`;

const IconCard = styled(Card)`
  height: 100px;
  width: 100%;
  background-color: var(--card-color);
  position: absolute;
  top: 0;
  left: 0;
  margin-top: calc(var(--margin-top) * -1);
  overflow: hidden;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 14px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const ContentCard = styled(Card)`
  background-color: var(--color-blue-300);
  position: relative;

  &:hover {
    background-color: var(--color-blue-hover);
  }
`;

const EllipsisIcon = styled(SvgIconEllipsis)`
  fill: var(--color-blue-200);
`;

const EllipsisIconWrapper = styled.button`
  height: 24px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: -4px;
  cursor: pointer;

  &:hover ${EllipsisIcon}, &:focus ${EllipsisIcon} {
    fill: white;
  }
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.p`
  font-weight: ${WEIGHTS.bold};
  font-size: 1.125rem;
`;

const BottomContent = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Hours = styled.h2`
  font-weight: ${WEIGHTS.normal};
  /* fluid font-size */
  font-size: clamp(2rem, 8vw - 2.5rem, 3.5rem);
  animation: 800ms ${fadeIn};
  animation-fill-mode: backwards;
`;

const PrevHours = styled.p`
  font-size: 0.9375rem;
  color: var(--color-blue-100);
  animation: 800ms ${fadeIn};
`;

export default StatCard;
