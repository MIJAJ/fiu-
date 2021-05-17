import { useRouter } from 'next/router'
import { useAppClient } from '@client/useAppClient'
import { CredentialType } from '@client/interface'
import { AboutUsPageProps } from '@features/aboutus/interface'

const withAboutUsPage = (Component: React.FC<AboutUsPageProps>) => {
  function Hoc() {
    const client = useAppClient()
    const { push } = useRouter()
    const handleLogin = async (loginParams: CredentialType) => {
      // await client?.auth.signIn(loginParams)
      push('/artwork')
    }
    const initialValues = {
      email: '',
      password: '',
    }
    const newProps = { handleLogin, initialValues }
    return <Component {...newProps} />
  }
  Hoc.displayName = `withLoginPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`
  return Hoc
}

export { withAboutUsPage }
