import './Education.css';

// Chronological list, most recent first. Each item renders as a timeline row.
const QUALIFICATIONS = [
  {
    id: 'msc',
    degree: 'M.Sc., Computer Science',
    institution: 'University of Toronto',
    startYear: 2021,
    endYear: 2023,
    detail: 'Specialization in human–computer interaction. GPA 3.9/4.0.'
  },
  {
    id: 'bsc',
    degree: 'B.Sc. (Hons.), Software Engineering',
    institution: 'University of Waterloo',
    startYear: 2016,
    endYear: 2020,
    detail: 'Dean\'s honour list. Capstone: real-time collaborative code editor.'
  },
  {
    id: 'aws-cert',
    degree: 'AWS Certified Developer — Associate',
    institution: 'Amazon Web Services',
    startYear: 2024,
    endYear: 2024,
    detail: 'Credential ID AWS-DVA-1234-5678.'
  }
];

export default function Education() {
  return (
    <section className="education">
      <h1 className="section-title">Education</h1>
      <p className="lead">
        Formal qualifications and certifications, most recent first.
      </p>

      <ol className="timeline">
        {QUALIFICATIONS.map((item) => {
          // Show a single year for one-year events, otherwise show a range.
          const yearLabel =
            item.startYear === item.endYear
              ? `${item.startYear}`
              : `${item.startYear} – ${item.endYear}`;

          return (
            <li key={item.id} className="timeline-item card">
              <div className="timeline-year">{yearLabel}</div>
              <div className="timeline-body">
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
