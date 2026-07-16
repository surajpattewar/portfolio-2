import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer (Client: Banking & Finance)</h4>
                <h5>Capgemini</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Led a 4-member data engineering team migrating 37TB of legacy data to Hive/Impala. Developed a generic ingestion framework and 20+ Unix automation scripts, optimized jobs by 30% via Parquet, and managed Teradata-to-GCP migrations using DataStage and Control-M. Received the Rising Star Award.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer (Client: Google)</h4>
                <h5>Quantiphi</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Migrated a 170TB bank data lake from Cloudera to GCP using PySpark and Airflow. Built ETL pipelines for web-scraped research data, implemented Vertex Matching Engine (VME) for embedding similarities, and engineered Cloud Functions for video intelligence ML pipelines. Received the TrailBlazer Award.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Data Engineer</h4>
                <h5>T-Systems (Deutsche Telekom)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting FastAPI-based microservices and AI Agent workflows for tender intelligence and automated scraping, saving 50–60 hours of manual effort weekly. Leading PySpark to DuckDB/ClickHouse migrations (saving 78% in costs), optimizing Spark streaming, and deploying Kafka MirrorMaker on Kubernetes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
