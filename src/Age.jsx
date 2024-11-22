import React from 'react'

const Age = ({age}) => {
  console.log("Age : " + age);
  return (
    <div>{age}</div>
  )
}

export default React.memo(Age)