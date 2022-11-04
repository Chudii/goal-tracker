import './Header.css'

const Header = ({ title }) => {
    return (
        <header>
            <div className='box'>
                <p>DO<strike>UBT</strike>.</p>
            </div>
            <h1>{title}</h1>
        </header>
    )
}

export default Header