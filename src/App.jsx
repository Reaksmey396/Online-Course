import Home from './Components/Views/Home'
import Navbar from './Components/Views/Navbar'
import Banner from './Components/Views/Banner'
import Footer from './Components/Views/Footer'
import Coursre from './Components/Views/Coursre'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Popular from './Components/Views/Popular'
import Login from './Components/Layout/Login'
import Register from './Components/Layout/Register'
import CardDetail from './Components/Layout/CardDetail'
import AdminDashboard from './admin/AdminDashboard'


const App = () => {
  const pathname = window.location.pathname
  const isCoursePage = pathname === '/courses' || pathname === '/mentors'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/enterprise' || pathname === '/contact'
  const isPopularPage = pathname === '/popular'
  const isLoginPage = pathname === '/login'
  const isRegisterPage = pathname === '/register'
  const isCardDetailPage = pathname === '/course-detail' || pathname === '/courses/detail'
  const isAdminPage = pathname === '/admin' || pathname === '/admin/dashboard'
  const isAuthPage = isLoginPage || isRegisterPage
  const isStandalonePage = isAuthPage || isAdminPage

  return (
    <div>
      {!isStandalonePage && <Navbar />}
      {isAdminPage ? (
        <AdminDashboard />
      ) : isContactPage ? (
        <Contact />
      ) : isCardDetailPage ? (
        <CardDetail />
      ) : isRegisterPage ? (
        <Register />
      ) : isLoginPage ? (
        <Login />
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
      {!isStandalonePage && <Footer />}
    </div>
  )
}

export default App
