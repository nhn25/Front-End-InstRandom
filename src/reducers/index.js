import { combineReducers } from "redux";
import anuncios from './anuncios'
import auth from './auth'
import usuarios from './usuarios'
import materias from "./materias";


export default combineReducers({
    auth,
    anuncios,
    usuarios,
    materias
})