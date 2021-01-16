import React, { useState } from 'react';
import "./Pagination.css";

function Pagination(data, itemsPerPage) {

    // setPage using React Hooks

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    // For Pagination next page

    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 3, maxPage));
    }

    // For Pagination Previous Page      

    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    // Pagination For Jump

    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    return (
        <div>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
                <a href="#">11</a>
                <a href="#">12</a>
                <a href="#">&raquo;</a>
                { next, prev, jump, currentData, currentPage, maxPage}
            </div>
        </div>
    )
}

export default Pagination;
