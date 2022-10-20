import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    // console.log(info.pages)
 return <ReactPaginate />
 ;
};

export default Pagination


// let next = () =>{
//     setPageNumber((x) => x + 1);
// };

// let prev = () =>{
//     if(pageNumber === 1)return
//     setPageNumber((x)=> x - 1);
// };
// return (
//     <div className="container d-flex justify-content-center gap-5 my-5">
//         <button onClick={prev} className="btn btn-primary">
//         Prev
//         </button>
//         <button onClick={next} className="btn btn-primary">
//         Next
//         </button>
//     </div>