import { MongoClient } from "mongodb"

async  function handler(req,res) { 
    if(req.method === 'POST') { 
        const {email, name, message} = req.body
         if(
            !email || 
            !email.includes('@') || 
            !name || name.trim() === '' ||
            !message || 
            message.trim() === ''
         ) { 
            res.status(422).json({message: 'invalid input!!!'})
            return
         }
         // store in the database 
         const newMesage = { 
            email, 
            name, 
            message
         }

         let client

         const connectionString  =`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustorname}.eiablla.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`


         try { 
           client = await MongoClient.connect(connectionString)

         }catch(error) { 
             res.status(500).json({message: "could not connect to database. "})
            return
         }

         const db =  client.db(process.env.mongodb_database)

         try { 
             const result = await db.collection('messages').insertOne(newMesage)
             newMesage.id = result.insetedId
         } catch(error) { 
            client.close()
            res.status(500).json({message: 'Stroing Message failed'})
            return
         }

         client.close()
         console.log('done')

         res.status(201). json({message: 'Successfully stored message' , message: newMesage})

    }
}

export default handler