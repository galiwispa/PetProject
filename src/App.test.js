import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

it('renders without crashing', () => {
  const root = document.createElement('root');
  ReactDOM.render(<SamuraiJSApp />, root);
  ReactDOM.unmountComponentAtNode(root);
});
