const projects = [
  {
    title: "Goodtrip",
    text: "대시보드 형식의 여행 기록을 남기는 프로젝트로, Claude Code를 사용하여 기획부터 디자인 개발까지 모두 완성한 1인 프로젝트",
    tags: ["Claude Code", "Next.js", "Typescript", "JavaScript"],
    git: "https://github.com/sy1125/goodtrip",
  },
  {
    title: "PerfumeTest",
    text: "리액트와 자바스크립트를 응용하여 기획부터 개발까지 혼자 완성한 1인 프로젝트",
    tags: ["React", "JavaScript", "Firebase"],
    webLink: "https://perfumetest-sy.web.app",
    git: "https://github.com/sy1125/perfumeTest",
  },
  {
    title: "EmotionDiary",
    text: "리액트의 여러가지 기능을 접하며 직접 프로젝트에 구현하여 리액트와 가장 가까워지는 계기가 된 프로젝트",
    tags: ["React", "JavaScript", "Firebase"],
    webLink: "https://seonyong-react-diary.web.app",
    git: "https://github.com/sy1125/Emotion-Diary",
  },
  {
    title: "Todo-List",
    text: "Vue를 처음 접한 당시 가장 기초적이지만 가장 핵심적인 기능을 익히는데 도움이 되었던 프로젝트",
    tags: ["Vue.js", "JavaScript", "Firebase"],
    webLink: "https://todolist-vue-sy.web.app",
    git: "https://github.com/sy1125/todolist-vue",
  },
  {
    title: "VanilaPractice",
    text: "순수 자바스크립트만 사용하여 만들었던 프로젝트",
    tags: ["JavaScript", "HTML", "CSS"],
    git: "https://github.com/sy1125/vanilaPractice",
  },
  {
    title: "react-native-weather",
    text: "react-native를 사용하여 현재 사용자 위치를 인식하고 적합한 날씨를 알려주는 앱",
    tags: ["React Native", "Expo"],
    webLink: null,
    git: "https://github.com/sy1125/react-native-weather",
  },
  {
    title: "Work-Travel-App",
    text: "react-native를 사용하여 카테고리에 따라 나누어 기록하는 앱",
    tags: ["React Native", "Expo"],
    git: "https://github.com/sy1125/Work-Travel-App",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">진행했던 프로젝트를 소개합니다</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.text}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => (
                  <span className="card-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-links">
                {project.git && (
                  <a
                    className="card-link"
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.webLink && (
                  <a
                    className="card-link"
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
