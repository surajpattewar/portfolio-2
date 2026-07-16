import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      icon: "💾",
      metric: "170TB",
      label: "MIGRATED",
      title: "Large-Scale Cloud Migration",
      description: "Successfully migrated a 170TB Data Lake from Cloudera to Google Cloud Platform (GCP) for a banking client using PySpark and Apache Airflow."
    },
    {
      icon: "📉",
      metric: "78%",
      label: "COST SAVINGS",
      title: "OLAP Migration Impact",
      description: "Led migration from PySpark/Elasticsearch to DuckDB/ClickHouse, reducing infrastructure usage by 85% and cutting project costs by 78%."
    },
    {
      icon: "⚡",
      metric: "60 hrs",
      label: "WEEKLY SAVINGS",
      title: "AI-Powered Tender Processing",
      description: "Designed and built a self-healing AI tender intelligence and automated scraping platform, reducing manual monitoring effort by 50–60 hours per week."
    },
    {
      icon: "👥",
      metric: "37TB",
      label: "DATA MIGRATED",
      title: "Data Lake Implementation",
      description: "Led a 4-member data engineering team to migrate legacy data to Hive/Impala. Developed 20+ Unix automation scripts, optimizing performance by 30%."
    },
    {
      icon: "🏆",
      metric: "5+",
      label: "AWARDS",
      title: "Professional Awards",
      description: "Received multiple honors including Spotlight Recognition, T-Systems Get Things Done, Quantiphi TrailBlazer, and Capgemini Rising Star awards."
    },
    {
      icon: "⚙️",
      metric: "Minutes",
      label: "LOAD TIME",
      title: "Performance Tuning",
      description: "Optimized DuckDB SQL and Scala-based Spark streaming jobs, reducing data ingestion and processing times from hours down to minutes."
    }
  ];

  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-metric">
                <span className="metric-value">{achievement.metric}</span>
                <span className="metric-label">{achievement.label}</span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
