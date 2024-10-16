import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const WelcomeMailTemp2 = ({ userFirstname, message }) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg`}
          width="100"
          height="100"
          alt="react-email-resend"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname || "Asif"},</Text>
        <Text style={paragraph}>
          Welcome to react-email-resend, the sales intelligence platform that
          helps you uncover qualified leads and close deals faster.
        </Text>

        <Hr style={hr} />
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />

        <Section style={btnContainer}>
          <Button
            style={button}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}`}
          >
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The react-email-resend team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

/* default props */
/* WelcomeMailTemp2.PreviewProps = {
  userFirstname: "Asif",
} || {}; */

/* styles */
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
