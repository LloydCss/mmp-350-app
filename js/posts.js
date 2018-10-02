window.addEventListener('load', function() {
	
	// global variables
	const postsDiv = document.getElementById('posts');
	const postRef = firebase.database().ref('posts');
	
	postRef.on('child_added', function(snapshot) {
		createPost(snapshot.val());
	});
	
	function createPost(post) {
		
		// post container
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		
		// post text
		const postText = document.createElement('div');
		postText.classList.add('post-text');
		postText.textContent = post.text;
		
		// post info 
		const postInfo = document.createElement('div');
		postInfo.classList.add('post-info');
		
		const postAuthor = document.createElement('span');
		postAuthor.classList.add('post-author');
		postAuthor.textContent = post.author;
		
		const postDate = document.createElement('span');
		postDate.classList.add('post-date');
		postDate.textContent = new Date(post.date).toLocaleString('en-us', {month: 'long', year: 'numeric', weekday: 'long', day: 'numeric' });
		
		postInfo.innerHTML += "by ";
		postInfo.appendChild(postAuthor);
		postInfo.innerHTML += " on ";
		postInfo.appendChild(postDate);
		
		postDiv.appendChild(postText);
		postDiv.appendChild(postInfo);
		
		postsDiv.insertBefore(postDiv, postsDiv.firstElementChild);
	}
});











