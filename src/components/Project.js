import React, { useState } from "react";
import ProjectCover from "./ProjectCover";
import { ListButton } from "../util/Data";
import { getList, filterContent } from "../util/ListFilter";

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
                <li className="list-icon">{type.id === 1 ? <div><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                  type.id === 2 ? <div><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                    type.id === 3 ? <div><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                      type.id === 4 ? <div><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> :
                        type.id === 5 ? <div><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/github_logo.png" alt="깃허브" /></a><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer"> <img src="/assets/images/web_icon.png" alt="웹" /></a></div> : null}
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div >
  )
}
export default Project;