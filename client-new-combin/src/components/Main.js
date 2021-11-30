import React, { useState, useEffect } from 'react';
import './../styles/styles.css';
import InputMask from 'react-input-mask';

const Main = () => {
    //Member Form
    const [memberInfo, setMemberInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        ssn: ''
    });

    const {firstName, lastName, address, ssn} = memberInfo;

    const onChange = e => {
        setMemberInfo({
            ...memberInfo,
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (members.find((member)=> member.ssn === memberInfo.ssn)) {
            alert('This ssn already exists... try another one');
        }
        fetch('http://localhost:8081/api/members', {
            method: 'POST',
            body: JSON.stringify(memberInfo),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                setMembers([...members, memberInfo]);
                resetForm();
              } else {
                 console.log(response.statusText)
              }
         })
    }

    const resetForm = () => {
        setMemberInfo({
            firstname: '',
            lastname: '',
            address: '',
            ssn: ''
        })
    };

    //Member List

    const [members, setMembers] = useState([]);
    async function getMembers () {
        await fetch(`http://localhost:8081/api/members`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            return response.json();
        }).then(members => {
        setMembers(members);
        });;
    };

    useEffect(()=> {
        getMembers();
    }, []);

    return (
        <>
        <div className="grid-child">
            <form onSubmit={onSubmit}>
                <input autoFocus id="firstname" type="text" placeholder="Firstname" required value={firstName} name="firstName" onChange={onChange} minLength={1}></input>
                <input id="lastname" type="text" placeholder="Lastname" required value={lastName} name="lastName" onChange={onChange} minLength={1}></input>
                <input id="address" type="text" placeholder="Address" required value={address} name="address" onChange={onChange} minLength={1}></input>
                <InputMask id="ssn" placeholder="SSN" required value={ssn} name="ssn" onChange={onChange} minLength={1} mask="999-99-9999"></InputMask>
            <button onClick={resetForm}>Reset</button>
            <button>Save</button>
            </form>
        </div>
        <div className="grid-child">
            <table id="members">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>SSN</th>
                </tr>
                {members.map((member)=>(
                    <tr key={member.SSN}>
                        <td>{member.firstName}</td>
                        <td>{member.lastName}</td>
                        <td>{member.address}</td>
                        <td>{member.ssn}</td>
                    </tr>
                ))}
            </table>
        </div>
        </>
    );
}
 
export default Main;