import React from "react";
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import imgUser from '../../assets/images/layout_img/user_img.jpg'
import { Link } from "react-router-dom";

const Container = ({ children, logout}) => {



    //console.log(children)
  return (

    <>
    <div class="full_container">
         <div class="inner_container">
    
            <nav id="sidebar">
               <div class="sidebar_blog_1">
               
                  <div class="sidebar_user_info">
                     <div class="icon_setting"></div>
                     <div class="user_profle_side">
                        <div class="user_img"><img class="img-responsive" src={imgUser} alt="#" /></div>
                        <div class="user_info">
                           <h6>John David</h6>
                           <p><span class="online_animation"></span> Online</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sidebar_blog_2">
                  <h4>General</h4>
                  <ul class="list-unstyled components">
                    
                     <li><Link to="/Home"><i class="fa fa-briefcase blue1_color"></i> <span>HOME</span></Link></li>
                     
                   
                     <li><Link to="/materias"><i class="fa fa-map purple_color2"></i> <span>MATERIAS</span></Link></li>
                     <li><Link to="/anuncios"><i class="fa fa-bar-chart-o green_color"></i> <span>ANUNCIOS</span></Link></li>
                     <li><Link to="/lista-alumnos"><i class="fa fa-cog yellow_color"></i> <span>LISTA DE ALUMNOS</span></Link></li>
                  </ul>
               </div>
            </nav>

            <div id="content">
      
               <div class="topbar">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <div class="full">
                        <button type="button" id="sidebarCollapse" class="sidebar_toggle"><i class="fa fa-bars"></i></button>
                      
                        <div class="right_topbar">
                           <div class="icon_info">
                              <ul>
                                 <li><a href="#"><i class="fa fa-bell-o"></i><span class="badge">2</span></a></li>
                                 <li><a href="#"><i class="fa fa-question-circle"></i></a></li>
                                 <li><a href="#"><i class="fa fa-envelope-o"></i><span class="badge">3</span></a></li>
                              </ul>
                              <ul class="user_profile_dd">
                                 <li>
                                    <a class="dropdown-toggle" data-toggle="dropdown"><img class="img-responsive rounded-circle" src={imgUser} alt="#" /><span class="name_user">John David</span></a>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="profile.html">My Profile</a>
                                       <a class="dropdown-item" href="settings.html">Settings</a>
                                       <a class="dropdown-item" href="help.html">Help</a>
                                       <a class="dropdown-item"  onClick={logout}><span>Cerrar sesion</span> <i class="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
     
              <div class="midde_cont">
                 {children}
               </div>
         
            </div>
         </div>
      </div>
    </>
    
  );
};

Container.propTypes = {
    logout : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  }) 
  
  export default connect(mapStateToProps, {logout})(Container)
