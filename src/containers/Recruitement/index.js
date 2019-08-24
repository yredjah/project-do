// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Recruitement from 'src/components/Recruitement';
// import { onInputChange } from '../../../store/reducer';
import { onInputChange, onSubmitForm } from 'src/store/reducer';

const mapStateToProps = state => ({
  formName: state.formName,
  formDiscord: state.formDiscord,
  formBattleTag: state.formBattleTag,
  formAvailability: state.formAvailability,
  formCharacter: state.formCharacter,
  formXpWow: state.formXpWow,
  formXpMmo: state.formXpMmo,
  formWhy: state.formWhy,
  formYou: state.formYou,
});

const mapDispatchToProps = dispatch => ({

  InputChange: (name, value) => {
    // console.log('dispatch');
    dispatch(onInputChange(name, value));
  },
  onSubmitContact: () => {
    dispatch(onSubmitForm());
  },
});

const RecruitementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recruitement);

// export
export default RecruitementContainer;
