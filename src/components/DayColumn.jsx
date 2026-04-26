import TaskCard from './TaskCard'

function DayColumn({ dia, tarefas, onAlternarTarefa, onDeletarTarefa }) {
  const tarefasDoDia = tarefas.filter(tarefa => tarefa.day === dia)

  return (
    <div>
      <h2>{dia}</h2>
      {tarefasDoDia.map(tarefa => (
        <TaskCard
          key={tarefa.id}
          tarefa={tarefa}
          onAlternar={onAlternarTarefa}
          onDeletar={onDeletarTarefa}
        />
      ))}
    </div>
  )
}

export default DayColumn