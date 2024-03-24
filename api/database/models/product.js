import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  properties: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
  },
  price: {
    type: Number,
  },
  mainImage: {
    type: String,
  },
  imgs: [
    {
      type: String,
    },
  ],
  stock:{
    type: Number,
  }
});

/*eslint-disable*/
productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
/* eslint-enable */

export default mongoose.model("Product", productSchema);
