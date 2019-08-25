import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../../utils/testUtils'

import { FavButton } from './index'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Rendering without errors', () => {
  const wrapper = shallow(<FavButton />)
  const component = findByTestAttr(wrapper, 'component-button')
  expect(component.length).toBe(0)
})
