import { useState } from 'react';
function ThisWeekInPics() {
    
    const [opacity, setOpacity] = useState("1");


    function handleHover(e) {
        let childNodes = e.target.childNodes;
        childNodes.forEach(function(el) {
            if (el.style) {
                setOpacity(el.style.opacity = "1");
            }
        });
        
        e.target.style.opacity = '1';
        
        //setOpacity(e.target.style.opacity = "1");
        //setOpacity(childDiv.target.style.opacity = "1");
        //console.log(childDiv);
        
    };

    function hoverOff(e) {
        e.target.style.opacity = '0'
        let childDiv = e.target.childNodes;

        childDiv.forEach(function(el) {
            console.log(el)
            if (el.style) {
                setOpacity(el.style.opacity = "1");
            }
        });
        
        // setOpacity(e.target.style.opacity = "0");
        // console.log(childDiv);
        // setOpacity(childDiv.style.opacity = "0");
    };


    const picDescript = {
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        textDecoration: "bold", 
        color: "white", 
        height: "100%", 
        transition: ".5s ease", 
        width: "100%", 
        zIndex: "3000", 
        position: "absolute",
        opacity: "0",
        padding: "5px",
        height: "inherit"
    };

    const picTitle = {
        fontWeight: "bold"
    };
    
    return (

        

        <div style={{overflow: "scroll"}}>
            <div style={{minWidth: "100%", display: "flex", justifyContent: "center", paddingTop: "60px"}}>
                <h2 style={{fontFamily: "'Rajdhani', sans-serif", color: "#C96480"}}>This Week In Fake Pictures: AI</h2>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                <div style={{width: "100%", height: "300px", backgroundColor: "#2E4756", display: "flex", justifyContent: "space-evenly", marginBottom: "200px"}}>
                    
                    
                    
                    <div   style={{ width: "300px", height: "170px", position: "relative", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <img style={{zIndex: "1", position: "absolute", flexDirection: "column", width: "100%", height: "100%", objectFit: "cover"}} src={"https://e3.365dm.com/23/12/1600x900/skynews-donald-trump-fake-ai_6390631.png?20231212102009"} />
                            <div onMouseOver={handleHover} onMouseOut={hoverOff} style={{width: "100%", height: "100%", position: "absolute"}}>
                                <p   style={picDescript}>Donald Trump's Mugshot<br /> <br />Before the former US president posted his real mugshot on X, a number of fake versions did the rounds.</p>
                            </div>
                    </div>


                    <div   style={{ width: "300px", height: "170px", position: "relative", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                          <img style={{zIndex: "1", position: "absolute", flexDirection: "column", width: "100%", height: "100%", objectFit: "cover"}} src={"https://e3.365dm.com/23/12/1600x900/skynews-fake-ai-julian-assange_6390630.png?20231212101807"} />
                            <div onMouseOver={handleHover} onMouseOut={hoverOff} style={{width: "100%", height: "100%", position: "absolute"}}>
                                <p  style={picDescript}><span style={picTitle} onMouseOver={handleHover} onMouseOut={hoverOff}>Julian Assange in Prison</span> <br /> <br />A picture of the WikiLeaks founder looking ill at Belmarsh prison was made using Midjourney.</p>
                            </div>
                    </div>


                    <div   style={{ width: "300px", height: "170px", position: "relative", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <img style={{zIndex: "1", position: "absolute", flexDirection: "column", width: "100%", height: "100%", objectFit: "cover"}} src={"https://e3.365dm.com/23/12/1600x900/skynews-emmanuel-macron-fake_6390644.png?20231212102648"} />
                            <div style={{width: "100%", height: "100%", position: "absolute"}}>
                                <p onMouseOver={handleHover} onMouseOut={hoverOff} style={picDescript}><span style={picTitle}>Emmanuel Macron Amid French Riots</span> <br /> <br />During riots in France, a picture went viral of Emmanuel Macron sitting in a street with rubbish burning behind him.</p>
                            </div>
                    </div>


                    <div   style={{ width: "300px", height: "170px", position: "relative", alignSelf: "center", display: "flex", flexDirection: "column"}}>
                        <img style={{zIndex: "1", position: "absolute", flexDirection: "column", width: "100%", height: "100%", objectFit: "cover"}} src={"https://e3.365dm.com/23/12/1600x900/skynews-elon-musk-fake-ai_6390656.png?20231212103323"} />
                            <div style={{width: "100%", height: "100%", position: "absolute"}}>
                                <p onMouseOver={handleHover} onMouseOut={hoverOff} style={picDescript}><span style={picTitle}>Elon Musk's 'Robot Wives'</span><br /> <br />The SpaceX billionaire has made no secret of his desire to create humanoid robots, but not "robot wives".</p>
                            </div>
                    </div>
                        


                </div>
            </div>
        </div>
    )
};

export default ThisWeekInPics;