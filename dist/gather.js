var $1ZQrD$axios = require("axios");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, "__esModule", { value: true, configurable: true });
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  });
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(
  module.exports,
  "default",
  () => $b03e17997ed23475$export$2e2bcd8739ae039
);

const $2674e3ff4ad02d7c$var$config = {
  baseURL: "https://gather.town/api/",
};
var $2674e3ff4ad02d7c$export$2e2bcd8739ae039 = $2674e3ff4ad02d7c$var$config;

const { baseURL: $8332f679e1af33ed$var$baseURL } =
  $2674e3ff4ad02d7c$export$2e2bcd8739ae039;
const $8332f679e1af33ed$var$requester = $parcel$interopDefault(
  $1ZQrD$axios
).create({
  baseURL: $8332f679e1af33ed$var$baseURL,
  responseType: "json",
  validateStatus: (status) => status === 200,
});
var $8332f679e1af33ed$export$2e2bcd8739ae039 = $8332f679e1af33ed$var$requester;

function $b03e17997ed23475$var$Gather(apiKey = "") {
  const getMap = (spaceId, mapId) => {
    // TODO: Catch nullish value for params
    const _formattedSpaceID = spaceId.replace(/\//gi, "\\\\");
    const _space = "?spaceId=" + _formattedSpaceID;
    const _map = "&mapId=" + mapId;
    const _apiKey = "&apiKey=" + apiKey;
    return _sendRequest("getMap" + _space + _map + _apiKey);
  };
  const getEmailGuestlist = (spaceId) => {
    // TODO: Catch nullish value for params
    const _space = "?spaceId=" + spaceId;
    const _apiKey = "&apiKey=" + apiKey;
    return _sendRequest("getEmailGuestlist" + _space + _apiKey);
  };
  const _sendRequest = async (path) => {
    try {
      const res = await $8332f679e1af33ed$export$2e2bcd8739ae039.get(path, {
        validateStatus: function (status) {
          return status >= 200 && status < 300;
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    apiKey: apiKey,
    getEmailGuestlist: getEmailGuestlist,
    getMap: getMap,
  };
}
var $b03e17997ed23475$export$2e2bcd8739ae039 = $b03e17997ed23475$var$Gather;

//# sourceMappingURL=gather.js.map
