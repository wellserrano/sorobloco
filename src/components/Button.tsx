interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <div>
      <button
        type='button'
        className="flex justify-center items-center bg-[#6246EA] w-40 h-12 rounded-md uppercase text-white font-bold leading-6"
      >
        { title }
      </button>
    </div>
  )
}