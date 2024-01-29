import  jwt from "jsonwebtoken";


export const generalJWT  = ( uid, name  ) => {

  return new Promise( (res, rej)=> {
    const payload = { uid, name }

    jwt.sign( payload, process.env.SECRET_KEY, { expiresIn:'2h'},( err, token ) =>{
      if ( err ){
        console.log( err )
        rej("Don't generate token")
      }
      res( token )
    })
  })
}



