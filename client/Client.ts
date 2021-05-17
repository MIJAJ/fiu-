import { GraphQLClient } from 'graphql-request'

import { SampleClientActions } from './collections/SampleClient'
import { AuthClient } from './collections/AuthClient'
import { AuthFunctionListenerType } from './interface'

function injectAuthorizationToken(
  headers: Record<string, unknown>,
  token: string
) {
  return { ...headers, Authorization: `Bearer ${token}` }
}

export class Client {
  isRefreshingAccessToken = false

  authStateListener = [] as AuthFunctionListenerType

  retryRequestTasks = [] as AuthFunctionListenerType

  constructor(private client: GraphQLClient) {
    this.setupClient()
  }

  public auth = new AuthClient(this.client, this.authStateListener)

  public book = new SampleClientActions(this.client)

  onAuthStateChange(listener: () => void) {
    this.authStateListener.push(listener)

    return () => this.authStateListener.filter(l => listener === l)
  }

  setupClient() {
    // TODO: setup apollo client here.
  }

  configWithAuthorization(token: string) {
    // Set a single header
    this.client.setHeader('authorization', token)
  }

  retry() {
    // TODO: setup apollo client retry here.
  }

  retryRequestQueues() {
    // this.retryRequestTasks.forEach(queue => queue(accessTokenOrError))

    this.retryRequestTasks = []
  }

  handleRefreshAccessTokenSuccess() {
    this.isRefreshingAccessToken = false
    // this.retryRequestQueues(this.auth.accessToken!)
  }

  handleRefreshAccessTokenFail() {
    this.isRefreshingAccessToken = false
    // this.retryRequestQueues(error)
  }

  isAccessTokenExpired() {
    // return (
    //   error.config &&
    //   error.config.url !== `/sessions` &&
    //   error.config.url !== `/refresh_token` &&
    //   error.response &&
    //   error.response.status === 401
    // )
  }
}
