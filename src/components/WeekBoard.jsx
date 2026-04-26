import DayColumn from './DayColumn'

function WeekBoard({ tarefas, onAlternarTarefa, onDeletarTarefa }) {
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

  return (
    <div>
      {diasDaSemana.map(dia => (
        <DayColumn
          key={dia}
          dia={dia}
          tarefas={tarefas}
          onAlternarTarefa={onAlternarTarefa}
          onDeletarTarefa={onDeletarTarefa}
        />
      ))}
    </div>
  )
}

export default WeekBoard