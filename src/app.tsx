import GlobalStyle from "../src/styles/global";
import LoginPage from "./Pages/LoginPage";
import ToastContainer from "./components/ToastContainer";
import "react-toastify/dist/ReactToastify.css";

export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ whiteSpace: "pre-line" }}
      />
      <LoginPage />
    </>
  );
}
