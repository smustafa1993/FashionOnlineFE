// File: ../components/EditPassBtn.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography'; 
import Box from '@mui/material/Box'; 
import { UpdatePw } from '../services/Auth';
import { toast } from 'react-toastify';

const EditPwBtn = ({ id }) => {
  const [open, setOpen] = useState(false)
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })
  
  const [displayMessage, setDisplayMessage] = useState('')
  const [messageColor, setMessageColor] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
    setDisplayMessage('')
    setMessageColor('')
  }

  const handleClose = () => {
    setOpen(false)
    setPasswords({ oldPassword: '', newPassword: '', confirmNewPassword: '' })
    setDisplayMessage('')
    setMessageColor('')
  }

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
    setDisplayMessage('')
    setMessageColor('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setDisplayMessage('')
    setMessageColor('')

    if (passwords.newPassword !== passwords.confirmNewPassword) {
      setDisplayMessage("New passwords do not match!")
      setMessageColor("error.main")
      return
    }

    try {
      await UpdatePw(
        id,
        passwords.oldPassword,
        passwords.newPassword
      );
      setDisplayMessage("Password updated successfully!");
      setMessageColor("success.main")
      setPasswords({ oldPassword: '', newPassword: '', confirmNewPassword: '' })

    } catch (error) {
      const errorMessage = error.msg || "Error updating password."
      setDisplayMessage(errorMessage)
      setMessageColor("error.main")
    }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          {displayMessage && (
            <Box sx={{ my: 2, p: 1, border: 1, borderColor: messageColor, borderRadius: 1 }}>
              <Typography variant="body2" color={messageColor}>
                {displayMessage}
              </Typography>
            </Box>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus 
              required
              margin="dense"
              id="oldPassword"
              name="oldPassword" 
              label="Old Password"
              type="password"
              fullWidth
              variant="standard"
              value={passwords.oldPassword}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              id="newPassword"
              name="newPassword" 
              label="New Password"
              type="password"
              fullWidth
              variant="standard"
              value={passwords.newPassword}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              id="confirmNewPassword"
              name="confirmNewPassword" 
              label="Confirm New Password"
              type="password"
              fullWidth
              variant="standard"
              value={passwords.confirmNewPassword}
              onChange={handleChange}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Update Password</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default EditPwBtn;