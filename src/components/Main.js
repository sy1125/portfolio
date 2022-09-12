import MainCover from "./MainCover";
const Main = () => {
  return (
    <div className="main">
      <MainCover />
      <div className="content">
        <video autoPlay={true} playsInline={true} muted={true} loop={true} >
          <source src="/assets/videos/main.mp4" type="video/mp4" />
        </video>
        <h2 className="main-title">Now I am<br />
          a Front-End Developer</h2>
      </div>
    </div>
  )
}
export default Main;
