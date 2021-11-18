function Filter({key3}) {
    return (
            <form className="nav2" action="javascript:void(0)">
                <input type="text" id="text" placeholder="Search..." onChange={key3} />
                <input  type="submit" value="Search" id="btn"/>
            </form>
    );
}

export default Filter;