import Pagination from './Pagination';

class EasyTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: props.currentPage || 1,
            perPage: props.perPage || 2
        };

        this.updateCurrentPage = this.updateCurrentPage.bind(this);
    }

    generateKey(title) {
        return title.replace(/ /g,"_");
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page});
    }

    filterPerPage(data) {
        const {
            perPage,
            currentPage
        } = this.state;

        const end = perPage * currentPage - 1,
            start = (currentPage - 1) * perPage;

        return data.filter((item, index) => {
            return (index > (start - 1)) && (index < (end + 1));
        });
    }

    render() {

        const {
            currentPage,
            perPage
        } = this.state;

        const {
            tHead,
            data
        } = this.props;

        const totalPages = data.length / perPage;

        return (
            <table className="easy-table">
                <thead>
                    <tr>
                        {tHead.map((title, index) => {
                            return (
                                <th key={title.id || this.genKey(title.title)}>{title.title}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.filterPerPage(data).map((data, index) => {
                        return (
                            <tr key={data.id || this.genKey(title.title)}>
                                {tHead.map((title, index) => {
                                    return (
                                        <td key={title.id || this.genKey(title.title)}>
                                            {title.assignTo === 'actions' && title.actions(data.id)}
                                            {title.assignTo !== 'actions' && data[title.assignTo]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <Pagination colspan={tHead.length}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    updateCurrentPage={this.updateCurrentPage}/>
            </table>
        )
    }
}

EasyTable.propTypes = {
    tHead: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
};

export default EasyTable;