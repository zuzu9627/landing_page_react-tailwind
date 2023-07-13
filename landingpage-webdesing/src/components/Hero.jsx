import React from "react";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* en la resolucion md el grid-cols-x donde x se especifica el numero de columnas */}
      <div className="bg-yellow-300 flex items-center justify-center md:col-span-5">
        {/* col-span-x donde x es el numero de espacios que ocupará ,el total debe dar la suma de columnas que antes se ha pedido dividir*/}
        <div>
          <h1 className="text-7xl font-bold text-primary">
            We Desing Impactful Digital
          </h1>
          <p>Description</p>
          <p>Buttons</p>
        </div>
      </div>
      <div className="bg-blue-600 md:col-span-3">Image</div>
    </section>
  );
};

export default Hero;
