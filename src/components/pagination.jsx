import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {

    render() {
        let { currentPage, onPageChange, pageSize, count } = this.props;
        let numberOfPages = Math.ceil(count/pageSize);
        if(numberOfPages == 1 ) return null;
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
Pagination.propTypes = {
    count: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}
export default Pagination;

