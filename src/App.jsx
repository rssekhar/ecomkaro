import Layout from "./components/Layout";
import { ToggleTheme } from "./components/Contexts";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false)
  const store = {
    theme,
    setTheme
  }
  // console.log(theme)
  return (
    <>
      
        <ToggleTheme.Provider value={store}>
          <Layout/>

        </ToggleTheme.Provider>
    </>
  )
}
export default App;