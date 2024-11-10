import { useMemo, useState } from 'react';
import './App.css';
import UserList from './TaskTwo';

function App() {

  const [search, setSearch] = useState('');

  const students = [
    { id: 1, name: 'John Doe', age: 15, grade: '10th' },
    { id: 2, name: 'Jane Smith', age: 16, grade: '11th' },
    { id: 3, name: 'Sam Green', age: 14, grade: '9th' },
  ];

  const filterStudents = useMemo(() => {
    return students.filter(ele =>
      ele.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, students])

  return (
    <>
      <div className="App">
        <div>
          <input
            type="text"
            placeholder="Search Students"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filterStudents.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <UserList />
    </>
  );
}

export default App;
