import './App.css'
import Sidebar from './components/sidebar.jsx'
import CvSection from './components/CvSection.jsx'

function App() {

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationDetails, setEducationDetails] = useState({
    year: "",
    university: "",
    degree: "",
    location: "",
  });

  const [experienceDetails, setExperienceDetails] = useState({
    year: "",
    company: "",
    title: "",
    location: "",
  });




  return (
    <>
      <Sidebar />
      <CvSection />
    </>
  )
}

export default App
