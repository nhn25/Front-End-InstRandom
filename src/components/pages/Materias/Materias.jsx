import React from "react";
import Container from "../../layout/Container";
import "./styles/Materias.css";
import PropTypes from "prop-types";
import react, { useEffect } from "react";
import { connect } from "react-redux";
import { getMaterias } from "../../../actions/materias";
import { Link } from "react-router-dom";

const Materias = ({ getMaterias, materia: { materias } }) => {
  useEffect(() => {
    getMaterias();
  }, [getMaterias]);

  console.log(materias);
  return (
    <Container>
      <div className="container-fluid">
        <section class="wrapper">
          <div class="container-fostrap">
            <div class="col-11">
              <div class="text-end upgrade-btn">
                <a
                  href="https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/"
                  class="btn btn-success text-white"
                >
                  + Materia
                </a>
              </div>
              
            </div>
            <br></br>
            <div class="content">
              <div class="container">
                <div class="row">
                  {materias.map((item) => {
                    return (
                      <div class="col-xs-12 col-sm-4">
                        <div class="card">
                          <a class="img-card">
                            <img src="https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/lenguajes-de-programacion-1024x572.jpeg" />
                          </a>
                          <div class="card-content">
                            <h4 class="card-title" align="center">
                              <a> {item.descripcionMateria}</a>
                            </h4>
                            <h6 align="center">{item.carrera.nombreCarrera}</h6>
                            <p class="" align="center">
                              La materia esta a cargo de{" "}
                              <strong>
                                {item.profTitular.nombre}{" "}
                                {item.profTitular.apellido}
                              </strong>
                            </p>
                            <p class="" align="center">
                              La clase inicia a las:{" "}
                              <strong>{item.horarioIncio}</strong> y finaliza a
                              las: <strong>{item.horarioFinal}</strong>
                            </p>
                          </div>
                          <div class="card-read-more">
                            <Link to={`/detalles-materia/${item._id}`} class="btn btn-link btn-block">
                              INGRESAR
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

Materias.propTypes = {
  getMaterias: PropTypes.func.isRequired,
  materias: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  materia: state.materias,
});

export default connect(mapStateToProps, { getMaterias })(Materias);
