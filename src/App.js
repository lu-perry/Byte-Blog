import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import BlogPreview from './BlogPreview';
import TodaysPics from './TodaysPics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Submit from './Submit';
import GlobalTech from './GlobalTech';
import ProgrammingHeader from './ProgrammingHeader';
import HardwareHeader from './HardwareHeader';
import AIHeader from './AIHeader';
import DesignHeader from './DesignHeader';
import TopBlogs from './TopBlogs';
import GlobalTechBlogs from './GlobalTechBlogs';
import TechPredictionsBlog from './TechPredictionsBlog';
import Footer from './Footer';
import BlogTwo from './BlogTwo';
import ThisWeekInPics from './ThisWeekInPics';



function App() {
  return  (
  <Router>
    <div style={{backgroundColor: "#16262E"}}>
      <Nav />
      <div>
        <Switch>


          <Route exact path="/">
            <div style={{display: "flex", flexDirection: "row"}}>
                <BlogPreview />
                <TopBlogs />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <ThisWeekInPics />
            </div>
                
            
            
                
            
          </Route>

          <Route exact path="/GlobalTechNews">
            <GlobalTech />
            <GlobalTechBlogs />
          </Route>

          <Route exact path="/GlobalTech/2024TechIndustryPredictions">
            <TechPredictionsBlog />
            <Footer />
          </Route>

          <Route exact path="/BlogTwo">
            <BlogTwo />
            <Footer />
          </Route>

          <Route exact path="/Programming">
            <ProgrammingHeader />
          </Route>

          <Route exact path="/Hardware">
            <HardwareHeader />
          </Route>

          <Route exact path="/AI">
            <AIHeader />
          </Route>

          <Route exact path="/Design">
            <DesignHeader />
          </Route>


          <Route exact path="/Submit">
            <Submit />
          </Route>


        </Switch>


      </div>
        
        
    </div>
  </Router>
  );
};



export default App;
