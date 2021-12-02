import { useState } from "react";
import Capitcha from "./Capitcha";
function App() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <Capitcha setCaptchaText={setValue} captchaSize={8} />
    </div>
  );
}

export default App;
