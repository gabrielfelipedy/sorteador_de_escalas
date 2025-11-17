"use client";

import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { scales } from '@/app/constants';
import { useScaleObserver } from '@/app/context/ScaleObserver';
import { Scale } from '@/app/models/scale';
import { toast } from "sonner"

const ScalesPicker = () => {

    const clearFilters = () => {
        setCheckedMap(Object.fromEntries(Object.keys(scales).map((key) => [key, false])));
        //setScale(new Scale('', '', []));
    };

    const selectAllScales = () => {
        setCheckedMap(Object.fromEntries(Object.keys(scales).map((key) => [key, true])));
    };

    const [checkedMap, setCheckedMap] = React.useState<Record<string, boolean>>(
        () => Object.fromEntries(Object.keys(scales).map((key) => [key, false]))
    );

    const toggle = (key: string, value: boolean | 'indeterminate') => {
        setCheckedMap((prev) => ({ ...prev, [key]: value === true }));
    };

    const setScale = useScaleObserver((state: any) => state.setScale);


    const handleSortear = () => {
        if(Object.keys(checkedMap).filter((key) => checkedMap[key]).length === 0) {
            //console.error('Por favor, selecione pelo menos uma categoria de escala.');
            toast.error("Por favor, selecione pelo menos uma categoria de escala.")
            return;
        }

        const checkedScales = Object.keys(scales).filter((key) => checkedMap[key]);
        console.log(checkedScales);

        const selectedScaleGroupIndex = checkedScales[Math.floor(Math.random() * checkedScales.length)];

        const selectedScaleGroup = scales[selectedScaleGroupIndex as keyof typeof scales];

        console.log(selectedScaleGroup);

        const selectedScaleIndex = Object.keys(selectedScaleGroup)[Math.floor(Math.random() * Object.keys(selectedScaleGroup).length)];

        const selectedScale = selectedScaleGroup[selectedScaleIndex as keyof typeof selectedScaleGroup];

        const scale = new Scale(selectedScaleGroupIndex, selectedScaleIndex, selectedScale);

        setScale(scale);

        console.log(scale);
    };



    return (
        <section className="flex flex-col items-center gap-10 mt-16">
            <p className='text-center'>Escolha as categorias de escalas abaixo:</p>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 w-full xs:w-fit mx-auto border-2 rounded-lg p-6">

                {Object.keys(scales).map((key) => (
                    <div key={key} className="flex items-center gap-3">
                        <Checkbox
                            id={key}
                            checked={checkedMap[key]}
                            onCheckedChange={(value) => toggle(key, value)}
                        />
                        <Label htmlFor={key}>{key.replace('_', ' ').replace('_', ' ').replace(/^./, (char) => char.toUpperCase())}</Label>
                    </div>
                ))}


            </div>

            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 w-full xs:w-fit">

                <Button onClick={handleSortear} className='w-full xs:w-fit mx-auto'>Sortear</Button>

                <Button variant="outline" onClick={selectAllScales} className='w-full xs:w-fit mx-auto'>Selecionar todas</Button>

                <Button variant="outline" onClick={clearFilters} className='w-full xs:w-fit mx-auto'>Limpar filtros</Button>
            </div>
        </section>
    )
}

export default ScalesPicker