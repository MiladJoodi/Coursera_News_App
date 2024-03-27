
const Details = ({params}) => {
    console.log({params})
    return (
        <div>
            Details of {params.slug}
        </div>
    );
}

export default Details;