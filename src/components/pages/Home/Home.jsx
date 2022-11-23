import React from 'react'
import { logout } from '../../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '../../layout/Container'
import img1 from '../../../assets/img/logo.png'
import { useParams } from 'react-router-dom'
const Home = ({auth: {user}}) => {

  const xd = window.location.href
  console.log(xd)
  return (
    <Container>
             <div class="midde_cont">
                  <div class="container-fluid">
                     <div class="row column_title">
                        <div class="col-md-12">
                           <div class="page_title">
                              <h2>Dashboard</h2>
                           </div>
                        </div>
                     </div>
                     
                  </div>
               </div>
    </Container>
  )
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
}) 

export default connect(mapStateToProps)(Home)