import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar=()=>{
    return(
        <div className={styles.navbar_back}>

          <div className={styles.navbar_flex2}>

            <div>
              <NavLink to="/" className={styles.text_link} > {`<Gayathry/>`} </NavLink> 
            </div>
          </div>

          <div className={styles.navbar_flex1}>
             <div > <NavLink to="/" className={styles.text_link} activeStyle={{color:'orange'}} exact>About</NavLink>  </div>
             <div> <NavLink to="/skills" className={styles.text_link} activeStyle={{color:'orange'}}>Skills</NavLink>  </div>
             <div> <NavLink to="/projects" className={styles.text_link} activeStyle={{color:'orange'}}>Projects</NavLink> </div> 
             {/* <div> <NavLink to="/experience" className={styles.text_link}>Experience</NavLink>  </div>  */}
             {/* <div> <NavLink to="/contact" className={styles.text_link}>Contact</NavLink>  </div> */}
          </div>

        </div>

    )

}

export {Navbar}