// icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
{
}

const Hero_ex = () => {
  return (
    <div>
      <section className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover h-[100vh] flex  items-center">
        <div className="text-center flex whitespace-nowrap text-[160px] font-['Sora'] font-bold leading-[135px] text-black self-center w-3/4 mb-5 ">
          Climate AI
        </div>
        <div className="bg-[rgba(24,_24,_24,_0.2)] flex flex-col justify-center h-32 shrink-0 mx-12 px-8 rounded-[20px]">
          <div className="text-justify font-['Sora'] leading-[30px] text-black ml-4 h-[57.02%]">
            La inteligencia artificial para la predicción climatológica. Obtén
            pronósticos confiables del tiempo y descubre información detallada
            sobre el clima, incluyendo análisis históricos, para anticipar
            cambios climáticos en el área de Cataluña.
          </div>
        </div>
        <button className="bg-[#fafafa] self-start flex flex-col justify-center ml-[467px] h-16 shrink-0 items-center rounded-[60px]">
          <div className="text-xl font-['Poppins'] font-bold tracking-[1.3] text-[#48924f] bg-[linear-gradient(180deg,_#ffffff_0%,_#ffffff_100%)] w-16 mx-20">
            START
          </div>
        </button>
      </section>
    </div>
  );
};

export default Hero_ex;
