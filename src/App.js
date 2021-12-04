import { useState } from "react";
import { Capitcha } from 'capitcha-npm';
function App() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>React Captcha Component</h1>
      <Capitcha setCaptchaText={setValue} captchaSize={10} />
    </div>
  );
}

export default App;
