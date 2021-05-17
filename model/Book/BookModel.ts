import { Expose, Transform } from 'class-transformer'

export class BookModel {
  @Expose({ name: 'edition_counting' })
  editionCount: number

  @Expose({ name: 'full_url' })
  @Transform(url => `https://www.google.co.th/search?q=${url.value}`)
  fullUrl: string

  @Expose({ name: 'lastUpdate' })
  lastUpdate: string

  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'seed_count' })
  seedCount: number

  @Expose({ name: 'url' })
  url: string
}
