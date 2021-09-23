import {
  belongsTo,
  createServer,
  hasMany,
  JSONAPISerializer,
  Model
} from 'miragejs'

createServer({
  models: {
    continent: Model.extend({
      cities: hasMany('city')
    }),
    city: Model.extend({
      continent: belongsTo()
    })
  },
  serializers: {
    application: JSONAPISerializer
  },
  routes() {
    this.namespace = 'api'

    this.get('/continents', schema => schema.continents.all())

    this.get('/continent/:slug', (schema, request) => {
      const slug = request.params.slug

      return schema.continents.findBy({ slug })
    })

    this.namespace = ''
    this.passthrough()
  },
  seeds(server) {
    server.create('continent', {
      name: 'América do Norte',
      shortDescription: 'O novo mundo',
      slideImage: '/images/continents/north-america-slide.jpg',
      slug: 'north-america',
      bannerImage: '/images/continents/north-america-banner.jpg',
      description: `América do Norte está localizada no extremo norte das
        Américas e é composta por apenas três países: Estados Unidos, Canadá e
        México, além de territórios de domínios europeus, como a Groelândia
        (pertencente ao Reino da Dinamarca, com representação no parlamento) e
        Bermudas (dependência britânica).`,
      countries: 23,
      languages: 10
    })
    server.create('continent', {
      name: 'América do Sul',
      shortDescription: 'O mundo latino',
      slideImage: '/images/continents/south-america-slide.jpg',
      slug: 'south-america',
      bannerImage: '/images/continents/south-america-banner.jpg',
      description: `o continente possui a segunda maior cordilheira do mundo na
        Região Andina que se estende desde a Venezuela até o Chile e a
        Argentina. No vale do Amazonas encontramos a maior bacia hidrográfica
        do mundo, e também, a região de maior biodiversidade: a floresta
        Amazônica.`,
      countries: 12,
      languages: 15
    })
    server.create('continent', {
      name: 'Ásia',
      shortDescription: 'O maior dos continentes',
      slideImage: '/images/continents/asia-slide.jpg',
      slug: 'asia',
      bannerImage: '/images/continents/asia-banner.jpg',
      description: `A Ásia é o maior continente em área terrestre do mundo,
        estando boa parte do continente localizado no Hemisfério Norte. Além de
        ser o mais extenso, é também o mais populoso, habitando nele cerca de
        três quintos da população mundial. A Ásia é multicultural, abrigando
        diversas culturas, etnias, religiões e tradições.`,
      countries: 55,
      languages: 75
    })
    server.create('continent', {
      name: 'África',
      shortDescription: 'O berço da vida',
      slideImage: '/images/continents/africa-slide.jpg',
      slug: 'africa',
      bannerImage: '/images/continents/africa-banner.jpg',
      description: `A África é conhecida pela sua pluralidade étnica e cultural,
        e, por meio de uma história milenar, é capaz de contar a história de
        toda a humanidade. Apesar da enorme riqueza do continente, muitos
        países africanos apresentam baixos índices de desenvolvimento, com
        diversos problemas sociais, como a miséria, baixa qualidade de vida,
        subnutrição`,
      countries: 54,
      languages: 1500
    })
    server.create('continent', {
      name: 'Europa',
      shortDescription: 'O continente medieval',
      slideImage: '/images/continents/europe-slide.jpg',
      slug: 'europe',
      bannerImage: '/images/continents/europe-banner.jpg',
      description: `A Europa é considerada o berço da cultura ocidental. Tendo
        desempenhado um papel preponderante na cena mundial a partir do século
        XVI, especialmente após o início do colonialismo.`,
      countries: 50,
      languages: 25
    })
    server.create('continent', {
      name: 'Oceania',
      shortDescription: 'O continente das ilhas',
      slideImage: '/images/continents/oceania-slide.jpg',
      slug: 'oceania',
      bannerImage: '/images/continents/oceania-banner.jpg',
      description: `Oceania é uma região geográfica composta por vários grupos
        de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O
        termo Oceania foi criado em 1831 pelo explorador francês Dumont
        d'Urville.`,
      countries: 14,
      languages: 30
    })

    server.create('city', {
      name: 'Nova Iorque',
      country: 'Estados Unidos',
      countryCode: 'US',
      continentId: 1,
      image: 'https://unsplash.com/photos/wh-7GeXxItI/download?w=640'
    })
    server.create('city', {
      name: 'Miami',
      country: 'Estados Unidos',
      countryCode: 'US',
      continentId: 1,
      image: 'https://unsplash.com/photos/UN4cs4zNCYo/download?w=640'
    })
    server.create('city', {
      name: 'Los Angeles',
      country: 'Estados Unidos',
      countryCode: 'US',
      continentId: 1,
      image: 'https://unsplash.com/photos/645g50Mxy8s/download?w=640'
    })
    server.create('city', {
      name: 'Las Vegas',
      country: 'Estados Unidos',
      countryCode: 'US',
      continentId: 1,
      image: 'https://unsplash.com/photos/9xjdQ8-zLKI/download?w=640'
    })
    server.create('city', {
      name: 'Cancun',
      country: 'México',
      countryCode: 'MX',
      continentId: 1,
      image: 'https://unsplash.com/photos/PW3tJkRkSy8/download?w=640'
    })
    server.create('city', {
      name: 'Orlando',
      country: 'Estados Unidos',
      countryCode: 'US',
      continentId: 1,
      image: 'https://unsplash.com/photos/z4ky2zXIjDM/download?w=640'
    })
    server.create('city', {
      name: 'Toronto',
      country: 'Canada',
      countryCode: 'CA',
      continentId: 1,
      image: 'https://unsplash.com/photos/qlKaN7eqay8/download?w=640'
    })

    server.create('city', {
      name: 'Buenos Aires',
      country: 'Argentina',
      countryCode: 'AR',
      continentId: 2,
      image: 'https://unsplash.com/photos/z0A_IsZYXfM/download?w=640'
    })
    server.create('city', {
      name: 'Lima',
      country: 'Peru',
      countryCode: 'PE',
      continentId: 2,
      image: 'https://unsplash.com/photos/Yrqyn1Gb80k/download?w=640'
    })
    server.create('city', {
      name: 'Rio de Janeiro',
      country: 'Brazil',
      countryCode: 'BR',
      continentId: 2,
      image: 'https://unsplash.com/photos/7F65HDP0-E0/download?w=640'
    })

    server.create('city', {
      name: 'Hong Kong',
      country: 'Hong Kong',
      countryCode: 'HK',
      continentId: 3,
      image: 'https://unsplash.com/photos/qEWEz-U5p8Q/download?w=640'
    })
    server.create('city', {
      name: 'Bangkok',
      country: 'Thailand',
      countryCode: 'TH',
      continentId: 3,
      image: 'https://unsplash.com/photos/B64B6-kAWlw/download?w=640'
    })
    server.create('city', {
      name: 'Macau',
      country: 'Macau',
      countryCode: 'MO',
      continentId: 3,
      image: 'https://unsplash.com/photos/HR2awndNZi8/download?w=640'
    })
    server.create('city', {
      name: 'Singapura',
      country: 'Singapura',
      countryCode: 'SG',
      continentId: 3,
      image: 'https://unsplash.com/photos/__cBlRzLSTg/download?w=640'
    })
    server.create('city', {
      name: 'Dubai',
      country: 'Emirados Árabes Unidos',
      countryCode: 'AE',
      continentId: 3,
      image: 'https://unsplash.com/photos/Fr6zexbmjmc/download?w=640'
    })
    server.create('city', {
      name: 'Kuala Lampur',
      country: 'Malásia',
      countryCode: 'MY',
      continentId: 3,
      image: 'https://unsplash.com/photos/uPJzWWhPcP4/download?w=640'
    })
    server.create('city', {
      name: 'Istanbul',
      country: 'Turquia',
      countryCode: 'TR',
      continentId: 3,
      image: 'https://unsplash.com/photos/0n0AHB1fgTQ/download?w=640'
    })

    server.create('city', {
      name: 'Cairo',
      country: 'Egito',
      countryCode: 'EG',
      continentId: 4,
      image: 'https://unsplash.com/photos/pwMbtwA9LRc/download?w=640'
    })
    server.create('city', {
      name: 'Joanesburgo',
      country: 'África do Sul',
      countryCode: 'ZA',
      continentId: 4,
      image: 'https://unsplash.com/photos/xvJVDUoGpoU/download?w=640'
    })
    server.create('city', {
      name: 'Marrakesh',
      country: 'Marrocos',
      countryCode: 'MA',
      continentId: 4,
      image: 'https://unsplash.com/photos/CFKksjYRSQ8/download?w=640'
    })
    server.create('city', {
      name: 'Hurgada',
      country: 'Egito',
      countryCode: 'EG',
      continentId: 4,
      image: 'https://unsplash.com/photos/lPUdX9V6Pt0/download?w=640'
    })

    server.create('city', {
      name: 'Londres',
      country: 'Reino Unido',
      countryCode: 'GB',
      continentId: 5,
      image: 'https://unsplash.com/photos/EXdXLrZXS9Q/download?w=640'
    })
    server.create('city', {
      name: 'Paris',
      country: 'França',
      countryCode: 'FR',
      continentId: 5,
      image: 'https://unsplash.com/photos/nnzkZNYWHaU/download?w=640'
    })
    server.create('city', {
      name: 'Roma',
      country: 'Itália',
      countryCode: 'IT',
      continentId: 5,
      image: 'https://unsplash.com/photos/oI141-aIwnQ/download?w=640'
    })
    server.create('city', {
      name: 'Praga',
      country: 'República Tcheca',
      countryCode: 'CZ',
      continentId: 5,
      image: 'https://unsplash.com/photos/OyoaCpMCR0U/download?w=640'
    })
    server.create('city', {
      name: 'Amsterdam',
      country: 'Holanda',
      countryCode: 'NL',
      continentId: 5,
      image: 'https://unsplash.com/photos/t2hgHV1R7_g/download?w=640'
    })
    server.create('city', {
      name: 'Barcelona',
      country: 'Espanha',
      countryCode: 'SP',
      continentId: 5,
      image: 'https://unsplash.com/photos/nD2WzCZrlLE/download?w=640'
    })
    server.create('city', {
      name: 'Milão',
      country: 'Itália',
      countryCode: 'IT',
      continentId: 5,
      image: 'https://unsplash.com/photos/BDRqDvj0TeA/download?w=640'
    })

    server.create('city', {
      name: 'Sidney',
      country: 'Austrália',
      countryCode: 'AU',
      continentId: 6,
      image: 'https://unsplash.com/photos/jJF-zlkXTmU/download?w=640'
    })
    server.create('city', {
      name: 'Melbourne',
      country: 'Austrália',
      countryCode: 'AU',
      continentId: 6,
      image: 'https://unsplash.com/photos/nOh1SBxtjPg/download?w=640'
    })
    server.create('city', {
      name: 'Auckland',
      country: 'Austrália',
      countryCode: 'AU',
      continentId: 6,
      image: 'https://unsplash.com/photos/hIKVSVKH7No/download?w=640'
    })
  }
})
