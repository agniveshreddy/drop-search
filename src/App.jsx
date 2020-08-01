import React, {useState} from 'react';
import './App.scss';
import SearchDropdown from 'components/SearchDropdown';
import UserInput from 'components/UserInput';

const App = () => {
  const [user, setUser] = useState('');
  const onChange = (e) => { 
    setUser(e.target.value)
  };
  return (
    <div className="App">
      <UserInput onChange={onChange}/>
      {user !=='' && <SearchDropdown user={user}/>}
    </div>
  );
}

export default App;
