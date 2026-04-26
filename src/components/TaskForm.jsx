import { useState } from 'react'

function TaskForm({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState('')
  const [dia, setDia] = useState('Segunda')
  const [prioridade, setPrioridade] = useState('baixa')

  function handleSubmit(evento) {
    evento.preventDefault()

    const novaTarefa = {
      id: Date.now(),
      title: titulo,
      day: dia,
      priority: prioridade,
      done: false
    }

    onAdicionarTarefa(novaTarefa)

    setTitulo('')
    setDia('Segunda')
    setPrioridade('baixa')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={evento => setTitulo(evento.target.value)}
      />

      <select value={dia} onChange={evento => setDia(evento.target.value)}>
        <option>Segunda</option>
        <option>Terça</option>
        <option>Quarta</option>
        <option>Quinta</option>
        <option>Sexta</option>
        <option>Sábado</option>
        <option>Domingo</option>
      </select>

      <select value={prioridade} onChange={evento => setPrioridade(evento.target.value)}>
        <option value="baixa">Baixa</option>
        <option value="média">Média</option>
        <option value="alta">Alta</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm