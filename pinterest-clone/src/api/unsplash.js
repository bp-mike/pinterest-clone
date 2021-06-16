import axios from 'axios'

export default axios.create({
    baseUrl: 'http://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8NOq3Bnim9OC6gC1oskwWW_zlG2wfH7FUhgQgslOScs'
    }
})

// Access-key  8NOq3Bnim9OC6gC1oskwWW_zlG2wfH7FUhgQgslOScs
// Secret-key  CNg070p80iic9Bd5sp5sLqihrAScGBlqsNfgZoSFdi8