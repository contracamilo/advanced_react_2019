import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../../../utils/testUtils'
import { PhotoCard } from './index'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = { success: false }

/**
 * Factory Function to create a ShallowWrapper for the Ccongrats component
 * @function Setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<PhotoCard {...setupProps} />)
}

test('Rendering without errors', () => {
  const wrapper = shallow(<PhotoCard />)
  const component = findByTestAttr(wrapper, 'photoCard')
  expect(component.length).toBe(1)
})
