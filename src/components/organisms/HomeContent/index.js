import React from 'react';
import { Button } from '../../atoms/Button';
import { useStore } from '../../../store/StoreProvider';
import { OPENREQUEST } from '../../../store/actionTypes';
import { StyledHomeContent, StyledContentTitle, StyledContentSubTitle } from './style';


export function HomeContent() {

  const [globalState, dispatch]  = useStore();
  
  return (
    <StyledHomeContent >
      <StyledContentTitle>A better way to enjoy every day</StyledContentTitle>
      <StyledContentSubTitle>Be the first to know when we launch</StyledContentSubTitle>
      <Button onClick={() => dispatch({ type: OPENREQUEST , payload: !globalState?.requestOpen })} 
        label="Request an Invite" className="primary">
      </Button>
    </StyledHomeContent>
  );
}