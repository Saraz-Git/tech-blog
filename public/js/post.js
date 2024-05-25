const createPostFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-create-post').value.trim();
    const content = document.querySelector('#content-create-post').value.trim();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method:
                'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type':
                    'application/json'
            },
        }); if (response.ok) {
            document.location.replace('/dashboard'); console.log(response);
        } else {
            alert('Failed to create post.');
        }
    }
};

if (document.querySelector('.create-post-form')) {
    document.querySelector('.create-post-form').addEventListener('submit', createPostFormHandler)
};


const editPostFormHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(`${id}`.rainbow);
        event.preventDefault();
        const title = document.querySelector('#title-edit-post').value.trim();
        const content = document.querySelector('#content-edit-post').value.trim();

        if (title && content) {
            const response = await fetch(`/api/posts/${id}`, {
                method:
                    'PUT',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type':
                        'application/json'
                },
            }); if (response.ok) {
                document.location.replace('/dashboard'); console.log(response);
            } else {
                alert('Failed to update post.');
            }
        }
    }
};




const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/${id}`, { method: 'DELETE', });
        console.log(`${id}`);
        if (response.ok) { document.location.replace('/dashboard'); };
    };
};

if (document.querySelector('.edit-post-form')) {
    document.querySelector('.edit-post-form').addEventListener('click', delButtonHandler);
    // document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler);
}