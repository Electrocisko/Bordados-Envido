import PropTypes from "prop-types";

function Logo({height}) {

  return (
   <img src="./images/envidobordadospng.png" alt="Logo Bordados Envido"  height={height}/>
  )
}

Logo.propTypes = {
  height: PropTypes.string
}

export default Logo