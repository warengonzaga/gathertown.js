const requester = require('./requester');

class GATHER {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    getMap(spaceID, mapID) {
        // TODO: Catch nullish value for params
        const formattedSpaceID = spaceID.replace(/\//ig, '\\\\');
        const space = '?spaceId=' + formattedSpaceID;
        const map = '&mapId=' + mapID;
        const apiKey = '&apiKey=' + this.apiKey;
        return this._sendRequest('getMap' + space + map + apiKey);
    }

    getEmailGuestList(spaceID) {
        // TODO: Catch nullish value for params
        const space = '?spaceId=' + spaceID;
        const apiKey = '&apiKey=' + this.apiKey;
        return this._sendRequest('getEmailGuestlist' + space + apiKey);
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
            console.log(error.message);
        }
    }
}

module.exports = GATHER;
