/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { capturePokemon, isChangeAlert, isMenuTransitions } from "../../store"
import { useEffect, useState } from "react"
import { Notification } from "../../helpers"
import { ToastContainer } from "react-toastify"

export const CardsInfo = ( ) => {


  

  const { pokemonCard, enableChat } = useSelector( state => state.dash )
  
  const { alert } = useSelector( state => state.pokeCapture )
  const [chatEnable, setChatEnable] = useState(false);

  const dispatch = useDispatch()

  const { showNotification } = Notification()


  const onSubmit = () =>{
    dispatch( capturePokemon(pokemonCard) )
  }

  

  
  useEffect(() => {
    
    if( alert === 'success' ) {
      showNotification({type:`${alert}`,message:'Pokemon capture successfully'})
      const currentPosition =  document.documentElement.scrollTop;
      dispatch(isMenuTransitions({ currentPosition }))
    }
    else if( alert === 'error' ){ showNotification({type:`${alert}`,message:'The pokemon was not captured, because already in other pokedex'}); setChatEnable(true) }    
    dispatch( isChangeAlert() )
    if(enableChat) setChatEnable(false)
    
  }, [alert, enableChat]);




  return (
    <>
    <section className="card mt-2 " style={{ width:'100%', height:'95%', display:'flex', justifyContent:'center'}}>
        <div style={{ width:'100%', height:'50%',  display:'flex', justifyContent:'center'}}>
          <img src={pokemonCard[1]?.sprites.other.dream_world.front_default} className="card-img-top" alt={pokemonCard[1]?.species.name}  style={{ width:'60%'}}/>
        </div>
        <div className="card-body">
          <h1 className="card-title">{pokemonCard[1]?.species.name}</h1>
          <p className="card-text">Tipo: {pokemonCard[1]?.types.map( (type, index) => (
            <span key={index} className="m-2 border border-primary p-1 rounded ">{ type }</span>
          ))}</p>
          <p className="card-text">Altura: {pokemonCard[1]?.height} m</p>
          <p className="card-text">Peso: {pokemonCard[1]?.weight} kg</p>
        </div>
        <button className="btn btn-outline-dark" onClick={ onSubmit }> Capture </button>
        {
          chatEnable && 
          (
            <section className="w-100 ">
              <h4 className="p-3 text-center"> Do you want discuss with the trainner? </h4>
              <button className="btn btn-outline-success  w-100 "> chat </button>

            </section>
          )
        }
        <ToastContainer/>
    </section>
    </>
  )
}
