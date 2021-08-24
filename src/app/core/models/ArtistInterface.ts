export interface ArtistInterface {
  // _id: string,
  name: string;
  photoUrl: string;
  birthdate: string;
  deathDate: string;
}

export interface ArtistInterfaceJson extends ArtistInterface {
  _id: string;
}
