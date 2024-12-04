import postBlog from "../risorses/recipe.js";


//index
const index = (req, res) => {
    res.json({
        data:postBlog,
        count:postBlog.length
    })
}

//show
const show = ((req, res) => {    
     const id = parseInt(req.params.id);
     for(let i = 0; i < postBlog.length; i++){
        const curPost = postBlog[i];
        if(curPost.id === id){
            res.json(curPost)
        }
    }
    res.json("errore")
})


//create

const create = (req, res) => {
    res.json("sto creando un nuovo post")
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
    const curId = req.params.id;
    res.json("sto eliminando l'elemento con id " + curId)
}





export default {index, show, create, update, patch, destroy};
