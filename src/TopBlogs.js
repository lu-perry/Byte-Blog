import { Link } from 'react-router-dom';

function TopBlogs() {
    

        const blogLinkStyle = {
            display: "flex",
            border: "3px solid #C96480",
            borderRadius: "20px", 
            marginTop: "20px", 
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            color: "white",
            backgroundColor: "#2E4756"
        };

    return (

        <div style={{display: "flex", minWidth: "40%", flexDirection: "column", margin: "20px"}}>
            <div style={{width: "100%", display: "block"}}>
                <h1 style={{fontFamily: "'Rajdhani', sans-serif", color: "#C96480", paddingLeft: "10px"}}>This Weeks Top Blog Posts</h1>
            </div>
            <div>
                <Link style={blogLinkStyle}>Scrum vs. SAFe: Which Agile framework is right for your team?</Link>
                <Link style={blogLinkStyle}>The top ChatGPT plugins for developers</Link>
                <Link style={blogLinkStyle}>ChatGPT Vs Bard: Which is better for coding?</Link>
                <Link style={blogLinkStyle}>Cloud computing challenges and opportunities for the public sector</Link>
                <Link style={blogLinkStyle}>Self-Fixing and Auto-Code with AI: Debating the Pros and Cons</Link>
                <Link style={blogLinkStyle}>Cryptocurrency: What is it, and what's all the fuss?</Link>
            </div>
        </div>
    );
};

export default TopBlogs;