import React from "react";
import { Link } from "react-router-dom";

export default function EquipoReparacion({ equipoReparacion }) {
  const {id, nombre, nombre_cliente, detalle, fecha_ingreso, status } =
    equipoReparacion;

  return (
    <tr className="bg-white border-b ">
      <td className="px-6 py-4">{id}</td>

      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
      >
        <div className="">
          <div className="text-sky-600 text-base font-semibold">{nombre}</div>
        </div>
      </th>
      <td className="px-6 py-4">{nombre_cliente}</td>
      <td className="px-6 py-4">{fecha_ingreso}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {status === "Pendiente" ? (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
              Pendiente
            </>
          ) : status === "Completado" ? (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
              Completado
            </>
          ) : (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2"></div>
              Revisado
            </>
          )}
        </div>
      </td>
      <td className="px-6 py-4 flex flex-col">
        <Link
          // href="#"
          to={`/reparaciones/info-reparacion/${id}`}
          type="button"
          className="font-medium text-blue-600 "
        >
          Detalles 
        </Link>
      </td>
    </tr>
  );
}
