
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../../../utils/testUtils'
import { ListOfPhotoCards } from './index'

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
  return shallow(<ListOfPhotoCards {...setupProps} />)
}

test('Rendering without errors', () => {
  const wrapper = shallow(<ListOfPhotoCards />)
  const component = findByTestAttr(wrapper, 'photoCards')
  expect(component.length).toBe(1)
})
