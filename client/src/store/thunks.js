import { useSelector } from "react-redux"
import pokedexApi from "../api/pokedexApi"
import { getDataPokemon, getDataPokemo } from "../helpers"
import { isDataLoading, onChecking, onLogin,isWaitingData, isSavingPokemon, onLoginUserFailure, onResetMsg } from "./"


export const startLogin = ( formState ) => {
  return async(dispatch)=>{

    const { formName, formEmail, formPassword, formPassword2} = formState
    try {
      if(formName !== '' && formPassword2 !== ''){
        
        const { data} = await pokedexApi.post('/api/user/register', {
          "name": `${formName}`,
          "email":`${formEmail}`,
          "password": `${formPassword}`
        })
        dispatch( onLogin({user:{ email: formEmail, name: data.name, uid: data.uid, token: data.token  }}) )
       }
    
      const { data } = await pokedexApi.post('/api/user/login', { email:formEmail, password:formPassword })
      if ( data.ok ){
        dispatch(onChecking())  
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch( onLogin({user:{ email: formEmail, name: data.name, uid: data.uid, token: data.token  }}) )
      }  
      
    } catch (error) {
      
      if (error.response.status === 400 ) {
        dispatch( onLoginUserFailure({msg:error.response.data.msg}) )
      }
    }
    
  }
}

export const dataLoading = ( limit, offset ) => {
  return async( dispatch ) =>{
    
    dispatch( isWaitingData(true) )

    const { data } = await getDataPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

    dispatch( isDataLoading(data))
      
  }
}

export const filterPokemon = ( pokemon ) => {
  return async( dispatch ) => {
    dispatch( isWaitingData(true) )

    if (pokemon === '' ){
      const { data } = await getDataPokemon(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
      dispatch( isDataLoading( data ))

    }else{
      const { data }=  await getDataPokemo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      dispatch( isDataLoading( data ))

    }

  }
}

export const capturePokemon = ( pokemonNew ) => {
  
  return async( dispatch ) => {

    const { id, name, height, types,sprites }  = pokemonNew[1]
    const imagePokemon = sprites.other.dream_world.front_default
    let pokemonDest = [ pokemonNew[0], { id, name, height, imagePokemon ,types } ]
      
    const userID = JSON.parse(localStorage.getItem('userID'))

    const { uid , pokemons, token} = userID
  
    //TODO: revisar que el pokemon no este en LA BBDD
    const result = false
    //TODO: SI ESTA DEBE DEVOLVER EL USUARIO QUE YA LO TIENE Y SI DESEA PEDIR CHATEAR CON EL 
    if( result ) {
      dispatch( isSavingPokemon({ uid , pokemons, alertMsg: 'error' }) )
    }
    // TODO: SI NO, CAPTURARLO Y GUARDARLO EN LA BBDD
    else{
      const userID = JSON.parse(localStorage.getItem('userID'))
      const { uid , pokemons, token} = userID
      pokemons.push(pokemonDest)
      dispatch( isSavingPokemon({ uid , pokemons, alertMsg: 'success' }) )
      
      localStorage.setItem('userID', JSON.stringify({ uid, token, pokemons}) )
     

      // TODO: se debe actualizar la base de datos con los nuevos pokemons
    }
  }
}