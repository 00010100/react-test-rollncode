import React from 'react'
import {RouteComponentProps} from 'react-router-dom'

import {Layout, UserDetails} from 'src/components'
import {User} from 'src/models'

const MainPage = ({location: {state}}: RouteComponentProps<{}, {}, {user: User}>) => {
  return (
    <Layout>
      <UserDetails user={state.user} />
    </Layout>
  )
}

export default MainPage
