import React from 'react';

const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const pageNumbers = totalPosts / postPerPage;
    const postNumbers = [];

    for (let i = 1; i <= Math.ceil(pageNumbers); i ++) {
        postNumbers.push(i);
    };

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key = {number} className="item-page">
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Pagination;