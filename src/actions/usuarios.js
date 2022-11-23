import axios from 'axios'

import { 
GET_ALUMNOS,
LIMPIAR_ALUMNO,
ERROR_ALUMNO
} from "./types"; 

export const getAlumnos = () => async dispatch => {

    dispatch({type: LIMPIAR_ALUMNO})

    try {
        const res = await axios.get('http://localhost:4000/api/traer-alumnos')
        console.info(res)
        dispatch({
            type: GET_ALUMNOS,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_ALUMNO,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}