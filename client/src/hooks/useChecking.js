import { useEffect } from "react"
import { useSelector } from "react-redux"

const useChecking = () => {
  
  const { status } = useSelector( state => state.auth )
  useEffect(() => {
  }, [status]);


  return {
    // propiedades
    status,
    // metodos
  }
}

export default useChecking