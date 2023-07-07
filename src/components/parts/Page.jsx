import React from 'react'
import Nav from './Nav'

const Page = ({children}) => (
  <>
    <Nav/>
    <main>{children}</main>
  </>
)

export default Page;