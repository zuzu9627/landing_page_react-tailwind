import { useState } from "react";
import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import Header_ex from "./components/Header_ex";
import Hero_ex from "./components/Hero_ex";
import Total_ex from "./components/Total_ex";
import Pr_1 from "./components/pr_1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* al configurar colores en variables nos ahorramos con tailwind el tener que poner ejemplo: bg-[#elcolor] */}
        {/* <Header2/> */}
        {/* <Header_ex /> */}
        {/* <Hero_ex />
        <Hero /> */}
        {/* <Total_ex/> */}
        <Pr_1/>
      </div>
    </>
  );
}

export default App;
