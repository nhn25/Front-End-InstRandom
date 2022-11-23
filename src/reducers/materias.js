import { 
    GET_MATERIAS,
    LIMPIAR_MATERIA,
    ERROR_MATERIA,
    GET_MATERIA_UNICA,
    GET_ANUNCIOS_MATERIA,
    AGREGAR_ANUNCIO_MATERIA,
    LIMPIAR_ANUNCIOS_MATERIA,
} from "../actions/types"; 

const initialState = {
    materias: [],
    materia: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case GET_MATERIAS:
            return {
                ...state,
                materias: payload,
                loading: false
            }   
            case GET_MATERIA_UNICA:
            return {
                ...state,
                materia: payload,
                loading: false
            }
        case LIMPIAR_MATERIA:
            return {
                ...state,
                materia: null,
                loading: false
            } 
        case ERROR_MATERIA:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state         
    }

}