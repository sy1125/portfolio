const experiences = [
  {
    date: "2023.01 ~ 2022.12",
    company: "메이드웰넷",
    role: "Front-End Developer",
    description:
      "스타트업 회사로, 스스로 문제를 해결하고 넓은 스펙트럼으로 일을 주도적으로 하였습니다. 프로젝트 구축 당시 주로 React와 SCSS, CSS를 사용하였으며 백엔드 개발자와 지속적인 소통과 협업을 통해 프론트엔드 개발자로서 많은 성장을 이룰 수 있었습니다.",
  },
  {
    date: "2022.01 ~ 2022.11",
    company: "오픈오브젝트",
    role: "Front-End Developer",
    description:
      "주로 카드사와 정부기관등을 상대로 웹과 모바일 서비스 개발하는 SI솔루션 업체입니다. 주로 HTML/CSS와 Vue언어를 사용하여 퍼블리싱 업무를 담당하였으며, 지속적인 코드리뷰로 깔끔하게 정리된 코드를 작성할 수 있도록 노력하였습니다.",
  },
  {
    date: "2022.04 ~ 2022.08",
    company: "신한Card 프로젝트",
    role: "Front-End Developer",
    description:
      "공통 컴포넌트 제작, Javascript를 사용하여 tab기능 구현, 기획과 디자인에 적합한 페이지 제작을 담당하였습니다.",
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">그동안 쌓아온 경력을 소개합니다</p>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <span className="experience-date">{exp.date}</span>
            <div className="experience-info">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
