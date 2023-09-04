const mongodb = require("../../config/mongodb")
const ObjectId = require('mongodb').ObjectId;

exports.add= (item, callback)=>{
    const collection = mongodb.getCollection("Tasks");
    collection.insertOne({title:item.title, description:item.description, status:item.status})
    .then(()=>{
        callback();
    })
    .catch((err)=>{
        console.log(err);
    });
}

exports.show = (callback)=>{
    const collection = mongodb.getCollection("Tasks");
    collection.find({}).toArray()
        .then(
            (tasks)=>{
                callback(tasks);
            })
        .catch(
            err=>{
                console.log(err);
            }
        );
}

exports.deleteById = (id,callback)=>{
    const collection = mongodb.getCollection("Tasks");
    collection.deleteOne({"_id": new ObjectId(id)})
        .then((res)=>{
            callback(res);
        })
        .catch((err)=>console.log(err));
}

exports.updateById = (item,callback)=>{
    const collection = mongodb.getCollection("Tasks");
    collection.updateOne({_id: new ObjectId(item.id)},{
        $set:{title:item.title,description:item.description,status:item.status}
    })
    .then(()=>{
        callback();
    })
    .catch((err)=>{
        console.log(err);
    });
}

exports.updateStatusById = (id,status,callback)=>{
    const collection = mongodb.getCollection("Tasks");
    collection.updateOne({_id: new ObjectId(id)},{
        $set:{status:status}
    })
    .then(()=>{
        callback();
    })
    .catch((err)=>{
        console.log(err);
    });
}

