import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import MyRoute from './router/MyRoute'

function App() {
  return (
    <>
    <ToastContainer />
      <MyRoute />
    </>
  )
}

export default App
