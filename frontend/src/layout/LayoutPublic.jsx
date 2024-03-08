import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Spinner from "../components/spinner/Spinner";


const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar  />
      <main className="container navbarFixed">
        {navigation.state === "loading" && (
          <div className="loadingContainer">
            <Spinner />
          </div>
        )}
        <Outlet  />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
