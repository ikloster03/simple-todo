import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Welcome to React', () => {
    const p = wrapper.find('h1.App-title')
    expect(p.text()).toBe('Welcome to React')
  });
})
