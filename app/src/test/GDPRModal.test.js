import React from 'react';
import ReactDOM from 'react-dom';
import GDPRModal from '../main/components/GDPRModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GDPRModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});