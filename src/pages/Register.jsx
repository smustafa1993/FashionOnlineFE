import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    //prevents a reload since that is what submitting forms does. In react
    //there is no reload
    e.preventDefault()

    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      ProfilePic: formValues.ProfilePic
    })

    setFormValues(initialState)
    //redirect it to signin page
    navigate('/signin')
  }

  return (
    <div className="col register">
      <img src="/images/register.png" alt="Register" />
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name *</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="John Doe"
            value={formValues.name}
            required
            autoComplete="name"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email *</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password *</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="profPic">Profile Picture</label>
          <input
            onChange={handleChange}
            type="text"
            id="ProfilePic"
            value={formValues.ProfilePic}
          />
        </div>
        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
