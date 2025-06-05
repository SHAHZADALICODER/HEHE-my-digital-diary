const postsData = {
    '1': {
        title: 'Who the heck I am.?',
        content: `Hello! My name is Shahzad Ali — born on June 20, 2008 — and I’m turning 17 this year. Online, many people know me as “Shazzu” — especially in communities like Roblox, Discord, and other places where I’ve built and explored creative worlds.

This blog is my digital space. A place to write freely, think deeply, and store the thoughts I’m often too shy to say out loud. I’ve gone through a lot of internal changes recently — not just growing physically, but emotionally too. The way I look at the world, relationships, my future, and even myself has been evolving.

I’m a self-taught developer, filmmaker, storyteller, and someone who deeply believes in creativity. But at the same time, I’m also navigating the pressure of school, family expectations, and figuring out my true purpose.

This blog is not just for others — it’s also for my future self. A place to leave traces of how I felt, what I learned, and what I dreamed at this stage of my life. Whether I’m talking about deep emotions, coding, game design, or random midnight thoughts — it all belongs here.

Welcome to my mind. Welcome to HEHEHE: My digital diary. (System detected : Need to be updated)`,
    },

    '2': {title: 'Testing title', content: 'This is a test post content. It is just a placeholder to demonstrate the post structure.'},
};


// Get post id from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId && postsData[postId]) {
    document.getElementById('postTitle').textContent = postsData[postId].title;
    document.getElementById('postContent').textContent = postsData[postId].content;
} else {
    document.getElementById('postTitle').textContent = 'Post Not Found';
    document.getElementById('postContent').textContent = 'Sorry, the post you are looking for does not exist.';
}
