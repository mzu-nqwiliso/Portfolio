import React from "react";
import "./Experience.css";

export default function Experience() {
  const currentYear = new Date().getFullYear();

  const workingExperience = (status, startYear, endYear) => {
    if (status === "present") {
      return currentYear - startYear;
    } else {
      return endYear - startYear;
    }
  };

  const experiences = [
    {
      role: "Junior Consultant: Business Intelligence & Data Analytics",
      company: "Sambe Consulting",
      status: "present",
      startYear: 2025,
      endYear: currentYear,
      techStack: [
        "SQL Server",
        "Power BI",
        "SSIS",
        "React.js",
        "Git",
        "Python",
        "T-SQL",
      ],
      responsibilities: [
        "I develop data pipelines and business intelligence dashboards using SQL Server, SSIS, and Power BI, while also building modern web applications with React.",
      ],
    },
  ];

  const enrichedExperiences = experiences.map((exp) => ({
    ...exp,
    period: `${exp.startYear} - ${exp.status === "present" ? "Present" : exp.endYear}`,
    yearsOfExperience: workingExperience(
      exp.status,
      exp.startYear,
      exp.endYear,
    ),
    monthsOfExperience:
      workingExperience(exp.status, exp.startYear, exp.endYear) * 12,
  }));

  return (
    <section className="experience-section container" id="experience">
      <h2 className="section-header">Experience</h2>
      <div className="experience-wrapper">
        {enrichedExperiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <div className="experience-content-left">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-company">
                <h4 className="experience-company-name">{exp.company}</h4>
                <p className="experience-company-period">{exp.period}</p>
              </div>
              <div className="experience-tech-stack">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="experience-tech-stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-content-right-item">
                <div className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility) => (
                    <p
                      key={responsibility}
                      className="experience-responsibility"
                    >
                      "{responsibility}"
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
