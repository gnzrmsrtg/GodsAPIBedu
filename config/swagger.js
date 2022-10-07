const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "God is an API"
        }
    }, 
    apis: ['./routes/gods.js']
}

module.exports = options;