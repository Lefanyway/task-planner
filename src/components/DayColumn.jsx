import TaskCard from './TaskCard'

function DayColumn({ dia, tarefas, onAlternarTarefa, onDeletarTarefa }) {
  const tarefasDoDia = tarefas.filter(tarefa => tarefa.day === dia)

  return (
    <div className="coluna-dia">
      <h2>{dia}</h2>
      {tarefasDoDia.length === 0 && (
        <p className="empty-state">Nenhuma tarefa para este dia</p>
      )}
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