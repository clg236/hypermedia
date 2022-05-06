
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { RoomPage } from './RoomPage';
import { StartPage } from './StartPage'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/room" element={<RoomPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
