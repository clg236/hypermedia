import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


// here's the client app state, enjoy
export const tokenState = atom({
    key: 'tokenState',
    default: '', 
});