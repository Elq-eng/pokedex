import { Route, Routes } from "react-router-dom"
import { Login } from '../auth'
import useChecking from "../hooks/useChecking"
import { CheckingAuth } from "../ui"
import { DashboardPage } from "../dashboard/pages/DashboardPage"
import { MyPokemonsPage } from "../dashboard"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"



export const AppRoutes = () => {

  const { status } = useChecking()

  if ( status === 'checking' ){
    return <CheckingAuth/>
  }
  return (
    <>
      <Routes>
        <Route  path="/auth/login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={ <Login/> } />
            </Routes>
          </PublicRoute> }/>
        <Route path="/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="/home/*" element={ <DashboardPage/> }></Route>
              <Route path="/home/mypokemons/:captured" element={ <MyPokemonsPage/> }></Route>  
            </Routes>
          </PrivateRoute>
          }/>
      </Routes>
    
    </>
  )
}
