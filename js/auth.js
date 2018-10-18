window.addEventListener('load', function() {
	
	const signUpButton = document.getElementById('sign-up');
	const logInButton = document.getElementById('login');
	const logOutButton = document.getElementById('logout');
	
<<<<<<< HEAD
=======
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			document.getElementById('display-name').textContent = "Welcome, " + firebase.auth().currentUser.displayName;
			
			document.body.classList.add('user-logged-in');
			document.body.classList.remove('no-user');
		} else {
			document.body.classList.add('no-user');
			document.body.classList.remove('user-logged-in');
		}
	});
	

	
>>>>>>> 678d5261af697e6b11cc8648b6a724a7dc189a39
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






