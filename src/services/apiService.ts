export default class ApiService {
    __baseURL: string = 'https://api.unsplash.com/photos'
    __KEY: string = '?client_id=MYxfChKumgkr-rodGJs4Az1L1tv7TWcSz4i21T0PAnA'

    getImages = async(page = 1) => {
        const data = await fetch(`${this.__baseURL}${this.__KEY}&per_page=10&page=${page}`)
        if(data.ok) {
            return await data.json()
        } else {
            console.log(`Error ${data.status}`)
        }
    }

    getStatisticImage = async(id: number) => {
        const data = await fetch(`${this.__baseURL}/${id}/statistics${this.__KEY}`)
        if(data.ok) {
            return await data.json()
        } else {
            console.log(`Error ${data.status}`)
        }
    }

}