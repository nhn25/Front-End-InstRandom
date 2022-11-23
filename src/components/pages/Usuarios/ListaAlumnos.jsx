import PropTypes from "prop-types";
import react, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlumnos } from "../../../actions/usuarios";
import Container from "../../layout/Container";

const ListaAlumnos = ({ getAlumnos, alumno: { usuarios } }) => {
    useEffect(() => {
      getAlumnos();
    }, [getAlumnos]);
  
    console.log(usuarios);
  return (
    <Container>
            <div className="container-fluid">
            <div class="col-11">
              <div class="text-end upgrade-btn">
                <a
                  href="https://www.wrappixel.com/templates/flexy-bootstrap-admin-template/"
                  class="btn btn-success text-white"
                >
                  + Alumno
                </a>
              </div>
              
            </div>
            <br></br>
            <div class="row">
                    
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                
                                <div class="d-md-flex">
                                    <div>
                                        <h4 class="card-title">Lista de alumnos del instituto</h4>
                                        <h5 class="card-subtitle">Selecciona una carrara para organizar mejor</h5>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="dl">
                                            <select class="form-select shadow-none">
                                                <option value="0" selected disabled>Carreras</option>
                                                <option value="1">Desarrollo De Software</option>
                                                <option value="2">Mecatronica</option>
                                                <option value="3">Telecomunicacion</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="table-responsive">
                                    <table class="table mb-0 table-hover align-middle text-nowrap">
                                        <thead>
                                        <tr>
                                                <th class="border-top-0">Alumno</th>
                                                <th class="border-top-0">DNI</th>
                                                <th class="border-top-0">Email</th>
                                                <th class="border-top-0">Carrera</th>
                                                <th class="border-top-0">Tickets</th>
                                                <th class="border-top-0">Sales</th>
                                                <th class="border-top-0">Detalles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usuarios.map((item) => {
                                                    return(
                                                        <tr>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                {/* <div class="m-r-10"><a
                                                                        class="btn btn-circle d-flex btn-info text-white">EA</a>
                                                                </div> */}
                                                                
                                                                <div class="">
                                                                    <h4 class="m-b-0 font-16">{' '}{item.nombre} {item.apellido}</h4>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{item.dni}</td>
                                                        <td>{item.email}</td>
                                                        <td>
                                                            <label class="badge bg-success">DS</label>
                                                        </td>
                                                        <td>#</td>
                                                        <td>#</td>
                                                        <td>
                                                            <button class="m-b-0 btn btn-warning">Ver</button>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
  )
}

ListaAlumnos.propTypes = {
    getAlumnos: PropTypes.func.isRequired,
    usuarios: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    alumno: state.usuarios,
  });
  
  export default connect(mapStateToProps, { getAlumnos })(ListaAlumnos);