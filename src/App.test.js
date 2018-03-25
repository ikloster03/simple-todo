import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });


describe('renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Welcome to React', () => {
    const wrapper = enzyme.mount(<App />);
    const p = wrapper.find('h1.App-title')
    expect(p.text()).toBe('Welcome to React')
  });
})
