import express from "express";
const routers =express();
import postChekID from "../middel/chekPostExist.js";


import postController from "../comand/comand-recipe.js";

routers.get('/', postController.index)


routers.get('/:id', postChekID, postController.show)

routers.post('/', postController.create)


routers.put('/:id', postChekID, postController.update)

routers.patch('/:id', postChekID, postController.patch)

routers.delete('/:id', postChekID, postController.destroy)


export default routers;