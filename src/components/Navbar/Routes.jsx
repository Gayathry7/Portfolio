import {Route, Switch} from "react-router-dom"
import { Home } from "../Home/Home"
import { Navbar } from "./Navbar"
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group'
import { Skills } from "../Skills/Skills"
import { Project } from "../Projects/Project"

const Routes =()=>{

    return(
        <>
        <Navbar/>

        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/skills" exact>
                <Skills/>
            </Route>
            <Route path="/experience" exact>
                Experience
            </Route>
            <Route path="/projects" exact>
                <Project/>
            </Route>
            <Route path="/contact" exact>
                Contact
            </Route>
            <Route>
                Not Found
            </Route>

        </Switch>
        </>
    )
    
}

export {Routes}