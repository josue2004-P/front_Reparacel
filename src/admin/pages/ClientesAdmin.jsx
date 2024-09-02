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
  const clientes = [
    {
      id: 1,
      nombre: "Josue Perez Leon",
      telefono: 2841022581,
    },
    {
      id: 2,
      nombre: "Naomi Deka",
      telefono: 2841022581,
    },
  ];

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
            {clientes.map((items,i) => (
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
