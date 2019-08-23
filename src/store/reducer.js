import navItem from 'src/data'

const initialState = {

  nav: navItem,

  activeItem: 'home',

};

// == Types
const GET_NAV_BUTTON = 'GET_NAV_BUTTON'; 
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NAV_BUTTON:
      return {
        ...state,
        nav: [
          ...state.nav,
          action.name,
        ],
      };
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
      };
    default:
      return state;
  }
};

// == Action Creators
export const getNavButton = (name) => ({
  type: GET_NAV_BUTTON,
  name,
});

export const setActiveItem = (name) => ({
  type: SET_ACTIVE_ITEM,
  name,
});

// == Export
export default reducer;
