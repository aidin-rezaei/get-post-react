function Grid({post}) {
    return (
        <div className="grid">
            {post.map(post => (

                <div>
                    <h3>
                        {post.title}
                    </h3>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>
    );
}

export default Grid;