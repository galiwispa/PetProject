import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './Components/common/preloader/preloader';
import store from './redux/redux-store';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        < HeaderContainer />
        < Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='profile/*' element={<ProfileContainer />}></Route>
            <Route path='profile/:userId' element={<ProfileContainer />}></Route>
            <Route path='dialogs/*' element={<DialogsContainer />}></Route>
            <Route path='users' element={<UsersContainer />}></Route>
            <Route path='login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    )
  };
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
    )
}

export default SamuraiJSApp;

