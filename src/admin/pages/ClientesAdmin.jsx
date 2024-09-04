import { useClienteStore } from "../../hooks";
import {
  Sidebar,
  InputSearch,
  Pagination,
  Rutas,
  Thead,
  Tbody,
  CardCliente,
} from "../components";

export default function ClientesAdmin() {
  const { clientes } = useClienteStore();

  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas ruta={"Clientes"} />

        <div className="relative   sm:rounded-lg">
          {/* InputSeach */}
          <InputSearch />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientes.map((items, i) => (
              <CardCliente items={items} key={i} />
            ))}
          </div>

          {/* Pagination*/}
          <Pagination />
        </div>
      </div>
    </>
  );
}
