import { CredentialType } from '@client/interface'

export type ArtHomePageProps = {
  handleLogin: (form: CredentialType) => void
  initialValues: CredentialType
}
