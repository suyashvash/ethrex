import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config";
import LoadingScreen from "./components/loadingScreen";
import PrimaryButton from "./components/primaryButton";
import { UserEmail } from "./features/localState";
import { getAuth, sendPasswordResetEmail, signOut, deleteUser } from "firebase/auth";
import { BiLogOut } from 'react-icons/bi'
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "./features/userSlice";


export default function ProfileScreen() {

    const [userDetails, setUserDetails] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const userRef = projectFirestore.collection('users')

    const userEmail = UserEmail();
    const auth = getAuth();
    const user: any = auth.currentUser;
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => getUser(), [])

    const getUser = () => {
        let pack: any = [];
        userRef.doc(`${userEmail}`).onSnapshot((doc: any) => {
            pack.push(doc.data())
            setUserDetails(pack)
            setIsLoading(false)
        })
    }

    const forgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => { alert("A link to reset password has been sent to your email !") })
            .catch((error: any) => { alert(error.message) })
    }


    // const deleteAccount = () => {
    //     let delConfirm = prompt("Are your you want to delete this account?\n This Action cant be undone \nPlease enter your registered email to confirm:", "Your email")
    //     if (delConfirm === null || delConfirm !== `${userEmail}`) {
    //         return
    //     } else {
    //         deleteUser(user).then(() => {
    //             dispatch(setUserLogOutState())
    //             alert("Your Account has been Deleted")
    //             history.push({ pathname: "/" })
    //         }).catch((error) => alert(error.message));
    //     }

    // }

    const logout = () => {
        signOut(auth).then(() => {
            dispatch(setUserLogOutState())
            alert("You have been logged out sucesfully !")
            history.push({ pathname: "/" })
        }).catch((error) => alert(error.message));
    }

    return (
        !isLoading ?
            <div className="base-flex profile-screen">
                <div className="base-flex profile-card">
                    <div className="img-holder">
                        <img src={userDetails[0].userPic} alt="" />
                    </div>
                    <div className="base-flex profile-data">
                        <span>{userDetails[0].userName}</span>
                        <span className="email">{userDetails[0].email}</span>
                        <div className="base-flex">
                            <PrimaryButton onClick={forgetPassword} title={"Forget Password"} size={'sm'} />
                            {/* <PrimaryButton onClick={deleteAccount} title={"Delete Account"} size={'sm'} /> */}
                        </div>
                        <PrimaryButton onClick={logout} title={"Log Out"} color={"white"} size={'sm'}>
                            <BiLogOut size={20} />
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            :
            <LoadingScreen />
    )
}