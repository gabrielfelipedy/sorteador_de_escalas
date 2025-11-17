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
    <section className="flex justify-center mt-10">
    <div className="rounded-lg px-20 py-6 w-fit bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">{`${scale.scaleTonic} ${scaleNameParser[scale.scaleType as keyof typeof scaleNameParser] ?? 'Nenhuma escala selecionada'}`}</h2>
        <p className="text-lg text-center">{scale.scaleNotes.join(', ')}</p>
    </div>
  </section>
  )
}

export default ScaleViewer