const config = {
    accessKey: "DlBQ9H4bfxv0xN2AWoHODmE3x5gyJGuSAqrXiRoSzF4",
    url: "https://api.unsplash.com/"
}

class API {
    constructor ({url, accessKey}){
        this._url = url;
        this._accessKey = accessKey;
    }

    search ({query}) {
        return fetch(`${this._url}search/photos?per_page=9&query=${query}` , {
            headers: {
                Authorization: `Client-ID ${this._accessKey}`,
            }
        })
        .then (response => response.json()); 
    }
}
const api = new API (config);

export default api;
 