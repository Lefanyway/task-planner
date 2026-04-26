function TaskForm() {
    return (
        <form>
            <h2>Adicionar Nova Tarefa</h2>
            <input type="text" placeholder="Título da tarefa" />
            <textarea placeholder="Descrição da tarefa"></textarea>
            <button type="submit">Adicionar Tarefa</button>
        </form>
    )
}

export default TaskForm