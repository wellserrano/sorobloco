import * as Label from '@radix-ui/react-label';
import { IconProps } from 'phosphor-react';

interface InputProps extends IconProps {
  type: string;
  icon: IconProps;
}

export function Input({ type, icon:Icon } : InputProps) {
  return (
    <div className='flex items-center gap-3 w-input h-input bg-input border-none rounded-md px-3.5'>
      <Label.Root htmlFor='bloco-name'>
        <Icon size={24} color='#E45858'/>
      </Label.Root>
      <input 
        className="text-normal text-base placeholder-placeholder bg-inherit w-full p-1.5" 
        type={ type }
        id="bloco-name" 
        placeholder="Pesquisar por nome" />
    </div>
  )
}