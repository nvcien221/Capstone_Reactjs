import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import GlobalStyle from "./components/global/global"
import { Provider as ReduxProvider } from "react-redux"
import { CartProvider } from "./components/context/cartContext"
import { store } from "./redux/store"
function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartProvider>
      </GlobalStyle>
    </ReduxProvider>
  )
}

export default App
