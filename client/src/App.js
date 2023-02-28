import './App.css';
import {UserContextProvider} from "./UserContext";
import {Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignInPage';
import Register from './pages/RegisterPage';
import Contact from './pages/ContactPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <UserContextProvider>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
