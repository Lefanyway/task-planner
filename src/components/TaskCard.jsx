function TaskCard({ tarefa, onAlternar, onDeletar }) {
  return (
    <div>
      <p>{tarefa.title}</p>
      <p>Prioridade: {tarefa.priority}</p>
      <p>Status: {tarefa.done ? 'Concluída' : 'Pendente'}</p>
      <button onClick={() => onAlternar(tarefa.id)}>
        {tarefa.done ? 'Reabrir' : 'Concluir'}
      </button>
      <button onClick={() => onDeletar(tarefa.id)}>
        Deletar
      </button>
    </div>
  )
}

export default TaskCard