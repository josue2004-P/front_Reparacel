import {
  Sidebar,
  InputSearch,
  Pagination,
  Rutas,
  Thead,
  Tbody,
} from "../components";
import {useEquipoStore} from "../../hooks"

export default function EquiposAdmin() {

  const {equipos} = useEquipoStore()


  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas ruta={"Equipos"} />

        <div className="relative overflow-x-auto  sm:rounded-lg">
          {/* InputSeach */}
          <InputSearch />

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            {/* Thead */}
            <Thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Marca
                </th>
                <th scope="col" className="px-6 py-3">
                  Modelo
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Lanzamiento
                </th>
                <th scope="col" className="px-6 py-3">
                  Opciones
                </th>
              </tr>
            </Thead>

            {/* Tbody */}
            <Tbody dato={equipos} />
          </table>

          {/* Pagination*/}
          <Pagination />
        </div>
      </div>
    </>
  );
}
