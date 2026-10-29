interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

function Button({ children, type = 'button', disabled = false, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  )
}

export default Button