import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicPage() {
  return (
    <>
      <article className="h-full sm:h-screen  public_gradient ">
        <Navbar />

        <section className="grid lg:grid-cols-2  lg:h-full  overflow-x-hidden">
          <div className=" px-6 flex flex-col lg:justify-center pt-10 lg:-mt-20  ">
            <span className="text-gray-400 mb-3">Sistema v1.0 {">"}</span>

            <h1 className="mb-4 text-3xl font-extrabold text-gray-100  md:text-5xl xl:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-600">
                Sistema Gestion <br />
              </span>
              de reparaciones , clientes y equipos moviles.
            </h1>

            <p className="text-gray-300 text-lg mt-2">
              Sistema dedicado a tecnicos en reparaciones moviles, pc u otros
              dispositivos, obtener un historial de las reparaciones para
              diagnosticar de una forma mas eficiente y acertada.
            </p>
            <div className="mt-8 flex flex-row gap-4 items-center">
              <button className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
                Documentacion
              </button>
              <Link className="text-gray-300 flex " to={"/dashboard"}>
                Ver Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right ml-1"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </Link>
            </div>
          </div>
          <div className=" flex justify-end  items-center ">
            <img
              className="h-[85%] lg:h-[50%] xl:h-[60%] rounded-s-lg -mr-20 sm:m-0 "
              src="./ReparaCelHero.png"
              alt=""
            />
          </div>
        </section>
      </article>
    </>
  );
}
