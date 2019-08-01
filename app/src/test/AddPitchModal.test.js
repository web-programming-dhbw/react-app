import React from 'react';
import ReactDOM from 'react-dom';
import AddPitchModal from '../main/components/AddPitchModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPitchModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});