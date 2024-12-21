import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function startServer() {
  // Connect to MongoDB

  try {
    await mongoose.connect(config.database_url as string)

    console.log('Connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect to MongoDB')
  }
}

startServer()
