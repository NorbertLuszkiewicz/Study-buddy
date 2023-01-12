import React from 'react';
import { configure, render, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import AppProviders from 'providers/AppProviders';

configure({ adapter: new Adapter() });

const AllTheProviders = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (node, options) => render(node, { wrappingComponent: AllTheProviders, ...options });
const customMount = (node, options) => mount(node, { wrappingComponent: AllTheProviders, ...options });

export * from 'enzyme';

export { customRender as render, customMount as mount };
