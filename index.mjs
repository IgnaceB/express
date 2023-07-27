import express from "express"
import 'dotenv/config'
const PORT = 3000
const app = express()
import dish from './data.json' assert {type:'json'}
/*const pastaRouter=require('./routes/pasta.mjs')*/
import pastaRouter from './routes/pasta.mjs'

console.log(dish.dish[1])

console.log(process.env.USER_ID)
// This is a request listener, just like in "vanilla Node"
app.get('/', (req, res) => res.send({ info: `Hello World!` }))

app.use(express.json())

app.use((req,res,next)=>{
	console.log(req.originalUrl+process.env.USER_ID)
	let token=process.env.USER_ID
	if (token!='') {
		next()
	}
	else {
		
		return res
		.status(401)
		.send("error")
	}}
	)

app.use('/pasta',pastaRouter)

// POST request on /signup will trigger this function
app.get('/all/:apiKey', (req, res) => {
	let key=req.params.apiKey 
	if (key=process.env.USER_ID){
		console.log("test")
		res.send(dish)
		res.end()
	}
	else {
		return res
		.status(401)
		.send("error")
	}

})


app.post('/ignace', (req, res) => {
	console.log(req.body)
	res.send("req")
})
/*const pastaRouter=require('./routes/pasta.js')*/
app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))
