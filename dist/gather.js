var $cMI0G$axios = require("axios");

var $4540a25bc7f58d61$exports = {};
'use strict';

var $5d0899154dd6371f$exports = {};
'use strict';
$5d0899154dd6371f$exports = {
    baseURL: 'https://gather.town/api/'
};


const { baseURL: $4540a25bc7f58d61$var$baseURL  } = $5d0899154dd6371f$exports;
const $4540a25bc7f58d61$var$requester = $cMI0G$axios.create({
    baseURL: $4540a25bc7f58d61$var$baseURL,
    responseType: 'json',
    validateStatus: (status)=>status === 200
});
$4540a25bc7f58d61$exports = $4540a25bc7f58d61$var$requester;


class $349a00930b14e029$var$GATHER {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    getMap(spaceID, mapID) {
        let space = '?spaceId=' + spaceID;
        let map = '&mapId=' + mapID;
        let apiKey = '&apiKey=' + this.apiKey;
        return this._sendRequest('getMap' + space + map + apiKey);
    }
    getEmailGuestList(spaceID) {
        let space = '?spaceId=' + spaceID;
        let apiKey = '&apiKey=' + this.apiKey;
        return this._sendRequest('getEmailGuestlist' + space + apiKey);
    }
    async _sendRequest(path) {
        try {
            const res = await $4540a25bc7f58d61$exports.get(path, {
                validateStatus: function(status) {
                    return status >= 200 && status < 300;
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = $349a00930b14e029$var$GATHER;


//# sourceMappingURL=gather.js.map
