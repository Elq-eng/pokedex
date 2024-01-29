import { toast } from 'react-toastify';

const defaultOptions =  {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}


export const Notification = () => {



  const handleToastify = ({ type='info', message, options = {} }) => {
    
    const toastOption = { ...defaultOptions, ...options}
    toast[type](`${message}`, toastOption)
  }

  


  return {
    // metodo
    showNotification:handleToastify
  }
}
