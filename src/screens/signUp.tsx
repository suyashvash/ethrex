import PrimaryButton from "./components/primaryButton";
import logo from '../screens/assets/popLogo.png'
import { useRef, useState } from "react";

export default function SignUpScreen() {

    const upCard = useRef(null);
    const inCard = useRef(null);

    const [signin, setSignin] = useState<any>('back');
    const [signUp, setSignUp] = useState<any>('front');

    const switchMode = (currentMode: any) => {
        if (currentMode === "Sign Up") {
            setSignUp('back');
            setSignin('front');

        } else {
            setSignin('back');
            setSignUp('front');

        }
    }


    return (
        <div className="base-flex signup-screen">
            <div ref={inCard} className={`base-flex signin-card ${signin}`}>
                <div>
                    <img src={logo} alt="" />
                    <h2>Sign In</h2>
                </div>

                <form action="" method="post">
                    <div>
                        <label htmlFor="fname">Your Email</label>
                        <input type="email" placeholder="someone@gmail.com" id="fname" name="fname" />
                        <label htmlFor="lname">Your Password</label>
                        <input type="password" placeholder="Your Password" id="lname" name="lname" />

                        <PrimaryButton title={"Sign In"} />
                    </div>
                </form>
                <span>Need a Account? <a onClick={() => switchMode("Sign In")}>Sign Up</a></span>
            </div>

            <div ref={upCard} className={`base-flex signup-card ${signUp}`}>
                <div>
                    <img src={logo} alt="" />
                    <h2>Sign Up</h2>
                </div>

                <form action="" method="post">
                    <div>
                        <label htmlFor="fname">Email address</label>
                        <input type="email" placeholder="someone@gmail.com" id="fname" name="fname" />
                        <label htmlFor="lname">Password</label>
                        <input type="password" placeholder="Your Password" id="lname" name="lname" />
                        <PrimaryButton title={"Create Account"} />
                    </div>
                </form>
                <span>Already have a Account? <a onClick={() => switchMode("Sign Up")}>Sign In</a></span>
            </div>


        </div >
    )
}