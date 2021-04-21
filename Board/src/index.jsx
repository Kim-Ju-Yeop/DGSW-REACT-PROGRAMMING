import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './components/App';
import './styles/util.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);

reportWebVitals();