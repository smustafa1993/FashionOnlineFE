import AddProd from "../components/AddProd"
import EditPwBtn from "../components/EditPwBtn"
import { useNavigate } from "react-router"

const Account = ({user}) => {
    let navigate = useNavigate()
    return(
        <>
        <div className="account">
            {user ? (
                <div className="norm-user">
                    <h1>Welcome {user.name}</h1>
                    <h2>Your account details</h2>
                    <img src={user.ProfilePic}/>
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                    <EditPwBtn id={user._id}/>

                    {user.isAdmin && (
                        <div className="admin-user">
                            <AddProd />
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h1>Please Sign In or Sign Up</h1>
                    <p>You need to be logged in to view your account details.</p>
                    <button onClick={() => navigate('/signin')}>Sign In</button> 
                    <button onClick={() => navigate('/register')}>Sign Up</button> 
                </div>
            )}
        </div>
        </>
    )
}
export default Account