import StatCardGrid from "./components/CardGrid";
import styled from "styled-components";

import { QUERIES } from "./constants";

function App() {
  return (
    <Wrapper>
      <Spacer />
      <Dasboard>
        <StatCardGrid />
      </Dasboard>
      <Footer>
        <div>
          Challenge by{" "}
          <FooterLink
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </FooterLink>
          . Coded by{" "}
          <FooterLink
            href="https://github.com/rraschbaum/time-tracking-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Ryan Raschbaum
          </FooterLink>
          .
        </div>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --horizontal-padding: 24px;
  display: grid;
  place-items: center center;
  min-height: 100%;
  grid-template-rows: 1fr auto 1fr;
  gap: 32px;
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
  /* max-width: 1100px; */
  width: clamp(500px, 90%, calc(1100px + var(--horizontal-padding) * 2));
  margin: 0 auto;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    grid-template-rows: 64px auto 1fr;
  }
`;

const Spacer = styled.div``;

const Dasboard = styled.main`
  width: 100%;
`;

const Footer = styled.footer`
  align-self: end;
  padding-bottom: 40px;
  font-size: 0.875rem;
  text-align: center;
`;

const FooterLink = styled.a`
  color: var(--color-white);

  &:hover {
    color: var(--color-blue-100);
  }
`;

export default App;
