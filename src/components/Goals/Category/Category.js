import styled from 'styled-components';

const colorMatchup = {
    'lifestyle': '#EF626C',
    'work': '#464D77',
    'fitness': '#85C7F2',
    'hobby': '#EFD780',
    'finances': '#9CD08F',
    'project': '#5C6672',
}

const Block = styled.div(props => ({
    border: '1px solid black',
    backgroundColor: colorMatchup[props.color]
}))

// const categoryStyle = {
//     backgroundColor: colorMatchup[type],
// }

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