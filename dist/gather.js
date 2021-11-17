var $1ZQrD$axios = require("axios");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "useGather", () => $b03e17997ed23475$export$6206ac3e2e7d12ef);
$parcel$export(module.exports, "default", () => $b03e17997ed23475$export$2e2bcd8739ae039);

const $2674e3ff4ad02d7c$var$config = {
    baseURL: 'https://gather.town/api/'
};
var $2674e3ff4ad02d7c$export$2e2bcd8739ae039 = $2674e3ff4ad02d7c$var$config;


const $ddb7129aa96814bd$export$a135e81e9a047f61 = $2674e3ff4ad02d7c$export$2e2bcd8739ae039.baseURL;
const $ddb7129aa96814bd$var$axiosInstance = $parcel$interopDefault($1ZQrD$axios).create({
    baseURL: $ddb7129aa96814bd$export$a135e81e9a047f61,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    responseType: 'json'
});
var $ddb7129aa96814bd$export$2e2bcd8739ae039 = $ddb7129aa96814bd$var$axiosInstance;


function $8da348cc7bc20190$export$2e2bcd8739ae039(status) {
    return status >= 200 && status < 300;
}


const $39f1ee161777be93$export$481725944cb98aa3 = ({ apiKey: apiKey , name: name , map: map , reason: reason , sourceSpace: sourceSpace  })=>{
    // Required params
    const data = {
        apiKey: apiKey,
        name: name
    };
    // Optional params based on API Docs, sourceSpace is optional if map is provided and map is optional when sourceSpace is provided
    if (sourceSpace) {
        const formattedSpaceID = sourceSpace.replace(/\//gi, '\\');
        data.sourceSpace = formattedSpaceID;
    } else if (!map) throw new Error('You must provide either a map or a sourceSpace');
    else data.map = map;
    // Optional param
    if (reason) data.reason = reason;
    return $ddb7129aa96814bd$export$2e2bcd8739ae039.post('createRoom', data, {
        validateStatus: $8da348cc7bc20190$export$2e2bcd8739ae039
    });
};




const $bad36371e9559ee5$export$95d70fc673ee2b6c = ({ apiKey: apiKey , spaceId: spaceId  })=>{
    // TODO: Catch nullish value for params
    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    const _spaceId = '?spaceId=' + formattedSpaceID;
    const _apiKey = '&apiKey=' + apiKey;
    return $ddb7129aa96814bd$export$2e2bcd8739ae039.get(`getEmailGuestlist${_spaceId}${_apiKey}`, {
        validateStatus: $8da348cc7bc20190$export$2e2bcd8739ae039
    });
};




const $86f6ab580d0bd5cc$export$f292afb1e783364c = ({ apiKey: apiKey , mapId: mapId , spaceId: spaceId  })=>{
    // TODO: Catch nullish value for params
    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    const _spaceId = '?spaceId=' + formattedSpaceID;
    const _mapId = '&mapId=' + mapId;
    const _apiKey = '&apiKey=' + apiKey;
    return $ddb7129aa96814bd$export$2e2bcd8739ae039.get(`getMap${_spaceId}${_mapId}${_apiKey}`, {
        validateStatus: $8da348cc7bc20190$export$2e2bcd8739ae039
    });
};




const $cb6d4144f18102f8$export$7119370e1336d485 = ({ apiKey: apiKey , spaceId: spaceId , guestlist: guestlist , overwrite: overwrite = false ,  })=>{
    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    const data = JSON.stringify({
        apiKey: apiKey,
        spaceId: formattedSpaceID,
        guestlist: guestlist,
        overwrite: overwrite
    });
    return $ddb7129aa96814bd$export$2e2bcd8739ae039.post('setEmailGuestlist', data, {
        validateStatus: $8da348cc7bc20190$export$2e2bcd8739ae039
    });
};




const $f4aa9d8e92b70b3e$export$3038311898482a66 = ({ apiKey: apiKey , mapContent: mapContent , mapId: mapId , spaceId: spaceId  })=>{
    // Required params
    const formattedSpaceID = spaceId.replace(/\//gi, '\\');
    return $ddb7129aa96814bd$export$2e2bcd8739ae039.post('setMap', {
        apiKey: apiKey,
        spaceId: formattedSpaceID,
        mapId: mapId,
        mapContent: mapContent
    }, {
        validateStatus: $8da348cc7bc20190$export$2e2bcd8739ae039
    });
};


function $b03e17997ed23475$var$Gather(initialApiKey) {
    const createSpace = async ({ name: name , map: map , reason: reason , sourceSpace: sourceSpace  })=>{
        const res = await $39f1ee161777be93$export$481725944cb98aa3({
            apiKey: initialApiKey,
            map: map,
            name: name,
            reason: reason,
            sourceSpace: sourceSpace
        });
        return res.data;
    };
    const getEmailGuestlist = async ({ spaceId: spaceId  })=>{
        const res = await $bad36371e9559ee5$export$95d70fc673ee2b6c({
            apiKey: initialApiKey,
            spaceId: spaceId
        });
        return res.data;
    };
    const getMap = async ({ mapId: mapId , spaceId: spaceId  })=>{
        const res = await $86f6ab580d0bd5cc$export$f292afb1e783364c({
            apiKey: initialApiKey,
            mapId: mapId,
            spaceId: spaceId
        });
        return res.data;
    };
    const setMap = async ({ mapId: mapId , spaceId: spaceId , mapContent: mapContent  })=>{
        const res = await $f4aa9d8e92b70b3e$export$3038311898482a66({
            apiKey: initialApiKey,
            mapContent: mapContent,
            mapId: mapId,
            spaceId: spaceId
        });
        return res.data;
    };
    const setEmailGuestlist = async ({ spaceId: spaceId , guestlist: guestlist , overwrite: overwrite ,  })=>{
        const res = await $cb6d4144f18102f8$export$7119370e1336d485({
            apiKey: initialApiKey,
            spaceId: spaceId,
            guestlist: guestlist,
            overwrite: overwrite
        });
        return res.data;
    };
    return {
        createSpace: createSpace,
        getEmailGuestlist: getEmailGuestlist,
        getMap: getMap,
        setMap: setMap,
        setEmailGuestlist: setEmailGuestlist
    };
}
const $b03e17997ed23475$export$6206ac3e2e7d12ef = (apiKey)=>{
    return $b03e17997ed23475$var$Gather(apiKey);
};
var $b03e17997ed23475$export$2e2bcd8739ae039 = $b03e17997ed23475$var$Gather;


//# sourceMappingURL=gather.js.map
