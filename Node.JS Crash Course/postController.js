const posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
];
//export const getPosts = () => posts;
const getPosts = () => posts;
export const getPostsLength = () =>posts.length;
//export { getPosts};// exported not as default
export default getPosts; // exported as default