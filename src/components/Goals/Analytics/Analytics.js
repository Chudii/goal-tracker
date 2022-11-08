import './Analytics.css'

const Analytics = ({ data }) => {
    return (
        <div className="analytics">
            <p>{data.goal}</p>
        </div>
    )
}

export default Analytics