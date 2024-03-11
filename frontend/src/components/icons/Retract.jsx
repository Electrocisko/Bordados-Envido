import PropTypes from "prop-types";


function Retract(props) {
  return (
    <svg fill={props.fill} xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg>
  )
}

Retract.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Retract