import { useState } from 'react'
import { FiCheckSquare, FiEdit, FiTrash } from 'react-icons/fi'

import { Button, Content, Input, Li, List, Section } from './styles'

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return

    const newTask = {
      id: Math.random(),
      title: newTaskTitle
    }

    setTasks(oldState => [...oldState, newTask]);
    setNewTaskTitle('');
  }
  
  return(
    <Section>
      <Content>
        <Input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={event => setNewTaskTitle(event.target.value)}
          value={newTaskTitle}
        />

        <Button type='submit' onClick={handleCreateNewTask} >
          <FiCheckSquare size={20} />
        </Button>
      </Content>

      <Content>
        <List>
          {tasks.map(task => (
            <Li key={task.id}>
              <span>{task.title}</span>

              <div>
                <Button type='button'>
                  <FiEdit />
                </Button>
                <Button style={{ marginLeft: '10px' }} type='button'>
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