import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../components/Container/RegisterMutation'
import { LoginMutation } from '../components/Container/LoginMutations'

/**
 * Page component of the app.
 * @function UnregistedUser
 * @returns {Jsx.Element} Form component to log the user
 */

/**
 * Mutation, component that returns a function  to execute tthe mutation
 * @function RegisterMutation
 * @returns {function} that recieve thew mutation by parameter and track the data and the load and error state.
 */

/**
 * Mutation, component that returns a function  to execute tthe mutation
 * @function LoginMutation
 * @returns {function} that recieve thew mutation by parameter and track the data and the load and error state.
 */

export const UnregistedUser = () => {
  return (
    <Context.Consumer>
      {

        ({ activateAuth }) => {
          return (
            <Fragment>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'This email is registered now'

                    return <UserForm
                      disabled={loading}
                      error={errorMsg}
                      title='Sing Up'
                      onSubmit={onSubmit}
                    />
                  }
                }
              </RegisterMutation>

              <LoginMutation>
                {

                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'An arror ocurred please verify you information!'

                    return <UserForm
                      disabled={loading}
                      error={errorMsg}
                      title='Sing In'
                      onSubmit={onSubmit}
                    />
                  }
                }
              </LoginMutation>

            </Fragment>

          )
        }

      }
    </Context.Consumer>
  )
}
