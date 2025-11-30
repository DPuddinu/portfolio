import { expect, test } from 'bun:test';
import { calculateAge, calculateExperienceYears } from './getAgeAndExperience';

test('getAgeAndExperience', () => {
  const birthDate = new Date('1992-02-01');
  const startDate = new Date('2019-07-01');
  const age = calculateAge(birthDate);
  const experience = calculateExperienceYears(startDate);
  expect(age).toBe(33);
  expect(experience).toBe(6);
});
