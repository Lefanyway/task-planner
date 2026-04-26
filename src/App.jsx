import { useState } from 'react'
import tarefasIniciais from './data/tasks.json'
import Header from './components/Header'
import Summary from './components/Summary'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)
  const [filtro, setFiltro] = useState('todas')

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

  function limparConcluidas() {
    const novaLista = tarefas.filter(tarefa => tarefa.done === false)
    setTarefas(novaLista)
  }

  function tarefasFiltradas() {
    if (filtro === 'concluidas') {
      return tarefas.filter(tarefa => tarefa.done === true)
    }
    if (filtro === 'pendentes') {
      return tarefas.filter(tarefa => tarefa.done === false)
    }
    return tarefas
  }

  return (
    <div>
      <Header />
      <Summary tarefas={tarefas} />
      <TaskForm onAdicionarTarefa={adicionarTarefa} />

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={limparConcluidas}>Limpar concluídas</button>
      </div>

      <WeekBoard
        tarefas={tarefasFiltradas()}
        onAlternarTarefa={alternarTarefa}
        onDeletarTarefa={deletarTarefa}
      />
    </div>
  )
}

export default App