import React from 'react'

const CustomerServiceButtons = () => {
  return (
    <div className='flex justify-evenly p-2'>
        <button className="btn btn-outline btn-info">Call Agent</button>
        <button className="btn btn-outline btn-info text-red-300">Message Agent</button>
    </div>
  )
}

export default CustomerServiceButtons
