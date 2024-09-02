import { useDispatch, useSelector } from "react-redux";
// import { calendarApi } from "../api";
// import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutAdministrador, onLogoutCompañia, onLogoutEmpleado, onLogoutEmpleadoAdmin, onLogoutPedido, onLogoutProducto } from "../store";
import Swal from "sweetalert2";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({
          nombre: data.nombre,
          id: data.id,
          rol: data.rol,
          compañia: data.compania,
        })
      );
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ email, password, name, rol }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth/new", {
        email,
        password,
        name,
        rol,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({
          nombre: data.nombre,
          id: data.id,
          rol: data.rol,
          compañia: data.compania,
        })
      );
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "--"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await calendarApi.get("auth/renew");

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({
          nombre: data.nombre,
          id: data.id,
          rol: data.rol,
          compañia: data.compania,
        })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    Swal.fire({
      title: "¿Deseas cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesion.",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        dispatch(onLogout());
        dispatch(onLogoutAdministrador());
        dispatch(onLogoutCompañia());
        dispatch(onLogoutEmpleado());
        dispatch(onLogoutEmpleadoAdmin());
        dispatch(onLogoutProducto());
        dispatch(onLogoutPedido());
      }
    });
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
