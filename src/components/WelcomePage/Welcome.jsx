import React from 'react'
import styles from './Welcome.module.css'

const Welcome =({setShift})=>{

    const [done, setDone] = React.useState(false)

  React.useEffect(()=>{
     const timer = setTimeout(()=>{
           setDone(true)
      },3000)

      return(()=>{
        clearInterval(timer)
      })

  },[])

  React.useEffect(()=>{
    if(done){

         setShift(true)
    }
  },[done, setShift])

    return(
        <>
          <div className={styles.spinner}></div>
          <div className={styles.welcomeImage}>
             <img src='Hello.png' alt='img1' />
          </div>
        </>
    )
}

export {Welcome}