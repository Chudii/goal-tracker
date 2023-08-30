import styled from 'styled-components';
import './Category.css'

const colorMatchup = {
    'lifestyle': '#85C7F2',
    'work': '#464D77',
    'fitness': '#FFAD69',
    'hobby': '#EFD780',
    'finances': '#9CD08F',
    'project': '#5C6672',
}

const Block = styled.div(props => ({
    fontSize: '0.8rem',
    border: '1px solid black',
    padding: '0.4vh 1vh',
    color: 'white',
    backgroundColor: colorMatchup[props.color]
}))


const Category = ({ type }) => {
    return (
        <div className="category">
            <Block color={type}>
                {type}
            </Block>
        </div>
    )
}

export default Category