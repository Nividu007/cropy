import './App.css'
import Header from './components/Header'
import About from './components/About'
import Use from './components/Use'
import Predict from './components/predict'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <div className="relative overflow-hidden bg-gray-900 text-gray-100">
        <Header />
        <About />
        <Use />
        <Predict />
        <Footer />
      </div>

    </main>
  )
}

export default App
