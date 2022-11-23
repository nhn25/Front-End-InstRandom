import React from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navbar = ({logout}) => {
  return (
    <div>


    </div>
  )
}
Navbar.propTypes = {
    logout : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  }) 
  
  export default connect(mapStateToProps, {logout})(Navbar)
