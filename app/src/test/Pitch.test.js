import React from 'react';
import ReactDOM from 'react-dom';
import Pitch from '../main/components/Pitch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pitch />, div);
  ReactDOM.unmountComponentAtNode(div);
});