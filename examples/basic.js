import EasyTable from '../src/easyTable';


function handleEdit (id) {
    alert('Edit item: ' + id);
}

function handleDelete (id) {
    alert('Delete item: ' + id);
}

const Manage = (option) => {
    return (
        <div>
            <select>
            <option>test</option>
            <option>test</option>
            <option>test</option>
            <option>test</option>
            </select>
        </div>
    );
};

const tHead = [
    {
        title: 'Name',
        assignTo: 'name',
        id: 'table-title'
    },
    {
        title: 'Family Name',
        assignTo: 'family_name',
        id: 'family_name'
    },

    {
        title: 'Manage',
        assignTo: 'actions',
        actions: Manage,
        id: 'manage'
    },
    {
        title: 'Age',
        assignTo: 'age',
        id: 'table-title-another-example'
    },
    {
        title: 'Job',
        assignTo: 'job',
        id: 'job'
    }
];

const data = [
    { name: 'Rick', family_name: 'Sanchez', age: 9000, job: 'Scientist', id:1, option:['test','tsts','tes2'] },
    { name: 'Morty', family_name: 'Smith', age: 14, job: 'Kid', id:2 },
    { name: 'Jerry', family_name: 'Smith', age: 35, job: 'Advertising agent', id:3 },
    { name: 'Beth', family_name: 'Smith', age: 34, job: 'Horse surgeon', id:4 }
];


class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Basic Easy Table Component</h1>
                <h4>Table Header, Table Data, and 2 manage customize handlers (edit + delete)</h4>
                <EasyTable tHead={tHead}
                    data={data}/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('.MyApp')
);
