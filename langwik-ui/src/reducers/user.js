/* eslint-disable no-param-reassign */
import Types from '../actions/types';

const INITIAL_STATE = {
  token: null,
  info: null,
  recentSearch: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SAVE_USER_TOKEN:
      delete action.type;
      return {
        ...state,
        token: action.token,
        action,
      };

    case Types.SAVE_USER:
      delete action.type;
      return {
        ...state,
        info: action.user,
      };
    case Types.RECENT_SEARCH:
      delete action.type;
      return {
        ...state,
        recentSearch: action.recentSearch,
      };

    default:
      return state;
  }
};

export default user;
