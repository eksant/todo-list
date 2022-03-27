import '@/assets/styles/global.less';
import AppRoutes from '@/routes';
import { DataProvider } from './services';
import { BrowserRouter } from 'react-router-dom';
import { Header, Container } from '@/components';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </DataProvider>
  );
}
