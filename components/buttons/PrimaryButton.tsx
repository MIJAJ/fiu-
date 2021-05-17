import { ButtonInterfaceProps } from '@components/buttons/interface'
import styles from './index.module.scss'

const PrimaryButton = ({ title, ...props }: ButtonInterfaceProps) => (
  <button
    type='submit'
    className='rounded-2xl bg-gray-line border-2 border-gray-300 p-4 mt-5 cursor-pointer w-[200px]'
    {...props}
  >
    {title}
  </button>
)

export default PrimaryButton
