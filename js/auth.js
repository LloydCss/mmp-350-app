window.addEventListener('load', function() {
	
	const signUpButton = document.getElementById('sign-up');
	const logInButton = document.getElementById('login');
	const logOutButton = document.getElementById('logout');
	
	// new user
	signUpButton.addEventListener('click', function() {

		const email = emailAuth.value;
		const password = passwordAuth.value;
		const auth = firebase.auth();
		const createUserPromise = auth.createUserWithEmailAndPassword(email, password);
		
		// promise reponse
		createUserPromise.then(function(credential){
			const id = credential.user.uid;
			const db = firebase.database();
			const ref = db.ref('users').child(id);
			const userInfo = {
				displayName: userNameAuth.value		
			};
			ref.set(userInfo);
			credential.user.updateProfile(userInfo)
				.then(displayUserInfo);
		});
		
		// promise error
		createUserPromise.catch(function(error) {
			alert(error.message);	
		});

	});
	
	// log in
	logInButton.addEventListener('click', function() {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		firebase.auth().signInWithEmailAndPassword(email, password);
	});
	
	// log out
	logOutButton.addEventListener('click', function() {
		firebase.auth().signOut();
	});
	
});






