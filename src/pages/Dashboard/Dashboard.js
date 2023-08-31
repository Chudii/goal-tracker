import './Dashboard.css'
import { useEffect, useState } from 'react';
import { getGoals } from '../../services/goals-api';
import Category from '../../components/Category/Category';
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
                <div className='goal-categories'>
                    <p>{categoryCnt.lifestyle} <Category type='fitness' className='home-cat'/> Goal</p>
                    <p>{categoryCnt.work}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard