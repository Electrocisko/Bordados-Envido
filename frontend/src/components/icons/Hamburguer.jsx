import PropTypes from "prop-types";

function Hamburguer(props) {
  return (
  <>
 <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg"><g fill={props.color} fillRule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>
  </>
  )
}

Hamburguer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,

}

export default Hamburguer

//height 18 y widht 32