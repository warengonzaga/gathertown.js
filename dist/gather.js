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
  "useGather",
  () => $b03e17997ed23475$export$6206ac3e2e7d12ef
);
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

function $b03e17997ed23475$var$Gather(initialApiKey) {
  const getMap = (spaceId, mapId) => {
    // TODO: Catch nullish value for params
    const formattedSpaceID = spaceId.replace(/\//gi, "\\\\");
    const space = "?spaceId=" + formattedSpaceID;
    const map = "&mapId=" + mapId;
    const apiKey = "&apiKey=" + initialApiKey;
    return _sendRequest("getMap" + space + map + apiKey);
  };
  const getEmailGuestlist = (spaceId) => {
    // TODO: Catch nullish value for params
    const space = "?spaceId=" + spaceId;
    const apiKey = "&apiKey=" + initialApiKey;
    return _sendRequest("getEmailGuestlist" + space + apiKey);
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
    getEmailGuestlist: getEmailGuestlist,
    getMap: getMap,
  };
}
const $b03e17997ed23475$export$6206ac3e2e7d12ef = (apiKey) => {
  return $b03e17997ed23475$var$Gather(apiKey);
};
var $b03e17997ed23475$export$2e2bcd8739ae039 = $b03e17997ed23475$var$Gather;

//# sourceMappingURL=gather.js.map
