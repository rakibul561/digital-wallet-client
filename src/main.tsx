import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routers/index.ts'
import { ThemeProvider } from './providers/theme-providers.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>

     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router}/>
       <Toaster />
    </ThemeProvider>

     </Provider>
  </StrictMode>,
)
