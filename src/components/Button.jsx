import React from 'react'

const Button = ({ title }) => {
  return (
    <div>
        <button className='w-[170px] 
        h-[64px] bg-blue-gradient py-4 px-6
        rounded-[10px] font-poppins font-medium text-primary outline-none'
        >{title}</button>
    </div>
  )
}

export default Button