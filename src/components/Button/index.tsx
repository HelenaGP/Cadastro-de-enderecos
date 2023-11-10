import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Button({...rest}) {
  return (
  <button {...rest}>
    Adicionar<AiOutlinePlusCircle size={20}/>
  </button>
  )
}