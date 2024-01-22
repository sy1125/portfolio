import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';
const MyStory = () => {
  return (
    <div className="story">
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <div className="content">
          <p className="title">My Story</p>
          <p className="subtitle">노력하는 개발자의 이야기를 들어주세요</p>
          <img className="icon-fe" src="/assets/images/FE_icon@3x.png" alt="프론트엔드" />
          <p className="text">안녕하세요. 더욱 더 나아가고자 하는 <b>Front-End 개발자</b> 입니다.<br />
            <b>“아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다.”</b><br />
            제가 마음속에서 품고있는 문장입니다.<br />
            Front 분야에 만족하지 않고 더 나아가 Back-End 분야에도 관심을 가지고 있습니다.<br />
            퍼블리셔의 직무 경험을 바탕으로 <b>협업경험</b>을 쌓았으며,<br />
            그에 안주하지 않고 계속해서 <b>새로운 배움</b>을 추구하는 노력괴 열정은 저에게 도전의식과 함께,<br />
            제가 <b>더 나은 수준의 개발자</b>로 향하는 데에 있어 큰 도움이 되었습니다.</p>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce delay={500}>
          <ul className="link">
            <li><a href="https://velog.io/@tjsdyd7898" target="_blank" rel="noopener noreferrer">BLOG</a></li>
            <li><a href="mailto:qnfto7898@gmail.com" target="_blank" rel="noopener noreferrer">MAIL</a></li>
            <li><a href="https://github.com/sy1125" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          </ul>
        </AnimationOnScroll>
      </AnimationOnScroll>
    </div >
  )
}
export default MyStory;