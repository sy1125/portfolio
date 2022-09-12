const TechnicProgram = () => {
  return (
    <>
      <div className="program-area left">
        <div className="program-group">
          <img className="icon-program" src="/assets/images/React_icon@3x.png" alt="리액트" />
          <span className="program-title">React</span>
          <span className="subscribe">React 18v의 최신버전을 문제없이 사용할 수 있습니다.<br />
            function 바탕으로 Reack Hooks를 함께 사용하여 기존 Class바탕의 중복된 코드를 작성할 필요없이 React의 여러 기능을 사용할 수 있습니다.
          </span>
        </div>
        <div className="program-group">
          <img className="icon-program" src="/assets/images/Html_icon@3x.png" alt="HTML및CSS" />
          <span className="program-title">HTML/CSS</span>
          <span className="subscribe">웹표준과 웹접근성을 지키는 데에 늘 노력하고 있습니다.<br />
            크로스브라우징에 동등성을 부여하기위해 늘 노력하고 있습니다.<br />
            협업하는데에 문제가 생기지 않게끔 CSS 작성 순서를 지키고 있습니다.<br />
            SCSS 문법을 사용하는 데에 있어 익숙합니다.
          </span>
        </div>
      </div>
      <div className="program-area right">
        <div className="program-group">
          <img className="icon-program" src="/assets/images/Vue_icon@3x.png" alt="리액트" />
          <span className="program-title">Vue</span>
          <span className="subscribe">안전성이 높은 Vue2를 사용하여 사내 가상프로젝트 경험이 있습니다.<br />
            CRUD에 최적화된 Todo-List를 제작한 경험이 있습니다.
          </span>
        </div>
        <div className="program-group">
          <img className="icon-program" src="/assets/images/JS_icon@3x.png" alt="HTML및CSS" />
          <span className="program-title">Javscript</span>
          <span className="subscribe">webpack, parcel 등의 번들러 사용경험이 있습니다.<br />
            ES6문법에 익숙합니다.
          </span>
        </div>
      </div>
    </>

  )
}
export default TechnicProgram;