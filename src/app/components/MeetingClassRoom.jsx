"use client"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const MeetingClassRoom = ({roomID}) => {
    
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = +process.env.NEXT_PUBLIC_ZEEGO_APP_ID; // MUST BE A NUMBER
    const serverSecret = process.env.NEXT_PUBLIC_ZEEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      `user_${Date.now()}`,
      "User Name" // room name
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:3000/class/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div
        className="myCallContainer my-12 max-w-4xl mx-auto"
        ref={myMeeting}
        // style={{ width: "100vw", height: "100vh" }}
      ></div>
  )
}

export default MeetingClassRoom