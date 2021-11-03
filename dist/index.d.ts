interface IGather {
  getMap(spaceId: string, mapId: string): Promise<any>;
  getEmailGuestlist(spaceId: string): Promise<any>;
}
export default function Gather(initialApiKey: string): IGather;
export const useGather: (apiKey: string) => IGather;
export default Gather;

//# sourceMappingURL=index.d.ts.map
