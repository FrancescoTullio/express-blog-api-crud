import postBlog from "../risorses/recipe";

const postChekID = (req, res, next) => {
    console.log("controllo se esiste");
    const id = parseInt(req.params.id)
    const post = postBlog.find((curPost)=> curPost.id === id)
    if(post) {
        next();
    } else {
        res.statusCode = 404
        res.json({
            error: true,
            message: "Not Found"
        })
    }
}

export default postChekID