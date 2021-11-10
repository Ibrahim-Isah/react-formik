import './App.css';
import EnrollmentForm from './components/EnrollmentForm';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { ThemeProvider, Theme } from '@chakra/core'

function App() {
  return (
    <ThemeProvider theme={Theme} >
      <div className="App">
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <EnrollmentForm />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
