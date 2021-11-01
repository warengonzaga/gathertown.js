const requester = require('./requester');

class GATHER {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    getMap(spaceID, mapID) {
        let space = '?spaceId='+spaceID;
        let map = '&mapId='+mapID;
        let apiKey = '&apiKey='+this.apiKey;
        return this._sendRequest('getMap'+space+map+apiKey);
    }

    getEmailGuestList(spaceID) {
        let space = '?spaceId='+spaceID;
        let apiKey = '&apiKey='+this.apiKey;
        return this._sendRequest('getEmailGuestlist'+space+apiKey);
    }

    async _sendRequest(path) {
        try {
            const res = await requester.get(path, {
                validateStatus: function (status) {
                    return status >= 200 && status < 300;
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = GATHER;
