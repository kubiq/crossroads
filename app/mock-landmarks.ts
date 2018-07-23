import { Landmark } from './landmark';

export const LANDMARKS: Landmark[] = [
    {
        id: 'sickrage',
        name: "SickRage",
        description: "TV shows manager",
        image: "~/images/arches-delicate-arch-sky_adobe_680.jpg",
        location: "Box",
        urls: {
            vpn: "http://192.168.200.6:8081/home/"
        }
    },
    {
        id: 'syncthing',
        name: 'SyncThing',
        description: 'Backup service',
        image: '',
        location: 'Box',
        urls: {
            vpn: 'http://192.168.200.6:8384/'
        }
    },
    {
        id: 'radarr',
        name: 'Radarr',
        description: 'Movie manager',
        image: '',
        location: 'Box',
        urls: {
            vpn: 'http://192.168.200.6:7878/'
        }
    },
    {
        id: 'pihole',
        name: 'Pihole',
        description: 'DNS blocker',
        image: '',
        location: 'Pi',
        urls: {
            vpn: 'http://192.168.200.30/admin/'
        }
    },
    {
        id: 'plex',
        name: 'Plex',
        description: 'Media center',
        image: '',
        location: 'Plex',
        urls: {
            vpn: 'http://192.168.200.22:32400/web/'
        }
    }
]