const requester = require('./requester');

class GATHER {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    getMap(spaceID, mapID) {
        return this._sendRequest('getMap'+'?spaceId='+spaceID+'&mapId='+mapID+'&apiKey='+this.apiKey);
    }

    getEmailGuestList(spaceID) {
        return this._sendRequest('getEmailGuestlist'+'?spaceId='+spaceID+'&apiKey='+this.apiKey);
    }

    async _sendRequest(path) {
        try {
            const res = await requester.get(path, {
                validateStatus: function (status) {
                    return status >= 200 && status < 300; // default
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GATHER;
