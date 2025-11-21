import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className=' items-center h-[90vh] py-9 px-12 flex gap-15'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content