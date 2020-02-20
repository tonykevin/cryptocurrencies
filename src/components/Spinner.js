import React from 'react'
import '../styles/spinner.css'

const Spinner = () => {
  /* eslint-disable react/self-closing-comp */
  return (
    <div className='sk-chase'>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
    </div>
  )
}

export default Spinner
