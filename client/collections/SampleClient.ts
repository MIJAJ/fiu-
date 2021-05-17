import { plainToClass } from 'class-transformer'
import { Rates } from '@model/Rate/Rates'
import { gql, GraphQLClient } from 'graphql-request'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    posts {
      data {
        title
        body
      }
    }
  }
`
export class SampleClientActions {
  constructor(private client: GraphQLClient) {}

  async getBookList() {
    const {
      posts: { data },
    } = await this.client.request(EXCHANGE_RATES)
    return plainToClass(Rates, { rates: data })
  }
}
