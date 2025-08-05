// module.exports = uri = mongodb+srv:shanthiniparthi28122:Jv7dy2yJjMwqmDkq@cluster0.zwmkwhf.mongodb.net/Connection?retryWrites=true&w=majority&appName=Cluster0;

// const uri = mongodb+srv:shanthiniparthi28122:P6yO7oYfeDmU3j7x@cluster0.wrl5hrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;

// module.exports = uri;


require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI;

module.exports = uri;
