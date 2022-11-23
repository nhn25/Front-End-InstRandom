import axios from 'axios'

import { 
    GET_ANUNCIOS,
    GET_ANUNCIO_UNICA, 
    LIMPIAR_ANUNCIO,
    ERROR_ANUNCIO, 
    ELIMINAR_PUBLICACION,
    AGREGAR_ANUNCIO,
    GET_ANUNCIOS_MATERIA,
    AGREGAR_ANUNCIO_MATERIA,
    LIMPIAR_ANUNCIOS_MATERIA,
    ELIMINAR_COMENTARIO,
    ERROR_COMENTARIOS,
    AGREGAR_COMENTARIO
} from "./types"; 


//Get posts
export const getPosts = () => async dispatch => {

    dispatch({type: LIMPIAR_ANUNCIO})


    try {
        const res = await axios.get('http://localhost:4000/api/ver-publicaciones-globales')

        dispatch({
            type: GET_ANUNCIOS,
            payload: res.data.reverse()
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_ANUNCIO,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


//Get posts
export const getAnunciosMateria = idMateria => async dispatch => {

    dispatch({type: LIMPIAR_ANUNCIOS_MATERIA})


    try {
        const res = await axios.get(`http://localhost:4000/api/ver-publicaciones-materia/${idMateria}`)
        /* console.info('Anuncios', res) */
            //res
        dispatch({
            type: GET_ANUNCIOS_MATERIA,
            payload: res.data.reverse()
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_ANUNCIO,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}

//Agregar Anuncio
export const crearAnuncio = formData => async dispatch => {

    const config = {headers : {'Content-Type':'application/json'}}

    try {
        
        const res = await axios.post(`http://localhost:4000/api/publicar`, formData, config)
    
        /* dispatch(setAlert('Post creado', 'success')) */
        console.log(res)
            
        dispatch({
            type: AGREGAR_ANUNCIO,
            payload: res.data
        })

    } catch (err) {

        if(err.response){
            dispatch({
                type: ERROR_ANUNCIO,
                payload: { 
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}

//Eliminar Publicacion
export const eliminarAnuncio = (id) => async dispatch => {  

    try {

        await axios.delete(`http://localhost:4000/api/eliminar-publicacion/${id}`)
    
        dispatch({
            type: ELIMINAR_PUBLICACION,
            payload: id
        })

        /* dispatch(setAlert('Post eliminado', 'success'))    */ 
        
    } catch (err) {
        
        dispatch({
            type: ERROR_ANUNCIO,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    } 
}

export const crearAnuncioMateria = (formData, id) => async dispatch => {

    const config = {headers : {'Content-Type':'application/json'}}

    try {
        
        const res = await axios.post(`http://localhost:4000/api/publicar-privado/${id}`, formData, config)
    
        /* dispatch(setAlert('Post creado', 'success')) */
        console.log(res)
            
        dispatch({
            type: AGREGAR_ANUNCIO_MATERIA,
            payload: res.data
        })

    } catch (err) {
        //console.log(err)
        if(err.response){
            dispatch({
                type: ERROR_ANUNCIO,
                payload: { 
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}

export const limpiarAnuncios = () => {
    dispatch({
        type: LIMPIAR_ANUNCIO,
        payload: null
    })
}

export const borrarComentario = (id_anuncio, id_comentario) => async dispatch => {
    console.log(id_anuncio)
    dispatch({type: LIMPIAR_ANUNCIOS_MATERIA})
    try {

        await axios.delete(`http://localhost:4000/api/eliminar-comentario/comment/${id_anuncio}/${id_comentario}`)
    
        dispatch({
            type: ELIMINAR_COMENTARIO,
            payload: id_comentario
        })

        /* dispatch(setAlert('Post eliminado', 'success'))    */ 
        
    } catch (err) {
        
        dispatch({
            type: ERROR_COMENTARIOS,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    } 
}

//Agregar Comentario a un anuncio
export const crearComentario = (formData, id) => async dispatch => {

    const config = {headers : {'Content-Type':'application/json'}}

    try {
        
        const res = await axios.post(`http://localhost:4000/api/comentar/${id}`, formData, config)
    
        /* dispatch(setAlert('Post creado', 'success')) */
        console.log(res)
            
        dispatch({
            type: AGREGAR_COMENTARIO,
            payload: res.data
        })

    } catch (err) {

        if(err.response){
            dispatch({
                type: ERROR_COMENTARIOS,
                payload: { 
                    msg: err.response.statusText,
                    status: err.response.status
                }
            })
        }
    }
}