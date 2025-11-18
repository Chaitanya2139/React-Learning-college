import {useEffect, useState} from 'react';

export default function FetchApi(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json()
        .then((data) => setUsers(data.slice(0,5))));
        
    }, []);
    
    return(
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}