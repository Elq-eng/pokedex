import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"




const useNotAuth = () => {

  const { errorMessage } = useSelector( state => state.auth)
  // const isNotAuth = useMemo(() => errorMessage !== undefined, [errorMessage])


  useEffect(() => {
  }, [errorMessage]);

  return {
    // propiedades
    errorMessage
    // metodos

  }
}

export default useNotAuth