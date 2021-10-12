import React from 'react'

import styles from './Skills.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiFillDownCircle } from "react-icons/ai";


const Skills=()=>{
  React.useEffect(()=>{
    Aos.init({});
},[])

    return(
        <>

          <div>

              <div className={styles.skillsBanner} data-aos = 'zoom-in' data-aos-duration="1000" >

                  <h1 data-aos = 'flip-up' data-aos-duration="1500">Skills</h1>
                  <img src='giphy.gif' alt='code_gif' data-aos = 'flip-up' data-aos-duration="1500"/>
              </div>

              <div className={styles.skillsDetails} data-aos = 'fade-left' data-aos-duration="1500">
                <h1>Front-End</h1>
                <hr/>
                <div className={styles.frontEnd}>
                  
                  <div>
                    <img src='html.png' alt="html"/>
                    <p>HTML</p>
                  </div>
                    
                  <div>
                    <img src='css.png' alt="CSS"/>
                    <p>CSS</p>
                  </div>

                  <div>
                    <img src='js.png' alt="JS"/>
                    <p>JavaScript</p>
                  </div>

                  <div>
                    <img src='logo512.png' alt="React"/>
                    <p>React</p>
                  </div>

                  <div>
                    <img src='redux.png' alt="redux"/>
                    <p>Redux</p>
                  </div>

                  <div>
                    <img src='TS.png' alt="redux"/>
                    <p>TypeScript</p>
                  </div>

                  <div>
                    <img src='bootstrap.png' alt="redux"/>
                    <p>BootStrap</p>
                  </div>
                  
                </div>

              </div>

              <div  className={styles.down} data-aos = 'fade-left' >
              <AiFillDownCircle/>
              </div>



              <div className={styles.skillsDetails} data-aos = 'fade-right' data-aos-duration="1500">
                <h1>{`Back-End & Data Bases`}</h1>
                <hr/>


                  <div className={styles.frontEnd}>
                  
                      <div>
                          <img src='nodejs.png' alt="node"/>
                          <p>Node</p>
                      </div>
                          
                      <div>
                          <img src='express.png' alt="express"/>
                          <p>Express</p>

                      </div>

                      <div>
                          <img src='mongo.png' alt="mongo"/>
                          <p>MongoDb</p>

                      </div>

                      <div>
                          <img src='sql.png' alt="sql"/>
                          <p>Sql</p>

                      </div>
      
                  </div>
                </div>
          </div>
        </>
    )
}

export {Skills}