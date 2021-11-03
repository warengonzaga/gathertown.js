interface IGather {
  apiKey: string;
  getMap(spaceId: string, mapId: string): Promise<any>;
  getEmailGuestlist(spaceId: string): Promise<any>;
}
export default function Gather(apiKey?: string): IGather;
export default Gather;

//# sourceMappingURL=index.d.ts.map
