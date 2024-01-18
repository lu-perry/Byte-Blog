import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';


function handleHover(event) {
    event.target.style.color = "#D3B88C";
    event.target.style.border = "1px solid #D3B88C";
};

function hoverOff(event) {
    event.target.style.color = "white";
    event.target.style.border = "none";

};

const menuOptions = {
    color: "white",
    padding: "10px",
    alignSelf: "center",
    fontFamily: "'Rajdhani', sans-serif",
    cursor: "pointer",
    textDecoration: "none"
};

function Nav() {
    return (
    <div>
        <div style={{boxSizing: "border-box", border: "5px solid #9EBC9F", width: "100%", height: "100px", display: "flex", justifyContent: "center"}}>
            <FontAwesomeIcon icon={icon({name: "cookie-bite"})} style={{color: "#9EBC9F", height: "30px", alignSelf: "center", padding: "10px"}} />
            <h1 style={{color: "#9EBC9F", alignSelf: "center", fontFamily: "'Rajdhani', sans-serif"}}>Byte Blog</h1>
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly", width: "100%", height: "40px"}}>
            <Link to="/" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions} >Home</Link>
            <Link to="/globaltechnews" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions} >Global Tech News</Link>
            <Link to="/programming" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions}>Programming</Link>
            <Link to="/hardware" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions}>Hardware</Link>
            <Link to="/ai" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions}>AI</Link>
            <Link to="/design" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions}>Design</Link>
            <Link to="/submit" onMouseOver={handleHover} onMouseOut={hoverOff} style={menuOptions}>Submit an Article</Link>
        </div>
        <hr style={{color: "black", marginTop: "0px"}}></hr>
    </div>
    );
};



export default Nav;