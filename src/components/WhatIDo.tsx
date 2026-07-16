import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const expertise = [
    {
      category: "Data Engineering & Platforms",
      skills: [
        { name: "Big Data (PySpark, Kafka, Airflow)", level: "Expert" },
        { name: "Modern OLAP (ClickHouse, DuckDB)", level: "Expert" },
        { name: "Distributed Data Lake Architecture", level: "Expert" },
        { name: "ETL/ELT & Data Migration", level: "Expert" }
      ]
    },
    {
      category: "AI & Intelligent Automation",
      skills: [
        { name: "Agentic AI & LLM Integration", level: "Expert" },
        { name: "Vertex AI & Vector Databases", level: "Advanced" },
        { name: "Intelligent Scrapers (Playwright)", level: "Advanced" },
        { name: "Workflow Automation & Streamlit", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "FastAPI & Microservices", level: "Expert" },
        { name: "Python & SQL", level: "Expert" },
        { name: "REST APIs & JWT Auth", level: "Expert" },
        { name: "Unix Shell Scripting & C/Scala", level: "Proficient" }
      ]
    },
    {
      category: "Cloud & Deployment",
      skills: [
        { name: "GCP (BigQuery, Cloud Run, GCS)", level: "Expert" },
        { name: "Docker & Kubernetes", level: "Advanced" },
        { name: "CI/CD & Git Pipelines", level: "Advanced" },
        { name: "Infrastructure Migrations", level: "Expert" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Expert": return "level-expert";
      case "Advanced": return "level-advanced";
      case "Proficient": return "level-proficient";
      default: return "";
    }
  };

  return (
    <div className="whatIDO">
      <div className="whatIDO-container">
        <div className="what-header">
          <h2>
            <div>WHAT</div>
            <div>
              I <span className="do-h2">DO</span>
            </div>
          </h2>
          <p className="what-tagline">Expertise & Proficiency Levels</p>
        </div>
        
        <div className="expertise-matrix">
          {expertise.map((category, idx) => (
            <div key={idx} className="expertise-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div className={`skill-fill ${getLevelColor(skill.level)}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
