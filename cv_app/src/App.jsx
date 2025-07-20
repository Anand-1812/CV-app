import { useState } from 'react';
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
      <Sidebar
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        experienceDetails={experienceDetails}
        setExperienceDetails={setExperienceDetails}
      />
      <CvSection
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
      />
    </>
  )
}

export default App
