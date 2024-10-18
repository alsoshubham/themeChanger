import { useState } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/theme";

function App() {

  const [themeMode, SetThemeMode] = useState("light")
  const [lightTheme, SetLightTheme] = useState("light")
  const [darkTheme, SetDarkTheme] = useState("dark")
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
