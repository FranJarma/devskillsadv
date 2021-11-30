import React, { useState } from 'react';
import './../styles/styles.css';

const Form = () => {
    const [memberInfo, setMemberInfo] = useState({
        firstname: '',
        lastname: '',
        address: '',
        ssn: ''
    });

    const {firstname, lastname, address, ssn} = memberInfo;

    const onChange = e => {
        setMemberInfo({
            ...memberInfo,
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = () => {
        if(firstname.trim() !== "" || lastname.trim() !== "" || address.trim() !== "")
        {
            alert('Ok!')
        }
        else {
            alert('No ok!')
        }
    }
    
    const resetForm = () => {
        setMemberInfo({
            firstname: '',
            lastname: '',
            address: '',
            ssn: ''
        })
    };

    return (
        <>
        <div className="grid-child">
            <form onSubmit={onSubmit}>
                <input id="firstname" type="text" placeholder="Firstname" required value={firstname} name="firstname" onChange={onChange} minLength={1}></input>
                <input id="lastname" type="text" placeholder="Lastname" required value={lastname} name="lastname" onChange={onChange} minLength={1}></input>
                <input id="address" type="text" placeholder="Address" required value={address} name="address" onChange={onChange} minLength={1}></input>
                <input id="ssn" type="number" placeholder="SSN" required value={ssn} name="ssn" onChange={onChange} minLength={1}></input>
            <button onClick={resetForm}>Reset</button>
            <button>Save</button>
            </form>
        </div>
        </>
    );
}
 
export default Form;