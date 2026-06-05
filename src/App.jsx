import { RouterProvider, useRouter } from './router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

const ROUTES = {
  '/': Home,
  '/services': Services,
  '/about': About,
  '/appointment': Appointment,
  '/blog': Blog,
}

function Routed() {
  const { path } = useRouter()
  const Page = ROUTES[path] || NotFound
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="page">
        <Page />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Routed />
    </RouterProvider>
  )
}
