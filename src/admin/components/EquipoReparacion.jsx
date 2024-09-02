import React from "react";

export default function EquipoReparacion({ equipoReparacion }) {
  const { nombre, nombre_cliente, detalle, fecha_ingreso, status } =
    equipoReparacion;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="">
          <div className="text-base font-semibold">{nombre}</div>
        </div>
      </th>
      <td className="px-6 py-4">{nombre_cliente}</td>
      <td className="px-6 py-4">{detalle}</td>
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
        <a
          // href="#"
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Detalles 
        </a>
      </td>
    </tr>
  );
}
