import React from 'react'
import "../sass/Boton.scss"

const Boton = ({icon , handleClick}) => {
  return (
    <div className='btn__box'>
      <button className='btn'
      onClick={handleClick}
      >{icon}
      </button>
      <div className='btn__sombra'></div>
    </div>
  )
}

export {Boton}