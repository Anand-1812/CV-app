export default function CvSection({ personalDetails, educationDetails, experienceDetails }) {
  return (
    <section className="cv-section">
      <div className="cv">
        <div className="top">
          <h1>{personalDetails.fullName || "Your Name"}</h1>
          <div className="userDetail">
            {personalDetails.email && <p>{personalDetails.email}</p>}
            {personalDetails.phone && <p>{personalDetails.phone}</p>}
            {personalDetails.location && <p>{personalDetails.location}</p>}
          </div>
        </div>

        <div className="experience">
          <h2>Work Experience</h2>
          {experienceDetails.year && <p><strong>Year:</strong> {experienceDetails.year}</p>}
          {experienceDetails.company && <p><strong>Company:</strong> {experienceDetails.company}</p>}
          {experienceDetails.title && <p><strong>Title:</strong> {experienceDetails.title}</p>}
          {experienceDetails.location && <p><strong>Location:</strong> {experienceDetails.location}</p>}
        </div>

        <div className="education">
          <h2>Education</h2>
          {educationDetails.year && <p><strong>Year:</strong> {educationDetails.year}</p>}
          {educationDetails.institution && <p><strong>Institution:</strong> {educationDetails.institution}</p>}
          {educationDetails.degree && <p><strong>Degree:</strong> {educationDetails.degree}</p>}
        </div>
      </div>
    </section>
  );
}

