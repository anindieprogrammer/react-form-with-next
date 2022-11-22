import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
