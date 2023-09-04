

const PieChart = ({ fitCount = 0, lifeCount = 0, workCount = 0, hobCount = 0, finCount = 0, projCount = 0 }) => {
    const data = [
        {x: "Fitness", value: fitCount},
        {x: "Lifestyle", value: lifeCount},
        {x: "Work", value: workCount},
        {x: "Hobby", value: hobCount},
        {x: "Finances", value: finCount},
        {x: "Project", value: projCount},
    ]

    return (
        <div className="pie-chart">

        </div>
    )
}

export default PieChart