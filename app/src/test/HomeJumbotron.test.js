import React from 'react';
import ReactDOM from 'react-dom';
import HomeJumbotron from '../main/components/HomeJumbotron';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeJumbotron />, div);
  ReactDOM.unmountComponentAtNode(div);
});