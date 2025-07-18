import './App.css'
import Name from './components/Name.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <>
      <div>
        <h1>CV GENRATOR</h1>
        <p>Enter you details below👇</p>
      </div>
      <Name />
      <Education />
      <Experience />
    </>
  )
}

export default App
