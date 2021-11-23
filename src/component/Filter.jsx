
function Filter({key3}) {
    return (
            <div className="nav2">
                <input type="text" id="text" placeholder="Search..." onChange={key3} />
                <input  type="submit" value="Search" id="btn"/>
            </div>
    );
}

export default Filter;