import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import "./ParagraphPair.css"


function ParagraphPair(){
    return(
    <>
    <div className="Para1">
        <p>
            PARAGRAPH1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum
        </p>
    </div>
    <div className="Para2">
        <p>
            PARAGRAPH2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum
        </p>
    </div>
            
        
        </>
    )
    }



export default ParagraphPair;

