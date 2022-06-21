import React, { useState } from "react";
import styled from "styled-components";

import StatCard from "./StatCard";
import UserCard from "./UserCard";
import { QUERIES } from "../constants";
import { dashboardData } from "../data";

function StatCardGrid() {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <Wrapper>
      <UserCardWrapper>
        <UserCard
          changeTimeframe={(timeframe) => setTimeframe(timeframe)}
          timeframe={timeframe}
        />
      </UserCardWrapper>
      {dashboardData.map((data) => {
        return <StatCard key={data.title} timeframe={timeframe} {...data} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const UserCardWrapper = styled.div`
  grid-row: 1/3;

  @media ${QUERIES.tabletAndSmaller} {
    grid-column: 1/-1;
  }
`;

export default StatCardGrid;
