import React from "react";

type Props = {
  rejected: boolean;
};

export default function ResultStep({ rejected }: Props) {
  return (
    <div>
      <h2>
        {rejected ? (
          "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
        ) : (
          <>
            Great news! We have the perfect treatment for your hair loss.
            Proceed to{" "}
            {/* TODO: Need styling to make it clear that it is a link */}
            <a
              href="https://www.manual.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              manual.co
            </a>{" "}
            and prepare to say hello to your new hair!
          </>
        )}
      </h2>
    </div>
  );
}
