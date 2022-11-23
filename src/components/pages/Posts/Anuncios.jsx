import PropTypes from "prop-types";
import react, { useEffect } from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { getPosts, eliminarAnuncio } from "../../../actions/anuncios";
import Container from "../../layout/Container";
import "./Styles/Anuncios.css";

const Anuncios = ({ getPosts,eliminarAnuncio, auth, anuncio: { anuncios,loading } }) => {
  
  useEffect(() => {
    getPosts();
  }, []);

  //console.log(anuncios)
  //console.log(anuncios)
  return (
    <Container>
      {
        loading || anuncios == [] ? <div>Cargando...</div>:
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-primary">Anuncios</h1>
            <p className="lead">
              <i className="fas fa user">Estos Anuncios son Globales</i>
            </p>
            {
              !auth?.loading && auth?.user?.perfiles[0].tipo[0].administrador === true &&
              <div class="col-11">
              <div class="text-end upgrade-btn">
                <Link to="/publicar-anuncio" class="btn btn-success text-white">
                  + Anuncio
                </Link>
              </div>
            </div>
            
            }
            <hr></hr>
            { anuncios && anuncios?.length > 0 ? (
              <div className="row">
                {anuncios.map((item) => {
                  return (
                    <div className="col-md-8">
                      <div className="media g-mb-30 media-comment">
                        <img
                          className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Image Description"
                        />
                        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                          <div className="g-mb-15">
                            { !auth?.loading && item?.autorNombre?._id === auth?.user?._id &&
                              <div class="col-11">
                              <div class="text-end upgrade-btn">
                                <buttom
                                  class="btn btn-danger text-white"
                                  onClick={(e) => { 
                                    eliminarAnuncio(item?._id)
                                    getPosts();
                                  }}
                                >
                                  <i class="m-r-10 mdi mdi-delete-forever"></i> Eliminar
                                </buttom>
                              </div>
                            </div>
                            }
                            <h5 className="h5 g-color-gray-dark-v1 mb-0">
                              {item?.autorNombre?.nombre}{" "}
                              {item?.autorNombre?.apellido}
                            </h5>
                            <span className="g-color-gray-dark-v4 g-font-size-12">
                              {item?.fecha}
                            </span>
                          </div>
                          <br></br>
                          {/* {
                            item.imagenURL ? 
                            <img src={item.imagenURL} alt="Portada" style={{maxWidth:"90%", maxHeight:"90%"}}></img>
                            : null
                          }
                          <br></br><br></br> */}
                          <p><strong>{item?.contenido}</strong></p>

                          <ul className="list-inline d-sm-flex my-0">
                            <li className="list-inline-item g-mr-20">
                              <a
                                className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                href="#!"
                              >
                                <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>{" "}
                                178
                              </a>
                            </li>
                            <li className="list-inline-item g-mr-20">
                              <a
                                className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                href="#!"
                              >
                                <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>{" "}
                                34
                              </a>
                            </li>
                            <li className="list-inline-item ml-auto">
                              <a
                                className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                href="#!"
                              >
                                <i className="m-r-10 mdi mdi-comment-processing-outline"></i>{" "}
                                Ver Comentarios
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                    
                  );
                })}
              </div>
            ) : (
              <p>No hay ninguna publicacion todavia</p>
            )}
          </div>
        </div>
      }
    </Container>
  );
};

Anuncios.propTypes = {
  getPosts: PropTypes.func.isRequired,
  anuncios: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
  eliminarAnuncio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anuncio: state.anuncios,
  auth: state.auth
});

export default connect(mapStateToProps, { getPosts, eliminarAnuncio })(Anuncios);
