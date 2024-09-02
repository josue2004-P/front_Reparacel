import { Navigate, Route, Routes } from "react-router-dom";

import { ClientesAdmin, EquiposAdmin, HomeAdmin, ReparacionesAdmin } from "../admin";
import {PublicPage} from "../public";

export const AppRouter = () => {
  return (
    <Routes>
      <>
        <Route
          path="/"
          element={<PublicPage />}
        />
        <Route path="/dashboard" element={<HomeAdmin />} />
        <Route path="/equipos" element={<EquiposAdmin />} />
        <Route path="/clientes" element={<ClientesAdmin />} />
        <Route path="/reparaciones" element={<ReparacionesAdmin />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </>
    </Routes>
  );
};
