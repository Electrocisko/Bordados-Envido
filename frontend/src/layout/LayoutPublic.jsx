import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Spinner from "../components/spinner/Spinner";
import { useState } from "react";

const LayoutPublic = () => {
  const navigation = useNavigation();

  const [sorting, setSorting] = useState("nuevos");

  const handleSort = (sortBy) => {
    setSorting(sortBy);
    console.log(`Ordenar por ${sortBy}`);
  };

  return (
    <div>
      <Navbar handleSort={handleSort} />
      <main className="container navbarFixed">
        {navigation.state === "loading" && (
          <div className="loadingContainer">
            <Spinner />
          </div>
        )}
        <Outlet context={[sorting, setSorting]} />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
