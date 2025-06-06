const postsData = {
    '1': {
        title: 'Who the heck I am.?',
        content: `Hello! My name is Shahzad Ali — born on June 20, 2008 — and I’m turning 17 this year. Online, many people know me as “Shazzu” — especially in communities like Roblox, Discord, and other places where I’ve built and explored creative worlds.

This blog is my digital space. A place to write freely, think deeply, and store the thoughts I’m often too shy to say out loud. I’ve gone through a lot of internal changes recently — not just growing physically, but emotionally too. The way I look at the world, relationships, my future, and even myself has been evolving.

I’m a self-taught developer, filmmaker, storyteller, and someone who deeply believes in creativity. But at the same time, I’m also navigating the pressure of school, family expectations, and figuring out my true purpose.

This blog is not just for others — it’s also for my future self. A place to leave traces of how I felt, what I learned, and what I dreamed at this stage of my life. Whether I’m talking about deep emotions, coding, game design, or random midnight thoughts — it all belongs here.

Welcome to my mind. Welcome to HEHEHE: My digital diary. (System detected : Need to be updated)`,
    },

    '2': {title: 'Why I started this blog?',
        content: `I started this blog to have a space where I can express myself freely. In a world where social media often feels like a performance, I wanted a place that’s just mine. A place to share my thoughts, ideas, and experiences without the pressure of likes or followers.

        This is my own digital diary, where I can write about anything that comes to mind. Whether it’s about coding, game design, personal growth, or just random thoughts, this blog is my sanctuary. It’s a space where I can be myself, reflect on my journey, and connect with others who might feel the same way.
        I also wanted to document my growth and changes over time. As I navigate through life, I find that writing helps me process my thoughts and emotions. It’s a way to understand myself better and to keep track of my journey.
        I believe that writing helps me understand myself better. It’s a way to process my thoughts and emotions, and to document my growth. This blog is not just for me, but also for anyone who might find comfort or inspiration in my words. I hope that by sharing my experiences, I can connect with others who are on similar journeys.`,},
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
