/* eslint-disable react/prop-types */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';



import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Formlogin.css'
import { Link } from "react-router-dom";
import { useForm } from '../../hooks';
import { startLogin } from '../../store/thunks';
import { Notification } from '../../helpers'
import { useDispatch } from 'react-redux';
import useNotAuth from '../../hooks/useNotAuth';
import { onResetMsg } from '../../store';



const formGeneral = {
  formName:'',
  formEmail:'',
  formPassword:'',
  formPassword2:'',
  formCheck: false
}


export const FormLogin = () => {

  

  const [title, setTitle] = useState('Login');
  const [ signUpIn, setSignUpIn] = useState('Sign Up');
  const [stateRandL, setStateRandL] = useState(false);
  const dispatch = useDispatch()
  


  const { showNotification } = Notification()

  const { formName, formEmail, formPassword, formPassword2, onInputChange: onSignSession, formState } = useForm( formGeneral )
  const { errorMessage } = useNotAuth()

  

  const handleChange = () =>{
    setTitle( !stateRandL ? 'Register' : 'Login' )
    setSignUpIn( stateRandL ? 'Sign Up' : 'Sing In' )
    setStateRandL(!stateRandL)
  }

  const handleSubmit = ( event ) => {
    event.preventDefault()

    if(formEmail === ''){
      showNotification({type:'error',message:'Error en los campos'})
      return;
    }
    if (title !== 'Login'  && formPassword !== formPassword2){
      showNotification({type:'error',message:'Error en los campos'})
      return;
    }
    dispatch(startLogin(formState))
  }

  const handleChecking = ({target}) =>{
    target.value = target.checked
    onSignSession({target})
  }

  const handleErrorMessage = () => {
    if ( errorMessage !== undefined ) 
    {
      showNotification({type:'error',message:errorMessage})
      dispatch( onResetMsg() )
      handleChange()
      return
    }
  }

  useEffect(() => {
    handleErrorMessage()
  }, [errorMessage]);

  return (
    <>
      <section>
        <h2>Welcome to Pokedex</h2>
        <h2>{title}</h2>
      </section>
      
      <form onSubmit={ handleSubmit }>
          { stateRandL &&
              <div className="form-group">
                <input type="text" className="form-control" name="formName" value={formName} onChange={onSignSession} placeholder="Name"/>
                <span className="label-title"><i className='bx bx-user'></i></span>
              </div>
          }
          <div className="form-group">
              <input type="email" className="form-control" name="formEmail" value={formEmail} onChange={onSignSession} placeholder="Email" required/>
              <span className="label-title"><i className='bx bx-user'></i></span>
          </div>

          <div className="form-group">
              <input type="password" className="form-control" name="formPassword" value={ formPassword } onChange={onSignSession} placeholder="Password" required minLength="8" maxLength="15"/>
              <span className="label-title"><i className='bx bx-lock'></i></span>
          </div>

          { stateRandL && 
            <div className="form-group">
                <input type="password" className="form-control" name="formPassword2" value={formPassword2} onChange={onSignSession}  placeholder="Confirm password"/>
                <span className="label-title"><i className='bx bx-lock'></i></span>
            </div>
            
          }

          { !stateRandL &&
            <div className="form-group">
              <div className="remember-forgot">
                  <label className="checkbox-box">Remember me
                      <input type="checkbox" name="formCheck" onChange={handleChecking}  />
                      <span className="checkmark"></span>
                  </label>

                  <Link href="forgot-password.html" className="forgot-password">Forgot password?</Link>
              </div>
            </div>
            
          }

          <button type="submit" className="login-btn">{title}</button>
          <ToastContainer/>
          <p className="mb-0">Don’t have an account? <Link onClick={ handleChange } href="#">{ signUpIn }</Link></p>
      </form>

    
    </>
  )
}
