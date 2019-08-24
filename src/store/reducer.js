import navItem from 'src/data'

const initialState = {

  nav: navItem,

  activeItem: 'home',

  formName: '',
  formDiscord: '',
  formBattleTag: '',
  formAvailability: '',
  formCharacter: '',
  formXpWow: '',
  formXpMmo: '',
  formWhy: '',
  formYou: '',
};

// == Types
export const ON_SUBMIT_FORM = 'ON_SUBMIT_CONTACT';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const GET_NAV_BUTTON = 'GET_NAV_BUTTON'; 
const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
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
export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});

export const getNavButton = (name) => ({
  type: GET_NAV_BUTTON,
  name,
});

export const setActiveItem = (name) => ({
  type: SET_ACTIVE_ITEM,
  name,
});

export const onSubmitForm = () => ({
  type: ON_SUBMIT_FORM,
});

// == Export
export default reducer;
