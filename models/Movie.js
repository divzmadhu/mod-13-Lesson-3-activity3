import mongoose from "mongoose";

// extract /destructure the schema class
import {Schema} from "mongoose";


//Creating our Schema which defines our documents in our books collection

export const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    directors: [String],
    year: Number,
    genres: [String],
    runtime: Number,
    rated: String,
  },
  {
    collection: 'movies',
  }
);

//Use this schema to generate the model, which we use to interact with the database
const Movie = mongoose.model('Movie', movieSchema);

//make this model avilable throughout our application
export default Movie;

