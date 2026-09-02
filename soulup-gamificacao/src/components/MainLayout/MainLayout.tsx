import type { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout