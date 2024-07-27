import { AppProvider } from "../data/context/AppContext";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (

    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>

)
}

export default MyApp;
