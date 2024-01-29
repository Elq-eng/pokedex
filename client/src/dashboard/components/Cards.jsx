/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux"
import { isMenuZero } from "../../store"

export const Cards = ( { title='', img ='', value='', buttonName = 'See more!' }) => {
  
  const dispatch = useDispatch()
  const { userID } = useSelector( state => state.pokeCapture)
 
  
  const onMenuLateral = (e) => {
    e.preventDefault()
    const currentPosition =  document.documentElement.scrollTop;
    dispatch( isMenuZero( {currentPosition, value} ))
  }
  
  return (

    <section className="col-4 mb-4">
      <div className="card" style={{width:'100%'}}>
        <img src={img} className="card-img-top" alt={title} style={{width:'100%', height:'180px'}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>          
        </div>
        {
          buttonName === 'Change' &&
          <div className="card-body">
            <p className="card-text">Tipo: {userID.pokemons[0][0][1]?.types.map( (type, index) => (
              <span key={index} className="m-2 border border-primary p-1 rounded ">{ type }</span>
            ))}</p>
            <p className="card-text">Altura: {userID.pokemons[0][0][1]?.height} m</p>
            <p className="card-text">Peso: {userID.pokemons[0][0][1]?.weight} kg</p> 
          </div>
        }
        <div className="card-body">
          <button className="btn btn-primary" onClick={onMenuLateral}>{ buttonName }</button>
        </div>
      </div>
    </section>
  )
}
