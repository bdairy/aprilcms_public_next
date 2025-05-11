export interface IJobApplicationCommand {
  jobId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  visaStatus: boolean;
  hasEducationalCertificate: boolean;
  proposedJoiningDate: number;
  joiningDate: string;
  coverLetterFile: File;
  cvFile: File;
  reCaptchaToken: string;
}

export class JobApplicationCommand {
  static toFormData(json: IJobApplicationCommand): FormData {
    const formData = new FormData();

    // Map camelCase fields to PascalCase form field names
    formData.append("JobId", json.jobId.toString());
    formData.append("FirstName", json.firstName);
    formData.append("LastName", json.lastName);
    formData.append("Email", json.email);
    formData.append("PhoneNumber", json.phoneNumber);
    formData.append("VisaStatus", String(json.visaStatus));
    formData.append("HasEducationalCertificate", String(json.hasEducationalCertificate));
    formData.append("ProposedJoiningDate", json.proposedJoiningDate.toString());
    if(json.joiningDate) {
      formData.append("JoiningDate", json.joiningDate);
    }
    formData.append("ReCaptchaToken", json.reCaptchaToken);

    // Append file fields
    formData.append("CoverLetterFile", json.coverLetterFile);
    formData.append("CvFile", json.cvFile);

    return formData;
  }
}
