import React, { useRef } from "react";
import styled from "styled-components";
import { compose, path } from "ramda";
import { observer } from "mobx-react-lite";
import { withPaths } from "../utils/store";
import { media } from "../utils/media";
import SplashCounter from "./SplashCounter";
import ScrollDownIcon from "./ScrollDownIcon";

const Wrapper = styled("header")`
  height: 100vh;
  width: 100%;
  display: grid;
  grid: 1fr/ 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid var(--color-faint);
  > div {
    width: 95%;
    height: 100vh;
    display: grid;
    grid: 1fr 200px / 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const Titles = styled("div")`
  width: 85%;
  h1 {
    font-size: 60px;
    display: grid;
    ${media.phablet`font-size: 40px;`}
    ${media.phone`font-size: 40px;`}
  }
  p {
    width: 85%;
    font-size: 30px;
    ${media.phablet`font-size: 20px;`}
    ${media.phone`font-size: 20px;`}
  }
`;

const Intro = styled("div")`
  display: grid;
  grid: 1fr / 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid var(--color-faint);
  background: hsl(209, 61%, 16%);
  position: relative;
  z-index: 1000000000000;
  div {
    width: 70%;
    ${media.phablet`width: 80%;`}
    ${media.phone`width: 80%;`}
    padding: 30px 0;
  }
  p {
    font-size: 18px;
    margin: 20px 0;
    color: white;
    ${media.phablet`font-size: 20px;`}
    ${media.phone`font-size: 20px;`}
  }
`;

const Breakdown = ({
  countdownModel: { daysToHerd, sevenDayAverage, herdDate },
  countdownModel
}) => {
  console.log({ daysToHerd });
  return (
    <>
      <Wrapper className="wrapper">
        <div>
          <SplashCounter
            daysToHerd={daysToHerd}
            sevenDayAverage={sevenDayAverage}
            herdDate={herdDate}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default compose(withPaths(["countdownModel"]), observer)(Breakdown);