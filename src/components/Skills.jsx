const skillCategories = [
  {
    category: "Frontend",
    items: [
      { name: "Typescript" },
      { name: "JavaScript", icon: "/assets/images/JS_icon@3x.png" },
      { name: "React Native" },
      { name: "React", icon: "/assets/images/React_icon@3x.png" },
      { name: "Next.js" },
      { name: "Vue", icon: "/assets/images/Vue_icon@3x.png" },
      { name: "HTML/CSS", icon: "/assets/images/Html_icon@3x.png" },
      { name: "SCSS" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "Webpack" },
      { name: "Postman" },
      { name: "Firebase" },
      { name: "VS Code" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Figma" },
      { name: "Slack" },
      { name: "Swagger" },
      { name: "Notion" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">현재 다룰 수 있는 기술입니다</p>
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div className="skill-category" key={index}>
            <h3>{cat.category}</h3>
            <div className="skill-items">
              {cat.items.map((item, i) => (
                <div className="skill-item" key={i}>
                  {item.icon && <img src={item.icon} alt={item.name} />}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
