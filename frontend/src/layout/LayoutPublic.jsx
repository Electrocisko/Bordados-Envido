import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <main className="container">
                {navigation.state === "loading" && (
                    <div className="loadingContainer" ><h2 className="loading">Cargando ....</h2></div>
                )}
               
                <Outlet />
            </main>
    </div>
  );
};

export default LayoutPublic;
