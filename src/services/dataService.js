


const Catalog= [ 
        {
        _id: "1",
        title : "Test prod1",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,

    },
    {
        _id: "2",
        title : "Test prod",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,

    },
    {
        _id: "3",
        title : "Test prod1",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,

    },
    {
        _id: "4",
        title : "Test prod1",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,
    },
    {
        _id: "5",
        title : "Test prod1",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,

    },
    {
        _id: "6",
        title : "Test prod1",
        image: "good.png",
        price: 12.93,
        category: "fruit",
        stock: 24,

    }
]
   


class DataService {

    getCatalog() {

        return Catalog;
        // TODO: call the server

        // work with mock data (temporal)
    }

    saveItem() {


    }

    saveOrder() {


    }
    

}

export default DataService;