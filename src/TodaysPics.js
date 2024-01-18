

function TodaysPics() {
    return (
        <div style={{width: "50%", height: "50%", display: "inline-block", padding: "20px"}}>
            <div style={{padding: "10px", display: "block", height: "8%", width: "100%", backgroundColor: "#455884"}}>
                <h2 style={{fontFamily: "'Rajdhani', sans-serif", color: "white"}}>Todays Pic</h2>
            </div>
            <div style={{display: "block", height: "60%", width: "90%"}}>
                <img style={{objectFit: "contain", maxWidth: "100%", maxHeight: "100%", alignSelf: "center", marginLeft: "20px", marginTop: "20px"}} src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    )
};

export default TodaysPics;