import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import store from './store/store';
import { Provider } from 'react-redux'
import { AppRoutes } from "./routes/AppRoutes"



export const PokedexApp = () => {



  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <AppRoutes/>  
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
    
  )
}
