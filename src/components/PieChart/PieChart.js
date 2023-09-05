import './PieChart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ fitCount = 0, lifeCount = 0, workCount = 0, hobCount = 0, finCount = 0, projCount = 0 }) => {
    const data = {
        labels: [],
        datasets: [
            {
                label: " Total Goals",
                data: [fitCount, lifeCount, workCount, hobCount, finCount, projCount],
                backgroundColor: [
                    '#FFAD69',
                    '#624F82',
                    '#464D77',
                    '#FFC436',
                    '#9CD08F',
                    '#F55050',
                ],
                borderColor: 'black',
                borderWidth: 1,
            }
        ],
    }

    return (
        <div className='pie-chart'>
            <Pie data={data}/>
        </div>
    )
}

export default PieChart