import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 20px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 15px 7px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 15px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
  text-align:center;
  margin: 0 auto;
  padding: 0px 15px;
`
