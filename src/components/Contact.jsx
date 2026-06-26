const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-divider" style={{ marginBottom: '120px' }} />
      <div className="contact-content">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-text">
          새로운 기회나 협업에 대해 이야기 나누고 싶으시다면<br />
          언제든 연락해주세요.
        </p>
        <a className="contact-email" href="mailto:qnfto7898@gmail.com">
          qnfto7898@gmail.com
        </a>
        <div className="contact-links">
          <a className="contact-link-item" href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="contact-link-item" href="https://velog.io/@tjsdyd7898" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
