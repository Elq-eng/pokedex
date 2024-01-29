import { ListCard } from "../views/ListCard"
import { Menu } from "../layouts/Menu"
import { Next } from "../components/Next"
import { useSelector } from "react-redux"
import { InfoPokemon } from "../components/InfoPokemon"
import '../../assets/css/Dashboard.css'
import { useEffect } from "react"






export const DashboardPage = () => {

  const { user } = useSelector( state => state.auth )
  
  const { offset, ml, isScrollLocked }  = useSelector( state => state.dash )


  if (isScrollLocked) {
    document.body.classList.add('scroll-locked');
  } else {
    document.body.classList.remove('scroll-locked');
  }


  const initVariable = ({user}) => {
    
    localStorage.setItem('userID',JSON.stringify({
      uid: user.uid,
      token: user.token,
      pokemons: []
    }))
  }


  useEffect(() => {
    const hasInitialized = localStorage.getItem('hasInitialized');
    if (hasInitialized === 'false') {
      initVariable(user);
      localStorage.setItem('hasInitialized', 'true');
    }
  }, []);

  return (
    <>
        <section className="list-card">
          <Menu/>
          <ListCard limit='20' offset={offset}/>
          <Next pagina={Number(offset)/20 == 0 ? 1 : Number(offset)/20 + 1  }/>
        </section>

      <section className={`lateral-menu`} style={ ml } >
        <InfoPokemon />
      </section>
    </>
  )
}
