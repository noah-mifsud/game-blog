//Loader component, resuable loading screen for user feedback

//React (Hooks) imports
import React from 'react'

function Loader() {
  return (
    <div className='spinner-container'>
        <div className='spinner'>
            <div className='bg'></div>
            <div className='bar'></div>
        </div>
    </div>
  )
}

export default Loader
