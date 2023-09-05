import './Dashboard.css'
import 'react-circular-progressbar/dist/styles.css'
import { useEffect, useState } from 'react';
import { getGoals } from '../../services/goals-api';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Category from '../../components/Category/Category';
import PieChart from '../../components/PieChart/PieChart';
import Navbar from '../../layouts/Navbar/Navbar'

const Dashboard = () => {
    const [goals, setGoals] = useState([])
    const [categoryCnt, setCategoryCnt] = useState({})

    useEffect(() => {
        getGoals()
            .then((res) => {
                setGoals(res.data)

                let categoryCount = {
                    lifestyle: 0,
                    work: 0,
                    fitness: 0,
                    hobby: 0,
                    finances: 0,
                    project: 0,
                }

                res.data.forEach((goal) => {
                    switch (goal.category) {
                        case 'lifestyle':
                            categoryCount.lifestyle++
                            break
                        case 'work':
                            categoryCount.work++
                            break
                        case 'fitness':
                            categoryCount.fitness++
                            break
                        case 'hobby':
                            categoryCount.hobby++
                            break
                        case'finances':
                            categoryCount.finances++
                            break
                        case 'project':
                            categoryCount.project++
                            break
                    }
                })
                setCategoryCnt(categoryCount)
            });

        
    }, [goals]);

    return (
        <div className='dashboard'>
            <Navbar />
            <div className='main-content'>
                <div className='top-dash'>
                    <div className='goal-count'>
                        <div className='lifestyle count'>
                            <p>{categoryCnt.lifestyle}</p>
                            <Category type='lifestyle' /> 
                        </div>
                        <div className='work count'>
                            <p>{categoryCnt.work}</p>
                            <Category type='work' />
                        </div>
                        <div className='finances count'>
                            <p>{categoryCnt.finances}</p>
                            <Category type='finances' /> 
                        </div>
                        <div className='hobby count'>
                            <p>{categoryCnt.hobby}</p>
                            <Category type='hobby' /> 
                        </div>
                        <div className='fitness count'>
                            <p>{categoryCnt.fitness}</p>
                            <Category type='fitness' /> 
                        </div>
                        <div className='project count'>
                            <p>{categoryCnt.project}</p>
                            <Category type='project' /> 
                        </div>
                    </div>
                    <div className='goal-chart'>
                        <PieChart
                            fitCount={categoryCnt.fitness}
                            lifeCount={categoryCnt.lifestyle}
                            workCount={categoryCnt.work}
                            hobCount={categoryCnt.hobby}
                            finCount={categoryCnt.finances}
                            projCount={categoryCnt.project}
                        />
                        <p>GOAL SPREAD</p>
                    </div>
                </div>
                <div className='bottom-dash'>
                    <div className='goal-info'>
                        <CircularProgressbar
                            value={0}
                            text={`${goals.length}`}
                            styles={buildStyles({
                                textColor: 'black'
                            })}
                        />
                        <p>ACTIVE GOALS</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard