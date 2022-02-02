
import React from 'react';
import { Dialog } from '../../atoms/Dialog';
import { Button } from '../../atoms/Button';
import { OPENSUCCESS } from '../../../store/actionTypes';
import { useStore } from '../../../store/StoreProvider';
import { StyledDialogContainer, StyledDialogTitle, StyledDialogContent } from './style';



export function SuccessInvite() {
  const [globalState, dispatch] = useStore();
  
  return (
    <div >
      <Dialog open={globalState?.successOpen} 
        toggleModal={() => dispatch({ type: OPENSUCCESS , payload: !globalState?.successOpen })}>
        <StyledDialogContainer>
          <StyledDialogTitle data-testid="success-title">All Done</StyledDialogTitle>
          <StyledDialogContent> we will send you an email when we Launch </StyledDialogContent>
          <Button 
            onClick={() => dispatch({ type: OPENSUCCESS , payload: !globalState?.successOpen })} 
            label="Ok">
          </Button>
        </StyledDialogContainer>
      </Dialog>
    </div>
  );
}
