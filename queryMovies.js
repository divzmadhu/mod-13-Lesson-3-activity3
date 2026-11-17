import 'dotenv/config';
import mongoose from 'mongoose';
import Movie from './models/Movie.js'

// Connect to MongoDB using the connection string stored in .env
await mongoose.connect(process.env.MONGO_URI);

// Confirm in the console that the database connection succeeded
console.log('Connected to MongoDB');

// 1. Fetch up to 3 documents from the movies collection to inspect real data
const sampleMovies = await Movie.find().limit(3);

// Print the retrieved movie documents in the console
console.log('Sample Movies :' , sampleMovies);

// 2. Find up to 5 movies rated PG-13
const pg13Movies = await Movie.find({rated: 'PG-13'}).limit(5);

// Log the matching PG-13 movies
console.log("PG-13 rated Movies : " , pg13Movies)

// 3. Find up to 5 movies released in 2015 or later
const topFiveMovies = await Movie.find({year: {$gte: 2015}}).limit(5);

// Log the matching top 5 movies released in 2015 or later
console.log("Top 5 movies released in 2015  or later " , topFiveMovies);

// 4. Find up to 5 Comedy movies (matches if 'Comedy' appears in the genres array)
const comedyMovies =await Movie.find({genres:'Comedy'}).limit(5);

// Log the  5 Comedy movies
console.log("comedyMovies : " , comedyMovies );

// 5. Find up to 5 PG-rated movies with a runtime of at least 120 minutes
const longPGMovies = await Movie.find({rated:'PG',runtime :{$gte:120},}).limit(5);

// Log the  5 PG rated movies who has runtime of atleast 120 minutees
console.log("Long PG  Movies : ", longPGMovies);

//Close the mongoose database connection
await mongoose.connection.close();

console.log('Disconnected from MongoDB')
