import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
  } from 'semantic-ui-react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import { Link } from 'react-router-dom';


function GlobalTechBlogs() {

    const cardStyle = {
        margin: "20px",
        minWidth: "200px",
        maxWidth: "600px"
    };


    return (
        <div style={{margin: "30px"}}>
            
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <Card style={cardStyle}>
                    <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                    <CardContent>
                        <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                        <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                        <CardDescription><Link to="/GlobalTech/2024TechIndustryPredictions">Read more...</Link></CardDescription>
                    </CardContent>
                </Card>

                <Card style={cardStyle}>
                    <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                    <CardContent>
                        <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                        <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                        <CardDescription><Link to="/BlogTwo">Read more...</Link></CardDescription>
                    </CardContent>
                </Card>

                <Card style={cardStyle}>
                    <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                    <CardContent>
                        <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                        <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                        <CardDescription><a>Read more...</a></CardDescription>
                    </CardContent>
                </Card>
            </div>
            
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Card style={cardStyle}>
                <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                <CardContent>
                    <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                    <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                    <CardDescription><a>Read more...</a></CardDescription>
                </CardContent>
            </Card>

            <Card style={cardStyle}>
                <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                <CardContent>
                    <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                    <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                    <CardDescription><a>Read more...</a></CardDescription>
                </CardContent>
            </Card>

            <Card style={cardStyle}>
                <Image orientation="top" src={"https://www.technewsworld.com/wp-content/uploads/sites/3/2024/01/tech-in-2024.jpg"}/>
                <CardContent>
                    <CardHeader>2024 Tech Industry Predictions: A Few May Surprise You</CardHeader>
                    <CardDescription>As we stand on the cusp of 2024, technology continues its relentless march forward, shaping how we live, work, and interact with the world around us.</CardDescription>
                    <CardDescription><a>Read more...</a></CardDescription>
                </CardContent>
            </Card>

        </div>
    </div>
    )
};

export default GlobalTechBlogs;