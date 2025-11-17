"use client"

import { useScaleObserver } from '@/app/context/ScaleObserver';
import React, { useState } from 'react'

const scaleNameParser = {
  'escalas_maiores': 'maior',
  'escalas_menor_naturais': 'menor natural',
  'escalas_menor_harmonicas': 'menor harmônico',
  'escalas_menor_melodicas': 'menor melódico',
  'escalas_pentatonicas': 'pentatônico',
  'escalas_blues': 'blues',
  'escalas_diminutas': 'diminuto',
  'escalas_domdim': 'domdim',
  'escalas_hexafonicas': 'hexafônico',
}

const ScaleViewer = () => {

  const scale = useScaleObserver((state: any) => state.scale);


  return (
    <section className="flex justify-center">
      <div className="rounded-lg px-20 py-6 w-full xs:w-[500px] lg:w-[550px] bg-white shadow-lg flex flex-col justify-center items-center">
        <div className="flex items-baseline">
        <h1 className="text-8xl font-bold text-center">{`${scale.scaleTonic}`}</h1>
        <h2 className="text-2xl font-bold text-center">{`${scaleNameParser[scale.scaleType as keyof typeof scaleNameParser] ?? 'Nenhuma escala selecionada'}`}</h2>
        </div>
        <p className="text-lg text-center text-neutral-500 mt-4">{scale.scaleNotes.join(', ')}</p>
      </div>
    </section>
  )
}

export default ScaleViewer