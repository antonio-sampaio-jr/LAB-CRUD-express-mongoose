import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const router = express.Router();

router.get("/purchases/:purchaseId", async(request,response)=>{
    try {
        const { id } = request.params;
        const purchase = await PurchaseModel.findById(id).populate("album");
        return response.status(200).json(purchase);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
    
});

router.post("/purchases",async(request,response)=>{
    try{
        const AddAlbumToPurchase = await PurchaseModel.create(
            {albums:request.body.albums}
        );
        AddAlbumToPurchase.products.array.forEach(async element => {
            // atualizar cada album inserido na compra
            await PurchaseModel.findByIdAndUpdate(
                element.album,
                {
                    $push: {orders: AddAlbumToOrder._id}
                },
                {new: true, runValidators: true}    
            );
        });
        return response.status(201).json(AddAlbumToPurchase);
    } catch (error) {
        console.log(error);
        return response.status(500).json({msg: "Algo está errado!"});
    }
});

export default router;
