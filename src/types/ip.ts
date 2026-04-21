export interface IpLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface IpData {
  ip: string;
  location: IpLocation;
  isp: string;
}
