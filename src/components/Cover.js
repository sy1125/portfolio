const Cover = (props) => {
  return (
    <div className="cover">
      {props.cover.map((x, index) => {
        return <div key={index} className={x}></div>
      })
      }
    </div>
  )
}
export default Cover;