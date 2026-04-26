function Summary({ tarefas }) {
  const concluidas = tarefas.filter(tarefa => tarefa.done === true)
  const pendentes = tarefas.filter(tarefa => tarefa.done === false)

  return (
    <div>
      <p>Total: {tarefas.length}</p>
      <p>Concluídas: {concluidas.length}</p>
      <p>Pendentes: {pendentes.length}</p>
    </div>
  )
}

export default Summary