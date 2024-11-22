import React from 'react'

const RButton = ({txt , action}) => {
  console.log("Button : " + txt);
  return (
    <>
        <button onClick={action}>{txt}</button>
    </>
  )
}

export default React.memo(RButton)