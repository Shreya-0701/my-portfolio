import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

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

    if (!name || !email || !message) return;

    const templateParams = {
      name: name,
      email,
      message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Message failed to send. Please try again.');
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let’s Connect</h1>
          <p>
            Whether it’s a new project, a question, or just to say hi, I’d love
            to hear from you.
          </p>

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
                  style: { color: '#000' },
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
                helperText={
                  emailError ? 'Please enter your email or phone number' : ''
                }
                InputProps={{
                  style: { color: '#000' },
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
                style: { color: '#000' },
                sx: { '& textarea': { color: '#000' } },
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
