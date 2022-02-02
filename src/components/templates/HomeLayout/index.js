import React from 'react';
import { HomeContent } from '../../organisms/HomeContent';
import {RequestInvite} from '../../organisms/RequestInvite';
import {SuccessInvite} from '../../organisms/SuccessInvite';
import {Footer} from '../../molecules/Footer';
import {Header} from '../../molecules/Header';
import { useStore } from '../../../store/StoreProvider';
import {StyledHome, StyledMain} from './style';

export function HomeLayout() {

  const [globalState] = useStore();

  return (
    <StyledHome>
      <Header></Header>
      <StyledMain>
        <HomeContent/>
        { globalState?.requestOpen && <RequestInvite /> }
        {  globalState?.successOpen && <SuccessInvite /> }
      </StyledMain>
      <Footer></Footer>
    </StyledHome>
  );
}