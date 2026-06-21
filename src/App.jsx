import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import BirthdayPage from "./pages/BirthdayPage";
import AnniversaryPage from "./pages/AnniversaryPage";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "./components/MusicPlayer";
import Sparkles from "./components/Sparkles";
import LoveNotes from "./components/LoveNotes";

function App() {
  const [entered, setEntered] = useState(false);
  const [activePage, setActivePage] = useState("birthday");

  if (!entered) {
    return <IntroScreen onEnter={() => setEntered(true)} />;
  }
  return (
  <div
    style={{
      fontFamily: "'Poppins', sans-serif",
      background:
        "linear-gradient(180deg,#FFFDF8,#FDF4F5)",
      minHeight: "100vh",
      color: "#3A3A3A",
    }}
  >
    <Sparkles />
    <Navbar
      activePage={activePage}
      setActivePage={setActivePage}
    />

    <MusicPlayer
      activePage={activePage}
      entered={entered}
    />
    <LoveNotes />

    <AnimatePresence mode="wait">
      {activePage === "birthday" ? (
        <motion.div
          key="birthday"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BirthdayPage />
        </motion.div>
      ) : (
        <motion.div
          key="anniv"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnniversaryPage />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
}

export default App;