
import { User } from "../models/User.js";
import { Property } from "../models/Property.js";


export const recommendedProperty = async (req, res) => {

    const {email ,propertyId} = req.body;
    const recommendingUserId = req.user.id;

    if (!email || !propertyId){
        res.status(400).json({message : "Email and PropertId is required"});
    }
    try {
        const recipient = await User.findOne({email});
        if(!recipient) res.status(404).jsom({msg: "Recipent not found"});

        const recommendation = recipient.recommendationsReceived.find(
            (r) => r.from.toString() === recommendingUserId
        )

        if(recommendation){
            const alreadyExists = recommendation.properties.some(
                (pid) => pid.toString()===propertyId
            )

            if(alreadyExists){
                return res.status(400).json({message: "Property already recommended to this user"});
            }

            recommendation.properties.push(propertyId);
            recommendation.date=new Date();

        }

        else{
            recipient.recommendationsReceived.push({
                from:recommendingUserId,
                properties:[propertyId],
            })
        }

        await recipient.save();

        return res.status(200).json({ msg: 'Property recommended successfully' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
    


}



export const getRecommendations = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
         .populate({
            path: 'recommendationsReceived.from',
            select: 'email',
        })
        .populate({
            path: 'recommendationsReceived.properties',
            model: 'propertydata',
        });

        return res.status(200).json(user.recommendationsReceived);
    } catch (err) {
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
}
