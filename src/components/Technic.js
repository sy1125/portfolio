import Cover from "./Cover";
import { cover } from "../util/Data";
import TechnicProgram from "./TechnicProgram";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';
const Technic = () => {
  return (
    <div className="technic">
      <Cover cover={cover.technic} />
      <div className="content">
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
          <p className="title">Technic</p>
          <p className="subtitle">현재 다룰 수 있는 기술입니다</p>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce delay={500}>
            <TechnicProgram />
          </AnimationOnScroll>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
export default Technic;