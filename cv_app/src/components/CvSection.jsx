export default function CvSection({ personalDetails, educationDetails, experienceDetails }) {
  return (
    <>
      <section className="cv-section">
        <div className="cv">
          <div className="top">
            <h1>{personalDetails.fullName}</h1>
            <div className="userDetail">
              <p>{personalDetails.email}</p>
              <p>{personalDetails.phone}</p>
              <p>{personalDetails.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
