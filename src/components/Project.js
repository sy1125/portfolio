import React, { useState } from "react";
import Cover from "./Cover";
import { cover } from "../util/Data";
import { ListButton } from "../util/Data";
import { getList, filterContent } from "../util/ListFilter";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';

const data = [
  {
    webLink: 'https://velog.io/@tjsdyd7898/%EC%8B%A0%EC%9E%85-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94%EC%9D%98-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0',
    git: null,
  },
  {
    webLink: 'https://perfumetest-sy.web.app',
    git: 'https://github.com/sy1125/perfumeTest',
  },
  {
    webLink: 'https://seonyong-react-diary.web.app',
    git: 'https://github.com/sy1125/Emotion-Diary',
  },
  {
    webLink: 'https://todolist-vue-sy.web.app',
    git: 'https://github.com/sy1125/todolist-vue',
  },
  {
    webLink: 'https://qnfto7898.cafe24.com/web/vanilaPractice/index.html',
    git: 'https://github.com/sy1125/vanilaPractice',
  },
  {
    webLink: null,
    git: 'https://github.com/sy1125/react-native-weather',
  },
  {
    webLink: 'https://expo.dev/@leeseonyong/WorkHardTravelHardApp?serviceType=classic&distribut',
    git: 'https://github.com/sy1125/Work-Travel-App',
  },
]

const Project = () => {
  const [filtredContent, setFiltredContent] = useState(null);
  const [active, setActive] = useState(-1);
  function handleList(name, index) {
    name !== "" ? setFiltredContent(filterContent(name)) : setFiltredContent(getList());
    setActive(index);
  }
  return (
    <div className="project">
      <Cover cover={cover.project} />
      <div className="content">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
          <p className="title">Project</p>
          <p className="subtitle">진행했던 프로젝트를 소개합니다</p>
          <div className="list-area">
            <div className="btn-group">
              {ListButton &&
                ListButton.map((type, index) => (
                  <button className={`btn-list ${active === index ? 'active' : ''}`} key={index} value={type.name} onClick={(e) => { handleList(e.target.value, index); }}>
                    {type.name}
                  </button>
                ))}
            </div>
            {filtredContent &&
              filtredContent.map((type) => (
                <ul className="list-content" key={type.id}>
                  <li className="list-title">{type.nome}</li>
                  <li className="list-text">{type.text}</li>
                  <li className="list-icon">
                    {
                      <div>
                        {
                          data[type.id - 1].git != null ?
                            <a href={data[type.id - 1].git} target="_blank" rel="noopener noreferrer">
                              <img src="/assets/images/github_logo.png" alt="깃허브" />
                            </a>
                            : null
                        }
                        {
                          data[type.id - 1].webLink != null ?
                            <a href={data[type.id - 1].webLink} target="_blank" rel="noopener noreferrer">
                              <img src="/assets/images/web_icon.png" alt="웹" />
                            </a>
                            : null
                        }
                      </div>
                    }
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