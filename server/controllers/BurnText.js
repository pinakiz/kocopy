import TextData from "../models/TextData.js";

export const burnText = async(req , res) =>{
    const {id} = req.params;
    // console.log(id);
    try{
        const doc = await TextData.find({uid: id});
        console.log("HELLO")
        console.log(doc[0].burn)
        if(doc[0].burn && doc[0].burn == 'yes'){
            console.log(1);
            TextData.deleteOne({uid : id}).then(function(){
                console.log("Data deleted"); 
            }).catch(function(error){
                console.log(error);
            });
        }
        else {
            console.log(doc[0].burn);
            res.status(200).json({check : 0});
        }
    }
    catch(e){
        console.log("hellop");
        console.log(e.message);

        res.status(500).json((e)=>({message : e.message}));
    }

}