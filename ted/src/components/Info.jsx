import React from 'react'
import { motion } from 'framer-motion' 

const Info = ({subtitle, title, normal}) => {
  return (
    <motion.div
    
     initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    
    className='text-center mt-8 font-[poppins]'>
   <h4 className='text-red-600 uppercase font-semibold'>{subtitle}
</h4>
<h1 className='text-3xl md:text-4xl  font-bold'>{title}
</h1>
<h6 className='text-gray-600 mt-2 '> {normal}
</h6>
    </motion.div>
  )
}

export default Info
