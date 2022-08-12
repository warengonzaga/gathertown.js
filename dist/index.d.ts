interface IGuest {
    [key: string]: {
        name?: string;
        affiliation?: string;
        role?: string;
    };
}
type MapType = 'all-hands-medium' | 'all-hands-small' | 'auditorium-breakout-small-A' | 'auditorium-breakout-small-B' | 'auditorium-breakout-small-C' | 'auditorium-breakout-small-D' | 'auditorium-breakout-small-E' | 'auditorium-breakout-small-F' | 'auditorium-breakout-small-G' | 'auditorium-breakout-small-H' | 'auditorium-lecture-hall' | 'bar-beach' | 'bar-large' | 'bar-small' | 'captains-cabin' | 'classroom-large' | 'classroom-small' | 'coffee-shop' | 'conference-basic-booths-mixed' | 'conference-basic-breakout' | 'conference-basic-breakout2' | 'conference-basic-foyer' | 'conference-basic-keynote' | 'conference-basic-lounge' | 'conference-basic-main' | 'conference-basic-poster-room-24' | 'conference-booths-large' | 'conference-booths-mixed' | 'conference-booths-small' | 'conference-booths-unfurnished' | 'conference-breakout' | 'conference-breakout-unfurnished' | 'conference-deluxe-beach' | 'conference-deluxe-booths-mixed-1' | 'conference-deluxe-booths-mixed-2' | 'conference-deluxe-keynote-east' | 'conference-deluxe-keynote-west' | 'conference-deluxe-lounge' | 'conference-deluxe-main' | 'conference-deluxe-posters-24-1' | 'conference-deluxe-posters-24-2' | 'conference-foyer' | 'conference-foyer-unfurnished' | 'conference-keynote' | 'conference-keynote-unfurnished' | 'conference-main-hall' | 'conference-main-hall-unfurnished' | 'conference-main-large' | 'conference-poster-room-12' | 'conference-poster-room-12-unfurnished' | 'conference-poster-room-24' | 'poster room with 24 posters. movable doors.' | 'custom-entrance' | 'cyberpunk-apartment' | 'detective-office' | 'diner-medium' | 'diner-small' | 'dive-bar' | 'education-breakout-small' | 'education-classroom-large' | 'education-classroom-small' | 'education-common-room-unfurnished' | 'education-hs-common-room' | 'education-lecture-hall' | 'education-recess' | 'education-recess-unfurnished' | 'education-room-unfurnished' | 'empty-100x100' | 'empty-22x22' | 'empty-45x45' | 'empty-room-medium-brick' | 'empty-room-small-brick' | 'event-entrance-foyer' | 'event-entrance-main' | 'family-gathering' | 'family-gathering-cozy' | 'family-gathering-lny' | 'family-gathering-nye-2021' | 'game-room-large' | 'game-room-medium' | 'game-room-small' | 'games-pool' | 'games-track' | 'greenhouse' | 'keynote' | 'keynote-outdoor' | 'lounge-large' | 'moonpond_t' | 'nautical-bar-exterior' | 'nautical-bar-lower' | 'nautical-bar-upper' | 'night-market' | 'night-tent-a' | 'night-tent-b' | 'office-cozy' | 'office-fancy' | 'office-forest' | 'office-inc' | 'office-industrial' | 'office-large-dark-all-hands' | 'office-large-dark-main' | 'office-large-wood-all-hands' | 'office-medium-dark' | 'office-medium-light' | 'office-medium-wood' | 'office-modern' | 'office-pirate-above' | 'office-pirate-bellow' | 'office-pirate-cabin' | 'office-small-dark' | 'office-small-light' | 'office-small-wood' | 'office-space-medium' | 'office-space-small' | 'office-t' | 'office-tiny-dark' | 'office-tiny-light' | 'office-tiny-wood' | 'office-unfurnished' | 'officeMedium' | 'open-mic' | 'open-mic-pride' | 'park-day' | 'park-night' | 'park-t' | 'racetrack' | 'recess' | 'rooftop' | 'space-station' | 'speakeasy' | 'speed-gathering' | 'study' | 'tavern-main' | 'tavern-upper' | 'tetris-tournament' | 'tiny-island' | 'uni-lab' | 'uni-large-lab' | 'uni-lec' | 'uni-rec' | 'waterfront' | 'zen-garden';
interface CreateSpaceProps {
    apiKey: string;
    name: string;
    map?: MapType;
    reason?: string;
    sourceSpace?: string;
}
interface GetEmailGuestlistProps {
    apiKey: string;
    spaceId: string;
}
interface GetMapProps {
    apiKey: string;
    mapId: string;
    spaceId: string;
}
interface SetEmailGuestlistProps {
    apiKey: string;
    spaceId: string;
    guestlist: IGuest;
    overwrite?: boolean;
}
interface SetMapProps {
    apiKey: string;
    mapId: string;
    spaceId: string;
    mapContent: any;
}
interface IGather {
    createSpace(props: Omit<CreateSpaceProps, 'apiKey'>): Promise<string>;
    getEmailGuestlist(props: Omit<GetEmailGuestlistProps, 'apiKey'>): Promise<IGuest>;
    getMap(props: Omit<GetMapProps, 'apiKey'>): Promise<any>;
    setMap(props: Omit<SetMapProps, 'apiKey'>): Promise<any>;
    setEmailGuestlist(props: Omit<SetEmailGuestlistProps, 'apiKey'>): Promise<IGuest>;
}
export default function Gather(initialApiKey: string): IGather;
export const useGather: (apiKey: string) => IGather;
export default Gather;

//# sourceMappingURL=index.d.ts.map
