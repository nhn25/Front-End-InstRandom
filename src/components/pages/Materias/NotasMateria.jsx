import React, { useEffect, useState } from "react";
import Container from "../../layout/Container";
import { Link, useHistory } from "react-router-dom";
import "./styles/DetallesMateria.css";
import { getMateriaById, limpiarMateria } from "../../../actions/materias";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderMateria from "./Views/HeaderMateria";

const NotasMateria = ({
  auth,
  getMateriaById,
  limpiarMateria,
  materia: { materia, loading },
  match,
}) => {
  const history = useHistory();
  useEffect(() => {
    getMateriaById(match.params.id);
  }, [getMateriaById]);

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
              <br></br>
              <br></br>
              <hr></hr>
              <hr></hr>
              <HeaderMateria
                descripcionMateria={materia.descripcionMateria}
                profTitular={`${materia.profTitular.nombre}  ${materia.profTitular.apellido}`}
                profAux={`${materia.profAux.nombre}  ${materia.profAux.apellido}`}
                idMateria={materia._id}
                rol={auth.user.perfiles[0].tipo[0]}
                classEstado="active"
              />
              <section className="profile-Notas">
                <div className="container" align="center">
                    <h1>Las Notas Del Alumno: <strong>{auth.user.nombre} {auth.user.apellido}</strong></h1>
                    <h5>{}</h5>
                </div>
                <br></br>
                <div>
                  {materia.notas.map((item) => {
                    console.log(item);
                    return (
                      <>
                        {!auth.loading && item?.Alumno._id === auth.user._id && (
                           <div class="row">
                            <div className="container" align="center">
                        
                                <h5 style={{color:"green"}}><strong>{item.estado}</strong></h5>
                                <br></br>
                            </div>
                           <div class="col-lg-4 mb-4" align="center">
                               
                               <div class="card h-100 border-start-lg border-start-primary" >
                                   <div class="card-body">
                                       <div class="small text-muted">NOTA DEL PARCIAL 1</div><br></br>
                                       <div class="h3">Nota: {item.parcial1 > 5 ? <strong style={{color:"green"}}>{item.parcial1}</strong> : <strong style={{color:"red"}}>{item.parcial1}</strong>}</div>
                                       {item.parcial1 > 5 ? <a class="text-arrow-icon small text-success" >Aprobado</a> : <a class="text-arrow-icon small text-danger">Desaprobado</a>
                                       
                                           }
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-4 mb-4" align="center">
                               
                               <div class="card h-100 border-start-lg border-start-secondary" >
                                   <div class="card-body">
                                       <div class="small text-muted">NOTA DEL PARCIAL 2</div><br></br>
                                       <div class="h3">Nota: {item.parcial2 > 5 ? <strong style={{color:"green"}}>{item.parcial2}</strong> : <strong style={{color:"red"}}>{item.parcial2}</strong>}</div>
                                           {item.parcial2 > 5 ? <a class="text-arrow-icon small text-success" >Aprobado</a> : <a class="text-arrow-icon small text-danger">Desaprobado</a>
                                           }
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-4 mb-4"  align="center">
                              
                               <div class="card h-100 border-start-lg border-start-success">
                                   <div class="card-body">
                                       <div class="small text-muted">NOTA DEL PARCIAL 3</div><br></br>
                                       <div class="h3">Nota: {item.parcial3> 5 ? <strong style={{color:"green"}}>{item.parcial3}</strong> : <strong style={{color:"red"}}>{item.parcial3}</strong>}</div>
                                       {item.parcial3 > 5 ? <a class="text-arrow-icon small text-success" >Aprobado</a> : <a class="text-arrow-icon small text-danger">Desaprobado</a>
                                       
                                           }
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-4 mb-4"  align="center">
                              
                               <div class="card h-100 border-start-lg border-start-success">
                                   <div class="card-body">
                                       <div class="small text-muted">NOTA DEL RECUPERATORIO</div><br></br>
                                       <div class="h3">Nota: {item.recuperatorio> 5 ? <strong style={{color:"green"}}>{item.recuperatorio}</strong> : <strong style={{color:"red"}}>{item.recuperatorio}</strong>}</div>
                                       {item.recuperatorio > 5 ? <a class="text-arrow-icon small text-success" >Aprobado</a> : <a class="text-arrow-icon small text-danger">Desaprobado</a>
                                       
                                           }
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-4 mb-4"  align="center">
                              
                               <div class="card h-100 border-start-lg border-start-success">
                                   <div class="card-body">
                                       <div class="small text-muted">NOTA FINAL</div><br></br>
                                       <div class="h3">Nota: {item.final> 5 ? <strong style={{color:"green"}}>{item.final}</strong> : <strong style={{color:"red"}}>{item.final}</strong>}</div>
                                       {item.final > 5 ? <a class="text-arrow-icon small text-success" >Aprobado</a> : <a class="text-arrow-icon small text-danger">Desaprobado</a>
                                       
                                           }
                                   </div>
                               </div>
                           </div>
                           
                       </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

NotasMateria.propTypes = {
  getMateriaById: PropTypes.func.isRequired,
  limpiarMateria: PropTypes.func.isRequired,
  materia: PropTypes.object.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  materia: state.materias,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getMateriaById,
  limpiarMateria,
})(NotasMateria);
