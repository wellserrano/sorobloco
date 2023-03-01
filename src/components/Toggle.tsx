import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function Toggle() {
  const toggleItemStyle = 'uppercase data-[state=on]:bg-[#6246EA] data-[state=on]:text-white flex h-8 w-20 items-center justify-center bg-white text-base text-[#6246EA] leading-4 focus:outline-none rounded-md'
    
  return (
    <div className='p-2 border-2 border-[#EAEAEA] w-48 h-12 rounded-md font-bold'>
      <ToggleGroup.Root
          className="flex gap-3 justify-center items-center"
          type="single"
          defaultValue="list"
        >
          <ToggleGroup.Item
            className={ toggleItemStyle }
            value="list"
          >
            lista
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={ toggleItemStyle }
            value="map"
          >
            mapa
          </ToggleGroup.Item>
        </ToggleGroup.Root>
    </div>
  )
}