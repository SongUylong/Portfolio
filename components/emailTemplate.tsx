import { FormDataType } from "./SubmissionForm";
export const EmailTemplate: React.FC<Readonly<FormDataType>> = ({
  ...formData
}) => (
  <div>
    <h1>
      You have a new message from {formData.firstName} {formData.lastName}!
    </h1>
    <div>{formData.message}</div>
    <div>
      You can contact {formData.firstName} at {formData.email}
    </div>
  </div>
);
