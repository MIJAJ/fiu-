import { CredentialType } from '@client/interface'

export type ArtWorksPageProps = {
  handleLogin: (form: CredentialType) => void
  initialValues: CredentialType
}
