import React, { useState } from "react";
import Header from "./component/Header";
import Filter from "./component/Filter";
import JsonDate from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Tilt from 'react-vanilla-tilt';
function Site() {
  const [posts, setPosts] = useState(JsonDate.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [modalClass, setModalClass] = useState("hiden")
  const [modalget, setModalGet] = useState({})
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
  const change123 = (id,title,body) => {
    setModalGet({id: id,title: title,body: body})
    setModalClass("modal")
    // posts.filter((post) => {
    //   if (post.id === id) {
    //     post.title = "123"
    //     return { post }
    //   } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    //     return { post }
    //   }
    // })
    // setRemountComponent(Math.random());
  }
  

  const modalcnsle = () => {
    setModalClass("hiden")
  }
  const chtitle = (e) => {
    setModalGet({id: modalget.id,title: e.target.value,body: modalget.body})
  }
  const chbody = (e) => {
    setModalGet({id: modalget.id,title: modalget.title,body:  e.target.value})
  }

  const editmodal =  () => {
        posts.filter((post) => {
      if (post.id === modalget.id) {
        post.title = modalget.title
        post.body = modalget.body
        return { post }
      } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return { post }
      }
    })
    setModalClass("hiden")
    setRemountComponent(Math.random());
  }

  const displayPost2 = asd.slice(pagesVisited, pagesVisited + postPerPage).map((post) => {

    return (
      <Tilt key={post.id} options={{ scale: 2, max: 100 }} style={{background: "#8a8a8a2d"}}  onClick={() => change123(post.id,post.title,post.body)}>
        <h3>
          {post.title}
        </h3>
        <p>{post.body}</p>

      </Tilt>
    )

  })
  const pageCount = Math.ceil(asd.length / postPerPage)
  const changePage = ({ selected }) => {
    if (searchTerm !== "") {
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
      <div className={modalClass}>
        <div className="modalmin">
          title:
          <h3>{modalget.title}</h3>
          body:
          <p>{modalget.body}</p>
          <label>
            title:
          <input type="text" id="text" onChange={chtitle}/>
          </label>
          <label>
            body:
          <input type="text" id="text" onChange={chbody}/>
          </label>
          <div>

            <button className="btnr" onClick={modalcnsle}>Cancel</button>
            <button className="btnb" onClick={editmodal}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Site;

