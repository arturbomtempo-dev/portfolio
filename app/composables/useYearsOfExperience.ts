export function useYearsOfExperience() {
    return useState('years-of-experience', () => getYearsOfExperience(new Date().getFullYear()));
}
