import { Container } from "@react-email/container";
import { Button } from "@react-email/button";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";

interface SignInEmailTemplateProps {
  url: string;
  host: string;
}
export function SignInEmailTemplate({ url, host }: SignInEmailTemplateProps) {
  return (
    <Tailwind>
      <Container>
        <Text>
          Sign in to <strong>{host}</strong>
        </Text>
        <Button
          href={url}
          className="bg-brand px-3 py-2 font-medium leading-4 text-white"
        >
          Sign in
        </Button>
        <Text>If you did not request this email you can safely ignore it.</Text>
      </Container>
    </Tailwind>
  );
}
