import { Expose, Type } from 'class-transformer'
import { Rate } from '@model/Rate/Rate'

export class Rates {
  @Expose({ name: 'rates' })
  @Type(() => Rate)
  rates: Rate[]
}
