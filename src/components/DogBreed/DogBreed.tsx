import React from 'react'
import { useParams } from 'react-router';

interface Props {}

const DogBreed = (props: Props) => {
    const values = useParams();
    console.log(values);
    return (
        <div>
            Dog Breed
        </div>
    )
}

export default DogBreed;
