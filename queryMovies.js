import 'dotenv/config';
import mongoose from 'mongoose';
import Movie from './models/Movie.js'

// Connect to MongoDB using the connection string stored in .env
await mongoose.connect(process.env.MONGO_URI);

// Confirm in the console that the database connection succeeded
console.log('Connected to MongoDB');

// Fetch up to 3 documents from the movies collection to inspect real data
const sampleMovies = await Movie.find().limit(3);

// Print the retrieved movie documents in the console
console.log('Sample Movies :' , sampleMovies);

// Find up to 5 movies rated PG-13
const pg13Movies = await Movie.find({rated: 'PG-13'}).limit(5);

// Log the matching PG-13 movies
console.log("PG-13 rated Movies : " , pg13Movies)