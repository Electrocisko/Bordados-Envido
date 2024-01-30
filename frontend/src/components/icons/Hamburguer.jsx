/* eslint-disable react/prop-types */


function Hamburguer(props) {
  return (
  <>
 <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg"><g fill={props.color} fillRule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>
  </>
  )
}

export default Hamburguer

//height 18 y widht 32