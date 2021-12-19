var db= {}

db.createCollection('comments',{
    validator:{

        $jsonSchema:{
            bsonType: "object",
            required:["title","description","commentedBy","postId"],
            properties: {
                title: {
                   bsonType: "string",
                   description: "must be a string and is required"
                },
                description: {
                   bsonType : "string",
                   
                   description: "must be a string and match the regular expression pattern"
                },
                commentedBy:{
                    bsonType:"objectId",
                    description:"can only be object id"
                },
                postId:{
                    bsonType:"objectId",
                    description:"can only be object id"
                },

             }

        }
    }
})




db.comments.insertOne({
    title:"some title",
    description:"some description",
    commentedBy:ObjectId("61b82c4edf475d8c4c4690dc"),
    postId:ObjectId("61b832f5df475d8c4c4690dd")
})






//authors and posts aggregation
db.authors.aggregate({
    $lookup:{
        from:"post",
        localField:"_id",
        foreignField:"creator",
        as:"authorPosts"
    }
})

//posts and comments aggregation
db.post.aggregate({
    $lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"postId",
        as:"postsComments"
    }
})

//posts and comments aggregation
db.users.aggregate({
    $lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"commentedBy",
        as:"Userscomments"
    }
})


var schemaObj = db.comments. findOne();

var schematodo = db.comments.explain()
for (var key in schematodo) { print (key, typeof key) ; };


db.companies.insertOne({ _id:"c001",name:"Tesla"})

db.companies.insertMany([{ _id:"c002",name:"cisco"},{ _id:"c004",name:"goo"}], {ordered:true})
db.companies.insertMany([{ _id:"c002",name:"cisco"},{ _id:"c004",name:"goo"}], {ordered:true})
db.companies.insertMany([{ _id:"c002",name:"cisco"},{ _id:"c004",name:"goo"}], {ordered:false})

//default  w:write to host ackwonledgement j:wtrite journal ack wtimeout :write timeout
db.companies.insertMany([{ _id:"c006",name:"abc"},{ _id:"c007",name:"google"}], {
    writeConcern :{
        w:1,
        j:false,
        wtimeout:1000 
    }
})



