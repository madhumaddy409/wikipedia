// posthistorySearch, gethistorySearch


const { query } = require("express");
const User = require("../models/user")
const History = require("../models/history")

exports.posthistorySearch = async (req, res) =>  {
    const { user_id ,title} = req.body;

    
    let history = await History.findOne({
        user_id,title
      }).populate('User');
      if (history)
        return res.status(400).json({
          message: "alread in history"
          
        });
        else{

                const history = new History(req.body)
                    history.save((err, history) => {
                        if(err) {
                            return res.status(400).json({
                                err: "Data not saved in DB"
                            })
                        }
                        res.json(history)
                        // message: "item added to cart"
                    });

            }


}


exports.gethistorySearch = async (req, res) =>  {


    const user_id = req.user.id
    console.log(user_id)
 
    let history = await History.find({
        user_id
      }).populate('User');;

     
     res.send(history)



}