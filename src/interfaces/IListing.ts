export interface IListing {
  name: string
  shortDescription: string
  id?: string
  images: {
    alt?: string
    src: string
  }

  category: {
    name: string
    id?: string
  }
}
