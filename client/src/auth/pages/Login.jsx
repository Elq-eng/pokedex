
import imageLogo from "/src/assets/images/logo.png"
import backgroundFond from '/src/assets/images/login-bg-p.jpeg'
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/vendors.min.css';
import { FormLogin } from '../index';



const styles = {
    backgroundImage:`url(${backgroundFond})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}



export const Login = () => {
    localStorage.setItem('hasInitialized', 'false')

  return (
    <>
      <div className="login-area bg-image" style={styles}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="login-form">
                        <div className="logo">
                            <img className='logo-init' src={imageLogo} alt="image"/>
                        </div>
                        <FormLogin/>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
