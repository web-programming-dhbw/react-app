import React from 'react';
import ReactDOM from 'react-dom';
import IdeaSponsorsModal from '../main/components/IdeaSponsorsModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeaSponsorsModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});