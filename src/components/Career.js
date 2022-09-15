import Cover from "./Cover";
import { cover } from "../util/Data";
import CareerText from "./CareerText";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';

const Career = () => {
  return (
    <div className="career">
      <Cover cover={cover.career} />
      <div className="content">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
          <p className="title">Career</p>
          <p className="subtitle">그동안 쌓아온 경력을 소개합니다</p>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce delay={500}>
            <CareerText />
          </AnimationOnScroll>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
export default Career;