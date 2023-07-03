import { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [personFilter, setPersonFilter] = useState('');

  function handleNameInput(e) {
    setNewName(e.target.value);
  }
  function handlePhoneInput(e) {
    setNewPhone(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (persons.some((x) => x.name === newName)) {
      alert(`${newName} is already on the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newPhone,
      };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewPhone('');
    }
  }

  function handlePersonFilter(e) {
    setPersonFilter(e.target.value);
  }

  const filteredPersons = persons.filter((x) =>
    x.name.toLowerCase().includes(personFilter.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handlePersonFilter={handlePersonFilter}
        personFilter={personFilter}
      />
      <h2>Add new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newPhone={newPhone}
        handlePhoneInput={handlePhoneInput}
        newName={newName}
        handleNameInput={handleNameInput}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
