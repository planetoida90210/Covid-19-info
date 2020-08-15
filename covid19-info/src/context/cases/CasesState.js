import React, {useReducer} from 'react';
import CasesContext from "./casesContext";
import CasesReducer from "./casesReducer";
import {GET_CASES} from '../types';

const CasesState = props => {
  const initialState = {
    casesData = [];
  }
  const [state,dispatch] = useReducer(CasesReducer, initialState);
  return(
    <CaseesContext.Provider>

    </CaseesContext.Provider>
  )
}

export default CasesState;