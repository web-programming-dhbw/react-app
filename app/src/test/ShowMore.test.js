import React from 'react';
import ReactDOM from 'react-dom';
import ShowMore from '../main/components/ShowMore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowMore />, div);
  ReactDOM.unmountComponentAtNode(div);
});