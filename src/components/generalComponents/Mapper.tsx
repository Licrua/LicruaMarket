'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Динамический импорт компонента карты
const DynamicMap = dynamic(() => import('./MapComponent'), { ssr: false })

const Mapper = () => {
  return (
    <div className='h-[200px] w-full mb-5'>
      <DynamicMap />
    </div>
  )
}

export default Mapper
