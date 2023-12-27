import React from 'react'
import loading from './loading.gif.gif'



const Spinner = () => {
  return (
    <>
    <div className='flex justify-center py-10'>
    <img src={loading} alt="loading.gif" width={100} />
    </div>
    </>
  )
}

export default Spinner