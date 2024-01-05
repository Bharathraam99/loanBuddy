import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const userDetails = useSelector((state) => state.auth.currentUser)
  console.log(userDetails.userFirstName);
  return (
    <div>WELCOME DA DEI {userDetails.userFirstName}</div>
  )
}

export default HomePage