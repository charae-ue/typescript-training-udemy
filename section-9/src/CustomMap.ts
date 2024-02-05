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
}
