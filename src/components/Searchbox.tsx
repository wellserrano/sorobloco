import React from 'react';
import { MagnifyingGlass, MapPin } from 'phosphor-react'
import { Input } from './Input';
import { SelectMenu } from './SelectMenu';
import { Button } from './Button';


export function Searchbox() {
  return (
    <div className='flex justify-center items-center w-auto h-32 border-2 border-[#EAEAEA] rounded-xl p-10'>
      <div className="flex gap-6 z-10">
        <Input type='text'> <MagnifyingGlass size={24} color='#E45858' /> </Input>
        <SelectMenu> <MapPin size={24} color='#E45858' /> </SelectMenu>
        <Button title='buscar agora'/>
      </div>
    </div>
  )
}