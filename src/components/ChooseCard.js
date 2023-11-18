import React from 'react'
import '../styles/card.css';

function ChooseCard(props) {
    const {headding,image,para}=props.values
  return (
    <div className='choose-card'>
      <div className='image-wrapper'>
        <img src={`images/choose/${image}.svg`}></img>
      </div>
      <div className='content'>
        <h3>{headding}</h3>
        <p className='pfs-2'>{para}</p>
      </div>
    </div>
  )
}

export default ChooseCard
