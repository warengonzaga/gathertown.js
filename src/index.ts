/* eslint-disable @typescript-eslint/no-explicit-any */
import requester from "./requester";

interface IGather {
  apiKey: string;
  getMap(spaceId: string, mapId: string): Promise<any>;
  getEmailGuestlist(spaceId: string): Promise<any>;
}

function Gather(apiKey = ""): IGather {
  const getMap = (spaceId: string, mapId: string) => {
    // TODO: Catch nullish value for params
    const _formattedSpaceID = spaceId.replace(/\//gi, "\\\\");
    const _space = "?spaceId=" + _formattedSpaceID;
    const _map = "&mapId=" + mapId;
    const _apiKey = "&apiKey=" + apiKey;
    return _sendRequest("getMap" + _space + _map + _apiKey);
  };

  const getEmailGuestlist = (spaceId: string) => {
    // TODO: Catch nullish value for params
    const _space = "?spaceId=" + spaceId;
    const _apiKey = "&apiKey=" + apiKey;
    return _sendRequest("getEmailGuestlist" + _space + _apiKey);
  };

  const _sendRequest = async (path: string) => {
    try {
      const res = await requester.get(path, {
        validateStatus: function (status) {
          return status >= 200 && status < 300;
        },
      });
      return res.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    apiKey,
    getEmailGuestlist,
    getMap,
  };
}

export default Gather;
