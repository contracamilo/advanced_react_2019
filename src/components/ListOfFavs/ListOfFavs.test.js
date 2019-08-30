
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../../../utils/testUtils'
import { ListOfFavs } from './index'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Rendering without errors', () => {
  const wrapper = shallow(<ListOfFavs />)
  const component = findByTestAttr(wrapper, 'fav-list')
  expect(component.length).toBe(1)
})
