const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle">노력하는 개발자의 이야기</p>
      <div className="about-content">
        <div className="about-text">
          안녕하세요. 더욱 더 나아가고자 하는 <b>Front-End 개발자</b>입니다.<br /><br />
          <b>"아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다."</b><br /><br />
          제가 마음속에서 품고있는 문장입니다.
          Front 분야에 만족하지 않고 더 나아가 Back-End 분야에도 관심을 가지고 있습니다.<br /><br />
          퍼블리셔의 직무 경험을 바탕으로 <b>협업경험</b>을 쌓았으며,
          그에 안주하지 않고 계속해서 <b>새로운 배움</b>을 추구하는 노력과 열정은 저에게 도전의식과 함께,
          제가 <b>더 나은 수준의 개발자</b>로 향하는 데에 있어 큰 도움이 되었습니다.
        </div>
        <div className="about-links">
          <a className="about-link" href="https://velog.io/@tjsdyd7898" target="_blank" rel="noopener noreferrer">
            <span>Blog</span>
            <span className="arrow">&rarr;</span>
          </a>
          <a className="about-link" href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <span className="arrow">&rarr;</span>
          </a>
          <a className="about-link" href="mailto:qnfto7898@gmail.com">
            <span>Email</span>
            <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
