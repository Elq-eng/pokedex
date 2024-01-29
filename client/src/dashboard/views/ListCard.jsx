/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { Cards } from ".."
import { dataLoading } from "../../store/thunks"
import { CheckingAuth } from "../../ui"
import { useEffect, useMemo } from "react"




export const ListCard = ({limit='21', offset = '0'}) => {
  
  let { data,isLoading} = useSelector( state => state.dash )
 
  const dispatch = useDispatch()

  
   
  useEffect(() => {
    dispatch(dataLoading(limit, offset));
  }, [dataLoading,limit, offset]);
  



  return (
    <>  
    {isLoading && (<CheckingAuth bgColor='#fff' text="#000"/>)}
    {!isLoading && (
      
      <section className="container">
        <h3 className="text-center m-4">Choose your Pokemons</h3>

        <section className="row d-flex flex-row p-4">
          {
            Object.entries(data).map( (value,key) => (
                <Cards title={value[1]?.forms[0].name} img={value[1]?.sprites.other.dream_world.front_default} key={key} value={value}/>
                ))
          }
        </section>
      </section> )
    }
    </>
  )
}
