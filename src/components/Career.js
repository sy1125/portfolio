import CareerCover from "./CareerCover";
import CareerText from "./CareerText";

const Career = () => {
  return (
    <div className="career">
      <CareerCover />
      <div className="content">
        <p className="title">Career</p>
        <p className="subtitle">그동안 쌓아온 경력을 소개합니다</p>
        <CareerText />
      </div>
    </div>
  )
}
export default Career;