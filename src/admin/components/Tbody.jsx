import Equipo from "./Equipo";
import EquipoReparacion from "./EquipoReparacion";

export default function Tbody({ dato, datoReparacion }) {
  return (
    <tbody>
      {dato
        ? dato.map((items, i) => <Equipo equipo={items} key={i} />)
        : datoReparacion.map((items, i) => <EquipoReparacion equipoReparacion={items} key={i} />)}
    </tbody>
  );
}
