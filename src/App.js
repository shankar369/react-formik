import "./App.css";
import CourseEnrolmentForm from "./components/CourseEnrolmentForm/CourseEnrolmentForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
// import YoutubeForm from "./components/YoutubeForm/YoutubeForm";

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <CourseEnrolmentForm />
    </div>
  );
}

export default App;
