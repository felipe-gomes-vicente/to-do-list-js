import { TaskList } from '../../components/TaskList'

import { Brand, Container } from './styles';

export function Home() {
  return (
    <Container>
      <div>
      <Brand>To Do List</Brand>
      </div>
      <TaskList />
    </Container>
  );
}