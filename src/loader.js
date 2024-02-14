const URL = process.env.REACT_APP_URL;

export const peopleLoader = async () => {
    const response = await fetch(`${URL}/people`);
    const people = await response.json();
    return people;
}

export const personLoader = async ({params}) => {
    const response = await fetch(`${URL}/people/${params.id}`);
    const people = await response.json();
    return people;
}