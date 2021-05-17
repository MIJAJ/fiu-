import { CredentialType } from '@client/interface'

export type AboutUsPageProps = {
  handleLogin: (form: CredentialType) => void
  initialValues: CredentialType
}
