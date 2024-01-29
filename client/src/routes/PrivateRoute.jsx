
import { useSelector } from 'react-redux'
import { Navigate, useLocation} from 'react-router-dom'

export const PrivateRoute = ({children}) => {

  const { status } = useSelector( state => state.auth);

  // const { pathname, search } =  useLocation()

  // const lastPath = pathname + search;



  return ( status === 'authenticated') 
  ? children
  : <Navigate to='/auth/login/*'/>
}
