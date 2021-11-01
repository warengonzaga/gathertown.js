const requester = require('./requester');

class GATHER {
    constructor(access_key) {
        this.access_key = access_key;
    }

    getMap(spaceID, mapID) {
        return this._sendRequest('getMap'+'?spaceId='+spaceID+'&mapId='+mapID+'&apiKey='+this.access_key);
    }

    async _sendRequest(path) {
        try {
            const response = await requester.get(path, {
                validateStatus: function (status) {
                    return status >= 200 && status < 300; // default
                }
            });
            return response.data;  
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GATHER;