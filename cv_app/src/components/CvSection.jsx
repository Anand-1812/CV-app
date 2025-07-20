export default function CvSection({ personalDetails, educationDetails, experienceDetails }) {
  return (
    <>
      <section className="cv-section">
        <div className="cv">
          <div className="top">
            <h1>{personalDetails.firstName + ' ' + personalDetails.lastName}</h1><br />
            <div className="userDetail">
              <p>{personalDetails.email}</p>
              <p>{personalDetails.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
