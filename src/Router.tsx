import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { ContainerLayout } from "./layout/containerLayout";
import { Products } from "./pages/products";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ContainerLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products/>} />
      </Route>
    </Routes>
  );
}
