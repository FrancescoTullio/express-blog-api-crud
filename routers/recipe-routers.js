import express from "express";
const routers =express();


import postController from "../comand/comand-recipe.js";

routers.get('/', postController.index)


routers.get('/:id', postController.show)

routers.post('/', postController.create)


routers.put('/:id', postController.update)

routers.patch('/:id', postController.patch)

routers.delete('/:id', postController.destroy)


export default routers;