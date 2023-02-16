import { Injectable } from '@nestjs/common';
import { objs } from './applicationTSFiles/application';

const { MongoClient, ObjectId } = require('mongodb');

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

  async postOBJ(req) {
    var objInstance = new objs.PutAway(req);   

    var instanceObj = JSON.parse(JSON.stringify(objInstance));

    if(Object.keys(instanceObj).length == 0){
      return 'empty';
    }

    mongoConnection().then(() => {
      const collection = mclientMain.db('conn2mongo').collection("temps");
      collection.insertOne(instanceObj)
    })

    classInstances[req.classInstanceName] = objInstance;

    return instanceObj;
  }

  async putOBJ(req) {
    var objInstance = classInstances[req.classInstanceName];
    objInstance.setUpdate(req.updateData)

    var instanceObj = JSON.parse(JSON.stringify(objInstance));

    mongoConnection().then(() => {
      const collection = mclientMain.db('conn2mongo').collection("temps");
      collection.updateMany(req.filter, {$set: instanceObj})
    })

    return instanceObj;
  }
}