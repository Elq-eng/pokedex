/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { isMenuTransitions } from "../../store" 
import { CardsInfo } from "./CardsInfo";

export const InfoPokemon = ( ) => {

  const dispatch = useDispatch();
  // const {  ml }  = useSelector( state => state.dash )
  

  const onClose = () =>{
    const currentPosition =  document.documentElement.scrollTop;
    dispatch(isMenuTransitions({ currentPosition }))
  }

  return (
    <>
      <section className="p-4" style={{ background:'#fff', width:'50%', height:'100vh', borderRadius:'2% 0% 0% 2%' ,  marginLeft: 'auto'}}>
        <button type="button" className="btn-close" aria-label="Close" onClick={ onClose }></button>
        <CardsInfo />
      </section>
    </>
  )
}