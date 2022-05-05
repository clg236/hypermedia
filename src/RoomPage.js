import { LiveKitRoom } from 'livekit-react'
import 'livekit-react/dist/index.css'
import "react-aspect-ratio/aspect-ratio.css";

export const RoomPage = () => {
    const url = 'https://live.hypermedia.lol/'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGlzcGxheSBuYW1lIiwidmlkZW8iOnsicm9vbUpvaW4iOnRydWUsInJvb20iOiJuYW1lLW9mLXJvb20iLCJjYW5QdWJsaXNoIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWV9LCJpYXQiOjE2NTE3NzMzMzQsIm5iZiI6MTY1MTc3MzMzNCwiZXhwIjoxNjUxNzg3NzM0LCJpc3MiOiJBUElUaHJ3NEFpUlZmOHUiLCJzdWIiOiJ1bmlxdWUtaWRlbnRpdHkiLCJqdGkiOiJ1bmlxdWUtaWRlbnRpdHkifQ.Zw7cvUWdcD7pXjfadp4zJsBus2VGTytGVwwyM7FbyGc'
    return (
      <div className="roomContainer">
        <LiveKitRoom url={url} token={token} onConnected={room => onConnected(room)}/>
      </div>
    )
  }
  
  async function onConnected(room) {
    await room.localParticipant.setCameraEnabled(true)
    await room.localParticipant.setMicrophoneEnabled(true)
  }