function MySelect({filter,changeHandler,filterData}) {
    let {placeholder,queryName,items}=filter
    return (
        <select name={queryName}
                value={filterData.queryName}
                onChange={(e)=>changeHandler(e.target.name,e.target.value)}
                className="cursor-pointer bg-transparent p-1 border rounded text-sm border-blue-400/70"
                >
                    <option value="">{placeholder}</option>
                    {items.map(ele=><option key={ele.value} value={ele.value}>{ele.name}</option>)}
        </select>
    );
}

export default MySelect;