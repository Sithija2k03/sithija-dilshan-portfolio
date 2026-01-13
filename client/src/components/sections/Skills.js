import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages & API",
      icon: "💻",
      skills: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "SQL", icon: "/icons/sql.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "Java", icon: "/icons/java.png" },
        { name: "R", icon: "/icons/r.png" },
        { name: "C++", icon: "/icons/c++.png" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Kotlin", icon: "/icons/kotlin.png" },
      ]
    },
    {
      category: "Libraries & Frameworks",
      icon: "📚",
      skills: [
        { name: "React", icon: "/icons/react.png" },
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "Next.js", icon: "/icons/nextjs.png" },
        { name: "FastAPI", icon: "/icons/fastapi.png" },

      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "/icons/postgresql.png" },
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
      ]
    },
    {
      category: "Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "/icons/aws.png" },
        { name: "Azure", icon: "/icons/azure.png" },
      ]
    },
    {
      category: "AI Frameworks & Tools",
      icon: "🤖",
      skills: [
        { name: "LangChain & LangGraph", icon: "/icons/langchain.png" },
        { name: "OpenAI", icon: "/icons/openai.png" },
        { name: "Gemini", icon: "/icons/gemini.png" },
        { name: "Jupyter Notebook", icon: "/icons/jupyter.png" },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "⚙️",
      skills: [
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Cursor", icon: "/icons/cursor.png" },
        { name: "VS Code", icon: "/icons/vscode.png" },
        { name: "Postman", icon: "/icons/postman.png" },
      ]
    },
    {
      category: "Data Analytics Tools",
      icon: "📊",
      skills: [
         { name: "Excel", icon: "/icons/excel.png" },
        { name: "Power BI", icon: "/icons/powerbi.png" },
        { name: "Tableau", icon: "/icons/tableau.png" },
        { name: "Google Colab", icon: "/icons/colab.png" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build exceptional solutions
        </p>

        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category-box">
              <div className="category-header">
                <span className="category-icon-emoji">{category.icon}</span>
                <h3 className="category-name">{category.category}</h3>
              </div>
              
              <div className="skills-icon-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-icon-item" title={skill.name}>
                    <div className="skill-icon-wrapper">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="skill-icon-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="skill-icon-placeholder" style={{display: 'none'}}>
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="skill-icon-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;