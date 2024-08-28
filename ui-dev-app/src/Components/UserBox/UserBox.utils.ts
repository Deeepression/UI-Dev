import { PatientStatus, PatientStatuses, Post } from '../PatientsPanel/Patients.model'
import { statusSvgMap } from '../PatientPage/PatientPage.consts'

export const calculateAverageStatus = (posts: Post[]): string => {
  const totalPrediction = posts
    .map(post => post.prediction ?? 0)
    .reduce((sum, prediction) => sum + prediction, 0);

  const averagePrediction = (totalPrediction / posts.length) * 100;
  let status = PatientStatuses.GOOD;

  if (averagePrediction > 60) {
    status = PatientStatuses.BAD;
  } else if (averagePrediction > 30) {
    status = PatientStatuses.MEDIUM;
  }

  return statusSvgMap[status];
}