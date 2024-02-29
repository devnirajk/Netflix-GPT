import React from 'react'
import MainVideoContainer from './MainVideoContainer'
import MainVideoContent from './MainVideoContent'

const MainContainer = ({movieDetail}) => {
  return (
    <div className='relative'>
        <MainVideoContainer />
        <MainVideoContent/>
    </div>
  )
}

export default MainContainer