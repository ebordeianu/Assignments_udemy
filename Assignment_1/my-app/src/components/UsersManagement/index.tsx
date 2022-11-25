import { useEffect, useState } from 'react';
import ButtonCustom from '../ButtonCustom';
import { UserManagementProps } from './interface';
import './style.css';

export default function UsersManagement() {
  const [users, setUsers] = useState<UserManagementProps[]>([]);
  const [userNo, setuserNo] = useState(1);

  const fetchUsers = async () => {
    try {
      if (users.length === 0 || userNo > users[users.length - 1].data.id) {
        const response = await fetch(`https://reqres.in/api/users/${userNo}`, {
          method: 'GET',
        });
        const jsonData = await response.json();
        const data = jsonData.data;
        setUsers([...users, { data }]);
      } else if (userNo < users[users.length - 1].data.id) {
        users.pop();
        setUsers(users);
      }
    } catch (err) {
      console.log('eroare', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [userNo]);

  const increaseId = () => {
    if (userNo < 10) {
      setuserNo(userNo + 1);
    }
  };

  const decreaseId = () => {
    if (userNo > 1) {
      setuserNo(userNo - 1);
    }
  };

  return (
    <div className='main_container'>
      <h1>Users Management</h1>
      {users?.map((user) => {
        return (
          <div className='users_management' key={user?.data.id}>
            <img src={user?.data.avatar} width={120} height={120} alt='' />
            <div className='details'>
              <span className='name'>
                {user?.data.first_name} {user?.data.last_name}
              </span>
              <p id='email'>{user?.data.email}</p>
            </div>
          </div>
        );
      })}
      <div className='buttons'>
        <ButtonCustom type='default' click={increaseId} text='Add' />
        <ButtonCustom type='primary' click={decreaseId} text='Minus' />
      </div>
      <h3 className='number_of_users'> Number of users: {userNo}</h3>
    </div>
  );
}
