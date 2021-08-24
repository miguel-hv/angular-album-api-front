export interface AlbumInterface {
  // _id: string,
  title: string;
  artistId: string;
  coverUrl: string;
  year: number;
  genre: string;
  // _createdAt: string,
  // _updatedAt: string,
}

export interface AlbumInterfaceJson extends AlbumInterface {
  _id: string;
}
