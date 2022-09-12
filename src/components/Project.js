import React, { useState } from "react";
import ProjectCover from "./ProjectCover";
import { ListButton } from "../util/Data";
import { getList, filterContent } from "../util/ListFilter";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';
const Project = () => {
  const [filtredContent, setFiltredContent] = useState(null);
  function handleList(e) {
    let typeList = e.target.value;
    typeList !== "" ? setFiltredContent(filterContent(typeList)) : setFiltredContent(getList());
  }
  return (
    <div className="project">
      <ProjectCover />
      <div className="content">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="title">Project</p>
          <p className="subtitle">진행했던 프로젝트를 소개합니다</p>
          <div className="list-area">
            <div className="btn-group">
              {ListButton &&
                ListButton.map((type, index) => (
                  <button className="btn-list" key={index} value={type.name} onClick={handleList}>
                    {type.name}
                  </button>
                ))}
            </div>
            {filtredContent &&
              filtredContent.map(type => (
                <ul className="list-content" key={type.id}>
                  <li className="list-title">{type.nome}</li>
                  <li className="list-text">{type.text}</li>
                  <li className="list-icon">{type.id === 1 ? <div><a href="https://velog.io/@tjsdyd7898/%EC%8B%A0%EC%9E%85-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94%EC%9D%98-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                    type.id === 2 ? <div><a href="https://github.com/sy1125/perfumeTest" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://perfumetest-sy.web.app" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                      type.id === 3 ? <div><a href="https://github.com/sy1125/Emotion-Diary" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://seonyong-react-diary.web.app/" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                        type.id === 4 ? <div><a href="https://github.com/sy1125/todolist-vue" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                          type.id === 5 ? <div><a href="https://github.com/sy1125/vanilaPractice" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> : null}
                  </li>
                </ul>
              ))}
          </div>
        </AnimationOnScroll>
      </div>
    </div >
  )
}
export default Project;