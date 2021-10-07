import React from 'react'
import "./Contact.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fb from '../../config/firebase'

export const Contact = () => {
    const [email, setEmail] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [name, setName] = React.useState('');


    const submit = () =>{
        if (email === "" || contact === "" || message === "" || name === "") {
            alert("Please fill all field");
          } else if(email !== "" || contact !== "" || message !== "" || name !== "") {
            fb.firestore()
              .collection("contect")
              .doc()
              .set({
                email: email,
                contact: contact,
                message: message,
                name: name,
                date: new Date(),
              })
              .then(alert("Contect Send"))
              .then({
                setMessage: setMessage(""),
                setContact: setContact(""),
                setEmail: setEmail(""),
                setName: setName(""),
              });
          }
    }
    return (
        <div>
            <div className="form-wrapper">
                <div id="wrapper">
                    <div id="contact_form_div">
                        <p id="contact_label">CONTACT  FORM</p>
                        <form>
                            <TextField value={name} onChange={(e) => setName(e.target.value)} className='input' id="outlined-basic" label="Name" variant="outlined" />
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='input' id="outlined-basic" label="Enter Email" variant="outlined" />
                            <TextField value={contact} onChange={(e)=> setContact(e.target.value)} className='input' id="outlined-basic" label="Contact NO" variant="outlined" />
                            <TextField value={message} onChange={(e) => setMessage(e.target.value)} className='input' id="outlined-basic" label="Message" variant="outlined" />
                            <Button onClick={() => submit()} className='btn' color="primary"  variant="contained">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
