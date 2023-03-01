import { Toggle } from "../components/Toggle";
import { Searchbox } from "../components/Searchbox";

import FigA from '../assets/ilustra-01.svg'
import FigB from '../assets/ilustra-02.svg'
import { Card } from "../components/Card";

export function Home() {
  return (
    <div className="grid grid-flow-col grid-rows-home-layout grid-cols-1 w-full">
      <div className="relative flex flex-col justify-center items-center w-full text-center bg-[#F8F8FF]">
        <img src={ FigA } alt="" className="absolute top-0 left-0 "/>
        <p className='font-medium text-base leading-[160%] text-[#E45858] uppercase tracking-wider mb-4'>
          sorobloco
        </p>
        <h1 className="font-bold text-5xl mb-10 leading-tight">
          Encontre os <span className="text-blue-700">melhores blocos</span><br /> de carnaval de 2023
        </h1>
        <Searchbox />
        <img src={ FigB } alt="" className="absolute bottom-0 right-0"/>
      </div>
      <div className="my-24 mx-28">
        <div className="flex justify-between mb-10">
          <h2 className="text-3xl font-bold">Blocos Recomendados</h2>
          <Toggle />
        </div>
        <div className="grid grid-flow-row grid-rows-3 grid-cols-3 gap-8 justify-items-center mb-24">
          <Card title='Apareceu Aparecida' description='lorem ipsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaipsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaipsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaipsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
          <Card title='Apareceu Aparecida' description='lorem ipsum'/>
        </div>
      </div>
    </div>
  )
}