import React, { useState } from "react";
import Header from "./component/Header";
import Filter from "./component/Filter";
import JsonDate from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App() {
  const [posts, setPosts] = useState(JsonDate.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [remountComponent, setRemountComponent] = useState(0);
  const postPerPage = 16
  const pagesVisited = pageNumber * postPerPage
  const displayPost = posts.filter((post) => {
    if (searchTerm === "") {
      return { post }
    } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return { post }
    }
  })
    
  const asd = [...displayPost]
  const change123 = (id) => {
    posts.filter((post) => {
      if (post.id === id) {
        post.title = "123"
        return { post }
      } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return { post }
      }
    })
    console.log(id)
    // setPageNumber("")
    // if (pageNumber === "") {
    //   setPageNumber(0)
    // }
    setRemountComponent(Math.random());
  }




  const displayPost2 = asd.slice(pagesVisited, pagesVisited + postPerPage).map((post) => {

    return (
      <div kay={post.id} onClick={()=>change123(post.id)} >
        <h3>
          {post.title}
        </h3>
        <p>{post.body}</p>

      </div>
    )

  })

  const pageCount = Math.ceil(asd.length / postPerPage)
  const changePage = ({ selected}) => {
      if(searchTerm !== ""){
        setPageNumber(0)
      }
      setPageNumber(selected)

  }

  return (
    <div className="App" key={remountComponent}>
      <Header searchRes={displayPost.length} />
      <Filter key3={(e) => {
        setSearchTerm(e.target.value)
      }} />

      <div className="grid">
        {displayPost2}
      </div>
      <ReactPaginate
        previousLabel={"Preious"}
        nextLabel={"Next"}
        pageCount={pageCount}
        initialPage={0}
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