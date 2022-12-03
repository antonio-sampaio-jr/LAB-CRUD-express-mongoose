import express from "express";
import AlbumModel from "../models/album.model.js";

const router = express.Router();

router.get("/albums", async(request,response)=>{
    try {
        const album = await AlbumModel.find();
        return response.status(200).json(album);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
    
});

router.get("/albums/:albumId", async(request,response)=>{
    try {
        const { id } = request.params;
        const album = await AlbumModel.findById(id);

        if(!album)
            return response.status(404).json({msg: "Album não encontrado!"});

        return response.status(200).json(album);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
    
});

router.post("/albums",async(request,response)=>{
    try{
        const newAlbum = await AlbumModel.create(request.body);
       
        return response.status(201).json(newAlbum);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
   
});

router.put("/albums/:albumId", async(request, response) => {
    // seta o id como parâmetro
    try{
        const { id } = request.params;

        const update = await AlbumModel.findByIdAndUpdate(
            id,
            {...request.body},
            { new: true, runValidators:true}
        );

        return response.status(200).json(update);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }

  });

router.delete("/albums/:albumId",async(request,response)=>{

    try{
        const { id } = request.params;

        const deleteAlbum = await AlbumModel.findByIdAndDelete(id);

        return response.status(200).json(deleteAlbum);

    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
});

export default router;