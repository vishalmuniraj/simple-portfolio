import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.header 
        className="App-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm Vishal Muniraj
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Cloud & DevOps Engineer | AWS | Automation | Scalable Infrastructure
        </motion.p>
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Explore My Work ↓
        </motion.a>
      </motion.header>

      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate Cloud Engineer with hands-on experience in AWS services, DevOps tools, and automation workflows.
          With a background in Computer Science and industry experience at Cognizant, I focus on building resilient, scalable,
          and efficient cloud-native applications. Currently pursuing my Master's in Computer Science, I'm driven by a love 
          for problem-solving, clean architecture, and innovation in cloud infrastructure.
        </p>
      </motion.section>

      <motion.section 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2>Skills</h2>
        <ul>
          <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda, SNS, SQS, CloudFormation, CodePipeline)</li>
          <li><strong>DevOps:</strong> Docker, Kubernetes, Terraform, GitHub Actions, CI/CD</li>
          <li><strong>Programming:</strong> Python, Bash, Java, YAML/JSON</li>
          <li><strong>Tools:</strong> Linux, VS Code, Jenkins, Git</li>
        </ul>
      </motion.section>

      <motion.section 
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Knative Serverless Deployment:</strong> 
            Deployed microservices using Knative on Kubernetes, demonstrating traffic splitting and event-driven functions.
          </li>
          <li>
            <strong>AI-Enhanced Helpdesk System:</strong> 
            Automated IT support system using NLP for ticket classification, AWS Lambda for serverless processing, and CI/CD pipelines for deployment.
          </li>
          <li>
            <strong>AWS SNS/SQS Messaging System:</strong> 
            Designed and implemented an event-driven architecture using AWS SNS and SQS for scalable and reliable message processing.
          </li>
        </ul>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p>
          Contact: vishal.muniraj@slu.edu | Phone: 314-440-3037 |
          <a href="https://www.linkedin.com/in/vishal-m-353315111/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
          <a href="https://github.com/vishalmuniraj" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
