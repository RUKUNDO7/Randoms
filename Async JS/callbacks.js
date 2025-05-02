const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body:'This is post two'}
];

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index)=>{
            output  += `<li>${post.title}</li>`;// We get the post's title by looping through the posts array
        });
        document.body.innerHTML = output;//after the for each loop, we put it in the body of the document(the HTML page)
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);// We push the new post into the posts array
        callback();// We call the callback function after the post is created
    }, 2000);
}

getPosts();// This will call the getPosts function and display the posts after 1 second

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);// This will create a new post and then call the getPosts function to display the posts after 2 seconds