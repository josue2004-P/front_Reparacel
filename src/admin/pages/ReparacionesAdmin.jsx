import {
  Sidebar,
  InputSearch,
  Pagination,
  Rutas,
  Thead,
  Tbody,
} from "../components";

export default function ReparacionesAdmin() {

  const equipoReparacion = [
    {
      id:1,
      nombre:"G7 Play",
      nombre_cliente:"Josue Perez Leon",
      detalle:"No Prende",
      fecha_ingreso:"03-10-2004",
      status:"Revision"
    },
    {
      id:2,
      nombre:"G9 Play",
      nombre_cliente:"Josue Perez Leon",
      detalle:"No Prende",
      fecha_ingreso:"03-10-2004",
      status:"Pendiente"
    }
  ]

  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas ruta={"Reparaciones"} />

        <div className="relative overflow-x-auto  sm:rounded-lg">
          {/* InputSeach */}
          <InputSearch />

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* Thead */}
            <Thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Detalle
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Ingreso
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Opciones
                </th>
              </tr>
            </Thead>

            {/* Tbody */}
            <Tbody datoReparacion={equipoReparacion}/>
          </table>


          {/* Pagination*/}
          <Pagination />
        </div>
      </div>
    </>
  );
}
