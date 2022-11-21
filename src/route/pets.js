const express = require('express')
const router = express.Router()
const mongo = require('mongoose')
mongo.Promise = global.Promise

mongo.connect('mongodb://localhost:27017');

const petsDog = new mongo.Schema({
    name:String
})

petsDog.method.talk=function(){
    const hello = this.name ? 'Ivan Talk'+this.name : 'Ivan does not talk'
    console.log(hello)
    return hello
}

const dog = mongo.Model('dog',petsDog)
module.exports = router

router.get('/', function(req, res, next){
    console.log('Here are dogs')
    dog.find(function(err,kittens){
        if(err)
        return console.error(err)

       console.log(JSON.stringify(kittens,null,2)) 
    })
})

router.get('/add',async function(req,res,next){
    const rand = Math.floor(Math.random()*Math.floor(10))
    const dogy = new dog({name: 'Pudi',rand})
    await dogy.save()
    console.log(dogy.talk())

    res.send("A dog was added.<p>'"+dogy.talk+" ")
})

router.get('/:name',async function(req,res,next){
    let name = req.params.name
    //console.log(`==>> find name with : '${name}'´)

    dogy = await dog.findOne({'name': name})
    console.log(JSON.Stringfy(dogy, null,.2))
    let talk = dogy ? '<p>'+dogy.talk(): 'dog is not ther'
    res.send(`<pre>`+JSON.stringify(dogy, null,2)+yalk)

})