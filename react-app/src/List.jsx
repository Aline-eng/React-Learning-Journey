function List(props) {
        const category = props.category;
        const itemList = props.items;

        // It put in the comment bcz we are going to make changes to enable the component to be reused with different kind of list.
//     const fruits= [ {id: 1, name: "apple", calories: 95}, 
//                     {id: 2, name: "orange", calories: 45}, 
//                     {id: 3, name: "banana", calories: 105}, 
//                     {id: 4, name: "coconut", calories: 159}, 
//                     {id: 5, name: "pineapple", calories: 37}];
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a,b) => a.calories - b.calories); // numerical order
    // fruits.sort((a,b) => b.calories - a.calories); // Reverse numerical order

//     const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

//     const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

//     const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
//                                             {lowCalFruits.name}: &nbsp;
//                                             <b>{lowCalFruits.calories}</b></li>);

//     const listsItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
//                                             {highCalFruits.name}: &nbsp;
//                                             <b>{highCalFruits.calories}</b></li>);


    const listItem = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);
    
    return(<>
                {/* <h4>Fruits and their Calories</h4> */}
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItem}</ol>
                {/* <h4>Low calories Fruits</h4>
                <ol>{listItems}</ol>
                <h4>High calories Fruits</h4>
                <ol>{listsItems}</ol> */}
                
        </>);
}

export default List