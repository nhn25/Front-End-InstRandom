import {
  GET_ANUNCIOS,
  LIMPIAR_ANUNCIO,
  ERROR_ANUNCIO,
  AGREGAR_ANUNCIO,
  ELIMINAR_PUBLICACION,
  GET_ANUNCIOS_MATERIA,
  AGREGAR_ANUNCIO_MATERIA,
  LIMPIAR_ANUNCIOS_MATERIA,
  ELIMINAR_COMENTARIO,
  ERROR_COMENTARIOS,
  AGREGAR_COMENTARIO
} from "../actions/types";

const initialState = {
  anuncios: [],
  anunciosMateria: [],
  loadingMateria: true,
  anuncio: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANUNCIOS:
      return {
        ...state,
        anuncios: payload,
        loading: false,
      };
    case GET_ANUNCIOS_MATERIA:
      return {
        ...state,
        anunciosMateria: payload,
        loadingMateria: false,
      };
    case LIMPIAR_ANUNCIO:
      return {
        ...state,
        anuncios: payload,
        loading: false,
      };
    case LIMPIAR_ANUNCIOS_MATERIA:
      return {
        ...state,
        anunciosMateria: [],
        loading: false,
      };
    case ERROR_ANUNCIO:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ERROR_COMENTARIOS:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case AGREGAR_ANUNCIO_MATERIA:
      return {
        ...state,
        anunciosMateria: [payload, ...state.anunciosMateria],
        loading: false,
      };
    case AGREGAR_ANUNCIO:
      return {
        ...state,
        anuncios: [payload, ...state.anuncios],
        loading: false,
      };
    case AGREGAR_COMENTARIO:
      return {
        ...state,
        anunciosMateria: [payload, ...state.anunciosMateria.comentarios],
        loadingMateria: false,
      };
    case ELIMINAR_PUBLICACION:
      return {
        ...state,
        anuncios: state.anuncios.filter((item) => item._id != payload),
        loading: false,
      };
    case ELIMINAR_COMENTARIO:
      return {
        ...state,
        anunciosMateria: state.anunciosMateria.filter((item) => item.comentarios._id != payload),
        loading: false,
      };
    default:
      return state;
  }
}
