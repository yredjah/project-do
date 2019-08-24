import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';
import './recruitement.scss';

const Recruitement = ({
  InputChange,
  formCharacter,
  formAvailability,
  onSubmitContact,
  formName,
  formDiscord,
  formBattleTag,
  formXpWow,
  formXpMmo,
  formWhy,
  formYou,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();

    onSubmitContact();
  };

  const changeHandler = (event) => {
    InputChange(event.target.name, event.target.value);
    // changeTextAreaValue(event.target.name, event.target.value);
  };

  return (
  <div id="recruitement">
    <h2 className="recruitement-title">Recruitement</h2>
    <Form onSubmit={submitHandler}>
      <Form.Group widths='equal'>
        <Form.Input
          onChange={changeHandler}
          value={formName}
          fluid
          id='form-subcomponent-shorthand-input-name'
          label='Name'
          name='formName'
          placeholder='Name'
        />
        <Form.Input
          onChange={changeHandler}
          value={formDiscord}
          fluid
          id='form-subcomponent-shorthand-input-discord'
          label='Discord'
          name='formDiscord'
          placeholder='Discord'
        />
        <Form.Input
          onChange={changeHandler}
          value={formBattleTag}
          fluid
          id='form-subcomponent-shorthand-input-battletag'
          label='Battletag'
          name='formBattleTag'
          placeholder='Battletag'
        />
      </Form.Group>
        <label className="form-title">Your character</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-character'
        placeholder='Your character' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formCharacter}
        name='formCharacter'
      />
      <label className="form-title">Your availability</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-availability'
        placeholder='Your availability' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formAvailability}
        name='formAvailability'
      />
       <label className="form-title">Your WoW experience</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-formXpWow'
        placeholder='Your WoW experience' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formXpWow}
        name='formXpWow'
      />
      <label className="form-title">Your MMO experience</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-formXpMmo'
        placeholder='Your MMO experience' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formXpMmo}
        name='formXpMmo'
      />
      <label className="form-title">Why Dwarven Overlords ?</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-formWhy'
        placeholder='Why Dwarven Overlords ?' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formWhy}
        name='formWhy'
      />
       <label className="form-title">Who are you IRL ?</label>
      <TextArea 
        className="contactForm" 
        id='form-subcomponent-shorthand-input-formYou'
        placeholder='Who are you IRL ?' 
        style={{ minHeight: 100 }} 
        onChange={changeHandler}
        value={formYou}
        name='formYou'
      />

      <Button type="submit">Submit</Button>
      </Form>
  </div>
);
  }

Recruitement.propTypes = {
  formName: PropTypes.string.isRequired,
  formDiscord: PropTypes.string.isRequired,
  formBattleTag: PropTypes.string.isRequired,
  formAvailability: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  formCharacter: PropTypes.string.isRequired,
  formXpWow: PropTypes.string.isRequired,
  formXpMmo: PropTypes.string.isRequired,
  formWhy: PropTypes.string.isRequired,
  formYou: PropTypes.string.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
};

export default Recruitement; 
