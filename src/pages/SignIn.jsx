import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({setUser}) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    //spread will take current formvalues and spread it into new object
    //square brackets around e.target.id makes it a key then 
    //e.taregt.value will be the value of that key
    //so here it is going to be first email: '', password:'', email: 'a'
    //it will be email twice so then the last one becomes the correct one
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    //to prevent the default behaviour of submitting forms which is to reload
    //no reload in react
    e.preventDefault()
    //calling the SignInUser and passing formvalues
    const payload = await SignInUser(formValues)
    //clear the input fields
    setFormValues(initialState)
    //sending the payload back to the app component so it knows which user is currently loggedin
    setUser(payload)
    navigate('/account')
  }

  return (
    <div className="col signin">
      <img src="/images/signin.png" alt="Sign In" />
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
