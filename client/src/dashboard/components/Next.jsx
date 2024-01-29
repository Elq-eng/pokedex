/* eslint-disable react/prop-types */
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { page } from "../../store";
import { useEffect } from "react";




export const Next = ({pagina=1}) => {


  const { offset,data }  = useSelector( state => state.dash )
  const dispatch = useDispatch()


  const onNextPrevious = ( e) => {
    e.preventDefault()
    if ( e.target.name === 'next'){
      const payload = { 
        next:1,
        previous:0
      }
      dispatch( page(payload) )
      return;
    }
    else if ( e.target.name === 'previous') {
      const payload = { 
        next:0,
        previous:1
      }
      dispatch( page(payload) )
      return;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ offset ]);


  const shouldRenderNext = () => Object.entries(data).length > 1



  return (
    shouldRenderNext() && (
    <section className="container mb-4">
      <section style={{width:'100%'}} className="d-flex flex-row justify-content-between ">
        <button className="btn btn-outline-danger "  onClick={ onNextPrevious } name="previous" >Previous  <FontAwesomeIcon icon={ faArrowLeft } /> </button>
        <h3>{pagina}</h3>
        <button className="btn btn-outline-primary " onClick={ onNextPrevious } name="next">Next  <FontAwesomeIcon icon={ faArrowRight } /> </button>
      </section>
    </section>
    )
    
  )
}
