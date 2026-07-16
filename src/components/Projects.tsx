import "./styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Tender Intelligence & Scraper",
      category: "INTELLIGENT AUTOMATION & AGENTIC AI",
      challenge: "T-Systems needed a way to discover and evaluate business opportunities, but manually monitoring tender portals and routing delayed document updates took 50–60 hours per week and was highly error-prone.",
      solution: "Architected and developed FastAPI-based microservices, Agentic AI workflows, and LLM integrations for tender document analysis and information retrieval. Designed a self-healing scraper platform with automatic stakeholder routing.",
      impact: [
        "Reduced manual tender monitoring effort by 50–60 hours per week",
        "Eliminated manual spreadsheet-based task assignments entirely",
        "Improved tender coverage and minimized human errors through automated recovery"
      ],
      techStack: ["FastAPI", "Agentic AI", "LLM Integration", "Playwright", "Python", "Kubernetes"]
    },
    {
      title: "High-Performance OLAP Advertising Platform",
      category: "DATA INFRASTRUCTURE & CLOUD OPTIMIZATION",
      challenge: "The existing advertising platform relied on a heavy PySpark and Elasticsearch infrastructure that was expensive, resource-intensive, and experienced long data load times.",
      solution: "Led the migration of the entire advertising data stack from PySpark + Elasticsearch to DuckDB + ClickHouse. Optimized DuckDB SQL and refactored Scala-based Spark streaming jobs.",
      impact: [
        "Reduced cloud infrastructure usage by 85%",
        "Cut active operational costs by 78%",
        "Reduced data load and ingestion times from hours to minutes"
      ],
      techStack: ["DuckDB", "ClickHouse", "PySpark", "Elasticsearch", "Scala", "SQL Optimization"]
    },
    {
      title: "Enterprise Bank Data Lake GCP Migration",
      category: "DATA MIGRATION & BIG DATA SYSTEMS",
      challenge: "A banking client's legacy on-premises Cloudera Data Lake was hitting scalability ceilings, slowing down critical research workflows and reporting.",
      solution: "Migrated a 170TB Data Lake from Cloudera to Google Cloud Platform (GCP) using PySpark and Apache Airflow. Built custom ETL pipelines and integrated Vertex Matching Engine for vector embeddings.",
      impact: [
        "Migrated 170TB of sensitive financial data with zero downtime",
        "Developed automated ETL pipelines for web-scraped research data (APIs, XML)",
        "Received the TrailBlazer Award for innovation and technical delivery"
      ],
      techStack: ["GCP", "PySpark", "Apache Airflow", "Vertex AI", "Cloudera", "BigQuery"]
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
              
              <div className="project-content">
                <div className="project-section">
                  <h4>Challenge</h4>
                  <p>{project.challenge}</p>
                </div>
                
                <div className="project-section">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
                
                <div className="project-section">
                  <h4>Impact</h4>
                  <ul className="impact-list">
                    {project.impact.map((item, impactIdx) => (
                      <li key={impactIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-tech">
                <span className="tech-label">TECH STACK</span>
                <div className="tech-tags">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
