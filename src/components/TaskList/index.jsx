import { useState } from 'react'
import { FiCheckSquare, FiEdit, FiTrash } from 'react-icons/fi'

import { Button, Content, Form, Input, Li, List, Section } from './styles'

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [ editing, setEditing ] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(-1);
  
  function handleCreateNewTask(event) {
    if (!newTaskTitle)  {
      event.preventDefault();

      alert("Adicione uma tarefa!"); 
      return
    } else {
      event.preventDefault();
      
      const newTask = {
        id: Math.random(),
        title: newTaskTitle
      }

      setTasks(oldState => [...oldState, newTask]);
      setNewTaskTitle('');
    }
  }

  function handleEditTask(taskToEdit) {
    setEditing(true)
    const select = tasks.find(task => task.id === taskToEdit )
    if(select) { 
      setNewTaskTitle(select.title);
      setSelectedTaskId(select.id);
    } else {
      setNewTaskTitle("");
      setSelectedTaskId(-1);
    }
  }

  function handleUpdateTask(event) {
    event.preventDefault();
    setEditing(false);
    setTasks((prevTasks) => prevTasks.map(item => item.id === selectedTaskId ? ({ ...item, title: newTaskTitle }) : item))
    setNewTaskTitle('');
}

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  return(
    <Section>
      <Form onSubmit={ editing ? handleUpdateTask : handleCreateNewTask}>
        <Input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={event => setNewTaskTitle(event.target.value)}
          value={newTaskTitle}
        />

        <Button type='submit' >
          { editing ? 'Salvar' : <FiCheckSquare size={20} />}
        </Button>
      </Form>

      <Content>
        <List>
          {tasks.map(task => (
            <Li key={task.id}>
              <span>{task.title}</span>

              <div>
                <Button type='button' onClick={() => handleEditTask(task.id)}>
                  <FiEdit />
                </Button>
                <Button 
                  style={{ marginLeft: '10px' }} 
                  type='button' 
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FiTrash />
                </Button>
              </div>
            </Li>
          ))}
        </List>
      </Content>
    </Section>
  );
}