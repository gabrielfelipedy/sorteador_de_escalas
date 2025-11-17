import Image from "next/image";

import ScalesPicker from "@/components/scalespicker";
import ScaleViewer from "@/components/scaleViewer";
import Footer from "@/components/shared/Footer";

export default function Home() {

  return (
    <main className="p-10 min-h-screen">
      <h1 className='text-4xl font-bold text-center'>Sorteador de escalas</h1>
      <p className='text-lg text-center'>
        um software pensado para ajudar seus estudos musicais!
      </p>

      <ScalesPicker />

      <ScaleViewer />

      <Footer className='mt-10' />
    </main>
  );
}
