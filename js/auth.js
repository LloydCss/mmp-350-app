window.addEventListener('load', function() {
	
	const signUpButton = document.getElementById('sign-up');
	const logInButton = document.getElementById('login');
	const logOutButton = document.getElementById('logout');
	
	// new user
	signUpButton.addEventListener('click', function() {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
        const createUserPromise =
		firebase.auth().createUserWithEmailAndPassword(email, password);
        
        createUserPromise.then();
        
        
        createUserPromise.catch();
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






