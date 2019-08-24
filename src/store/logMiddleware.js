import axios from 'axios';
import { ON_SUBMIT_FORM } from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);
  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    
    case ON_SUBMIT_FORM:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('http://localhost:3000/api/mailer/', {
        formName: store.getState().formName,
        formDiscord: store.getState().formDiscord,
        formBattleTag: store.getState().formBattleTag,
        formAvailability: store.getState().formAvailability,
        formCharacter: store.getState().formCharacter,
        formXpWow: store.getState().formXpWow,
        formXpMmo: store.getState().formXpMmo,
        formWhy: store.getState().formWhy,
        formYou: store.getState().formYou,
      })
        .then((response) => {
          // console.log(response.data);
        })
        // en cas d'echec : catch
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
