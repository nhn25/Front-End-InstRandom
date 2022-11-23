import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMateria = ({descripcionMateria,profTitular,profAux, idMateria, rol, classEstado }) => {
  return (
    <div>
<header className="row">
                {/* <div className="profile-picture2">
                <img  src="https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/lenguajes-de-programacion-1024x572.jpeg"></img>
                </div> */}
              </header>
              <section className="profile-info-tabs">
                <div className="row">
                  <div className="col-sm-offset-2 col-sm-10" align="center">
                    <ul className="user-details">
                      <li>
                        <h1>
                          <strong style={{ textTransform: "uppercase" }}>
                            {descripcionMateria ? descripcionMateria : null}
                          </strong>
                        </h1>
                      </li>
                      <li>
                        <a href="#">
                          <i className="entypo-suitcase"></i>
                          Profesor Titular:
                          <span>
                            {" "}
                            {profTitular ? profTitular : null}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="entypo-calendar"></i>
                          Profesor Auxiliar:
                          <span>
                            {" "}
                            {profAux ? profAux : null}
                          </span>
                        </a>
                      </li>
                    </ul>

                    <ul className="nav nav-tabs" align="center">
                      <li className={classEstado}>
                        <Link to={`/detalles-materia/${idMateria ? idMateria : null}`}>Anuncios</Link>
                      </li>
                      <li >
                        <Link to={`/NotasMateria/${idMateria ? idMateria : null}`}>{rol?.alumno === true ? "Tus Notas" : "Notas"}</Link>
                      </li>
                      <li >
                        <Link to={`/InasistenciaMateria/${idMateria ? idMateria : null}`}>Inasistencias</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default HeaderMateria