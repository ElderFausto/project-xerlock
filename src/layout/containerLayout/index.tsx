import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export function ContainerLayout() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header />
        <main>
          {<Outlet />}
        </main>
      <Footer />
    </div>
  );
}
