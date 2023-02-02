[
    {
        _id: {
            "$oid": "572bb8222b288919b68abf5d"
          },
        name: "Redmi 9 pro",
        description: "Redmi 9 pro/promocion",
        //Almacene todas las categorias las que pertenece
        category: [
            "Tecnologia",
            "Smartphone"
        ],
        provaider: "Exito",
        country: "Colombia",
        Province: "Valle del cauca",
        city: "Cali",
        codigo_referencia_interno: "AS456ER65DF",
        state: 1, // 0 false, 1 trur
        photos_url: "https://exito.com/imagen/celular/smart",
        url_article: "https://exito.com/celulares/promocion",
        price: [
            //Almacenar N veces el cambio de las fechas
            {price: 1000, date: "2023-01-02"},
            {price: 1000, date: "2022-11-23"},
            {price: 1000, date: "2023-12-15"},
            {price: 1000, date: "2023-01-26"}        
        ],
        stock: [
            //Almacenar N veces el cambio de de las unidades de stock
            {unid: 50, date: "2023-01-02"},
            {unid: 40, date: "2022-11-23"},
            {unid: 30, date: "2023-12-15"},
            {unid: 20, date: "2023-01-26"}   
        ]
    }
]