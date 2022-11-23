import axios from 'axios'

import { 
GET_MATERIAS,
LIMPIAR_MATERIA,
ERROR_MATERIA,
GET_MATERIA_UNICA,

} from "./types"; 

export const getMaterias = () => async dispatch => {

    dispatch({type: LIMPIAR_MATERIA})
    try {
        const res = await axios.get('http://localhost:4000/api/ver-materias')
        console.info(res)
        dispatch({
            type: GET_MATERIAS,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_MATERIA,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}

//Ver Unica Materia
export const getMateriaById = id => async dispatch => {
   
    /* dispatch({type: LIMPIAR_MATERIA}) */
    //console.log(id)
    try {
        
        const res = await axios.get(`http://localhost:4000/api/ver-materia/${id}`)
        
       // console.log('PROFILE=>', res)
        
        dispatch({
            type: GET_MATERIA_UNICA,
            payload: res.data
        })

    } catch (err) {
        console.log('ERROR=>',err)
        dispatch({
            type: ERROR_MATERIA,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}

//Clear selected post
export const limpiarMateria = () => {
    dispatch({
        type: LIMPIAR_MATERIA,
        payload: null
    })
}