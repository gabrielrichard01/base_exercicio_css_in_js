import { FormEvent, useState } from 'react'
import { Campo, FormularioVagas, Pesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: any } }) => setTermo(e.target.value)}
        type="search"
      />
      <Pesquisar type="submit">Pesquisar</Pesquisar>
    </FormularioVagas>
  )
}

export default FormVagas
