import dish from '../data.json' assert {type : 'json'}

import express from 'express'

const router=express.Router()
let arrayDish=dish.dish
console.log(arrayDish.length)


router.get(`/:nameOfDish/:apiKey`,(req,res,next)=>{
	console.log(req.params.apiKey)
	for (let i=0;i<arrayDish.length;i++){
		if (arrayDish[i].name=req.params.nameOfDish){
			let code=req.params.apiKey
			if (code==process.env.USER_ID)
			{
				res.send(dish.dish[0])
				res.next()
			}
			return res
			.send('no valid apiKey')
			.status(error)
		}
		else {
			continue
		}
/*	}
	let code=req.params.apiKey
	if (code==process.env.USER_ID)
	{
		res.send(dish.dish[0])
		res.next()
	}
	return res
	.send('no valid apiKey')
	.status(error)*/
	}
}
)
export default router
