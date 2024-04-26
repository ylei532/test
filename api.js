import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID l6r9SbTjUfODjGg2SCUt-NQ47N-7y66-1_TO34ajE50'
        },
        params: {
            query: term
        }
    });

    return response.data.results
}

export default searchImages;