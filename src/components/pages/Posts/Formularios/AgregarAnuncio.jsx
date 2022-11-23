import React, { useEffect, useState } from "react";
import Container from "../../../layout/Container";
import { crearAnuncio, limpiarAnuncios } from "../../../../actions/anuncios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  Redirect, useHistory } from "react-router-dom";
import '../../Materias/styles/DetallesMateria.css'

const AgregarAnuncio = ({ crearAnuncio, limpiarAnuncios }) => {
  const [contenido, setContenido] = useState("");
  const [tipo, setTipo] = useState("Global");
  const [imagenURL, setImagenURL] = useState("https://media.infocielo.com/p/2a4cf89db4744e221bfbf49d95a69712/adjuntos/299/imagenes/001/533/0001533489/887x0/smart/escuelas-mundialjpg.jpg");
  const [anuncioEnviado, setAnuncioEnviado] = useState(false);

  useEffect(()=>{
    return <Redirect to='/anuncios' />
  },[anuncioEnviado])

  const history = useHistory()
  
  return (
    <Container>
      <div className="container-fluid">
        <div className="container">
          <div className="containerLogin"></div>
          <div className="profile-env">
          <section className="profile-feed"> 
          <form 
                    className="profile-post-form" 
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      crearAnuncio({ contenido,tipo,imagenURL });
                      setContenido("");
                      setAnuncioEnviado(!anuncioEnviado)
                      history.goBack()
                      limpiarAnuncios()
                    }}
                    >
                    <textarea
                      className="form-control autogrow"
                      placeholder="Que quieres publicar?"
                      style={{
                        overflow: "hidden",
                        wordWrap: "break-word",
                        resize: "horizontal",
                        height: "80px",
                      }}
                      name="contenido"
                      required
                      value={contenido}
                      onChange={(e)=>setContenido(e.target.value)}
                    ></textarea>
                    <div className="form-options">
                      <div className="post-submit">
                        <button type="submit" className="btn btn-success text-white">
                          Publicar
                        </button>
                      </div>
                    </div>
                  </form>
          </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

AgregarAnuncio.propTypes = {
    crearAnuncio: PropTypes.func.isRequired,
    limpiarAnuncios: PropTypes.func.isRequired,
}

export default connect(null, {crearAnuncio,limpiarAnuncios})(AgregarAnuncio)
