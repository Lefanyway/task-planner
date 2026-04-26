import { useState } from 'react'
import tarefasIniciais from './data/tasks.json'
import Header from './components/Header'
import Summary from './components/Summary'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function adicionarTarefa(novaTarefa) {
    const novaLista = [...tarefas, novaTarefa]
    setTarefas(novaLista)
  }

  function deletarTarefa(id) {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id)
    setTarefas(novaLista)
  }

  function alternarTarefa(id) {
    const novaLista = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, done: !tarefa.done }
      }
      return tarefa
    })
    setTarefas(novaLista)
  }

  return (
    <div>
      <Header />
      <Summary tarefas={tarefas} />
      <TaskForm onAdicionarTarefa={adicionarTarefa} />
      <WeekBoard
        tarefas={tarefas}
        onAlternarTarefa={alternarTarefa}
        onDeletarTarefa={deletarTarefa}
      />
    </div>
  )
}

export default App