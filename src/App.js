import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/Login/Login';
import { auth } from './utils/firebaseDb';
import { useEffect } from 'react';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, []);


  return (
    <Router>
    {!user ? (
      <Login />
    ): (
      <div className="app">
        <Header />
        <div className='app__body'>
          <Sidebar /> 
          <Routes>
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    )}
    </Router>
    
    
  );
}

export default App;
