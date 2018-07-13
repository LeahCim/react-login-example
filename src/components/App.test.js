import React from 'react';
import ReactDOM from 'react-dom';
import "jest-localstorage-mock";
import { shallow } from 'enzyme';

import App from './App';
import LogoutLink from './LogoutLink';
import { CREDENTIALS } from './shared/constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Shallow renders App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('Passes empty credentials to LogoutLink if session not saved in localStorage', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(LogoutLink)).toHaveProp(CREDENTIALS, "");
});

it('Passes credentials from localStorage to LogoutLink', () => {
  const credentials = "blah";
  localStorage.setItem(CREDENTIALS, credentials);
  const wrapper = shallow(<App />);
  expect(wrapper.find(LogoutLink)).toHaveProp(CREDENTIALS, credentials);
});