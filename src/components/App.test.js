import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AppContainer from './AppContainer';
import LogoutLink from './LogoutLink';
import { CREDENTIALS } from './shared/constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Shallow renders App', () => {
  const wrapper = shallow(<AppContainer />);
  expect(wrapper).toMatchSnapshot();
});

xit('Passes empty credentials to LogoutLink if session not saved in localStorage', () => {
  const wrapper = shallow(<AppContainer />);
  expect(wrapper.find(LogoutLink)).toHaveProp(CREDENTIALS, "");
});

xit('Passes credentials from localStorage to LogoutLink', () => {
  const credentials = "blah";
  localStorage.setItem(CREDENTIALS, credentials);
  const wrapper = shallow(<AppContainer />);
  expect(wrapper.find(LogoutLink)).toHaveProp(CREDENTIALS, credentials);
});