import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>MovieDetails</div>
    )
}

export default MovieDetails