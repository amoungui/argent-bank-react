import Field from "../../components/Field";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../context/DataContext/index';

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  CHECKBOX: 3,
  PASSWORD: 4,
};


function SignIn() {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth); // access your auth state
	console.log(auth);

	const handleSignIn = (event) => {
		let token = ""
		event.preventDefault();
		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;		
		try {
			const response = fetch("http://localhost:3001/user/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
			const data = response.json();
			token = data.token
			// console.log(data);
		} catch (error) {
			console.error("Erreur lors de la connexion:", error);
		}
		dispatch(signIn(token));
	};

	return (
		<main className="main bg-dark">
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSignIn}>
			<div className="input-wrapper">
				<Field
				type={FIELD_TYPES.INPUT_TEXT}
				placeholder=""
				label="Username"
				id="username"
				/>
			</div>
			<div className="input-wrapper">
				<Field
				type={FIELD_TYPES.PASSWORD}
				placeholder=""
				label="Password"
				id="password"
				/>
			</div>
			<div className="input-remember">
				<Field
				type={FIELD_TYPES.CHECKBOX}
				placeholder=""
				label="Remember me"
				id="remember-me"
				/>
			</div>
			<input type="submit" value="Sign In" className="sign-in-button" />
			</form>
		</section>
		</main>
	);
}

export default SignIn;
