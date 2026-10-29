interface MensagemErroProps {
  mensagem: string
  onTentarNovamente?: () => void
}

export function Carregando({ texto = 'Carregando...' }: { texto?: string }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-4 py-16 text-center"
    >
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      <p className="font-semibold">{texto}</p>
    </div>
  )
}

export function MensagemErro({ mensagem, onTentarNovamente }: MensagemErroProps) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-xl rounded-2xl border-2 border-red-600 bg-red-100 p-6 text-center"
    >
      <p className="font-bold text-red-800">Ops! Algo deu errado.</p>
      <p className="mt-2 text-red-800">{mensagem}</p>

      {onTentarNovamente && (
        <button
          type="button"
          onClick={onTentarNovamente}
          className="mt-4 rounded-lg bg-red-600 px-5 py-2 font-bold text-white transition hover:bg-red-700"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}

export function Vazio({ mensagem }: { mensagem: string }) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-blue-600 bg-[#b1f8f6] p-8 text-center">
      <p className="font-semibold">{mensagem}</p>
    </div>
  )
}