import { useState } from "react";

import Pr_1 from "./components/pr_1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* al configurar colores en variables nos ahorramos con tailwind el tener que poner ejemplo: bg-[#elcolor] */}
        <Pr_1/>
      </div>
    </>
  );
}

export default App;
