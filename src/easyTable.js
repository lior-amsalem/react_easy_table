class EasyTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.msg
        };
    }

    generateKey(title) {
        return title.replace(/ /g,"_");
    }

    render() {

        const {
            tHead,
            data
        } = this.props;

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
                    {data.map((data, index) => {
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
            </table>
        )
    }
}

EasyTable.propTypes = {
    tHead: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
};

export default EasyTable;