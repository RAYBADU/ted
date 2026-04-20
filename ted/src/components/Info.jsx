import React from 'react'

const Info = ({subtitle, title, normal}) => {
  return (
    <div className='text-center mt-8 font-[poppins]'>
   <h4 className='text-red-600 uppercase font-semibold'>{subtitle}
</h4>
<h1 className='text-3xl md:text-4xl  font-bold'>{title}
</h1>
<h6 className='text-gray-600 mt-2 '> {normal}
</h6>
    </div>
  )
}

export default Info
