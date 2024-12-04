import JoinForm from "../components/JoinForm";

export default function Home() {
  return (
    <main>
      <section className="border p-4  min-h-screen">
        <h1 className="text-4xl mx-auto p-2 shadow-md w-fit">
          Welcome to Custom Video Conference
        </h1>

        <JoinForm />
      </section>
    </main>
  );
}
