import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <main className="container navbarFixed">
        {navigation.state === "loading" && (
          <div className="loadingContainer">
            <h2 className="loading">Cargando ....</h2>
          </div>
        )}
        <Outlet />
      </main>
<Footer/>
    </div>
  );
};

export default LayoutPublic;
