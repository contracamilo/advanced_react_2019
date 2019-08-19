import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../utils/testUtils'

import { App } from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Rendering without errors', () => {
  const wrapper = shallow(<App />)
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
})
