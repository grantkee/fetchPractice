let arrayOfPosts;
let arrayOfComments;
let arrayOfUsers;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()
  getComments()
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

const getComments = () => {
  fetch('http://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(comments => arrayOfComments = comments)
}

const getUsers = () => {
  fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => arrayOfUsers = users)
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!
const fetch5Posts = () => {
  const grab5 = document.getElementById('5-posts');
  arrayOfPosts.map((post, index) => {
    if (index <= 5){
      const li = document.createElement('li');
      const text = document.createTextNode(`#${index}, Title: ${post.title}: ${post.body}, by user: ${post.userId}`);
      li.appendChild(text);
      grab5.append(li);
    }
  })
}

const fetchComments = () => {
  const grabComments = document.getElementById('comments');
  arrayOfComments.map((info) => {
    const li = document.createElement('li');
    const userComments = document.createTextNode(`Comment ${info.id} is posted by ${info.email}: ${info.body}`);
    li.appendChild(userComments);
    grabComments.append(li);
  })
}

const fetchUsers = () => {
  const grabUsers = document.getElementById('users');
  arrayOfUsers.map((user) => {
    const li = document.createElement('li');
    const listUsers = document.createTextNode(`User ${user.username} lives in ${user.city}`);
    li.appendChild(listUsers);
    grabUsers.append(li);
  })
}