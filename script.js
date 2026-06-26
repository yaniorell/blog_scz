// ALMA CAMBA - INTERACTIVE LOGIC & DATABASE

// 1. DATA STRUCTURES

const destinations = [
    // RUTA 1: Urbanas & Alrededores
    {
        id: 1,
        name: "Plaza Metropolitana 24 de Septiembre",
        route: 1,
        coords: [-17.7834, -63.1821],
        image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80",
        description: "El corazón palpitante de Santa Cruz de la Sierra. Rodeada por la majestuosa Catedral Basílica de San Lorenzo, el Club Social y antiguos edificios coloniales. Aquí los cruceños se reúnen bajo las palmeras a conversar y observar a los perezosos que habitan sus árboles.",
        howTo: "Ubicada en el centro exacto de la ciudad (Primer Anillo). Accesible mediante cualquier línea de micro que vaya al centro."
    },
    {
        id: 2,
        name: "Biocentro Güembé",
        route: 1,
        coords: [-17.7675, -63.2428],
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "Un paraíso natural de 24 hectáreas. Cuenta con el mariposario más grande del mundo, un aviario imponente, lagunas naturales para paseos en kayak, senderos ecológicos y espectaculares piscinas rodeadas de exuberante vegetación tropical.",
        howTo: "Ubicado en el municipio de Colpa Bélgica, camino a Porongo. Se llega cruzando el puente Urubó, a unos 15 minutos en taxi desde la ciudad."
    },
    {
        id: 3,
        name: "Parque Regional Lomas de Arena",
        route: 1,
        coords: [-17.9254, -63.1818],
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        description: "Un área protegida que alberga dunas de arena blanca que alcanzan hasta 12 metros de altura, rodeadas de bosques tropicales y lagunas estacionales. Es un escenario ideal para practicar sandboard, senderismo y avistamiento de más de 250 especies de aves.",
        howTo: "Ubicado a 12 km al sur de la ciudad. Se ingresa por el Palmar del Oratorio (Av. Santos Dumont). Se recomienda un vehículo de doble tracción (4x4)."
    },
    {
        id: 4,
        name: "Jardín Botánico de Santa Cruz",
        route: 1,
        coords: [-17.7772, -63.0722],
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        description: "Un reservorio de biodiversidad con más de 186 hectáreas destinadas a la conservación del bosque chiquitano y chaqueño. Destaca su mirador elevado de madera, un orquideario deslumbrante, una laguna con plantas acuáticas gigantes (Victoria Regia) y senderos llenos de vida silvestre.",
        howTo: "Ubicado en el km 8 de la Carretera al Cotoca. Se puede llegar en micros locales (líneas a Cotoca) desde la terminal de buses."
    },
    {
        id: 5,
        name: "Las Cabañas del Río Piraí",
        route: 1,
        coords: [-17.7745, -63.2201],
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80",
        description: "El lugar tradicional por excelencia para degustar las famosas masitas típicas cruceñas (cuñapé, zonzo, pan de arroz) junto a un buen café, mientras se contempla el histórico Río Piraí. Es un punto de encuentro clásico de domingos familiares.",
        howTo: "Al final de la Avenida Roca y Coronado (Oeste de la ciudad). Accesible en micros de la línea 29 y taxis."
    },
    {
        id: 6,
        name: "Parqueo De Las Cabañas Del Piraí",
        route: 1,
        coords: [-17.7735, -63.2185],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "Punto de acceso inmediato a las playas de arena del río Piraí y zona de paseo en cuadratrack o cabalgatas. Aquí se estacionan los visitantes que buscan refrescarse en las aguas del río durante los calurosos días de verano.",
        howTo: "Adyacente a las Cabañas del Río Piraí. Cuenta con áreas amplias bajo los árboles para estacionamiento."
    },
    {
        id: 7,
        name: "Porongo",
        route: 1,
        coords: [-17.7981, -63.2922],
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
        description: "Un pintoresco pueblo colonial que conserva su tranquilidad original, calles de tierra y una hermosa iglesia jesuita del siglo XVIII. Famoso por sus plantaciones de mandarinas y sus festividades tradicionales como el San Juan, donde la gente cruza brasas descalza.",
        howTo: "Ubicado al oeste del Río Piraí. Cruzando el puente Urubó, a 20 km de Santa Cruz de la Sierra por una carretera asfaltada."
    },
    {
        id: 8,
        name: "Kalomai Park",
        route: 1,
        coords: [-17.8183, -63.3082],
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=600&q=80",
        description: "Un moderno club de campo y parque acuático rodeado de un entorno natural idílico. Cuenta con lagunas artificiales, toboganes de agua gigantes, piscinas recreativas y canchas deportivas pensadas para el relax y la diversión familiar.",
        howTo: "Camino a Porongo, a unos 25 minutos del centro de la ciudad de Santa Cruz."
    },

    // RUTA 2: Valles & Norte
    {
        id: 9,
        name: "Mirador El Torno 1",
        route: 2,
        coords: [-17.9892, -63.3725],
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        description: "Un punto de observación privilegiado situado en las colinas altas de El Torno. Ofrece una vista panorámica espectacular del lecho del río Piraí serpentando entre los primeros valles precordilleranos.",
        howTo: "Subiendo por senderos vecinales desde la plaza principal de El Torno. Se recomienda caminar o ir en vehículo todo terreno."
    },
    {
        id: 10,
        name: "Mirador El Torno 2",
        route: 2,
        coords: [-17.9942, -63.3765],
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
        description: "Ubicado a mayor altitud, este mirador permite divisar el contraste geográfico entre las llanuras tropicales de Santa Cruz y el comienzo de la cordillera de los Andes bolivianos.",
        howTo: "Aproximadamente a 2 km del Mirador 1. Senderismo guiado altamente aconsejado."
    },
    {
        id: 11,
        name: "El Torno (Municipio)",
        route: 2,
        coords: [-17.9906, -63.3817],
        image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=600&q=80",
        description: "Conocido como la capital citrícola de Santa Cruz. Es un municipio rodeado de serranías, arroyos y cascadas. Es un centro productor clave y el portal de entrada a los valles cruceños.",
        howTo: "Ubicado a 32 km al suroeste de Santa Cruz de la Sierra sobre la antigua carretera a Cochabamba."
    },
    {
        id: 12,
        name: "El Fuerte de Samaipata",
        route: 2,
        coords: [-18.1792, -63.8188],
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        description: "Monumento arqueológico Patrimonio de la Humanidad por la UNESCO. Se trata de una inmensa roca esculpida con figuras geométricas y canales ceremoniales por culturas prehispánicas (chanés e incas). Es considerada la piedra tallada más grande del planeta.",
        howTo: "Ubicado a 9 km del pueblo de Samaipata (a su vez a 120 km de Santa Cruz). Se llega en transporte público interprovincial hasta el pueblo y luego en taxi local."
    },
    {
        id: 13,
        name: "Parque Nacional Amboró",
        route: 2,
        coords: [-17.7500, -63.8333],
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        description: "Una de las reservas con mayor biodiversidad del mundo. Confluyen aquí cuatro ecosistemas: Amazonía, Chaco, Andes y Bosque Seco Chiquitano. Destacan sus senderos de helechos gigantes prehistóricos y sus imponentes cañones de roca roja.",
        howTo: "Accesible tanto por el norte (Buena Vista) como por el sur (Samaipata/Mairana). Es obligatorio ingresar con un guía certificado."
    },
    {
        id: 14,
        name: "Chorro de San Luis (Buena Vista)",
        route: 2,
        coords: [-17.4589, -63.6592],
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        description: "Una imponente caída de agua oculta dentro de un cañón de exuberante vegetación, ubicada cerca del pintoresco pueblo de Buena Vista. Ideal para quienes buscan combinar senderismo de aventura y un baño en aguas cristalinas.",
        howTo: "Desde Buena Vista, se viaja por camino vecinal hacia la comunidad de San Luis. Luego se realiza una caminata a pie de 40 minutos por el río."
    },

    // RUTA 3: Balnearios & Cascadas
    {
        id: 15,
        name: "Río Espejillos",
        route: 3,
        coords: [-17.8967, -63.4350],
        image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=600&q=80",
        description: "Un conjunto de espectaculares saltos de agua y pozas de piedra esculpidas de forma natural. Sus aguas cristalinas y templadas reflejan el cielo como espejos, de ahí su poético nombre. Está rodeado por una densa selva tropical.",
        howTo: "Se encuentra a 40 km al oeste de la ciudad. Se cruza por San José de las Bandurrias. Requiere vehículo con buena altura."
    },
    {
        id: 16,
        name: "Cuevas (Cascadas)",
        route: 3,
        coords: [-18.1833, -63.7167],
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
        description: "Un balneario natural compuesto por tres cascadas sucesivas que desembocan en amplias piscinas naturales con playas de fina arena blanca. Es uno de los destinos más relajantes y fotografiados del trayecto a Samaipata.",
        howTo: "Ubicado a orillas de la antigua carretera a Cochabamba, en el km 100. El ingreso está señalizado y la caminata desde la entrada es de apenas 10 minutos."
    },
    {
        id: 17,
        name: "Tercera Catarata Centro Ecológico Cuevas",
        route: 3,
        coords: [-18.1810, -63.7145],
        image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=600&q=80",
        description: "La más recóndita y alta de las cataratas del complejo de Cuevas. Se accede mediante un sendero ecológico que cruza puentes rústicos de madera. Su caída de agua genera una brisa refrescante ideal para descansar del calor.",
        howTo: "Dentro del complejo turístico Cuevas. Sigue los senderos internos debidamente rotulados hacia el sector alto."
    },
    {
        id: 18,
        name: "Aguas Calientes (Roboré)",
        route: 3,
        coords: [-18.4419, -59.7214],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        description: "El río de aguas termales más largo de Sudamérica. Con una extensión de 5 km de aguas templadas (entre 29°C y 35°C) que brotan de un lecho de arena fina. Sus aguas son ricas en minerales y tienen reconocidas propiedades medicinales y relajantes.",
        howTo: "Ubicado a 32 km al este de Roboré, sobre la carretera Bioceánica. Se puede llegar en taxi desde Roboré."
    },
    {
        id: 19,
        name: "Balneario Municipal El Chorro (Roboré)",
        route: 3,
        coords: [-18.3267, -59.7578],
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        description: "Una refrescante caída de agua natural de 5 metros que forma una gran piscina de piedra en medio de enormes formaciones rocosas. Un remanso de paz perfecto para refrescarse en el corazón de Roboré.",
        howTo: "Ubicado a solo 4 km del centro urbano de Roboré. Se puede acceder a pie o en mototaxi local."
    },

    // RUTA 4: Chiquitania & Chaco
    {
        id: 20,
        name: "Chochís",
        route: 4,
        coords: [-18.1333, -60.0167],
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        description: "Un místico pueblo chiquitano dominado por la 'Torre de Chochís' (un colosal monolito de roca roja). Alberga el Santuario Mariano de la Torre, una joya arquitectónica tallada en maderas nativas por artesanos locales, rodeada de un paisaje sobrecogedor.",
        howTo: "Ubicado sobre la vía del tren y carretera Bioceánica, a 360 km de Santa Cruz de la Sierra y 80 km de San José de Chiquitos."
    },
    {
        id: 21,
        name: "San José de Chiquitos",
        route: 4,
        coords: [-17.8464, -60.7419],
        image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80",
        description: "Una de las misiones jesuíticas históricas más importantes del oriente. Su majestuoso templo de piedra y adobe, construido a mediados del siglo XVIII, es el único sobreviviente edificado en piedra de toda la Chiquitania.",
        howTo: "Ubicado a 266 km de Santa Cruz. Se llega fácilmente por carretera asfaltada (Ruta Bioceánica) o a través del servicio ferroviario."
    },
    {
        id: 22,
        name: "Santiago de Chiquitos",
        route: 4,
        coords: [-18.3392, -59.6014],
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
        description: "Ubicado en la Serranía de Santiago, este destino goza de un microclima templado muy agradable. Es famoso por los miradores del Valle de Tucabaca, cuevas prehistóricas con pinturas rupestres y extrañas y colosales formaciones rocosas conocidas como 'Los Vigilantes'.",
        howTo: "Situado a 22 km al norte de Roboré por una carretera de ripio estable."
    },
    {
        id: 23,
        name: "Chorro de la Concepción",
        route: 4,
        coords: [-18.1633, -59.8333],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
        description: "Una majestuosa cascada con una caída libre de más de 45 metros de altura. Está rodeada de cañones de piedra y una selva húmeda que contrasta fuertemente con la aridez de la meseta chiquitana.",
        howTo: "Ubicado en las proximidades de Santiago de Chiquitos. Requiere vehículo 4x4 y una caminata de intensidad media."
    },
    {
        id: 24,
        name: "Parque Nacional Noel Kempff Mercado",
        route: 4,
        coords: [-14.2667, -60.8333],
        image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=600&q=80",
        description: "Una de las maravillas naturales más vírgenes y majestuosas del mundo, declarada Patrimonio Natural por la UNESCO. Su geografía incluye la imponente Meseta de Caparuch y espectaculares cataratas vírgenes como Arco Iris (88m de caída) y Ahlfeld.",
        howTo: "Destino remoto al noreste de Santa Cruz, frontera con Brasil. Se llega principalmente mediante avioneta charter desde Santa Cruz o por vía terrestre/fluvial en expediciones de varios días."
    }
];

const gastronomy = [
    // PLATOS
    {
        id: "majadito",
        name: "Majadito (Batido / Seco)",
        category: "plato",
        taste: "heavy",
        image: "assets/images/gastronomia_crucena.jpg", // our generated masterpiece showing majadito
        ingredients: ["Arroz", "Charque de res", "Plátano maduro frito", "Huevo frito", "Urucú (colorante natural)"],
        history: "El rey indiscutible de la mesa cruceña. Su origen viene de las épocas coloniales donde se 'majaba' (machacaba) la carne deshidratada con yuca o plátano. El majadito batido es meloso y húmedo, mientras que el seco es suelto e ideal para acompañar con un huevo de yema blanda y lonjas dulces de plátano frito.",
        recommendation: "Perfecto si buscas un almuerzo típico y contundente que recargue energías."
    },
    {
        id: "keperi",
        name: "Keperí al Horno",
        category: "plato",
        taste: "heavy",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Carne keperí (vacío)", "Limón criollo", "Pimienta", "Comino", "Yuca hervida"],
        history: "Corte de carne sumamente típico del oriente boliviano que se marina por horas en abundante jugo de limón, ajo y especias locales. Se hornea lentamente hasta que la carne queda extremadamente suave por dentro pero con una cubierta crujiente y dorada. Siempre se sirve acompañado de yuca cocida y arroz con queso.",
        recommendation: "La mejor opción para los amantes de la carne de res bien sazonada y tierna."
    },
    {
        id: "locro",
        name: "Locro Criollo Carretero",
        category: "plato",
        taste: "heavy",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Pollo o Gallina criolla", "Arroz", "Yuca", "Huevo hervido", "Chivé / Cebollita de verdeo"],
        history: "Un caldo de arroz espeso y sumamente reconfortante, tradicionalmente cocinado a leña en ollas de fierro. Existen dos variantes muy queridas: el locro de gallina criolla (con presa entera) y el locro carretero (hecho con charque seco). Es el plato sanador por excelencia de los cruceños tras una noche de buri.",
        recommendation: "Ideal si prefieres una sopa sustanciosa y reconfortante cocinada a fuego lento."
    },
    // MASITAS & DULCES
    {
        id: "cunape",
        name: "Cuñapé",
        category: "masita",
        taste: "coffee",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Almidón de yuca", "Queso criollo maduro", "Huevo", "Leche"],
        history: "La masita tradicional más emblemática de Santa Cruz. Hecho a base de almidón y abundante queso criollo. Al hornearse, el queso se funde con el almidón logrando un panecillo crujiente por fuera y chicloso por dentro. La palabra proviene del idioma guaraní: 'cuña' (mujer) y 'pé' (pecho), por su peculiar forma redondeada.",
        recommendation: "Imprescindible para acompañar el café caliente de la tarde, sobre todo en días lluviosos (surazos)."
    },
    {
        id: "zonzo",
        name: "Zonzo al Palo",
        category: "masita",
        taste: "coffee",
        image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Yuca cocida", "Queso cruceño rallado", "Mantequilla", "Cocción a la brasa"],
        history: "Consiste en un puré homogéneo de yuca hervida y una generosa porción de queso cruceño. Esta mezcla se adhiere a una brocheta o rama de madera (el palo) y se cocina directamente sobre brasas de carbón girándolo pacientemente. El queso se derrite y el puré se dora, logrando una costra ahumada exquisita.",
        recommendation: "Una opción interactiva y ahumada idónea para picar al aire libre."
    },
    {
        id: "pan_de_arroz",
        name: "Pan de Arroz",
        category: "masita",
        taste: "coffee",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Harina de arroz", "Puré de yuca", "Queso rallado", "Manteca de cerdo", "Hoja de plátano"],
        history: "Un panecillo tradicional horneado sobre hojas de plátano fresco. La harina de arroz y la yuca le dan una textura ligera y un sabor ligeramente dulzón que contrasta de manera espectacular con la sal del queso cruceño.",
        recommendation: "Perfecto si buscas un sabor ligeramente diferente al queso puro, aromatizado por hojas tropicales."
    },
    {
        id: "jalea",
        name: "Jalea Cruceña",
        category: "masita",
        taste: "sweet",
        image: "assets/images/gastronomia_crucena.jpg", // also displayed in our generated photo (clay pot)
        ingredients: ["Miel de caña de azúcar pura", "Cocción en paila de bronce"],
        history: "Dulce tradicional del oriente cruceño, con especial fama en Cotoca. Se prepara hirviendo el jugo fresco de caña de azúcar hasta obtener una consistencia espesa, untuosa y muy dulce. Se envasa y vende tradicionalmente en pequeñas tinajas o vasijas de barro crudo.",
        recommendation: "Ideal si buscas un postre tradicional extremadamente dulce y natural para untar."
    },
    // BEBIDAS
    {
        id: "chicha",
        name: "Chicha Camba",
        category: "bebida",
        taste: "refreshing",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Maíz blanco blando", "Agua", "Azúcar al gusto"],
        history: "A diferencia de la chicha andina, la Chicha Camba no se fermenta. Se elabora moliendo y cociendo maíz blanco seleccionado hasta lograr una consistencia sedosa. Se sirve helada y es el bálsamo preferido para calmar el sofocante calor tropical del oriente boliviano.",
        recommendation: "La mejor elección para saciar la sed con un dulzor suave y reconfortante."
    },
    {
        id: "somo",
        name: "Somó",
        category: "bebida",
        taste: "refreshing",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Maíz frangollo (quebrado)", "Canela en rama", "Clavo de olor", "Harina de maíz"],
        history: "Una de las bebidas más tradicionales del oriente. Se prepara hirviendo granos de maíz frangollo con canela y clavo de olor, espesándolo luego con harina de maíz diluida. En Santa Cruz se comercializa en carritos tradicionales con campanas ruidosas, servido bien helado con los granos de maíz depositados en el fondo del vaso.",
        recommendation: "Espectacular si quieres refrescarte y a la vez disfrutar de granos masticables de maíz especiados."
    }
];

const provinces = [
    { id: 1, name: "Andrés Ibáñez", capital: "Santa Cruz de la Sierra", icon: "⛪" },
    { id: 2, name: "Ignacio Warnes", capital: "Warnes", icon: "🏭" },
    { id: 3, name: "José Miguel de Velasco", capital: "San Ignacio de Velasco", icon: "🎨" },
    { id: 4, name: "Ichilo", capital: "Buena Vista", icon: "🌳" },
    { id: 5, name: "Chiquitos", capital: "San José de Chiquitos", icon: "🧱" },
    { id: 6, name: "Sara", capital: "Portachuelo", icon: "🥐" },
    { id: 7, name: "Cordillera", capital: "Lagunillas", icon: "🏹" },
    { id: 8, name: "Vallegrande", capital: "Vallegrande", icon: "🍑" },
    { id: 9, name: "Manuel María Caballero", capital: "Comarapa", icon: "🍓" },
    { id: 10, name: "Florida", capital: "Samaipata", icon: "🧗" },
    { id: 11, name: "Obispo Santistevan", capital: "Montero", icon: "🌾" },
    { id: 12, name: "Ñuflo de Chaves", capital: "Concepción", icon: "🎻" },
    { id: 13, name: "Ángel Sandoval", capital: "San Matías", icon: "🐊" },
    { id: 14, name: "Germán Busch", capital: "Puerto Suárez", icon: "🚢" },
    { id: 15, name: "Guarayos", capital: "Ascensión de Guarayos", icon: "🎵" }
];

const provinceDetails = {
    1: {
        history: "Es la provincia metropolitana. Alberga la capital del departamento. Fue el centro de la colonización española en las tierras bajas. Su historia se entrelaza con las luchas por la descentralización y el auge agroindustrial moderno. Su nombre rinde homenaje al líder federalista Andrés Ibáñez.",
        culture: "Crisol de culturas de toda Bolivia debido a la migración. Conserva el centro histórico circular y festividades urbanas de gran escala como el Carnaval Cruceño.",
        gallery: [
            "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=500&q=80"
        ]
    },
    2: {
        history: "Nombrada en honor del coronel Ignacio Warnes, héroe patrio. Se constituyó históricamente como un paso obligado de caravanas comerciales y hoy es el epicentro del Parque Industrial Latinoamericano y el centro de la industria del cemento y lácteos.",
        culture: "Tradición ganadera combinada con pujanza industrial. Célebre por sus festivales de la leche y comidas típicas derivadas del queso.",
        gallery: [
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
        ]
    },
    3: {
        history: "Una de las provincias con mayor territorio. Fue fundada como parte de las reducciones jesuíticas chiquitanas en 1748. Destaca por poseer templos misionales barrocos de madera perfectamente conservados que son joyas arquitectónicas del siglo XVIII.",
        culture: "Música barroca renacentista que se toca en violines fabricados a mano, tallados en maderas locales. Fiestas patronales ricas en sincretismo indígena-religioso.",
        gallery: [
            "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80"
        ]
    },
    4: {
        history: "Zona regada por el río Ichilo. Su historia colonial se centra en Buena Vista, fundada como misión jesuita. A lo largo del siglo XX se consolidó como una rica región agroforestal y la puerta de acceso norte al indómito Parque Amboró.",
        culture: "Elaboración de artesanías tejidas en fibras de jipijapa (sombreros, cestos), cultivo artesanal de cacao nativo y café premium con aroma de montaña.",
        gallery: [
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=500&q=80"
        ]
    },
    5: {
        history: "Aquí se fundó originalmente la ciudad de Santa Cruz de la Sierra en 1561. San José de Chiquitos posee el único templo de piedra y cal de las Misiones Jesuíticas. La provincia conserva importantes yacimientos arqueológicos históricos.",
        culture: "Fuerte arraigo chiquitano y barroco. Sede de festivales internacionales de música antigua y danzas de los 'Abuelos Chiquitanos' portando máscaras tradicionales.",
        gallery: [
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=500&q=80"
        ]
    },
    6: {
        history: "Provincia de origen agrario, muy próspera. Fundada por su cercanía al río Guapay. Su capital Portachuelo destaca por conservar casonas señoriales con amplios corredores sostenidos por pilares de madera.",
        culture: "La cuna del mejor pan de arroz y cuñapé de Santa Cruz. Sus habitantes se ufanan de mantener vivo el hablar pausado y hospitalario del camba de antaño.",
        gallery: [
            "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=500&q=80"
        ]
    },
    7: {
        history: "La provincia más extensa del departamento. Histórico bastión del pueblo indígena Chiriguano-Guaraní, que resistió férreamente la conquista española. Cuenta con enormes reservas de gas natural y petróleo.",
        culture: "Identidad chaqueña y guaraní. Se celebra el Arete Guasu (fiesta grande de integración cultural) con máscaras talladas de madera de toborochi y música de flautas.",
        gallery: [
            "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
        ]
    },
    8: {
        history: "Ubicada en los valles templados andinos de Santa Cruz. Vallegrande fue fundada en 1612 por españoles para servir de nexo con Potosí. Región de relieve montañoso, famosa mundialmente por la ruta del Che Guevara.",
        culture: "Fuerte herencia colonial española visible en su dialecto castellano arcaico, la copla vallegrandina, licores artesanales de frutas (rimpolio) y un carnaval tradicional único.",
        gallery: [
            "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=500&q=80"
        ]
    },
    9: {
        history: "Provincia montañosa fundada en la cuenca del río Mizque. Su capital Comarapa une geográficamente los valles cruceños secos con las zonas húmedas de los Yungas y los bosques nublados de Siberia.",
        culture: "Producción a gran escala de frutas (chirimoyas, frutillas) y miel de abejas. Tradiciones folclóricas serranas andino-cruceñas de sincretismo marcado.",
        gallery: [
            "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80"
        ]
    },
    10: {
        history: "Portal histórico hacia los valles altos. Samaipata (su capital) alberga vestigios preincas (los Chanés) y la fortaleza incaica más austral de Bolivia. Fue también una zona de haciendas coloniales importantes.",
        culture: "Destino cosmopolita donde conviven residentes de más de 30 nacionalidades. Ambiente artístico, místico y ecológico centrado en la preservación arqueológica y el senderismo.",
        gallery: [
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=500&q=80"
        ]
    },
    11: {
        history: "Corazón del 'Norte Integrado'. Su auge se debió a la colonización agrícola de mediados del siglo XX y a la construcción de los ingenios azucareros más grandes del país (Guabirá). Montero es hoy una metrópolis comercial de vertiginoso desarrollo.",
        culture: "Una activa cultura comercial pluriétnica. Celebración anual de ferias agroindustriales (ExpoNorte) de gran trascendencia nacional.",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80"
        ]
    },
    12: {
        history: "Llamada así en honor al fundador Ñuflo de Chaves. Concepción (su capital) es famosa por su bellísima catedral jesuita barroca enteramente restaurada en madera tallada, considerada el alma de las misiones chiquitanas.",
        culture: "Taller artesanal de costuras de chuspas, camisas y vestidos pintados a mano. Sede bienal del festival internacional de música barroca americana.",
        gallery: [
            "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80"
        ]
    },
    13: {
        history: "Ubicada en el extremo nororiental del departamento, colindando con el Mato Grosso brasileño. Histórico puerto ganadero fundado a finales del siglo XIX durante el auge de la goma elástica.",
        culture: "Fuerte mezcla cultural fronteriza hispano-portuguesa. Hogar del Pantanal Boliviano y de tradiciones ganaderas que se celebran con rodeos y bailes típicos del tamboril.",
        gallery: [
            "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=500&q=80"
        ]
    },
    14: {
        history: "Alberga el legendario yacimiento de hierro del Mutún, uno de los más grandes del mundo. Su capital Puerto Suárez se fundó en 1875 como puerto fluvial comercial que conecta a Bolivia directamente con el Océano Atlántico.",
        culture: "Identidad pantanera. Destacan las comidas a base de peces locales (como el surubí y pacú) y la práctica del ecoturismo en la laguna Cáceres.",
        gallery: [
            "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=500&q=80"
        ]
    },
    15: {
        history: "Habitada ancestralmente por el pueblo indígena Guaraní-Guarayo. Nació como una misión franciscana en el siglo XIX, aislada geográficamente en medio de densos e impenetrables bosques tropicales húmedos del norte.",
        culture: "Famosa por sus luthiers nativos, quienes fabrican de forma artesanal violines barrocos de calidad acústica excepcional. También por la producción de aceite de coco y tejidos de sora.",
        gallery: [
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=80"
        ]
    }
};

const slangs = [
    { word: "Pariente", meaning: "Un saludo extremadamente coloquial y afectuoso entre cruceños. Equivale a decir 'hermano', 'amigo' o 'socio', denotando la cercanía y hermandad natural de la gente del oriente." },
    { word: "Buri", meaning: "Una fiesta, jarana, jolgorio o reunión alegre con música, baile y bastante ruido. Tradicionalmente incluye comidas típicas y bandas de música regional (tamborita) que animan a los invitados." },
    { word: "Churo / Chura", meaning: "Adjetivo para expresar que algo es bonito, hermoso, de excelente calidad o agradable. Por ejemplo: '¡Qué churo está tu sombrero de saó, pariente!'" },
    { word: "¡Jopo de toro!", meaning: "Frase descriptiva que hace alusión a un remolino de cabello indomable en la cabeza, pero que coloquialmente se usa para referirse a una persona que anda muy enojada, furiosa o terca ('andar como jopo de toro')." },
    { word: "¡Aneró!", meaning: "Una exclamación clásica cruceña que expresa sorpresa, incredulidad o asombro ante algo inesperado. Equivale a decir '¡No te creo!', '¡De verdad!' o '¡De ninguna manera!'." },
    { word: "Todingo", meaning: "Modismo derivado de la palabra 'todo', enfatizado con la terminación '-ingo' (muy común en Santa Cruz). Significa 'absolutamente todo', 'completito' o sin dejar nada afuera." }
];

const curiousFacts = [
    {
        title: "La Mamita de Cotoca",
        icon: "⛪",
        desc: "Cada 7 de diciembre, una gigantesca multitud de fieles cruceños realiza una caminata nocturna de fe de más de 20 kilómetros desde la capital hasta el Santuario de Cotoca, para rendir homenaje a la Virgen de Cotoca, patrona del oriente boliviano."
    },
    {
        title: "Diseño Urbano en Anillos",
        icon: "⭕",
        desc: "La ciudad de Santa Cruz de la Sierra cuenta con un trazado urbano radiocéntrico único en el continente, estructurado en anillos concéntricos que parten de un núcleo central colonial (la Plaza 24 de Septiembre) y se expanden radialmente hacia el exterior."
    },
    {
        title: "Los Temidos 'Surazos'",
        icon: "💨",
        desc: "A pesar de ser una zona tropical muy cálida, durante el invierno Santa Cruz experimenta los 'surazos': frentes fríos polares que ascienden desde la Patagonia argentina y desploman la temperatura en pocas horas, acompañados de vientos fuertes y garúas."
    }
];

const myths = [
    {
        id: "duende",
        title: "El Duende",
        illustration: "🕵️‍♂️",
        origin: "Campos y zonas arboladas de Santa Cruz",
        moral: "Proteger y vigilar a los niños pequeños en zonas rurales.",
        story: "<p>Se dice que es un ser diminuto con apariencia de niño de unos cuatro años, que viste una túnica rústica y lleva en la cabeza un sombrero de saó (de paja) tan descomunalmente grande que le cubre casi toda la cara y los hombros.</p><p>Tiene fama de ser muy juguetón pero malvado. Anda siempre por los senderos solitarios o cafetales buscando niños pequeños a quienes llama con dulces silbidos para jugar con ellos. Para convencerlos, les muestra juguetes maravillosos y les pregunta si quieren recibir un golpe de su mano de hierro o de su mano de lana; si el niño escoge la de lana, lo golpeará duramente, si elige la de hierro, el duende lo acariciará suavemente.</p><p>Además de jugar con los niños (a quienes a veces deja perdidos en las copas de los árboles o curichis), tiene la costumbre nocturna de trenzar de forma inexplicable la crin y cola de los caballos de corral, nudos imposibles de deshacer que los jinetes consideran marcas inequívocas de su visita.</p>"
    },
    {
        id: "mojon",
        title: "El Mojón con Cara",
        illustration: "🗿",
        origin: "Casco Viejo (Calles Republiquetas y René Moreno)",
        moral: "Símbolo de la paciencia, perseverancia y romanticismo del camba.",
        story: "<p>Esta leyenda se remonta a mediados del siglo XVIII en la ciudad colonial de Santa Cruz. Por aquel entonces, las calles no tenían pavimentar y en las esquinas se colocaban gruesos postes de madera de tajibo o cuchi, llamados 'mojones', para resguardar las viviendas del choque de las ruedas de los carretones tirados por bueyes.</p><p>Cuenta la historia que un apuesto joven de modesta posición se enamoró perdidamente de una hermosa y adinerada dama del vecindario. Al prohibirle los padres de ella el cortejo, el joven acudía pacientemente cada noche a esperarla en la esquina de su casa, cobijado por la penumbra nocturna junto a uno de estos mojones de madera.</p><p>Para pasar las largas horas de espera, el joven sacó un afilado cuchillo y comenzó a tallar pacientemente en la madera del mojón el contorno de un rostro humano de rasgos tristes y expresivos. Con el tiempo, el joven desapareció (se rumorea que fue enviado lejos por orden de la familia de la chica), pero en la esquina quedó para siempre el poste tallado, bautizado por los vecinos como 'El Mojón con Cara', convirtiéndose en un testigo mudo del amor fiel y la paciencia del habitante cruceño.</p>"
    },
    {
        id: "viudita",
        title: "La Viudita",
        illustration: "👰",
        origin: "Calles solitarias y oscuras después de medianoche",
        moral: "Escarmiento para hombres infieles, mujeriegos y trasnochadores.",
        story: "<p>Se trata del espectro fantasmal de una mujer de silueta esbelta vestida enteramente de luto riguroso, con un largo velo negro que le oculta por completo el rostro. Suele aparecer después de la medianoche en las esquinas oscuras o callejones solitarios de la ciudad.</p><p>Su especialidad es atraer la atención de hombres mujeriegos, infieles o borrachos que andan de retirada a altas horas. Despliega un andar pausado y sensual que despierta la curiosidad de los trasnochados, quienes deciden seguirla bajo la creencia de estar ante una hermosa aventura de amor. La Viudita los guía silenciosamente hacia las afueras de la ciudad, parajes boscosos o curichis pantanosos.</p><p>Cuando el hombre finalmente la alcanza e intenta abrazarla o levantarle el velo negro para contemplar su rostro, se congela de terror al descubrir una calavera descarnada con cuencas vacías y frías, o un rostro monstruoso y putrefacto que emite una risa chillona y aterradora. Las víctimas suelen desmayarse del pánico y son encontradas al día siguiente cubiertas de espinas en los montes lejanos, curados para siempre de sus andanzas nocturnas.</p>"
    }
];


// 2. LEAFLET MAP INITIALIZATION & LOGIC

let map;
let markersLayer;
let activeMarker = null;

function initMap() {
    // Center map on Department of Santa Cruz
    map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([-17.84, -62.5], 7);

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);

    // Enable scroll wheel zoom on map focus/click
    map.on('focus', () => { map.scrollWheelZoom.enable(); });
    map.on('blur', () => { map.scrollWheelZoom.disable(); });

    // Render initial markers
    renderMarkers('all');
}

// Custom Marker SVGs based on activity types
function getMarkerIcon(routeType, isActive = false) {
    let color = '#2e7d32'; // Default primary green
    let iconSvg = '';

    // Route specific coloring
    if (routeType === 1) {
        color = '#1e88e5'; // Blue - Urban
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
    } else if (routeType === 2) {
        color = '#ffb300'; // Orange/Yellow - Valles
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 2h8M12 2v20M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path></svg>`;
    } else if (routeType === 3) {
        color = '#00acc1'; // Cyan - Waterfalls/Balneario
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22a7 7 0 0 0 5-1.91M12 22a7 7 0 0 1-5-1.91M12 22V2M7 5.91A7 7 0 0 1 12 2a7 7 0 0 1 5 3.91"></path></svg>`;
    } else if (routeType === 4) {
        color = '#d81b60'; // Pink - Chiquitania
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`;
    }

    if (isActive) {
        color = '#f57c00'; // Highlight Active Pin
    }

    const html = `
        <div class="pin-ring ${isActive ? 'active' : ''}" style="border-color: ${color};">
            <span style="color: ${color}; display: flex; align-items: center;">
                ${iconSvg || '📍'}
            </span>
        </div>
    `;

    return L.divIcon({
        html: html,
        className: 'custom-map-pin',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    });
}

function renderMarkers(routeFilter = 'all') {
    // Clear existing markers
    markersLayer.clearLayers();

    const filtered = destinations.filter(d => routeFilter === 'all' || d.route == routeFilter);
    const bounds = [];

    filtered.forEach(dest => {
        const marker = L.marker(dest.coords, {
            icon: getMarkerIcon(dest.route, false)
        });

        // Store reference to destination details on the marker
        marker.destinationData = dest;

        marker.on('click', function(e) {
            selectDestination(dest, marker);
        });

        marker.addTo(markersLayer);
        bounds.push(dest.coords);
    });

    // Fit map bounds if there are markers, with padding
    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
}

// Handle Destination Selection (Focus map, open sidebar)
function selectDestination(dest, markerInstance = null) {
    // Reset previously active marker styling if applicable
    if (activeMarker) {
        const prevData = activeMarker.destinationData;
        activeMarker.setIcon(getMarkerIcon(prevData.route, false));
    }

    // Set new active marker
    if (markerInstance) {
        activeMarker = markerInstance;
        markerInstance.setIcon(getMarkerIcon(dest.route, true));
    } else {
        // Find marker from layer if selected via list
        markersLayer.eachLayer(layer => {
            if (layer.destinationData.id === dest.id) {
                activeMarker = layer;
                layer.setIcon(getMarkerIcon(dest.route, true));
            }
        });
    }

    // Smooth pan/zoom to coordinate
    map.flyTo(dest.coords, 12, {
        animate: true,
        duration: 1.5
    });

    // Update Sidebar Panel UI
    document.getElementById('sidebar-placeholder').classList.add('hidden');
    
    const content = document.getElementById('sidebar-content');
    content.classList.remove('hidden');

    document.getElementById('dest-image').src = dest.image;
    document.getElementById('dest-image').alt = dest.name;
    document.getElementById('dest-name').textContent = dest.name;
    document.getElementById('dest-coords').textContent = `Lat: ${dest.coords[0].toFixed(4)}, Lng: ${dest.coords[1].toFixed(4)}`;
    document.getElementById('dest-description').textContent = dest.description;
    document.getElementById('dest-how-to').textContent = dest.howTo;

    // Badge styling and content
    const badge = document.getElementById('dest-route-badge');
    badge.textContent = `Ruta ${dest.route}`;
    badge.className = 'dest-badge'; // reset
    if (dest.route === 1) badge.classList.add('r1');
    if (dest.route === 2) badge.classList.add('r2');
    if (dest.route === 3) badge.classList.add('r3');
    if (dest.route === 4) badge.classList.add('r4');

    // Scroll sidebar into view on mobile
    if (window.innerWidth <= 1024) {
        document.getElementById('map-sidebar').scrollIntoView({ behavior: 'smooth' });
    }
}

function closeSidebar() {
    document.getElementById('sidebar-content').classList.add('hidden');
    document.getElementById('sidebar-placeholder').classList.remove('hidden');

    // Reset active marker
    if (activeMarker) {
        const prevData = activeMarker.destinationData;
        activeMarker.setIcon(getMarkerIcon(prevData.route, false));
        activeMarker = null;
    }

    // Reset map view to fit all
    renderMarkers(document.querySelector('.route-filter-btn.active').dataset.route);
}


// 3. DYNAMIC CONTENT RENDERING

// Render Gastronomy cards
function renderGastronomy(filter = 'all') {
    const grid = document.getElementById('food-grid');
    grid.innerHTML = '';

    const filtered = gastronomy.filter(f => filter === 'all' || f.category === filter);

    filtered.forEach(food => {
        const card = document.createElement('article');
        card.className = 'food-card';
        card.setAttribute('data-id', food.id);

        // Map taste label
        let tasteLabel = '';
        if (food.taste === 'sweet') tasteLabel = '🍰 Dulce';
        if (food.taste === 'heavy') tasteLabel = '🥩 Almuerzo';
        if (food.taste === 'coffee') tasteLabel = '☕ Masita';
        if (food.taste === 'refreshing') tasteLabel = '🍹 Bebida';

        // Render circular ingredient icons
        const ingredientsHtml = food.ingredients.slice(0, 3).map(ing => {
            let emoji = '🥣';
            if (ing.toLowerCase().includes('arroz')) emoji = '🌾';
            if (ing.toLowerCase().includes('carne') || ing.toLowerCase().includes('charque')) emoji = '🥩';
            if (ing.toLowerCase().includes('huevo')) emoji = '🍳';
            if (ing.toLowerCase().includes('plátano')) emoji = '🍌';
            if (ing.toLowerCase().includes('queso')) emoji = '🧀';
            if (ing.toLowerCase().includes('yuca')) emoji = '🍠';
            if (ing.toLowerCase().includes('miel') || ing.toLowerCase().includes('caña')) emoji = '🍯';
            if (ing.toLowerCase().includes('maíz')) emoji = '🌽';
            if (ing.toLowerCase().includes('canela')) emoji = '🌿';
            
            return `<span class="ing-icon" data-tooltip="${ing}">${emoji}</span>`;
        }).join('');

        card.innerHTML = `
            <div class="food-img-container">
                <img src="${food.image}" alt="${food.name}">
                <span class="food-badge">${food.category}</span>
            </div>
            <div class="food-body">
                <h3>${food.name}</h3>
                <p>${food.history.substring(0, 110)}...</p>
                <div class="food-footer">
                    <div class="ingredients-list">
                        ${ingredientsHtml}
                    </div>
                    <span class="taste-tag">${tasteLabel}</span>
                </div>
            </div>
        `;

        // Click handler to open recipe modal
        card.addEventListener('click', () => openFoodModal(food));
        grid.appendChild(card);
    });
}

// Taste quiz recommendation logic
function runTasteQuiz(taste) {
    const matches = gastronomy.filter(f => f.taste === taste);
    if (matches.length === 0) return;

    // Pick a random match
    const result = matches[Math.floor(Math.random() * matches.length)];

    const resultBox = document.getElementById('quiz-result');
    resultBox.classList.remove('hidden');

    document.getElementById('result-name').textContent = result.name;
    document.getElementById('result-text').textContent = result.history.substring(0, 140) + '...';
    
    // View details button handler
    const viewBtn = document.getElementById('result-view-btn');
    // Remove previous listeners
    const newViewBtn = viewBtn.cloneNode(true);
    viewBtn.parentNode.replaceChild(newViewBtn, viewBtn);
    
    newViewBtn.addEventListener('click', () => {
        openFoodModal(result);
    });

    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render 15 Provinces grid
function renderProvinces() {
    const grid = document.getElementById('provincias-grid');
    grid.innerHTML = '';

    provinces.forEach(prov => {
        const card = document.createElement('div');
        card.className = 'provincia-card';
        card.innerHTML = `
            <div class="provincia-icon">${prov.icon}</div>
            <h3>${prov.name}</h3>
            <p>Capital: ${prov.capital}</p>
        `;
        card.addEventListener('click', () => openProvinceModal(prov));
        grid.appendChild(card);
    });
}

// Render slang flashcards (3D flip)
function renderSlangs() {
    const grid = document.getElementById('flashcards-grid');
    grid.innerHTML = '';

    slangs.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h4>"${item.word}"</h4>
                    <span>Cruceñismo 🌴</span>
                </div>
                <div class="flashcard-back">
                    <p>${item.meaning}</p>
                </div>
            </div>
        `;
        
        // Touch/Click support for mobile toggling
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        grid.appendChild(card);
    });
}

// Render Myths accordion
function renderMyths() {
    const container = document.getElementById('myths-accordion');
    container.innerHTML = '';

    myths.forEach((myth, index) => {
        const item = document.createElement('div');
        item.className = `accordion-item ${index === 0 ? 'active' : ''}`;
        
        item.innerHTML = `
            <button class="accordion-header" aria-expanded="${index === 0 ? 'true' : 'false'}">
                <div class="accordion-header-content">
                    <span class="myth-illustration">${myth.illustration}</span>
                    <span class="myth-title-text">${myth.title}</span>
                </div>
                <span class="accordion-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
            </button>
            <div class="accordion-collapse">
                <div class="accordion-body">
                    <div class="accordion-body-inner">
                        <div class="myth-description-text">
                            ${myth.story}
                        </div>
                        <div class="myth-meta-box">
                            <h4>Origen Histórico</h4>
                            <p>${myth.origin}</p>
                            <br>
                            <h4>Enseñanza / Moraleja</h4>
                            <p>${myth.moral}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Accordion click logic
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Toggle selected item
            if (!isCurrentlyActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });

        container.appendChild(item);
    });
}

// 4. MODALS (DETAIL VIEWS)

function openModal() {
    document.getElementById('app-modal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    document.getElementById('app-modal').classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scroll
}

function openFoodModal(food) {
    const banner = document.getElementById('modal-banner-img');
    banner.style.backgroundImage = `url('${food.image}')`;
    
    document.getElementById('modal-pretitle').textContent = "Gastronomía Cruceña";
    document.getElementById('modal-title-text').textContent = food.name;
    
    const body = document.getElementById('modal-body');
    
    // Ingredients formatting
    const ingredientsList = food.ingredients.map(ing => `<li>${ing}</li>`).join('');

    body.innerHTML = `
        <div class="modal-grid-two">
            <div class="modal-history">
                <h4 class="modal-section-title">Historia y Tradición</h4>
                <p>${food.history}</p>
            </div>
            <div>
                <h4 class="modal-section-title">Ingredientes Clave</h4>
                <ul style="list-style-type: square; padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.95rem;">
                    ${ingredientsList}
                </ul>
                <div class="modal-highlights">
                    <h4 style="color: var(--color-accent-orange); font-family: var(--font-title); font-size: 0.95rem; margin-bottom: 0.25rem;">Recomendación Alma Camba</h4>
                    <p style="font-size: 0.85rem; line-height: 1.4; color: var(--color-text-dark);">${food.recommendation}</p>
                </div>
            </div>
        </div>
    `;
    
    openModal();
}

function openProvinceModal(prov) {
    const details = provinceDetails[prov.id];
    
    const banner = document.getElementById('modal-banner-img');
    // Default to the first gallery image of the province for the banner
    banner.style.backgroundImage = `url('${details.gallery[0]}')`;
    
    document.getElementById('modal-pretitle').textContent = `Provincia · Capital: ${prov.capital}`;
    document.getElementById('modal-title-text').textContent = prov.name;
    
    const body = document.getElementById('modal-body');
    
    // Gallery grid inspired by image_2.png (multi-grid offset)
    const galleryHtml = `
        <h4 class="modal-gallery-title">Postales de la Región</h4>
        <div class="modal-image-grid-inspired">
            <div class="img-grid-item item-large">
                <img src="${details.gallery[0]}" alt="${prov.name} 1">
            </div>
            <div class="img-grid-item">
                <img src="${details.gallery[1]}" alt="${prov.name} 2">
            </div>
            <div class="img-grid-item">
                <img src="${details.gallery[2]}" alt="${prov.name} 3">
            </div>
        </div>
    `;

    body.innerHTML = `
        <div class="modal-grid-two">
            <div class="modal-history">
                <h4 class="modal-section-title">Reseña Histórica</h4>
                <p>${details.history}</p>
            </div>
            <div class="modal-history">
                <h4 class="modal-section-title">Cultura y Tradición</h4>
                <p>${details.culture}</p>
            </div>
        </div>
        ${galleryHtml}
    `;
    
    openModal();
}


// 5. CAROUSEL: CURIOUS FACTS

let carouselIndex = 0;
let carouselTimer;

function initCarousel() {
    const container = document.getElementById('carousel-facts');
    const dotsContainer = document.getElementById('carousel-dots');
    
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    curiousFacts.forEach((fact, index) => {
        // Create slide item
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `
            <div class="carousel-fact-icon">${fact.icon}</div>
            <h4>${fact.title}</h4>
            <p>${fact.desc}</p>
        `;
        container.appendChild(item);

        // Create dot indicator
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            showCarouselSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    startCarouselTimer();
}

function showCarouselSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (slides.length === 0) return;

    // Handle bounds
    if (index >= slides.length) carouselIndex = 0;
    else if (index < 0) carouselIndex = slides.length - 1;
    else carouselIndex = index;

    // Update active classes
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === carouselIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselIndex);
    });

    // Restart timer on manual interaction
    startCarouselTimer();
}

function startCarouselTimer() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        showCarouselSlide(carouselIndex + 1);
    }, 6000); // Shift every 6 seconds
}


// 6. GLOBAL SEARCH FUNCTIONALITY

function setupGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        
        // Filter map destinations if query is typed
        if (query.length > 1) {
            const filteredDestIds = destinations
                .filter(d => d.name.toLowerCase().includes(query) || d.description.toLowerCase().includes(query))
                .map(d => d.id);
            
            // Re-render markers matching query
            markersLayer.clearLayers();
            destinations.forEach(dest => {
                if (filteredDestIds.includes(dest.id)) {
                    const marker = L.marker(dest.coords, {
                        icon: getMarkerIcon(dest.route, false)
                    });
                    marker.destinationData = dest;
                    marker.on('click', () => selectDestination(dest, marker));
                    marker.addTo(markersLayer);
                }
            });
        } else {
            // Restore active route filter
            const activeRoute = document.querySelector('.route-filter-btn.active').dataset.route;
            renderMarkers(activeRoute);
        }
    });
}

// Popular destinations links in map sidebar placeholder
function renderPopularList() {
    const list = document.getElementById('popular-destinations-list');
    list.innerHTML = '';
    
    // Pick 4 popular spots
    const populars = [
        destinations[0], // Plaza
        destinations[11], // Samaipata
        destinations[14], // Espejillos
        destinations[20]  // San Jose
    ];

    populars.forEach(dest => {
        const li = document.createElement('li');
        li.innerHTML = `📍 ${dest.name}`;
        li.addEventListener('click', () => {
            selectDestination(dest);
        });
        list.appendChild(li);
    });
}


// 7. INITIALIZATION & EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize leaflet map
    initMap();

    // 2. Render dynamic content
    renderGastronomy('all');
    renderProvinces();
    renderSlangs();
    renderMyths();
    initCarousel();
    renderPopularList();
    setupGlobalSearch();

    // 3. Header Scroll Styling
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(27, 94, 32, 0.98)';
        } else {
            header.style.padding = '';
            header.style.backgroundColor = '';
        }
    });

    // 4. Mobile Navigation Toggle
    const menuToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu on nav link clicks
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // 5. Route filters event listeners
    document.querySelectorAll('.route-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.route-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const route = btn.dataset.route;
            renderMarkers(route);
            closeSidebar();
        });
    });

    // 6. Sidebar close event
    document.getElementById('close-sidebar').addEventListener('click', closeSidebar);

    // 7. Gastronomy category filters
    document.querySelectorAll('.food-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.food-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGastronomy(btn.dataset.category);
        });
    });

    // 8. Gastronomy recommendation quiz
    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            runTasteQuiz(btn.dataset.taste);
        });
    });

    // 9. Carousel control events
    document.getElementById('carousel-prev').addEventListener('click', () => {
        showCarouselSlide(carouselIndex - 1);
    });
    document.getElementById('carousel-next').addEventListener('click', () => {
        showCarouselSlide(carouselIndex + 1);
    });

    // 10. Modal close events
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('app-modal').addEventListener('click', (e) => {
        if (e.target.id === 'app-modal') closeModal();
    });
});
