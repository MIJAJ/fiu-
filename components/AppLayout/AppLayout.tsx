import { FunctionComponentType } from '@interfaces/common/FunctionComponentType'
import TopBar from './components/TopBar/TopBar'

export function AppLayout({ children }: FunctionComponentType) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <TopBar/>
      <main className="flex-grow bg-white bg-no-repeat">
        <div className="">{children}</div>
      </main>
    </div>
  )
}
