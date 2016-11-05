import './pagination.scss';

const PageList = ({updateCurrentPage, currentPage, totalPages}) => {
    let list = [];

    for(let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        if (pageNumber === currentPage) {
            list.push(<li className="current-page" key={pageNumber}>{pageNumber}</li>);
        } else {
            list.push(<li onClick={() => updateCurrentPage(pageNumber)} key={pageNumber}><a href="#">{pageNumber}</a></li>);
        }
    };

    return (
        <ul>
            {list}
        </ul>
    );
}

const Pagination = ({currentPage, totalPages, colspan, updateCurrentPage}) => {
    return (
        <tfoot className="pagination">
            <tr>
                <td colSpan={colspan}>
                    <PageList updateCurrentPage={updateCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages} />
                </td>
            </tr>
        </tfoot>
    );
}

export default Pagination;