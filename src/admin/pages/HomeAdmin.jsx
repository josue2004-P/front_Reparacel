import { useClienteStore, useEquipoStore } from "../../hooks";
import { Sidebar, Rutas } from "../components";
import { equipoReparaciones } from "../../data/equipoReparaciones";

export default function HomeAdmin() {
  const { clientes } = useClienteStore();
  const { equipos } = useEquipoStore();

  // Obtener el número de reparaciones pendientes
  const reparacionesPendientes = equipoReparaciones.filter(
    (reparacion) => reparacion.status === "Pendiente"
  ).length;


  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        {/* Rutas */}
        <Rutas ruta={""} />

        <article className="">
          <header>
            {/* <h2 className="pl-2 text-xs text-gray-700 font-semibold">
              Last 30 days
            </h2> */}
          </header>
          <section className="grid  gap-4 sm:grid-cols-4  w-full">
            <div className="">
              <div className="rounded-md shadow-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-gray-600 font-medium">
                  Pendientes
                </span>
                <span className="text-purple-600 font-semibold text-4xl">{reparacionesPendientes}</span>
              </div>
            </div>
            <div className="">
              <div className="rounded-md shadow-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-gray-600 font-medium">
                  Reparaciones
                </span>
                <span className="text-purple-600 font-semibold text-4xl">{equipoReparaciones.length}</span>
              </div>
            </div>
            <div className=" ">
              <div className="rounded-md shadow-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-gray-600 font-medium">
                  Equipos
                </span>
                <span className="text-purple-600 font-semibold text-4xl">{equipos.length}</span>
              </div>
            </div>
            <div className="">
              <div className="rounded-md shadow-lg p-4 flex flex-col gap-1">
                <span className="text-xs text-gray-600 font-medium">
                  Clientes
                </span>
                <span className="text-purple-600 font-semibold text-4xl">{clientes.length}</span>
              </div>
            </div>
          </section>
        </article>

        <article className="grid  lg:grid-cols-4 gap-4 mt-4">
          <div className="rounded-md shadow-md col-span-2 p-4">
            <header>
              <h2 className="text-sky-600 font-bold text-lg">Clientes frecuentes</h2>
            </header>
            <ul role="list" className="divide-y divide-gray-100">
              {clientes.map((items, i) => (
                <li key={i} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {items.nombre}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {items.email}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {items.estado}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {items.ciudad}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md shadow-md col-span-2 p-4">
            <header>
              <h2 className="text-sky-600 font-bold text-lg">Equipos frecuentes</h2>
            </header>
            <ul role="list" className="divide-y divide-gray-100">
              {equipos.map((items, i) => (
                <li key={i} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {items.nombre}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {items.marca}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Fecha Lanzamiento
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {items.fecha_lanzamiento}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
