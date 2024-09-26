import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicPage() {
  return (
    <>
      <main className="h-full sm:h-screen   ">

        <section className="grid lg:grid-cols-2  lg:h-full  overflow-x-hidden public_gradient">
        <Navbar />
          <article className=" px-6 flex flex-col lg:justify-center pt-10 lg:-mt-20  ">
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
          </article>
          <div className=" flex justify-end  items-center ">
            <img
              className="h-[85%] lg:h-[50%] xl:h-[60%] rounded-s-lg -mr-20 sm:m-0 "
              src="./ReparaCelHero.png"
              alt=""
            />
          </div>
        </section>

        <section className=" py-20">
          <header className="w-[70%] mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 ">
              Servicios
            </h2>
            <p className="text-gray-600 font-medium mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis molestiae facilis eum asperiores amet libero ipsam ea
              atque laboriosam cupiditate porro sunt excepturi, voluptate odit
              iste itaque animi doloremque molestias.
            </p>
          </header>
          <article className="headline grid md:grid-cols-2 lg:grid-cols-3 w-[70%] md:w-[90%] xl:w-[70%]  mx-auto gap-10 mt-20">
            {/* <!-- CARD1 --> */}
            <div className=" flex flex-col  ">
              <div className="bg-cyan-600 w-fit p-1 rounded-md">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user text-gray-100"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <a className="text-xl font-bold my-2">
                <u> Gestion Clientes </u>
              </a>
              <p className="text-gray-900  text-sm">
                Un diseño impactante puede ayudarle a hacer crecer su empresa y
                a vender productos de forma más eficaz.
              </p>

              <a href="" className="text-sm text-blue-800 font-bold mt-5">
                Ver mas...
              </a>
            </div>
            {/* <!-- CARD 2 --> */}
            <div className=" flex flex-col  ">
              <div className="bg-cyan-600 w-fit p-1 rounded-md">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user text-gray-100"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <a className="text-xl font-bold my-2">
                <u> Gestion Equipos </u>
              </a>
              <p className="text-gray-900  text-sm">
                Un diseño impactante puede ayudarle a hacer crecer su empresa y
                a vender productos de forma más eficaz.
              </p>

              <a href="" className="text-sm text-blue-800 font-bold mt-5">
                Ver mas...
              </a>
            </div>
            {/* <!-- CARD 3 --> */}
            <div className=" flex flex-col  ">
              <div className="bg-cyan-600 w-fit p-1 rounded-md">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user text-gray-100"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <a className="text-xl font-bold my-2">
                <u> Gestion Reparaciones </u>
              </a>
              <p className="text-gray-900  text-sm">
                Un diseño impactante puede ayudarle a hacer crecer su empresa y
                a vender productos de forma más eficaz.
              </p>

              <a href="" className="text-sm text-blue-800 font-bold mt-5">
                Ver mas...
              </a>
            </div>
          </article>
        </section>

        <section className="py-20">
          <header className="w-[70%] mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 ">
              Dashboard
            </h2>
            <p className="text-gray-600 font-medium mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis molestiae facilis eum asperiores amet libero ipsam ea
              atque laboriosam cupiditate porro sunt excepturi, voluptate odit
              iste itaque animi doloremque molestias.
            </p>
          </header>
          <article>

          </article>
        </section>
      </main>
    </>
  );
}
