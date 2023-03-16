/* eslint-disable prettier/prettier */
import * as themeActionTypes from './themeAction';

import {selectedTheme} from '../src/constants';

const initialState = {
  appTheme: selectedTheme,
  error: null,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionTypes.TOGGLE_THEME_BEGIN:
      return {
        ...state,
        error: null,
      };
    case themeActionTypes.TOGGLE_THEME_SUCCESS:
      return {
        ...state,
        appTheme: action.payload.selectedTheme,
      };
    case themeActionTypes.TOGGLE_THEME_FAILURE:
      return {
        ...state,
        error: action.payload.error,git remote add origin https://github.com/novic-djef/E-learning-app.git
      };
    default:
      return state;
  }
};


export default themeReducer;