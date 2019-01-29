const API = 'https://dog.ceo/api/breeds/image/random/';

export default async function fetchDogs(num) {
    const result = await fetch(`${API}${num}`);
    const { message } = await result.json();
    return message;
}