export interface ArtistInterface {
  name: string;
  photoUrl: string;
  birthdate: string;
  deathdate: string;
}

export interface ArtistInterfaceJson extends ArtistInterface {
  _id: string;
}
