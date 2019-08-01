import React from 'react';
import ReactDOM from 'react-dom';
import MyPitches from '../main/pages/MyPitches';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyPitches />, div);
  ReactDOM.unmountComponentAtNode(div);
});