import { Button, Html } from "@react-email/components";

export default function WelcomeMailTemp() {
  return (
    <Html>
      <Button
        href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}


