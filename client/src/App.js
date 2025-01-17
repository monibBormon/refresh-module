import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import AboutPage from "./page/AboutPage";
import DashboardPage from "./page/DashboardPage";
function App() {
  return (
    <BrowserRouter>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route
          exact
          path='/dashboard'
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
