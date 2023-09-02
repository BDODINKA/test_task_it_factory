export type BooksResponseTypes = {
  kind: string
  totalItems: number
  items: BooksResponseItems[]
}
export type BooksResponseItemsVolumeInfoIndustryIdentifiers = {
  type: string
  identifier: string
}
export type BooksResponseItemsVolumeInfoReadingModes = {
  text: boolean
  image: boolean
}
export type BooksResponseItemsVolumeInfoPenalizationSummary = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}
export type BooksResponseItemsVolumeInfoImageLinks = {
  smallThumbnail: string
  thumbnail: string
}
export type BooksResponseItemsVolumeInfo = {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: BooksResponseItemsVolumeInfoIndustryIdentifiers[]
  readingModes: BooksResponseItemsVolumeInfoReadingModes
  pageCount: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: BooksResponseItemsVolumeInfoPenalizationSummary
  imageLinks: BooksResponseItemsVolumeInfoImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}
export type BooksResponseItemsSaleInfo = {
  country: string
  saleability: string
  isEbook: boolean
}
export type BooksResponseItemsAccessInfoEpub = {
  isAvailable: boolean
}
export type BooksResponseItemsAccessInfoPdf = {
  isAvailable: boolean
}
export type BooksResponseItemsAccessInfo = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: BooksResponseItemsAccessInfoEpub
  pdf: BooksResponseItemsAccessInfoPdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}
export type BooksResponseItemsSearchInfo = {
  textSnippet: string
}
export type BooksResponseItems = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: BooksResponseItemsVolumeInfo
  saleInfo: BooksResponseItemsSaleInfo
  accessInfo: BooksResponseItemsAccessInfo
  searchInfo: BooksResponseItemsSearchInfo
}

export type BooksCategoryType =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry'
  | ''

export type BooksSortingType = 'relevance' | 'newest'
