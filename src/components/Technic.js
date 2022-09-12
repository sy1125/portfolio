import TechnicCover from "./TechnicCover";
import TechnicProgram from "./TechnicProgram";

const Technic = () => {
  return (
    <div className="technic">
      <TechnicCover />
      <div className="content">
        <p className="title">Technic</p>
        <p className="subtitle">현재 다룰 수 있는 기술입니다</p>
        <TechnicProgram />
      </div>
    </div>
  )
}
export default Technic;