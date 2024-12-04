import MeetingClassRoom from "@/app/components/MeetingClassRoom";


const ClassRoom = ({ params }) => {
  const { classCode: roomID } = params;
  return (
    <section className="border p-4  min-h-screen">
      <h1 className="text-4xl mx-auto p-2 shadow-md w-fit">
        ClassRoom for : {roomID}
      </h1>
      <MeetingClassRoom roomID={roomID}/>
    </section>
  );
};

export default ClassRoom;
