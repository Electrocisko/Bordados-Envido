import PropTypes from 'prop-types';

function Expand(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} height={props.height} viewBox="0 -960 960 960" width={props.width}><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
  )
}

Expand.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Expand

