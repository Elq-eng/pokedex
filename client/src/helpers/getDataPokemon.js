
export const getDataPokemon = async(url) => {
  
  const res = await fetch(url);
  const { results } = await res.json()
  
  const dataPromises = results.map( async( infoPokemon ) => {
    const res = await fetch( infoPokemon.url )
    return res.json()
  })

  const dataArray = await Promise.all(dataPromises)

  let typesArray = dataArray.map( pokemon =>  pokemon.types.map( type =>  type.type.name ))
  

  const updatedDataArray = dataArray.map((pokemon, index) => ({
    ...pokemon,
    types: typesArray[index],
  }));

  

  return {
    data: updatedDataArray,
  };
  
}




export const getDataPokemo = async(url) => {

  let res = await fetch(url);
  const data = await res.json();
  
  let typesArray = data.types.map(type => type.type.name);
  
  
  const updatedDataArray = [{
    ...data,
    types: typesArray,
  }];
  
  
  return {
    data: updatedDataArray,
  };
  
}