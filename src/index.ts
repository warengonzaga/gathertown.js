import requester from './requester';

interface IGather {
  getMap(spaceId: string, mapId: string): Promise<any>;
  getEmailGuestlist(spaceId: string): Promise<any>;
}

function Gather(initialApiKey: string): IGather {
  const getMap = (spaceId: string, mapId: string) => {
    // TODO: Catch nullish value for params
    const formattedSpaceID = spaceId.replace(/\//gi, '\\\\');
    const space = '?spaceId=' + formattedSpaceID;
    const map = '&mapId=' + mapId;
    const apiKey = '&apiKey=' + initialApiKey;
    return _sendRequest('getMap' + space + map + apiKey);
  };

  const getEmailGuestlist = (spaceId: string) => {
    // TODO: Catch nullish value for params
    const space = '?spaceId=' + spaceId;
    const apiKey = '&apiKey=' + initialApiKey;
    return _sendRequest('getEmailGuestlist' + space + apiKey);
  };

  const _sendRequest = async (path: string) => {
    try {
      const res = await requester.get(path, {
        validateStatus: function (status) {
          return status >= 200 && status < 300;
        }
      });
      return res.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    getEmailGuestlist,
    getMap
  };
}

export const useGather = (apiKey: string) => {
  return Gather(apiKey);
};

export default Gather;
