import React, { useState } from "react";
import Header from "./component/Header";
import Filter from "./component/Filter";
import JsonDate from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App() {
  const [posts, setPosts] = useState(JsonDate.slice(0,50))
  const [pageNumber, setPageNumber] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setsearchResult] = useState()
  const postPerPage = 16
  const pagesVisited = pageNumber * postPerPage
  const displayPost = posts
    .slice(pagesVisited, pagesVisited + postPerPage)
    .filter((post) => {
      if(searchTerm === ""){
        return {post}
      } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return {post}
      }
    })
    .map((post, key) => {
      return (
        <div kay={key}>
          <h3>
            {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      )
    })
  
  const pageCount = Math.ceil(posts.length / postPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  return (
    <div className="App">
      <Header searchRes={posts.length}/>
      <Filter key3={(e) =>{
    setSearchTerm(e.target.value)
  }} />
      <div className="grid">
        {displayPost}
      </div>
        <ReactPaginate
          previousLabel={"Preious"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />

    </div>
  );

}

export default App;





// state = {
//   post:[
//     {
//       title: "post loptap",
//       body: "new post loptap"
//     },
//     {
//       title: "post loptap2",
//       body: "new post loptap"
//     },
//     {
//       title: "post loptap3",
//       body: "new post loptap"
//     },
//     {
//       title: "post loptap4",
//       body: "new post loptap"
//     },
//   ]
// }


// const { post } = this.state
// var file = /loptap4/

// let arrByID = post.filter(post => {
//   if (file === post.title) {
//     return true
//   }
//   return false;
// }

// )