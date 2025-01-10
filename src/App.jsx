import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
