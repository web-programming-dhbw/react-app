import React from 'react';
import ReactDOM from 'react-dom';
import IdeaOwnersModal from '../main/components/IdeaOwnersModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeaOwnersModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});