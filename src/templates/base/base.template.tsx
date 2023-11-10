import React, {  Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import ScrollToStop from 'src/components/scroll-to-stop'

export function BaseTemplate() {
  return (
    <ScrollToStop>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </ScrollToStop>
  )
}
