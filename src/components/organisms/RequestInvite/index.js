
import React from 'react';
import { Dialog } from '../../atoms/Dialog';
import { UserForm } from '../../molecules/UserForm';
import { OPENREQUEST } from '../../../store/actionTypes';
import { useStore } from '../../../store/StoreProvider';
import { StyledDialogTitle, StyledDialogContainer } from './style';


export function RequestInvite() {

  const [globalState, dispatch] = useStore();

  return (
    <div >
      <Dialog open={globalState?.requestOpen} 
        toggleModal={() => dispatch({ type: OPENREQUEST , payload: !globalState?.requestOpen })} >
        <StyledDialogContainer>
          <StyledDialogTitle data-testid="form-title" >An invite form</StyledDialogTitle>
          <UserForm></UserForm>
        </StyledDialogContainer>
      </Dialog>
    </div>
  );
}