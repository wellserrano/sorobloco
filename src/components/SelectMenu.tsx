import React, { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import { CaretDown, MapPin } from 'phosphor-react';

export function SelectMenu() {
  return (
    <div className='flex justify-start items-center w-input h-input bg-input rounded-md pl-3.5 pr-1'>
      <MapPin size={24} color='#E45858' />
      <Select.Root>
        <Select.Trigger 
          className='flex items-center justify-between gap-3 w-full h-full
          p-1.5 text-normal text-base leading-none
          data-[placeholder]:text-placeholder outline-none'
        >
          <Select.Value placeholder='Selecione uma cidade'/>
          <Select.Icon className='text-[#858793]'>
            <CaretDown size={24} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content 
            position='popper'  
            className='teste overflow-hidden bg-white rounded-md w-content '            
          >
            <Select.Viewport className="p-[10px]">
              <Select.Item value='sorocaba'>
                <Select.ItemText>Sorocaba</Select.ItemText>
              </Select.Item>
              <Select.Item value='jundiaí'>
                <Select.ItemText>Jundiaí</Select.ItemText>
              </Select.Item>
              <Select.Item value='piedade'>
                <Select.ItemText>Piedade</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}