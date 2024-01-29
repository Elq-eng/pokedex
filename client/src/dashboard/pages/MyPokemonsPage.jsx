import { Menu } from "../layouts/Menu"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Cards } from '../'
import { useEffect, useState } from "react"
import { InfoPokemon } from "../components/InfoPokemon"


export const MyPokemonsPage = () => {

  const { userID } = useSelector( state => state.pokeCapture)
  const { ml, isScrollLocked }  = useSelector( state => state.dash )

  const { captured } = useParams()
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (userID.pokemons.length > 0) setPokemons([...userID.pokemons[0]]) 
  }, []);
  


  if (isScrollLocked) {
    document.body.classList.add('scroll-locked');
  } else {
    document.body.classList.remove('scroll-locked');
  }

  return (
    <>
    {
      captured && (
        <>
        <section className="list-card">
          <Menu/>
            <section className="container">
              <h3 className="text-center m-4">My Pokemons</h3>

              <section className="row d-flex flex-row p-4">
                {
                  pokemons.map( ( value, key) => (
                    // console.log(value[1])
                  <Cards title={value[1]?.name} img={value[1]?.imagePokemon} key={key} value={value} buttonName="Change"/>
                  ))
                }
              </section>
            </section>          
        </section>
        </>
          )
        }
    </>
    
  )
}
