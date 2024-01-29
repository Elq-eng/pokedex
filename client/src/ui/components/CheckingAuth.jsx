/* eslint-disable react/prop-types */
import ReactLoading from 'react-loading';
import './styles.css'

export const CheckingAuth = ( {bgColor= '#192136', text='#ffffff'} ) => {

  return (
    <div className='backSnipper' style={{ background: bgColor}}>
      <h3 style={{ color:text, marginTop:'10px', marginRight:'10px'}}>Loading...</h3>
      
      <ReactLoading type="spin" color='#1FF474' height='5%' width='5%'/>
    </div>
  )
}
