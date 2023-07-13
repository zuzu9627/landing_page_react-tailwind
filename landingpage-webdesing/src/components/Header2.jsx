import React, { useState } from "react";
// icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
{
}
const Header2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4  px-8 h-[10vh]">
    {/* aqui ha declado un h:10vh para hacer el calculo del 100% conjuntamente con el hero */}
      <div className=" xk:w-1/6 text-center -mt-1">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Power <span className="text-primary text-5xl"> . </span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1  flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}
      >
        {/* al momento de hacerlo responsive ,el orden (aunque antes se haya diseñado para laptop)  se conviene a que los valores quedarán para todos los portview a menos que se especifique a que pantalla cambia ejemplo xl:flex-row */}
        {/* Usamos { `dfsfsfd`} cuando queremos combinar con variables */}
        <a href="#" className="nav_a">
          Home
        </a>
        <a href="#" className="nav_a">
          About us
        </a>
        <a href="#" className="nav_a">
          Services
        </a>
        <a href="#" className="nav_a">
          Products
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl p-2 xl:hidden"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        {/* aqui se introduce un onclick y una funcion asociada,en la linea 11 se ha inportado el instructor  */}
      </button>
    </header>
  );
};

export default Header2;
