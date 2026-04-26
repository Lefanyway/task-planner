function TaskCard({ tarefa, onAlternar, onDeletar }) {
  const classePrioridade = `prioridade-${tarefa.priority}`
  const classeConcluida = tarefa.done ? 'concluida' : ''

  return (
    <div className={`card-tarefa ${classePrioridade} ${classeConcluida}`}>
      <p>{tarefa.title}</p>
      <p>Prioridade: {tarefa.priority}</p>
      <div className="botoes-card">
        <button onClick={() => onAlternar(tarefa.id)}>
          {tarefa.done ? 'Reabrir' : 'Concluir'}
        </button>
        <button onClick={() => onDeletar(tarefa.id)}>
          Deletar
        </button>
      </div>
    </div>
  )
}

export default TaskCard