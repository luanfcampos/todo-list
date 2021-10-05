import {useState} from 'react';
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo', done: false},
  ])
  
  return (
    <C.Container>
        <C.Area>
          <C.Header>
            Lista de Tarefas
          </C.Header>

          {/*Área de adicionar tarefas*/}

          {list.map((item, index)=>(
              <ListItem key={index} item={item}/>
          ))}

        </C.Area>
    </C.Container>
  );
};

export default App;