import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'dbuser1',
  age: 21,
});
