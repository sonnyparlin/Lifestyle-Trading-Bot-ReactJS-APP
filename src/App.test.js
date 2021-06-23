import React from 'react';
import App from './App';
import Form from './Form'
import { shallow, mount } from "enzyme";
   
describe('Basic functionality', () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders header", () => {
    const wrapper = mount(<App />);
    const welcome = <h1>Lifestyle Trading Bot Strategy</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders child component Form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
  });

  it('should fail if no investment is provided', () => {
      const jsdomAlert = window.alert;  // remember the jsdom alert
      window.alert = () => {};  // provide an empty implementation for window.alert
      const wrapper = mount(<App />);
      const logSpy = jest.spyOn(window, 'alert');
      const button = wrapper.find('button');
      button.simulate('click');
      expect(logSpy).toBeCalledWith("Please enter a valid investment amount and the number of years you want to invest");
      window.alert = jsdomAlert;
  });

  it('should fail if no years are provided', () => {
    const jsdomAlert = window.alert;  // remember the jsdom alert
    window.alert = () => {};  // provide an empty implementation for window.alert
    const wrapper = mount(<App />);
    wrapper.setProps({investment: 100})
    const logSpy = jest.spyOn(window, 'alert');
    const button = wrapper.find('button');
    button.simulate('click');
    expect(logSpy).toBeCalledWith("Please enter a valid investment amount and the number of years you want to invest");
    window.alert = jsdomAlert;
  });

  it('calls handleClick on sucessful submit', () => {
      const handleClick = jest.fn();
      const wrapper = mount(
        <Form handleClick={handleClick} />
      );
      const submitBtn = wrapper.find('button')
      submitBtn.simulate('click')
      expect(handleClick).toHaveBeenCalled();
  });
  
});