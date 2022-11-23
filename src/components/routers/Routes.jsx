 
import { useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { loadUser } from '../../actions/auth'

import setAuthToken  from '../../utils/setAuthToken'
import Home from '../pages/Home/Home'
import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import ListaAlumnos from '../pages/Usuarios/ListaAlumnos'
import Materias from '../pages/Materias/Materias'
import Anuncios from '../pages/Posts/Anuncios'
import AgregarAnuncio from '../pages/Posts/Formularios/AgregarAnuncio'
import AnunciosMateria from '../pages/Materias/AnunciosMateria'
import NotasMateria from '../pages/Materias/NotasMateria'
import InasistenciaMateria from '../pages/Materias/InasistenciaMateria'
//

//redux import
import { Provider } from 'react-redux'
import store from '../../store'
//

const Routes = () =>  {
 

  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store} >
      <Router>
      
    
        
       
      
          {/* <Alert/> */}
          <Switch>
            <Route exact path={"/login"} component={Login}/>
            <PrivateRoute exact path={"/home"} component={Home}/>
            <PrivateRoute exact path={"/materias"} component={Materias}/>
            <PrivateRoute exact path={"/anuncios"} component={Anuncios}/>
            <PrivateRoute exact path={"/lista-alumnos"} component={ListaAlumnos}/>
            <PrivateRoute exact path={"/publicar-anuncio"} component={AgregarAnuncio}/>
            <PrivateRoute exact path={"/detalles-materia/:id"} component={AnunciosMateria}/>
            <PrivateRoute exact path={"/NotasMateria/:id"} component={NotasMateria}/>
            <PrivateRoute exact path={"/InasistenciaMateria/:id"} component={InasistenciaMateria}/>
            <Route exact path={"/*"} component={Login}/>
          </Switch>
        
        
      </Router>
    </Provider>
  )
}

export default Routes