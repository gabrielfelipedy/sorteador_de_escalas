import Image from "next/image";

import ScalesPicker from "@/components/scalespicker";
import ScaleViewer from "@/components/scaleViewer";
import Footer from "@/components/shared/Footer";

export default function Home() {

  return (
    <>
      <main className="p-10 min-h-[80vh]">
        <h1 className='sm:text-4xl sm:mt-10 mt-4 text-3xl font-bold text-center'>Sorteador de escalas</h1>
        <p className='sm:text-lg text-base text-center'>
          um software pensado para ajudar seus estudos musicais!
        </p>

        
        <div className="flex flex-col lg:flex-row gap-10 mt-20 justify-center">
        <ScalesPicker />

        <ScaleViewer />
        </div>

      </main>

      <Footer className='mt-10 p-10' />
    </>
  );
}
