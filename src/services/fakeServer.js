import { createServer, Model } from 'miragejs'

createServer({
  models: {
    continent: Model
  },
  routes() {
    this.namespace = 'api'

    this.get('/continents', schema => schema.continents.all())
  },
  seeds(server) {
    server.create('continent', {
      name: 'América do Norte',
      shortDescription: 'O novo mundo',
      slideImage: '/images/continents/north-america-slide.jpg'
    })
    server.create('continent', {
      name: 'América do Sul',
      shortDescription: 'O mundo latino',
      slideImage: '/images/continents/south-america-slide.jpg'
    })
    server.create('continent', {
      name: 'Ásia',
      shortDescription: 'O maior dos continentes',
      slideImage: '/images/continents/asia-slide.jpg'
    })
    server.create('continent', {
      name: 'África',
      shortDescription: 'O berço da vida',
      slideImage: '/images/continents/africa-slide.jpg'
    })
    server.create('continent', {
      name: 'Europa',
      shortDescription: 'O continente medieval',
      slideImage: '/images/continents/europe-slide.jpg'
    })
    server.create('continent', {
      name: 'Oceania',
      shortDescription: 'O continente das ilhas',
      slideImage: '/images/continents/oceania-slide.jpg'
    })
  }
})
