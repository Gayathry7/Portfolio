import React from 'react';
import styles from './Home.module.css'
import { TimeLineComponent } from './TimeLineCompoenet'
import { AiFillGithub,AiFillLinkedin,AiFillMail,AiOutlineMail,AiOutlineMedium } from "react-icons/ai";
import { TextAnimation } from './TextAnimated';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home=()=>{

    React.useEffect(()=>{
        Aos.init({}) ;
    },[])
    return(
        <>
        <div className={styles.homeTopBanner} data-aos = 'zoom-in-up' data-aos-duration="1500" >
           <div className={styles.homeImageDiv}>
             {/* <img className={styles.homeImage} src='homeImg.svg' alt='home image'/> */}
             <img className={styles.homeImage} src='anime2.jpg' alt='home image'/>

             <div className={styles.homeAbout} data-aos = 'flip-down' data-aos-duration="2500">
                  <h1>Hey 👋...</h1>
                  <h1>I'm Gayathry. </h1>
                  <h1>Welcome to my portfolio ! </h1>
                 
                  <div>
                        I am passionate Full Stack Web Developer who focuses on writing clean 
                        <br/>and user-friendly applications using 
                        <br/>

                        {/* JavaScript / Reactjs /Nodejs/ MongoDb  */}
                        <div>
                        <TextAnimation />
                        </div>
                        
                         {/* <br/> */}
                         {/* <div> */}
                             and some other cool libraries and frameworks.
                         {/* </div> */}
                  </div>    

              <button><a href='https://drive.google.com/file/d/1ki3P6iidllRLdlIOmbL3lh1zUOTiiW8U/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a></button>
            </div>

           </div>
        </div>

        <div className={styles.homeTopBanner1} data-aos = 'fade-in' data-aos-offset="200" data-aos-duration="1000" >
            <div className={styles.profile} >
                    <div className={styles.profile__pic__border} data-aos = 'flip-left' data-aos-offset="250" data-aos-duration="1500">   
                        <img className={styles.profile__pic} src='profile.png' alt='home image'/>
                        
                        <div className={styles.profile__icons}> 
                            <a href='https://github.com/Gayathry7' target="_blank" rel="noreferrer">
                            <AiFillGithub/>
                            </a>
                        </div>

                        <div className={styles.profile__icons}>
                        <a href='https://www.linkedin.com/in/gayathry779/' target="_blank" rel="noreferrer">
                            <AiFillLinkedin/>
                        </a>
                        </div>
                        
                        <div className={styles.profile__icons}> 
                        <a href='https://gayathryjm.medium.com/' target="_blank" rel="noreferrer">
                        <AiOutlineMedium/>
                        </a>
                        </div>

                        <div className={styles.profile__icons}> 
                        <a href="mailto:gayathryjm@gmail.com" target="_blank" rel="noreferrer">
                        <AiOutlineMail/>
                        </a>
                        </div>
                    </div>

                    <div className={styles.profile__details} data-aos = 'zoom-in-right' data-aos-offset="250" data-aos-duration="1000">
                        <h1> About myself</h1>
                        <div>🏡 I am from Trichy, TamilNadu.</div>
                        <div>😍 I like watching movies, listening music , travelling and painting. </div>
                        <div>🤝 I think of myself as a people person.</div>
                        <div>❤️ I love designing websites and I am looking for more opportunities to work in coding.</div>
                        <div>🤗 Apart from being a good technocrat, I wish to contribute towards the betterment of the society with the knowledge I have gained so far and will be,in the coming years.</div>
                    </div>
            </div>

            <div>
            </div>

           
        </div>

        <div className={styles.timeline} data-aos = 'fade-in' data-aos-offset="300" data-aos-duration="1000">
                <h1 className={styles.timeLine__h1}>{`Work Experience & Education`}</h1>
                    <TimeLineComponent/>
        </div>

        </>
    )
}

export {Home}