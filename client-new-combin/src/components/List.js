import React, {useState, useEffect} from 'react';
import './../styles/styles.css';

const List = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=> {
    }, [])
    return (
        <div className="grid-child">
            <table id="customers">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>SSN</th>
                </tr>
                <tr>
                    {/* {members.map((item)=>(
                        <td>{item.Firstname}</td>
                        <td>{item.LastName}</td>
                        <td>{item.Address}</td>}
                        <td>{item.SSN}</td>
                    ))} */}
                </tr>
            </table>
        </div>
    );
}
 
export default List;