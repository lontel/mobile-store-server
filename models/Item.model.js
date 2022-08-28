const { Schema, model } = require("mongoose")

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['Laptops & Computers', 'TVs & Projectors', 'Video Games', 'Tablets', 'Smart Phones', 'Cameras & Camcorders'],
            required: true
        },
        images: {
            type: [String],
            required: true
        },
        description: {
            type: String
        },
        rating: {
            type: Number,
            required: true
        },
        price: {
            type: Number
        },
        publisher: {
            type: String
        },
        releaseDate: {
            type: Date,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: true,
    }
)

const Item = model('Item', itemSchema)

module.exports = Item