const projects = [
  {
    title: 'ShinhanCard',
    text: '회사에서 진행하는 프로젝트에 처음으로 참여한 실무 프로젝트',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue'],
    webLink: 'https://velog.io/@tjsdyd7898/%EC%8B%A0%EC%9E%85-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94%EC%9D%98-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0',
    git: null,
  },
  {
    title: 'PerfumeTest',
    text: '리액트와 자바스크립트를 응용하여 기획부터 개발까지 혼자서 만들어낸 1인 프로젝트',
    tags: ['React', 'JavaScript', 'Firebase'],
    webLink: 'https://perfumetest-sy.web.app',
    git: 'https://github.com/sy1125/perfumeTest',
  },
  {
    title: 'EmotionDiary',
    text: '리액트의 여러가지 기능을 접하며 직접 프로젝트에 구현하여 리액트와 가장 가까워지는 계기가 된 프로젝트',
    tags: ['React', 'JavaScript', 'Firebase'],
    webLink: 'https://seonyong-react-diary.web.app',
    git: 'https://github.com/sy1125/Emotion-Diary',
  },
  {
    title: 'Todo-List',
    text: 'Vue를 처음 접한 당시 가장 기초적이지만 가장 핵심적인 기능을 익히는데 도움이 되었던 프로젝트',
    tags: ['Vue', 'JavaScript', 'Firebase'],
    webLink: 'https://todolist-vue-sy.web.app',
    git: 'https://github.com/sy1125/todolist-vue',
  },
  {
    title: 'vanilaPractice',
    text: '순수 자바스크립트만 사용하여 만들었던 프로젝트',
    tags: ['JavaScript', 'HTML', 'CSS'],
    webLink: 'https://qnfto7898.cafe24.com/web/vanilaPractice/index.html',
    git: 'https://github.com/sy1125/vanilaPractice',
  },
  {
    title: 'react-native-weather',
    text: 'react-native를 사용하여 현재 위치를 인식하고 적합한 날씨를 알려주는 앱',
    tags: ['React Native', 'API'],
    webLink: null,
    git: 'https://github.com/sy1125/react-native-weather',
  },
  {
    title: 'Work-Travel-App',
    text: 'react-native를 사용하여 카테고리에 따라 나누어 기록하는 앱',
    tags: ['React Native', 'Expo'],
    webLink: 'https://expo.dev/@leeseonyong/WorkHardTravelHardApp?serviceType=classic&distribut',
    git: 'https://github.com/sy1125/Work-Travel-App',
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
                  <span className="card-tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="card-links">
                {project.git && (
                  <a className="card-link" href={project.git} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.webLink && (
                  <a className="card-link" href={project.webLink} target="_blank" rel="noopener noreferrer">
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
