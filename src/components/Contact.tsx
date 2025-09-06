import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Log form data to console
    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Email/Phone:', email);
    console.log('Message:', message);

    // Uncomment below to enable EmailJS
    /*
    if (name && email && message) {
      const templateParams = { name, email, message };

      emailjs.send('service_id', 'template_id', templateParams, 'api_key')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });

      // Clear form after sending
      setName('');
      setEmail('');
      setMessage('');
    }
    */
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let’s Connect</h1>
          <p>Whether it’s a new project, a question, or just to say hi, I’d love to hear from you.</p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                InputProps={{
                  style: { color: '#000' }, // typed text black
                }}
                InputLabelProps={{ style: { color: '#555' } }}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                InputProps={{
                  style: { color: '#000' }, // typed text black
                }}
                InputLabelProps={{ style: { color: '#555' } }}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              InputProps={{
                style: { color: '#000' }, // single-line text
                sx: { '& textarea': { color: '#000' } }, // multiline text
              }}
              InputLabelProps={{ style: { color: '#555' } }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
