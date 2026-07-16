import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Lead Data Engineer specializing in building scalable data architectures, real-time data streaming pipelines, and high-performance data platforms. I design and implement enterprise data systems that process massive datasets with high throughput and low latency.
        </p>
        <p className="para highlight">
          My expertise spans architecting cloud data warehouses, designing ETL/ELT pipelines with Apache Spark and Apache Airflow, and managing database infrastructures (SQL & NoSQL). I focus on building reliable, cost-efficient, and optimized data solutions to empower machine learning and analytics teams.
        </p>
        <p className="para">
          I combine deep technical expertise in data engineering with a focus on engineering excellence—mentoring junior engineers, establishing data modeling standards, and collaborating with cross-functional product teams. I'm passionate about translating raw data into clean, structured, and highly accessible assets.
        </p>
      </div>
    </div>
  );
};

export default About;
