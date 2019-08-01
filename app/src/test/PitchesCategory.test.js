import React from 'react';
import ReactDOM from 'react-dom';
import PitchesCategory from '../main/components/PitchesCategory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PitchesCategory />, div);
  ReactDOM.unmountComponentAtNode(div);
});