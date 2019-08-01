import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from '../main/components/Notifications';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notifications />, div);
  ReactDOM.unmountComponentAtNode(div);
});