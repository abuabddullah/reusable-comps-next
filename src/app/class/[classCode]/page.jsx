import MeetingClassRoom from "@/app/components/MeetingClassRoom";

const ClassRoom = ({ params }) => {
  const { classCode } = params;
  return <MeetingClassRoom roomID={classCode} />;
};

export default ClassRoom;
