import React, { useState } from 'react';

function MyForm() {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const buyer = { userName, userPhone, userEmail };
    console.log('buyer: ',buyer);

    function onUserNameChanged(evt) {setUserName(evt.target.value)}
    function onUserPhoneChanged(evt) {setUserPhone(evt.target.value)}
    function onUserEmailChanged(evt) {setUserEmail(evt.target.value)}

    return <>
    <div>
    <h1>Buyer's details</h1>
        <form>
            <div className="form-group col-4 text-center"><input className="form-control"type="text"placeholder="Name"onInput={onUserNameChanged}/></div>
            <div className="form-group col-4 text-center"><input className="form-control"type="text"placeholder="Phone"onInput={onUserPhoneChanged}/></div>
            <div className="form-group col-4 text-center"><input className="form-control"type="email"placeholder="e-Mail"onInput={onUserEmailChanged}/></div>
        </form>
    </div>
    </>
}

export default function OrderForm() {
    return (
        <>
        <MyForm />
        </>
    );
}