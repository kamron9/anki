import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import './index.css'
import Root from './root/'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<ThemeProvider defaultTheme='system' storageKey='ui-theme'>
			<Root />
		</ThemeProvider>
	</BrowserRouter>
)
