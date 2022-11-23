import React, { useEffect, useState } from "react";
import Container from "../../layout/Container";
import { Link, useHistory } from "react-router-dom";
import "./styles/DetallesMateria.css";
import { getMateriaById, limpiarMateria } from "../../../actions/materias";
import { getAnunciosMateria } from "../../../actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderMateria from "./Views/HeaderMateria";
import './styles/Inasistencias.css'
const InasistenciaMateria = ({
  auth,
  getAnunciosMateria,
  anunciosMateria: { anunciosMateria, loadingMateria },
  getMateriaById,
  limpiarMateria,
  materia: { materia, loading },
  match,
}) => {
  const history = useHistory();
  useEffect(() => {
    getMateriaById(match.params.id);
  }, [getMateriaById]);
  useEffect(() => {
    getAnunciosMateria(match.params.id);
  }, [getAnunciosMateria]);

  //console.log(anunciosMateria);
  //console.log(loadingMateria)

  return (
    <Container>
      {loading || materia === null ? (
        <div>
          <h1>Cargando..</h1>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="container">
            <div className="profile-env">
              <button
                className="btn btn-warning"
                onClick={() => {
                  history.goBack();
                  limpiarMateria();
                }}
              >
                Volver
              </button>
              <br></br><br></br>
              <hr></hr><hr></hr>
              <HeaderMateria
              descripcionMateria= {materia.descripcionMateria}
              profTitular = {`${materia.profTitular.nombre}  ${materia.profTitular.apellido}`}
              profAux = {`${materia.profAux.nombre}  ${materia.profAux.apellido}`}
              idMateria = {materia._id}
              rol={auth.user.perfiles[0].tipo[0]}
              classEstado = "active"
              />
              <section className="profile-Notas">
                
              <div className="row d-flex justify-content-center mt-100 mb-100">
                        
                                  
                        <div className="col-lg-6">
                          {/*  //className="card" */}
                          <div className="card-body text-center">
                                <h4 className="card-title m-b-0">TUS INASISTENCIAS EN LA CLASE</h4>
                                {/* <h6>Tienes {inasistenciaNro} en esta clase</h6> */}
                            </div>
                           {materia?.inasistencia.length > 0 && materia?.inasistencia.map((item)=>{
                            
                            //console.log(item.idUser)
                            return(
                              <div >
                            
                            {!auth?.loading && item?.idUser === auth?.user?._id &&(
                              <>                        
                              <ul className="list-style-none">
                                <li className="d-flex no-block card-body">
                                    <i className="fa fa-check-circle w-30px m-t-5"></i>
                                    <div>
                                        <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Falta Registrada</a>
                                        <span className="text-muted">Fecha: {item.dia} </span>
                                    </div>
                                </li>
                            </ul>
                              </>
                            )

                            }
                            
                        </div>
                            )
                           })
                           }
                       </div>
                       </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

InasistenciaMateria.propTypes = {
  getMateriaById: PropTypes.func.isRequired,
  limpiarMateria: PropTypes.func.isRequired,
  materia: PropTypes.object.isRequired,
  getAnunciosMateria: PropTypes.func.isRequired,
  anunciosMateria: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  materia: state.materias,
  anunciosMateria: state.anuncios,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getMateriaById,
  limpiarMateria,
  getAnunciosMateria,
})(InasistenciaMateria);