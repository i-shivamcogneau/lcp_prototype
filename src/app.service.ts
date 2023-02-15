import { Injectable } from '@nestjs/common';
import { objs } from './applicationTSFiles/application';

const { MongoClient, ObjectId } = require('mongodb');
// const mongodb = require('mongodb');
// const ObjectID = mongodb.ObjectId;
const uri = 'mongodb://localhost:27017';

const mclientMain = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const mongoConnection = async function () {
  return await mclientMain.connect();
}

// mongoConnection().then(() => {
//   const collection = mclientMain.db('conn2mongo').collection("temps");

//   collection.insertOne({ name: "Company Inc", address: "Highway 37" })

//   // console.log(collection)
// })

var classInstances = {};

@Injectable()
export class AppService {

  getHello() {
    return 'Hello World!';
  }

  async postOBJ(paiii) {
    var t = new objs.PutAway(paiii);   

    var pai = JSON.parse(JSON.stringify(t));

    if(Object.keys(pai).length == 0){
      return 'empty';
    }

    mongoConnection().then(() => {
      const collection = mclientMain.db('conn2mongo').collection("temps");
      collection.insertOne(pai)
    })

    classInstances["t"] =t;

    return pai;
  }

  async putOBJ(paiii) {       // paiii = {"key":"status", "value": 123, "id": "63ec6df03f06ca7003b558bb"}
    var t = classInstances["t"];
    t.setUpdate({"key":"status", "value": 123})

    var pai = JSON.parse(JSON.stringify(t));

    let query = new ObjectId(paiii._id);

    mongoConnection().then(() => {
      const collection = mclientMain.db('conn2mongo').collection("temps");
      collection.updateMany({_id: query},
      {$set: pai})
    })

    return pai;
  }
}