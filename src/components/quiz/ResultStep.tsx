import React from "react";
import { Container, ResultLink, ResultText } from "./ResultStep.styles";

type Props = {
  rejected: boolean;
};

export default function ResultStep({ rejected }: Props) {
  return (
    <Container>
      <ResultText>
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
