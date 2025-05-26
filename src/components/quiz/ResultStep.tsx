import React from "react";
import { Container, ResultLink, ResultText } from "./ResultStep.styles";

type Props = {
  rejected: boolean;
};

export default function ResultStep({ rejected }: Props) {
  return (
    <Container>
      <ResultText>
        {/* Note: The rejected text below isn't always relevant to a rejection response from the API. To improve UX we would want to return custom responses from the API based on the user's answers, but for now we are using a generic rejection message from the tech test requirements. */}
        {rejected ? (
          "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
        ) : (
          <>
            Great news! We have the perfect treatment for your hair loss.
            Proceed to{" "}
            <ResultLink
              href="https://www.manual.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              manual.co
            </ResultLink>{" "}
            and prepare to say hello to your new hair!
          </>
        )}
      </ResultText>
    </Container>
  );
}
