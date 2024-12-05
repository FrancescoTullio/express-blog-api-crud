import postBlog from "../risorses/recipe.js";


//index
const index = (req, res) => {
    console.log(req.query.platform);
    const query = req.query.platform;

    if(query === undefined){
        res.json({
            data: postBlog,
            count: postBlog.length
        });
    }else{
        const result = postBlog.filter((curPost) => curPost.platform.includes(query))
        console.log(result);
        res.json({
            data: result,
            count: result.length
        })
    }
}

//show
const show = (req, res) => {
    let post = null;
    for (let i = 0; i < postBlog.length; i++) {
        const curElem = postBlog[i];
        if (curElem.id === parseInt(req.params.id)) {
            post = curElem;
        }
    }
    if (post === null) {
        res.sendStatus(404);
    } else {
        res.json(post);
    }
}

//create

const create = (req, res) => {
    const postToCreate = req.body;
    const lastItemId = postBlog[postBlog.length - 1].id;
    const newPost = {
        lastItemId,
        ...postToCreate
    }
    postBlog.push(newPost);
    res.sendStatus(201)
    res.json(newPost);
}

//update

const update = (req, res) => {
    const id = parseInt(req.params.id);
     for(let i = 0; i < postBlog.length; i++){
        const curPost = postBlog[i];
        if(curPost.id === id){
            res.json(curPost)
        }
    }
    res.json("errore")
}

const patch = (req, res) => {
    const id = parseInt(req.params.id);
     for(let i = 0; i < postBlog.length; i++){
        const curPost = postBlog[i];
        if(curPost.id === id){
            res.json(curPost)
        }
    }
    res.json("errore")
}


const destroy = (req, res) => {
    const curId = parseInt(req.params.id);
    const indexToDestroy = postBlog.findIndex((curPost) => curPost.id === curId);
    if (indexToDestroy === -1) {
        res.sendStatus(404);
        res.json({
            error: true,
            message: `non è stato possibile trovare il post con id ${curId}`
        })
    } else {
        postBlog.splice(curId, 1)
        res.sendStatus(204);
        res.json(`ho eliminato il post con id ${curId}`)
    }
}





export default {index, show, create, update, patch, destroy};
