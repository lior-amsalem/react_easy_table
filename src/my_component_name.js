import './my_component_name.scss';

class MyComponentName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.msg
        };
    }

    render() {

        const {
            msg
        } = this.props;

        return (
            <div>
                <h1>Hello, {msg}</h1>
            </div>
        )
    }
}

MyComponentName.defaultProps = {
    msg: '-' // msg
}

export default MyComponentName;