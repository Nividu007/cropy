import './App.css'
import Header from './components/Header'
import About from './components/About'
import Use from './components/Use'
import Predict from './components/predict'
import Footer from './components/footer'

function App() {

  return (
    <main>
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
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
