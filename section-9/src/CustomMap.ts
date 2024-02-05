import Company from './Company';
import User from './User';

/**
 * Instructions to every other class on how they can be an argument to `addMarker`.
 * So we don't have to do this: `addMarker(mappable: User | Company)`, and then have to add more to the union
 * to cater for any other maps (e.g. Car, Park, Cats, etc.)
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export default class CustomMap {
  private googleMap: google.maps.Map; // Don't want anyone else (dev) to access this class

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId) as HTMLElement;

    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
