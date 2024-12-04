
import { useEffect, useState } from 'react'

import { listUser } from '../userservice/Userlist.js'


function User() {


    const [userData, setUserData] = useState([])

    useEffect(
        () => {
            listUser().then((response) => {
                setUserData(response.data);
            }
            ).catch(error => {
                console.error(error)
            })
        }
        , [])

    return (<div className="container">
        <h2>List of UserData</h2>
        <table className='table table-striped table-bordered'>

            <thead>
                <tr>
                    <th>id  </th>
                    <th>username  </th>
       
                    <th> email </th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map(user =>
                        <tr key={user.id} >
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    )

}

export default User