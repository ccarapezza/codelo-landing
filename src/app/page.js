import Footer from "./components/Footer";
import GridAportes from "./components/GridAportes";
import Header from "./components/Header";
import RRSS from "./components/RRSS";
import SpeechAndContacto from "./components/SpeechAndContacto";

export default function Home() {
  return <main className="flex flex-col justify-center max-w-screen-lg m-auto">
      <Header/>
      <GridAportes/>
      <RRSS/>
      <SpeechAndContacto/>
      <Footer/>
      {/*
      <div className="mb-4 flex justify-center">
      </div>
      */}
    {/*
    */}
  </main>
}
