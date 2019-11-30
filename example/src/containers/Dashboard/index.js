import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Mock from 'mockjs';
// import { Link } from 'react-router-dom';
import BulletScreen, { StyledBullet } from 'rc-bullets';
import { Popper } from '@material-ui/core';

import BulletsScreen from '../Screen';
import { themes, getRandomTheme, getRandomHead, getRandomAniFun } from '../../helper';
import GithubLink from '../../components/GithubLink';
import ParamsPanel from './ParamsPanel';
import useParams from './useParams';
import OptsArea from './OptsArea';

const StyledWrapper = styled.section`
  .opts {
    z-index: 998;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(2, 2, 2, 0.2);
    padding: 1rem 0;
  }
`;
let mockingInter = 0;
let currScreen = null;
export default function Dashboard() {
  const [bullet, setBullet] = useState('');

  const popperAnchorEl = useRef(null);
  const { params, states, toggleStates, handleChange } = useParams();
  const { mocking, isInfinite, open } = states;
  const { theme, loopCount, head, duration, animateFun } = params;
  useEffect(() => {
    currScreen = new BulletScreen('.screen');
  }, []);
  const handleInput = ({ target: { value } }) => {
    console.log(value);

    setBullet(value);
  };
  const toggleSendMocking = () => {
    console.log('handle mocking start', mocking);

    if (!mocking) {
      mockingInter = setInterval(() => {
        handleSend(Mock.Random.csentence(3, 28), Math.random() * 50);
      }, 500);
    } else {
      clearInterval(mockingInter);
    }
    toggleStates('mocking')();
  };
  const handleSend = (msg = '', dur = null) => {
    console.log('current bullet', bullet);

    if (bullet || msg) {
      console.log('start send');
      let currHead = head === 'random' ? getRandomHead() : head;
      let currAnimteFun = animateFun === 'random' ? getRandomAniFun() : animateFun;
      let bgColor = theme === 'random' ? getRandomTheme() : theme;

      currScreen.push(<StyledBullet msg={bullet || msg} head={currHead} bgColor={bgColor} />, {
        loopCount: isInfinite ? 'infinite' : loopCount,
        animateTimeFun: currAnimteFun,
        duration: dur ? dur : duration
      });
      if (bullet) {
        setBullet('');
      }
    }
  };

  return (
    <StyledWrapper>
      <GithubLink />
      <BulletsScreen screen={currScreen} />
      {/* <Link className="demo" target="_blank" to="/preview">
        preview
      </Link> */}
      <div className="opts">
        <Popper anchorEl={popperAnchorEl.current} open={open} placement="top-start">
          <ParamsPanel
            {...params}
            isInfinite={isInfinite}
            handleChange={handleChange}
            toggleStates={toggleStates}
          />
        </Popper>
        <OptsArea
          bullet={bullet}
          mocking={mocking}
          open={open}
          toggleStates={toggleStates}
          popperAnchorEl={popperAnchorEl}
          handleMocking={toggleSendMocking}
          handleInput={handleInput}
          handleSend={handleSend}
        />
      </div>
    </StyledWrapper>
  );
}