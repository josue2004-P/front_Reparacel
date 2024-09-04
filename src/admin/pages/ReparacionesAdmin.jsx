import {
  Sidebar,
  InputSearch,
  Pagination,
  Rutas,
  Thead,
  Tbody,
} from "../components";
import { equipoReparaciones } from "../../data/equipoReparaciones"

export default function ReparacionesAdmin() {


  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas ruta={"Reparaciones"} />

        <div className="relative overflow-x-auto  sm:rounded-lg">
          {/* InputSeach */}
          <InputSearch />

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            {/* Thead */}
            <Thead>
              <tr>
              <th scope="col" className="px-6 py-3">
                ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Cliente
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
            <Tbody datoReparacion={equipoReparaciones}/>
          </table>


          {/* Pagination*/}
          <Pagination />
        </div>
      </div>
    </>
  );
}
