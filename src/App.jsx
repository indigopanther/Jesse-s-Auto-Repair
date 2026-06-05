import { RouterProvider, useRouter } from './router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceArea from './pages/ServiceArea'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const ROUTES = {
  '/': Home,
  '/services': Services,
  '/service-area': ServiceArea,
  '/contact': Contact,
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
