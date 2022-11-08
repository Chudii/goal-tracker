import './Analytics.css'

const Analytics = ({ data }) => {
    return (
        <div className="analytics">
            <p>{data.goal}</p>

            {
                data.goal && <a href={`goals/${data._id}`}>
                    Expand
                </a>
            }
        </div>
    )
}

export default Analytics