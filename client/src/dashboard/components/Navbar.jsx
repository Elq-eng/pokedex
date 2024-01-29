import { Link } from "react-router-dom"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { filterPokemon, isResetData, isResetDataPoke, onResetMsg } from '../../store'




const searchPokemon = {
  pokemon:''
}

export const Navbar = () => {

  const { user } = useSelector( state => state.auth )

  const { pokemon, onInputChange: onPokemon } = useForm( searchPokemon )
  const dispatch = useDispatch()
  

  const onSubmit  = ( e ) =>{
    e.preventDefault()
    dispatch( filterPokemon( pokemon ) )
  }

  const handleSignUp = () =>{
    localStorage.clear()
    dispatch( onResetMsg() )
    dispatch( isResetData() )
    dispatch( isResetDataPoke() )
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/home/"> { user.user.name } </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/home/mypokemons/${true}`}>My Pokemons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/chat">Changes</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={ onSubmit }>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="pokemon" value={pokemon} onChange={onPokemon}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-danger m-2"  onClick={ handleSignUp }> Sign up <FontAwesomeIcon icon={faRightFromBracket}/> </button>
          </div>
        </div>
      </nav>
    </>
  )
}
