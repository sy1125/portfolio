import CareerCover from "./CareerCover";
import CareerText from "./CareerText";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';

const Career = () => {
  return (
    <div className="career">
      <CareerCover />
      <div className="content">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="title">Career</p>
          <p className="subtitle">그동안 쌓아온 경력을 소개합니다</p>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={500}>
            <CareerText />
          </AnimationOnScroll>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
export default Career;