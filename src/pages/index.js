import React from 'react';
import { HomeLayout } from '../components/templates/HomeLayout';
import {StyledGlobalBody} from '../style';
import { StyledContainer } from './style.js';

function Home() {

  return (
    <StyledContainer>
      <StyledGlobalBody />
      <HomeLayout/>
    </StyledContainer>
  );
}

export default Home;
