import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from '../main/components/AppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});