import React from "react";

import styled from "styled-components";
import { WEIGHTS, QUERIES } from "../constants";
import Card from "./Card";
import UserImage from "../assets/image-jeremy.png";

function UserCard({ changeTimeframe, timeframe }) {
  return (
    <Wrapper>
      <UserInfoCard>
        <Avatar src={UserImage} alt="User" />
        <UserName>
          <SmallText>Report for</SmallText>Jeremy Robson
        </UserName>
      </UserInfoCard>
      <SelectorCard>
        <SelectorItem
          onClick={() => changeTimeframe("daily")}
          active={timeframe === "daily"}
        >
          Daily
        </SelectorItem>
        <SelectorItem
          onClick={() => changeTimeframe("weekly")}
          active={timeframe === "weekly"}
        >
          Weekly
        </SelectorItem>
        <SelectorItem
          onClick={() => changeTimeframe("monthly")}
          active={timeframe === "monthly"}
        >
          Monthly
        </SelectorItem>
      </SelectorCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --mobile-bottom-card-spacing: 74px;
  position: relative;
  isolation: isolate;
  height: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    height: 100%;
    margin-bottom: var(--mobile-bottom-card-spacing);
  }
`;

const UserInfoCard = styled(Card)`
  background-color: var(--color-violet);
  position: relative;
  z-index: 2;
  height: calc(100% - 170px);

  @media ${QUERIES.tabletAndSmaller} {
    height: calc(100% - var(--mobile-bottom-card-spacing));
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: calc(100% - var(--mobile-bottom-card-spacing));
  }
`;

const Avatar = styled.img`
  display: block;
  width: 78px;
  border: 3px solid var(--color-white);
  border-radius: 80px;
  margin-bottom: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media ${QUERIES.tabletAndSmaller} {
    margin-bottom: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 64px;
  }
`;

const UserName = styled.h1`
  font-weight: ${WEIGHTS.normal};
  font-size: clamp(1.5rem, 8vw - 3rem, 2.5rem);
  line-height: 1.2;

  @media ${QUERIES.tabletOnly} {
    /* make this a fluid size */
    text-align: center;
    font-size: 3rem;
  }
`;

const SmallText = styled.span`
  display: block;
  font-size: 0.9375rem;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-blue-100);
  margin-bottom: 4px;
`;

const SelectorCard = styled(Card)`
  background-color: var(--color-blue-300);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: row;
    bottom: var(--mobile-bottom-card-spacing);
    justify-content: center;
    gap: 56px;
    align-items: flex-end;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 0;
    justify-content: space-around;
  }
`;

const SelectorItem = styled.button`
  display: block;
  background: none;
  outline: none;
  border: none;
  color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-blue-200)"};
  margin-top: 16px;
  font-size: 1.125rem;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-white);
  }
`;

export default UserCard;
