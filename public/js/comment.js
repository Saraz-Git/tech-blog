const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#content-comment').value.trim();
  const post_id = event.target.getAttribute('data-id');
  console.log(post_id);
  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        content: content,
        post_id: post_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to comment.');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);