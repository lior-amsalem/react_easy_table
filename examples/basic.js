import MyComponentName from '../src/my_component_name';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Basic component</h1>
                <MyComponentName msg="world"/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('.MyApp')
);
