import { useState } from "react";

const experiences = [
  {
    date: "2024.06 ~ ",
    company: "나나성형외과",
    role: "Front-End Developer",
    projects: [
      {
        name: "프로젝트명 예시",
        description: "프로젝트 설명을 입력하세요.",
        skills: ["React", "SCSS"],
      },
    ],
  },
  {
    date: "2023.01 ~ 2024.01",
    company: "메이드웰넷",
    role: "Front-End Developer",
    projects: [
      {
        name: "회사 소개 페이지 구축",
        description: "프로젝트 설명을 입력하세요.",
        skills: ["React", "Typescript", "SCSS"],
      },
      {
        name: "반찬 쇼핑몰 유지보수",
        description: "React(CSR) -> Next.js(SSR) 마이그레이션",
        description2: "장바구니 및 결제기능 도입",
        skills: ["Next.js", "React", "Typescript", "Tailwind CSS"],
      },
      {
        name: "인테리어 중개 플랫폼 구축",
        description: "프론트엔드 단독 개발 및 AWS 배포 진행",
        description2: "어드민 대시보드에서 user 신청 데이터 관리",
        description3: "회원가입 시 사업자 Validation 개발",
        description4:
          "Search Console, Google Tag Manager, SNS Login 등 Third-Party 연동",
        skills: ["React", "Typescript", "SCSS"],
      },
    ],
  },
  {
    date: "2022.01 ~ 2022.11",
    company: "오픈오브젝트",
    role: "Front-End Developer",
    projects: [
      {
        name: "신한카드 ODS 구축",
        description: "code push 전 실시간 코드리뷰 진행",
        description2: "개발 문서 작성(directory 경로, assets 규격 등)",
        description3: "Waterfall 개발 프로세스 적용",
        description4: "단위 테스트 ~ 통합 테스트 진행",
        skills: ["Vue.js", "Javascript", "SCSS"],
      },
      {
        name: "신한카드 Partners 유지보수",
        description: "Code Refactoring 진행",
        description2: "SEO, 성능 개선",
        skills: ["Javascript", "JQuery", "SCSS"],
      },
    ],
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
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                </div>
              </div>
              {exp.projects.length > 0 && (
                <div className="experience-projects">
                  {exp.projects.map((project, pIndex) => (
                    <div className="experience-project" key={pIndex}>
                      <h4>{project.name}</h4>
                      <p className="project-description">
                        {project.description}
                        {project.description2 && (
                          <>
                            <br />
                            {project.description2}
                          </>
                        )}
                        {project.description3 && (
                          <>
                            <br />
                            {project.description3}
                          </>
                        )}
                        {project.description4 && (
                          <>
                            <br />
                            {project.description4}
                          </>
                        )}
                      </p>
                      {project.skills.length > 0 && (
                        <div className="project-skills">
                          {project.skills.map((skill, sIndex) => (
                            <span className="project-skill" key={sIndex}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
