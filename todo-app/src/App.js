import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import Routes from './pages/Routes';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Quicksand"
        }
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
