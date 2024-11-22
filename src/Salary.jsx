import React from 'react'

function Salary({salary}) {
  console.log("Salary : " + salary);
  return (
    <div>{salary}</div>
  )
}

export default React.memo(Salary)