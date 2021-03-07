import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (event) => {
        console.log('onClick - event:: ', event);
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'beige'
// }

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
