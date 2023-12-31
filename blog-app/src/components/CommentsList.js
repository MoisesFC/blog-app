const CommentsList = ({ comments }) => {

    if (comments.length === 0) {
        return <h4 style={{paddingBottom: '55px'}}>No comments yet.</h4>;
      }

        return (
            <>
                <h3>Comments:</h3>
                {comments.map(comment => (
                    <div className='comment' key={comment.postedBy + ':' + comment.text}>
                        <hr>
                        <h4>{comment.postedBy}</h4>
                        <p>{comment.text}</p>
                        </hr>
                    </div>
                ))}
            </>
        )
}

export default CommentsList;