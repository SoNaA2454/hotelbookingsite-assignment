import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Destinations from "./Components/Destinations/Home"
import SinglePage from "./SinglePage/SinglePage"

// /*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'  exact component={Home}/>
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
