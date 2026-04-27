import Home from './Components/Views/Home'
import Navbar from './Components/Views/Navbar'
import Banner from './Components/Views/Banner'
import Footer from './Components/Views/Footer'
import Coursre from './Components/Views/Coursre'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Popular from './Components/Views/Popular'


const App = () => {
  const pathname = window.location.pathname
  const isCoursePage = pathname === '/courses' || pathname === '/mentors'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/enterprise' || pathname === '/contact'
  const isPopularPage = pathname === '/popular'

  return (
    <div>
      <Navbar />
      {isContactPage ? (
        <Contact />
      ) : isPopularPage ? (
        <Popular />
      ) : isAboutPage ? (
        <About />
      ) : isCoursePage ? (
        <Coursre />
      ) : (
        <>
          <Banner />
          <Home />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
