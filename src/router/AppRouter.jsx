import { Navigate, Route, Routes } from "react-router-dom";

import {
  ClientesAdmin,
  EquiposAdmin,
  HomeAdmin,
  InfoCliente,
  InfoReparacion,
  ReparacionesAdmin,
} from "../admin";
import { PublicPage } from "../public";

export const AppRouter = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<PublicPage />} />
        <Route path="/dashboard" element={<HomeAdmin />} />
        <Route path="/equipos" element={<EquiposAdmin />} />
        <Route path="/clientes" element={<ClientesAdmin />} />
        <Route path="/clientes/info-cliente/:id" element={<InfoCliente />} />

        <Route path="/reparaciones" element={<ReparacionesAdmin />} />
        <Route path="/reparaciones/info-reparacion/:id" element={<InfoReparacion />} />


        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </>
    </Routes>
  );
};
