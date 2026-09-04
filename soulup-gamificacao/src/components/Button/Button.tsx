interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
    >
      {children}
    </button>
  )
}

export default Button