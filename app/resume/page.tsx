import { redirect } from 'next/navigation';

export default function ResumePage() {
  // Redirect to resume PDF
  // Note: Make sure to add your resume.pdf file to /public/resume.pdf
  redirect('/resume.pdf');
}
