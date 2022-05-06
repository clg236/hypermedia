import { LiveKitRoom } from 'livekit-react'
import 'livekit-react/dist/index.css'
import "react-aspect-ratio/aspect-ratio.css";
import { useRecoilValue } from 'recoil';
import { tokenState } from './_state'

export const RoomPage = () => {

    const url = 'https://live.hypermedia.lol/'
    
    const token = useRecoilValue(tokenState);
  
    console.log(`our token is ${token}`)
    
    return (
      <div className="roomContainer">
        <LiveKitRoom 
            url={url} 
            token={token} 
            onConnected={room => onConnected(room)}
        />
      </div>
    )
  }
  
  async function onConnected(room) {
    await room.localParticipant.setCameraEnabled(true)
    await room.localParticipant.setMicrophoneEnabled(true)
  }