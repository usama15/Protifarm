import React from "react";
import "./Footer.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import fb from "../../config/firebase";

export const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const submit = () => {
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
  };
  return (
    <div className="footer">
      <div className="row-footer">
        <div className="column-footer">
          <h1>Thank You for visiting us</h1>
          <h3>
            For more details Visit our
            <br />
            social media platforms
          </h3>
          <a href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="">
            <i className="fas fa-address-card" />
          </a>
          <a href="">
            <i className="fas fa-phone" />
          </a>
        </div>
        <div className="column-footer">
          <h1>Contact Us</h1>
          <form>
            <table border="0px" className="footer-table">
              <tr>
                <td>
                  <label>Name</label>
                </td>
                <td>
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Contact</label>
                </td>
                <td>
                  <TextField
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-input"
                    id="outlined-basic"
                    label="Contact"
                    variant="outlined"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Message</label>
                </td>
                <td>
                  <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input"
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                  />
                </td>
              </tr>
            </table>
            <Button
              onClick={() => submit()}
              className="btn"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
