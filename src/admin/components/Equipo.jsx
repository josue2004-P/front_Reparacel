import React from "react";
import Swal from "sweetalert2";

export default function Equipo({ equipo }) {
  const { nombre, marca, modelo, fecha_lanzamiento } = equipo;

  const handleAdminPermission = () => {
    Swal.fire({
      icon: "error",
      title: "Permiso Denegado",
      text: "Recurra al administrador!",
    });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="">
          <div className="text-base text-sky-600 font-semibold">{nombre}</div>
        </div>
      </th>
      <td className="px-6 py-4">{marca}</td>
      <td className="px-6 py-4">{modelo}</td>
      <td className="px-6 py-4">{fecha_lanzamiento}</td>
      <td className="px-6 py-4 flex flex-col">
        <button
          onClick={handleAdminPermission}
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar equipo
        </button>
        <button
          onClick={handleAdminPermission}
          type="button"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Eliminar equipo
        </button>
      </td>
    </tr>
  );
}
