export interface IListing {
  name: string
  shortDescription: string
  id?: string
  images: IImage[]
  category: ICategory | ICategory[]
}

export interface IImage {
  alt?: string
  src: string
}

export interface ICategory {
  name: string
  id?: string
}
