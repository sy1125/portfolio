const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video
        className="video-bg"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/assets/videos/main.mp4" type="video/mp4" />
      </video>
      <div className="section">
        <p className="hero-intro">Front-End Developer</p>
        <h1 className="hero-title">
          Now I am<br />
          a <span className="accent">Front-End</span><br />
          Developer
        </h1>
        <p className="hero-description">
          노력하는 개발자의 이야기를 들어주세요.<br />
          더 나은 수준의 개발자로 향하기 위해 끊임없이 도전합니다.
        </p>
        <div className="hero-info">
          <div className="hero-info-item">
            <span className="label">Location</span>
            <span className="value">Seoul, Korea</span>
          </div>
          <div className="hero-info-item">
            <span className="label">Email</span>
            <span className="value">qnfto7898@gmail.com</span>
          </div>
          <div className="hero-info-item">
            <span className="label">Focus</span>
            <span className="value">React / Front-End</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
