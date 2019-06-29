import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {

    render() {
        let { itemsCount, pageSize, currentPage, onPageChange } = this.props;
        let numberOfPages = (itemsCount / pageSize) | 0;
        numberOfPages += (itemsCount / pageSize) == 0 ? 0 : 1;
        if (numberOfPages == 1)
            return 0;
        console.log(currentPage)
        return (
            <nav>
                <ul className="pagination">
                    {new Array(numberOfPages).fill(3).map((item, index) => <li
                        key={index}
                        className={index === currentPage ? 'page-item active' : 'page-item'}
                        onClick={() => onPageChange(index)}>
                        <a className="page-link"> {index + 1}</a>
                    </li>)}

                </ul>
            </nav>);
    }

}
// Pagination.PropTypes = {
//     itemsCount: PropTypes.number.isRequired, 
//     pageSize: PropTypes.number.isRequired, 
//     currentPage: PropTypes.number.isRequired, 
//     onPageChange: PropTypes.func.isRequired
// }
export default Pagination;

