export interface DevotionalDay {
  day: number;
  month: string;
  monthId: number;
  title: string;
  verse: {
    text: string;
    reference: string;
  };
  reflection: string;
  quote: {
    text: string;
    author: string;
  };
  challenge: string;
  song: {
    title: string;
    artist: string;
    youtubeUrl: string;
    spotifyUrl: string;
  };
  movie?: {
    title: string;
    platform: string;
    youtubeUrl?: string;
    description: string;
  };
  motivationalVideo: {
    title: string;
    youtubeUrl: string;
    description: string;
    duration: string;
  };
}

export const atletasData: DevotionalDay[] = [
  {
    day: 1,
    month: "Enero",
    monthId: 1,
    title: "Correr con Propósito",
    verse: {
      text: "¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis.",
      reference: "1 Corintios 9:24"
    },
    reflection: "Todo atleta sabe que entrenar sin propósito es perder el tiempo. Cada sprint, cada repetición, cada gota de sudor debe tener un objetivo claro. Pablo usa la metáfora del atletismo para enseñarnos que la vida cristiana requiere la misma intencionalidad. No corremos sin rumbo, sino hacia la meta de conocer más a Cristo y cumplir su propósito para nuestras vidas. Como atletas de Cristo, cada día es una oportunidad para entrenar nuestro carácter, fortalecer nuestra fe y acercarnos a la línea de meta.",
    quote: {
      text: "No juego solo para ganar campeonatos. Juego para glorificar a Dios y ser un ejemplo para otros.",
      author: "Stephen Curry"
    },
    challenge: "Escribe en una nota tu 'propósito deportivo' y tu 'propósito espiritual' para este año. Colócala donde la veas cada día antes de entrenar.",
    song: {
      title: "Imparable",
      artist: "Redimi2",
      youtubeUrl: "https://www.youtube.com/watch?v=wafTYyNFXLE",
      spotifyUrl: "https://open.spotify.com/track/2qOi6zys6SY9iw7UeRL3Du"
    },
    motivationalVideo: {
      title: "Stephen Curry - Su Relación con DIOS",
      youtubeUrl: "https://www.youtube.com/watch?v=x2BjC6QOLS0",
      description: "El MVP de la NBA comparte cómo su fe en Cristo guía cada aspecto de su carrera deportiva. Video en español.",
      duration: "4:00"
    }
  },
  {
    day: 2,
    month: "Enero",
    monthId: 1,
    title: "Disciplina Diaria",
    verse: {
      text: "Todo atleta en todo se domina; ellos, para recibir una corona corruptible, pero nosotros, una incorruptible.",
      reference: "1 Corintios 9:25"
    },
    reflection: "La diferencia entre un atleta promedio y un campeón no está en el talento natural, sino en la disciplina diaria. Los campeones hacen lo que otros no están dispuestos a hacer: entrenar cuando están cansados, comer bien cuando prefieren comida chatarra, dormir temprano cuando hay fiestas. La disciplina espiritual funciona igual. Orar cuando no tienes ganas, leer la Biblia cuando estás ocupado, perdonar cuando te han herido. La corona incorruptible que menciona Pablo vale infinitamente más que cualquier trofeo terrenal.",
    quote: {
      text: "La disciplina es hacer lo que necesitas hacer, incluso cuando no quieres hacerlo.",
      author: "Michael Phelps"
    },
    challenge: "Establece una rutina matutina de 15 minutos que incluya oración y lectura bíblica. Hazlo durante 7 días consecutivos sin excepción.",
    song: {
      title: "Jesucristo Basta",
      artist: "Un Corazón, Kim Richards",
      youtubeUrl: "https://www.youtube.com/watch?v=Xbqa9ai0lkE",
      spotifyUrl: "https://open.spotify.com/track/6XgnLNskskRPjdfa3CyKGA"
    },
    motivationalVideo: {
      title: "Cristiano Ronaldo - Cómo Adquirir La Disciplina",
      youtubeUrl: "https://www.youtube.com/watch?v=z_Xc8kBBakY",
      description: "El futbolista más disciplinado del mundo explica su filosofía de trabajo duro y sacrificio. Video en español.",
      duration: "6:00"
    }
  },
  {
    day: 3,
    month: "Enero",
    monthId: 1,
    title: "Superar Obstáculos",
    verse: {
      text: "No os ha sobrevenido ninguna prueba que no sea humana; pero fiel es Dios, que no os dejará ser probados más de lo que podéis resistir, sino que dará también juntamente con la prueba la salida, para que podáis soportarla.",
      reference: "1 Corintios 10:13"
    },
    reflection: "Cada atleta enfrenta obstáculos: lesiones, derrotas, críticas, momentos de duda. Los grandes no son aquellos que nunca caen, sino los que se levantan cada vez. La historia del deporte está llena de comebacks épicos de atletas que se negaron a rendirse. Como cristianos, enfrentamos pruebas que parecen imposibles de superar, pero Dios promete que nunca permitirá más de lo que podemos soportar. Cada obstáculo es una oportunidad para que nuestra fe crezca y para que el poder de Dios se manifieste en nuestra debilidad.",
    quote: {
      text: "Los obstáculos no tienen que detenerte. Si te encuentras con una pared, no te des la vuelta y te rindas. Descubre cómo escalarla, atravesarla o rodearla.",
      author: "Michael Jordan"
    },
    challenge: "Identifica un obstáculo actual en tu vida deportiva o espiritual. Escribe tres pasos concretos que darás esta semana para superarlo.",
    song: {
      title: "Sueños",
      artist: "Un Corazón",
      youtubeUrl: "https://www.youtube.com/watch?v=SNKicWTMxqU",
      spotifyUrl: "https://open.spotify.com/track/3nOjFj0WWbsci9foo3o2tk"
    },
    motivationalVideo: {
      title: "Las 5 Declaraciones Más Sorprendentes de Famosos Deportistas Cristianos",
      youtubeUrl: "https://www.youtube.com/watch?v=Wi8BSxRf22w",
      description: "Testimonios inspiradores de fe de atletas como Manny Pacquiao, Stephen Curry, Albert Pujols, Radamel Falcao y Sydney McLaughlin. Video completamente en español, lenguaje limpio y apropiado.",
      duration: "5:42"
    }
  },
  {
    day: 4,
    month: "Enero",
    monthId: 1,
    title: "Mentalidad de Campeón",
    verse: {
      text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.",
      reference: "2 Timoteo 1:7"
    },
    reflection: "La diferencia entre ganar y perder a menudo se decide en la mente antes que en el cuerpo. Los campeones tienen una mentalidad diferente: creen que pueden ganar incluso cuando las probabilidades están en su contra. Como atletas de Cristo, Dios nos ha dado un espíritu de poder, no de temor. No somos víctimas de las circunstancias, somos más que vencedores en Cristo. La mentalidad de campeón no niega los desafíos, pero se niega a ser definida por ellos. Entrena tu mente tanto como entrenas tu cuerpo.",
    quote: {
      text: "El campeonato se gana en la mente antes de ganarse en el campo.",
      author: "Tom Brady"
    },
    challenge: "Memoriza 2 Timoteo 1:7 y repítelo en voz alta cada mañana durante esta semana antes de entrenar o competir.",
    song: {
      title: "Vasijas Rotas (Sublime Gracia)",
      artist: "Hillsong en Español",
      youtubeUrl: "https://www.youtube.com/watch?v=w3qFYCd7TKM",
      spotifyUrl: "https://open.spotify.com/track/3MHkeMZGfp6hNB5rsrEnBa"
    },
    motivationalVideo: {
      title: "Los Mejores Atletas de Todos Los Tiempos - THE G.O.A.T.",
      youtubeUrl: "https://www.youtube.com/watch?v=A65-qpO2jn4",
      description: "Consejos motivacionales de los mejores atletas de la historia: Michael Jordan, Cristiano Ronaldo, Serena Williams y más. Video en español.",
      duration: "5:00"
    }
  },
  {
    day: 5,
    month: "Enero",
    monthId: 1,
    title: "Fe Bajo Presión",
    verse: {
      text: "Pelea la buena batalla de la fe, echa mano de la vida eterna, a la cual asimismo fuiste llamado, habiendo hecho la buena profesión delante de muchos testigos.",
      reference: "1 Timoteo 6:12"
    },
    reflection: "Los momentos de mayor presión revelan quiénes somos realmente. Cuando el marcador está empatado y quedan segundos en el reloj, cuando todo el estadio te observa, cuando la fatiga te grita que te rindas, ahí es donde se forjan los campeones. La fe cristiana no es para momentos cómodos, es para la batalla. Pablo usa lenguaje deportivo: 'pelea la buena batalla'. No dice que será fácil, pero promete que vale la pena. Bajo presión, tu fe se prueba y se purifica como el oro en el fuego.",
    quote: {
      text: "La presión es un privilegio. Significa que estás en una posición donde puedes hacer la diferencia.",
      author: "Billie Jean King"
    },
    challenge: "La próxima vez que enfrentes presión (en el deporte o en la vida), antes de reaccionar, respira profundo y ora: 'Señor, que tu paz guíe mis acciones.'",
    song: {
      title: "1000 Pedazos",
      artist: "Un Corazón, Kim Richards, Louie Abrego",
      youtubeUrl: "https://www.youtube.com/watch?v=9khH4zemXL4",
      spotifyUrl: "https://open.spotify.com/track/0BJbrz72CTsOG6wqwEKxTa"
    },
    motivationalVideo: {
      title: "¡NO TE RINDAS, TÚ PUEDES! - Video Motivacional Facing the Giants",
      youtubeUrl: "https://www.youtube.com/watch?v=Wj1devH5JP4",
      description: "Escena motivacional de la película cristiana Facing the Giants sobre perseverar bajo presión y dar tu mejor esfuerzo. Video completamente en español.",
      duration: "4:49"
    }
  },
  {
    day: 6,
    month: "Enero",
    monthId: 1,
    title: "Trabajo en Equipo",
    verse: {
      text: "Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantará a su compañero; pero ¡ay del solo! que cuando cayere, no habrá segundo que lo levante.",
      reference: "Eclesiastés 4:9-10"
    },
    reflection: "Ningún campeonato se gana solo. Detrás de cada atleta destacado hay un equipo que lo respalda: entrenadores, compañeros, familia. La Biblia enseña que fuimos diseñados para la comunidad, no para el individualismo. En el cuerpo de Cristo, cada miembro tiene un rol único e importante. Cuando celebras el éxito de tu compañero como si fuera tuyo, cuando te sacrificas por el bien del equipo, estás reflejando el corazón de Cristo. El verdadero liderazgo no busca la gloria personal, sino el triunfo colectivo.",
    quote: {
      text: "El talento gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos.",
      author: "Michael Jordan"
    },
    challenge: "Hoy, agradece públicamente a tres personas de tu 'equipo' (deportivo o personal) que te han ayudado a llegar donde estás.",
    song: {
      title: "Iglesia",
      artist: "Lilly Goodman",
      youtubeUrl: "https://www.youtube.com/watch?v=aWnFmsqEY7s",
      spotifyUrl: "https://open.spotify.com/track/4Po4C0odXzBWN3z5F9qiBa"
    },
    motivationalVideo: {
      title: "Motivación DEPORTIVA | TRABAJO EN EQUIPO",
      youtubeUrl: "https://www.youtube.com/watch?v=HAel-_Jd7hk",
      description: "Compilación de los mejores momentos de trabajo en equipo en el deporte que demuestran que juntos somos más fuertes. Video en español.",
      duration: "4:15"
    }
  },
  {
    day: 7,
    month: "Enero",
    monthId: 1,
    title: "Descanso y Recuperación",
    verse: {
      text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      reference: "Mateo 11:28"
    },
    reflection: "Los mejores atletas saben que el descanso no es debilidad, es estrategia. Los músculos crecen durante el reposo, no durante el entrenamiento. Dios mismo descansó en el séptimo día, no porque estuviera cansado, sino para enseñarnos un principio: el ritmo de trabajo y descanso es parte de su diseño perfecto. Cuando ignoras tu necesidad de descanso, no estás siendo fuerte, estás siendo necio. Jesús invita a los cansados a venir a Él, no para recibir más carga, sino para encontrar verdadero reposo.",
    quote: {
      text: "El descanso y la recuperación son tan importantes como el entrenamiento mismo.",
      author: "Tom Brady"
    },
    challenge: "Dedica 30 minutos hoy a descansar intencionalmente: sin teléfono, sin pantallas, solo tú y Dios. Ora, medita o simplemente respira.",
    song: {
      title: "Descansa",
      artist: "Lily Goodman",
      youtubeUrl: "https://www.youtube.com/watch?v=QQsdG5KZ4VA",
      spotifyUrl: "https://open.spotify.com/track/0GsYMYRBQJnVSfaDbqSBB3"
    },
    movie: {
      title: "McFarland, USA",
      platform: "Disney+",
      youtubeUrl: "https://www.youtube.com/watch?v=Q4YcI2L_5Yw",
      description: "Basada en hechos reales, cuenta la historia de un entrenador que transforma a un equipo de corredores de campo traviesa en un pequeño pueblo de California. Una historia de perseverancia, trabajo en equipo y superación."
    },
    motivationalVideo: {
      title: "A NADIE LE IMPORTA, TRABAJA MÁS DURO",
      youtubeUrl: "https://www.youtube.com/watch?v=RHxXBbhGWlU",
      description: "Video motivacional sobre el equilibrio entre el esfuerzo constante y la importancia del descanso estratégico. Video en español.",
      duration: "5:30"
    }
  },
  {
    day: 8,
    month: "Enero",
    monthId: 1,
    title: "Humildad en la Victoria",
    verse: {
      text: "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo.",
      reference: "Filipenses 2:3"
    },
    reflection: "Ganar con humildad es más difícil que perder con dignidad. Cuando logras la victoria, la tentación de la arrogancia toca a tu puerta. Pero los verdaderos campeones saben que cada triunfo es un regalo, no un derecho. Reconocen que sin su equipo, sus entrenadores, su familia y sobre todo Dios, no estarían donde están. La humildad no significa pensar menos de ti mismo, significa pensar menos en ti mismo. Cuando ganas, ¿a quién le das la gloria?",
    quote: {
      text: "Juego para la gloria de Dios. Todo lo que hago es para Él.",
      author: "Simone Biles"
    },
    challenge: "Después de tu próxima victoria (grande o pequeña), antes de celebrar, agradece a Dios y a quienes te ayudaron a llegar ahí.",
    song: {
      title: "Portador de Tu Gloria",
      artist: "Julissa",
      youtubeUrl: "https://www.youtube.com/watch?v=d2mT0YAVXmc",
      spotifyUrl: "https://open.spotify.com/track/6XvNQ1Opq2atxq0bUkqLAY"
    },
    motivationalVideo: {
      title: "Los Mejores Atletas de Todos Los Tiempos - THE G.O.A.T.",
      youtubeUrl: "https://www.youtube.com/watch?v=A65-qpO2jn4",
      description: "Grandes atletas comparten lecciones sobre humildad y dar gloria a Dios en la victoria. Video en español.",
      duration: "5:00"
    }
  },
  {
    day: 9,
    month: "Enero",
    monthId: 1,
    title: "Aprender de la Derrota",
    verse: {
      text: "Porque siete veces cae el justo, y vuelve a levantarse; mas los impíos caerán en el mal.",
      reference: "Proverbios 24:16"
    },
    reflection: "La diferencia entre un campeón y un perdedor no es que uno nunca pierde, sino que uno se levanta después de cada caída. Cada derrota es una lección disfrazada, cada fracaso es un maestro duro pero efectivo. Los grandes atletas no temen perder, temen no aprender de sus pérdidas. La Biblia no promete que nunca caeremos, promete que Dios nos levantará cada vez. Tu respuesta a la derrota define tu carácter más que tu respuesta a la victoria.",
    quote: {
      text: "He fallado más de 9,000 tiros en mi carrera. He perdido casi 300 juegos. 26 veces confiaron en mí para hacer el tiro ganador y fallé. He fracasado una y otra vez en mi vida. Y es por eso que tengo éxito.",
      author: "Michael Jordan"
    },
    challenge: "Escribe tres lecciones que has aprendido de tus derrotas más duras. ¿Cómo te han hecho más fuerte?",
    song: {
      title: "Eres Mi Fuerza",
      artist: "Christine D'Clario feat. Jaime De León",
      youtubeUrl: "https://www.youtube.com/watch?v=IDBbaYQC5Q8",
      spotifyUrl: "https://open.spotify.com/track/6YAfzeZnA23VxKSp21zrw3"
    },
    motivationalVideo: {
      title: "Cuando te digan 'tu no puedes' - Lionel Messi",
      youtubeUrl: "https://www.youtube.com/watch?v=WlCp8b6oFyw",
      description: "Lionel Messi comparte cómo aprendió de las derrotas y críticas para convertirse en campeón. Video en español.",
      duration: "4:30"
    }
  },
  {
    day: 10,
    month: "Enero",
    monthId: 1,
    title: "Integridad Fuera de la Cancha",
    verse: {
      text: "El que camina en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
      reference: "Proverbios 10:9"
    },
    reflection: "Tu verdadero carácter no se muestra cuando las cámaras están encendidas, sino cuando nadie te ve. La integridad es hacer lo correcto incluso cuando no hay consecuencias visibles por hacer lo incorrecto. Como atleta de Cristo, tu testimonio fuera de la cancha es tan importante como tu desempeño dentro de ella. ¿Cómo tratas a tus compañeros cuando pierden? ¿Cómo hablas de tus rivales? ¿Qué ven tus seguidores en tus redes sociales? La integridad no es perfeccion, es consistencia entre lo que dices y lo que haces.",
    quote: {
      text: "La integridad es hacer lo correcto, incluso cuando nadie está mirando.",
      author: "C.S. Lewis"
    },
    challenge: "Evalúa tu vida en tres áreas: redes sociales, conversaciones privadas y pensamientos. ¿Hay coherencia entre tu fe pública y tu vida privada?",
    song: {
      title: "Vivo Estás",
      artist: "Hillsong Young & Free",
      youtubeUrl: "https://www.youtube.com/watch?v=rB8vI9s4l8g",
      spotifyUrl: "https://open.spotify.com/track/3LlGGGhby3Zy8KhCZCQzZ2"
    },
    motivationalVideo: {
      title: "Stephen Curry - Su Relación con DIOS",
      youtubeUrl: "https://www.youtube.com/watch?v=x2BjC6QOLS0",
      description: "Stephen Curry habla sobre cómo mantiene su integridad y fe dentro y fuera de la cancha. Video en español.",
      duration: "4:00"
    }
  },
  {
    day: 11,
    month: "Enero",
    monthId: 1,
    title: "Sacrificio y Compromiso",
    verse: {
      text: "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.",
      reference: "Romanos 12:1"
    },
    reflection: "Todo atleta de élite conoce el precio del éxito: madrugadas frías, dietas estrictas, entrenamientos agotadores, sacrificar fiestas por descanso. El compromiso no es una emoción, es una decisión diaria. Pablo habla de presentar nuestros cuerpos como sacrificio vivo, no muerto. Un sacrificio vivo sigue eligiendo entregarse cada día. ¿Qué estás dispuesto a sacrificar por tu fe? ¿Qué comodidades debes dejar para alcanzar tu propósito en Cristo?",
    quote: {
      text: "El éxito no es un accidente. Es trabajo duro, perseverancia, aprendizaje, sacrificio y sobre todo, amor por lo que estás haciendo.",
      author: "Pelé"
    },
    challenge: "Identifica un área donde necesitas mayor compromiso (espiritual o deportiva). Establece un sacrificio concreto que harás esta semana para crecer en esa área.",
    song: {
      title: "Perfume a Tus Pies",
      artist: "En Espíritu Y En Verdad",
      youtubeUrl: "https://www.youtube.com/watch?v=RTyvh6qpQMY",
      spotifyUrl: "https://open.spotify.com/track/5cS1TaKqN5z5brcTnG2Ory"
    },
    motivationalVideo: {
      title: "Cristiano Ronaldo - Cómo Adquirir La Disciplina",
      youtubeUrl: "https://www.youtube.com/watch?v=z_Xc8kBBakY",
      description: "Cristiano Ronaldo explica los sacrificios y la disciplina necesarios para alcanzar la excelencia. Video en español.",
      duration: "6:00"
    }
  },
  {
    day: 12,
    month: "Enero",
    monthId: 1,
    title: "Liderazgo Servicial",
    verse: {
      text: "Porque el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
      reference: "Marcos 10:45"
    },
    reflection: "Los mejores capitánes no son los que gritan más fuerte, sino los que sirven mejor. Jesús revolucionó el concepto de liderazgo: el líder no es el que está por encima de todos, sino el que se arrodilla para lavar los pies de su equipo. Un verdadero líder deportivo llega primero al entrenamiento, se queda después para ayudar a los que luchan, celebra los éxitos ajenos y asume responsabilidad en las derrotas. El liderazgo no es un título, es una actitud de servicio.",
    quote: {
      text: "Un líder es alguien que conoce el camino, recorre el camino y muestra el camino.",
      author: "John C. Maxwell"
    },
    challenge: "Hoy, busca a alguien en tu equipo que necesite ayuda (técnica, emocional o espiritual) y sé el primero en ofrecerla sin esperar nada a cambio.",
    song: {
      title: "Generación Que Danza",
      artist: "En Espíritu y En Verdad",
      youtubeUrl: "https://www.youtube.com/results?search_query=Generación+Que+Danza+En+Espíritu+y+En+Verdad",
      spotifyUrl: "https://open.spotify.com/search/Generación%20Que%20Danza%20En%20Espíritu%20y%20En%20Verdad"
    },
    motivationalVideo: {
      title: "Motivación DEPORTIVA | TRABAJO EN EQUIPO",
      youtubeUrl: "https://www.youtube.com/watch?v=HAel-_Jd7hk",
      description: "Lecciones sobre liderazgo servicial y cómo los grandes líderes deportivos sirven a su equipo. Video en español.",
      duration: "4:15"
    }
  },
  {
    day: 13,
    month: "Enero",
    monthId: 1,
    title: "Enfoque y Concentración",
    verse: {
      text: "Puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz, menospreciando el oprobio, y se sentó a la diestra del trono de Dios.",
      reference: "Hebreos 12:2"
    },
    reflection: "En un mundo lleno de distracciones, el enfoque es un superpoder. Los atletas de élite tienen la capacidad de bloquear el ruido de la multitud, las provocaciones del rival, la presión del momento, y concentrarse únicamente en la tarea. La Biblia nos llama a poner nuestros ojos en Jesús, no en las circunstancias. Cuando tu enfoque está en Cristo, las tormentas a tu alrededor pierden poder. ¿En qué estás enfocando tu energía mental y emocional?",
    quote: {
      text: "La concentración y la claridad mental son las claves del éxito.",
      author: "Serena Williams"
    },
    challenge: "Antes de tu próximo entrenamiento o competencia, dedica 5 minutos a orar y visualizar tu desempeño con enfoque total.",
    song: {
      title: "Dame Tus Ojos",
      artist: "Jesús Adrián Romero, Marcela Gándara",
      youtubeUrl: "https://www.youtube.com/watch?v=T5gGDtW9l2Y",
      spotifyUrl: "https://open.spotify.com/track/3HZCMyuazaSOLgXexcMASl"
    },
    motivationalVideo: {
      title: "Los Mejores Atletas - THE G.O.A.T.",
      youtubeUrl: "https://www.youtube.com/watch?v=A65-qpO2jn4",
      description: "Grandes atletas comparten sus secretos sobre enfoque y concentración mental. Video en español.",
      duration: "5:00"
    }
  },
  {
    day: 14,
    month: "Enero",
    monthId: 1,
    title: "Resistencia en la Adversidad",
    verse: {
      text: "No sólo esto, sino que también nos gloriamos en las tribulaciones, sabiendo que la tribulación produce paciencia; y la paciencia, prueba; y la prueba, esperanza.",
      reference: "Romanos 5:3-4"
    },
    reflection: "La resistencia no se construye en los días fáciles, se forja en los momentos de adversidad. Cuando el cuerpo grita que pares, cuando la mente te dice que no puedes más, cuando las circunstancias parecen imposibles, ahí es donde se revela tu verdadera fortaleza. Pablo no dice que evitemos las tribulaciones, dice que nos gloriemos en ellas porque producen carácter. Cada obstáculo superado te prepara para el siguiente nivel. La pregunta no es si enfrentarás adversidad, sino cómo responderás cuando llegue.",
    quote: {
      text: "El dolor es temporal. Puede durar un minuto, una hora, un día o un año, pero eventualmente disminuirá y algo más tomará su lugar. Si me rindo, sin embargo, durará para siempre.",
      author: "Lance Armstrong"
    },
    challenge: "Cuando enfrentes un momento difícil hoy, en lugar de quejarte, agradece a Dios por la oportunidad de crecer más fuerte.",
    song: {
      title: "Proezas",
      artist: "Miel San Marcos",
      youtubeUrl: "https://www.youtube.com/watch?v=WfzH9B99M_8",
      spotifyUrl: "https://open.spotify.com/track/7A4niQ2FA8nOnnqyhUsOOt"
    },
    movie: {
      title: "Invictus",
      platform: "Prime Video",
      youtubeUrl: "https://www.youtube.com/watch?v=RZY8c_a_dlQ",
      description: "Basada en hechos reales, narra cómo Nelson Mandela usó el rugby para unir a Sudáfrica después del apartheid. Una historia poderosa sobre liderazgo, resistencia y el poder del deporte para transformar naciones."
    },
    motivationalVideo: {
      title: "Cristiano Ronaldo - Nunca Te Rindas",
      youtubeUrl: "https://www.youtube.com/watch?v=JL7GP7NahAE",
      description: "Cristiano Ronaldo comparte cómo la resistencia en la adversidad lo llevó a la cima del fútbol mundial. Video en español.",
      duration: "6:20"
    }
  },
  {
    day: 15,
    month: "Enero",
    monthId: 1,
    title: "Gratitud en Toda Circunstancia",
    verse: {
      text: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",
      reference: "1 Tesalonicenses 5:18"
    },
    reflection: "Es fácil agradecer cuando ganas, cuando todo sale bien, cuando el marcador está a tu favor. Pero ¿puedes agradecer en la derrota? ¿En la lesión? ¿En el banco de suplentes? La gratitud no es una respuesta a las circunstancias, es una decisión independiente de ellas. Los atletas agradecidos ven cada entrenamiento como un privilegio, cada competencia como una oportunidad, cada desafío como una lección. La gratitud transforma tu perspectiva y, con ella, tu rendimiento.",
    quote: {
      text: "Agradezco a Dios por cada día que me permite hacer lo que amo.",
      author: "Lionel Messi"
    },
    challenge: "Escribe una lista de 10 cosas relacionadas con tu deporte por las que estás agradecido, incluyendo al menos tres desafíos que te han hecho crecer.",
    song: {
      title: "Gracias",
      artist: "Marcos Witt",
      youtubeUrl: "https://www.youtube.com/watch?v=f12sNAX_Hg0",
      spotifyUrl: "https://open.spotify.com/track/1jnUCPGWdEXtjTaviVG9E9"
    },
    motivationalVideo: {
      title: "Lionel Messi - Motivación y Gratitud",
      youtubeUrl: "https://www.youtube.com/watch?v=WlCp8b6oFyw",
      description: "Lionel Messi comparte lecciones sobre gratitud y apreciación por cada oportunidad. Video en español.",
      duration: "4:30"
    }
  },
  {
    day: 16,
    month: "Enero",
    monthId: 1,
    title: "Dominio Propio",
    verse: {
      text: "Todo aquel que lucha, de todo se abstiene; ellos, a la verdad, para recibir una corona corruptible, pero nosotros, una incorruptible.",
      reference: "1 Corintios 9:25"
    },
    reflection: "El dominio propio es el músculo más importante que un atleta puede desarrollar. No solo controlas tu cuerpo, sino tus emociones, tus palabras, tus reacciones. Un momento de falta de control puede costarte un partido, una temporada, una carrera. Pablo compara la vida cristiana con una competencia atlética: requiere disciplina en todo. Los atletas se abstienen de muchas cosas para ganar una corona que se marchita; ¿cuánto más deberíamos disciplinarnos por una corona eterna?",
    quote: {
      text: "La disciplina es el puente entre las metas y los logros.",
      author: "Jim Rohn"
    },
    challenge: "Identifica un área donde te falta dominio propio (dieta, sueño, redes sociales, temperamento). Establece una regla específica para esta semana y cúmplela.",
    song: {
      title: "Espíritu Santo",
      artist: "Barak",
      youtubeUrl: "https://www.youtube.com/results?search_query=Espíritu+Santo+Barak",
      spotifyUrl: "https://open.spotify.com/search/Espíritu%20Santo%20Barak"
    },
    motivationalVideo: {
      title: "Cristiano Ronaldo - Disciplina y Dominio Propio",
      youtubeUrl: "https://www.youtube.com/watch?v=z_Xc8kBBakY",
      description: "Cristiano Ronaldo comparte su filosofía sobre el dominio propio y la disciplina extrema. Video en español.",
      duration: "6:00"
    }
  },
  {
    day: 17,
    month: "Enero",
    monthId: 1,
    title: "Identidad en Cristo",
    verse: {
      text: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable.",
      reference: "1 Pedro 2:9"
    },
    reflection: "Tu identidad no está en tu número de camiseta, en tus estadísticas, en tus trofeos o en tu posición en el equipo. Esas cosas pueden cambiar o desaparecer. Tu verdadera identidad está en Cristo: eres hijo de Dios, elegido, amado, valioso. Cuando tu identidad está anclada en Cristo, una derrota no te destruye y una victoria no te define. Juegas con libertad porque sabes quién eres, independientemente del resultado.",
    quote: {
      text: "Mi identidad no está en el baloncesto. Mi identidad está en Cristo.",
      author: "Jeremy Lin"
    },
    challenge: "Completa esta frase y repítela cada mañana esta semana: 'Antes de ser atleta, soy hijo/a de Dios, y eso significa que...'",
    song: {
      title: "Eres Mi Protector",
      artist: "Maranatha! Latin",
      youtubeUrl: "https://www.youtube.com/watch?v=azqgZB1ZSOA",
      spotifyUrl: "https://open.spotify.com/track/7B2MTnxcpb0oBRCMv2P6cE"
    },
    motivationalVideo: {
      title: "Stephen Curry - Identidad en Cristo",
      youtubeUrl: "https://www.youtube.com/watch?v=x2BjC6QOLS0",
      description: "Stephen Curry comparte cómo su identidad en Cristo define quién es más allá del baloncesto. Video en español.",
      duration: "4:00"
    }
  },
  {
    day: 18,
    month: "Enero",
    monthId: 1,
    title: "Paciencia en el Proceso",
    verse: {
      text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
      reference: "Isaías 40:31"
    },
    reflection: "Vivimos en una cultura de gratificación instantánea, pero la excelencia atlética requiere paciencia. No te conviertes en campeón de la noche a la mañana. Cada repetición cuenta, cada entrenamiento suma, cada día de disciplina te acerca a tu meta. La paciencia no es pasividad, es perseverancia activa. Es seguir trabajando cuando no ves resultados inmediatos, confiando en que el proceso está funcionando. Dios también trabaja en procesos, no en atajos.",
    quote: {
      text: "El éxito no es cuestión de suerte, es cuestión de tiempo y esfuerzo constante.",
      author: "Usain Bolt"
    },
    challenge: "Identifica un área donde estás impaciente por ver resultados. Escribe tres pequeños pasos que darás esta semana para avanzar en el proceso.",
    song: {
      title: "Confiaré En Ti",
      artist: "Majo Solís",
      youtubeUrl: "https://www.youtube.com/watch?v=v2WbbuwZclg",
      spotifyUrl: "https://open.spotify.com/track/3oEJ8uzUa1HPdNGZcfangW"
    },
    motivationalVideo: {
      title: "Los Mejores Atletas - Paciencia en el Proceso",
      youtubeUrl: "https://www.youtube.com/watch?v=A65-qpO2jn4",
      description: "Grandes atletas comparten historias de paciencia y perseverancia en su camino al éxito. Video en español.",
      duration: "5:00"
    }
  },
  {
    day: 19,
    month: "Enero",
    monthId: 1,
    title: "Valentía Ante el Miedo",
    verse: {
      text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
      reference: "Josué 1:9"
    },
    reflection: "El miedo es parte del deporte: miedo a fallar, a lesionarte, a decepcionar, a no ser suficiente. Pero la valentía no es la ausencia de miedo, es actuar a pesar de él. Josué enfrentaba una tarea imposible: liderar a Israel después de Moisés. Dios no le dijo 'no tengas miedo porque será fácil', le dijo 'no temas porque yo estaré contigo'. La valentía viene de saber que no estás solo. Dios está contigo en cada competencia, cada entrenamiento, cada desafío.",
    quote: {
      text: "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
      author: "Nelson Mandela"
    },
    challenge: "Haz algo hoy que te dé miedo (un movimiento nuevo, hablar con alguien, intentar algo difícil). Antes de hacerlo, ora y recuerda que Dios está contigo.",
    song: {
      title: "Te Alabaré Mi Buen Jesús",
      artist: "Rojo",
      youtubeUrl: "https://www.youtube.com/watch?v=p0q0S0mU3fQ",
      spotifyUrl: "https://open.spotify.com/track/4jOxpIjGJ1Iq8qWzJXJmYL"
    },
    motivationalVideo: {
      title: "A NADIE LE IMPORTA, TRABAJA MÁS DURO - Valentía",
      youtubeUrl: "https://www.youtube.com/watch?v=RHxXBbhGWlU",
      description: "Video motivacional sobre cómo enfrentar el miedo y actuar con valentía a pesar de las circunstancias. Video en español.",
      duration: "5:30"
    }
  },
  {
    day: 20,
    month: "Enero",
    monthId: 1,
    title: "Influencia Positiva",
    verse: {
      text: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.",
      reference: "Mateo 5:14"
    },
    reflection: "Como atleta, tienes una plataforma. Tus compañeros te observan, los más jóvenes te admiran, tu comunidad te conoce. ¿Qué están viendo? Jesús nos llama a ser luz en un mundo oscuro. Tu influencia no se mide por cuántos seguidores tienes, sino por cuántas vidas tocas. Cada palabra de ánimo, cada acto de integridad, cada momento donde eliges lo correcto sobre lo popular, estás siendo luz. No escondes tu fe, la vives con valentía.",
    quote: {
      text: "Usa tu plataforma para hacer el bien. No desperdicies tu influencia.",
      author: "Tim Tebow"
    },
    challenge: "Hoy, usa tu influencia para bien: comparte un mensaje positivo en redes sociales, anima a alguien que lo necesite, o defiende a alguien que está siendo criticado.",
    song: {
      title: "Enciende una Luz",
      artist: "Marcos Witt",
      youtubeUrl: "https://www.youtube.com/watch?v=68WW8GZotIw",
      spotifyUrl: "https://open.spotify.com/intl-es/track/1UEwI2FyRaowh1kUWCzNLg"
    },
    motivationalVideo: {
      title: "Stephen Curry - Influencia Positiva",
      youtubeUrl: "https://www.youtube.com/watch?v=x2BjC6QOLS0",
      description: "Stephen Curry comparte cómo usa su plataforma para impactar vidas y glorificar a Dios. Video en español.",
      duration: "4:00"
    }
  },
  {
    day: 21,
    month: "Enero",
    monthId: 1,
    title: "Renovación y Transformación",
    verse: {
      text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.",
      reference: "Romanos 12:2"
    },
    reflection: "La transformación atlética no sucede de la noche a la mañana. Requiere renovación constante: nuevos entrenamientos, nuevas técnicas, nuevos hábitos. Lo mismo ocurre en la vida espiritual. Dios no quiere que te conformes con ser mediocre, quiere transformarte. Pero la transformación comienza en tu mente. Cuando cambias tu forma de pensar, cambias tu forma de vivir. ¿Estás renovándote constantemente o estás estancado en viejos patrones?",
    quote: {
      text: "El cambio es difícil al principio, desordenado en el medio y hermoso al final.",
      author: "Robin Sharma"
    },
    challenge: "Identifica un hábito mental negativo (pensamientos de duda, comparación, miedo) y reemplázalo con una verdad bíblica cada vez que aparezca.",
    song: {
      title: "Renuevame",
      artist: "Marcos Witt",
      youtubeUrl: "https://www.youtube.com/watch?v=SNHtwDiRI50",
      spotifyUrl: "https://open.spotify.com/track/4s9u7U9Ac1QvFuss2IgpPO"
    },
    movie: {
      title: "Rudy",
      platform: "Prime Video",
      youtubeUrl: "https://www.youtube.com/watch?v=qYC4l4kp3Xg",
      description: "La inspiradora historia real de Rudy Ruettiger, quien superó todas las probabilidades para jugar fútbol americano en Notre Dame. Una película sobre sueños, determinación y nunca rendirse."
    },
    motivationalVideo: {
      title: "Cristiano Ronaldo - Transformación y Renovación",
      youtubeUrl: "https://www.youtube.com/watch?v=z_Xc8kBBakY",
      description: "Cristiano Ronaldo comparte cómo la renovación constante lo ha mantenido en la cima. Video en español.",
      duration: "6:00"
    }
  },
  {
    day: 22,
    month: "Enero",
    monthId: 1,
    title: "Celebrar a Otros",
    verse: {
      text: "Alegraos con los que se alegran; llorad con los que lloran.",
      reference: "Romanos 12:15"
    },
    reflection: "En un mundo competitivo, es fácil ver a tus compañeros como rivales. Pero el verdadero carácter se revela cuando puedes celebrar genuinamente el éxito de otros, incluso cuando tú estás luchando. La envidia destruye equipos, pero la celebración mutua los fortalece. Cuando celebras a otros, no disminuyes tu luz, la multiplicas. Un equipo que se alegra junto es un equipo que gana junto.",
    quote: {
      text: "El talento individual gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos.",
      author: "Michael Jordan"
    },
    challenge: "Hoy, felicita públicamente a un compañero por algo que hizo bien. Sé específico y genuino en tu reconocimiento.",
    song: {
      title: "Eres Mi Fuerza",
      artist: "Christine D'Clario feat. Jaime De León",
      youtubeUrl: "https://www.youtube.com/watch?v=IDBbaYQC5Q8",
      spotifyUrl: "https://open.spotify.com/track/6YAfzeZnA23VxKSp21zrw3"
    },
    motivationalVideo: {
      title: "Motivación DEPORTIVA | TRABAJO EN EQUIPO - Celebrando Juntos",
      youtubeUrl: "https://www.youtube.com/watch?v=xqRv6_zy-wc",
      description: "Compilación de atletas celebrando los éxitos de sus rivales y mostrando verdadero espíritu deportivo.",
      duration: "5:30"
    }
  },
  {
    day: 23,
    month: "Enero",
    monthId: 1,
    title: "Sabiduría en las Decisiones",
    verse: {
      text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
      reference: "Santiago 1:5"
    },
    reflection: "Los atletas toman decisiones constantemente: ¿paso o tiro? ¿Ataco o defiendo? ¿Descanso o entreno? Algunas decisiones son instantáneas, otras requieren reflexión. La sabiduría no es solo inteligencia, es la capacidad de aplicar conocimiento correctamente. Dios promete darnos sabiduría si la pedimos. Antes de tomar decisiones importantes (deportivas o personales), ¿estás consultando con Dios o confiando solo en tu criterio?",
    quote: {
      text: "El conocimiento es saber qué decir. La sabiduría es saber cuándo decirlo.",
      author: "Proverbio"
    },
    challenge: "Antes de tomar cualquier decisión importante hoy, pausa y ora: 'Señor, dame sabiduría'. Espera en silencio y escucha.",
    song: {
      title: "Mi Universo",
      artist: "Jesús Adrián Romero",
      youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
      spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
    },
    motivationalVideo: {
      title: "Decisiones Inteligentes de Atletas Bajo Presión",
      youtubeUrl: "https://www.youtube.com/watch?v=VSceuiPBpxY",
      description: "Análisis de momentos donde atletas tomaron decisiones sabias que cambiaron el resultado de competencias importantes.",
      duration: "5:45"
    }
  },
  {
    day: 24,
    month: "Enero",
    monthId: 1,
    title: "Fortaleza en la Debilidad",
    verse: {
      text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
      reference: "2 Corintios 12:9"
    },
    reflection: "Todo atleta tiene debilidades: un lado menos hábil, una lesión crónica, una limitación física. Pero Dios no desperdicia nuestras debilidades, las usa. Cuando reconoces tu debilidad y dependes de Dios, su poder se manifiesta. Pablo no oró para que Dios quitara su debilidad, aprendió a gloriarse en ella porque ahí experimentaba el poder de Cristo. Tus debilidades no te descalifican, te hacen dependiente de Dios, y eso es exactamente donde Él quiere tenerte.",
    quote: {
      text: "La fuerza no viene de la capacidad física, viene de una voluntad indomable.",
      author: "Mahatma Gandhi"
    },
    challenge: "Identifica tu mayor debilidad como atleta. En lugar de avergonzarte, órala a Dios y pídele que su poder se perfeccione en ella.",
    song: {
      title: "Esperanza de Vida",
      artist: "Música Cristiana",
      youtubeUrl: "https://www.youtube.com/results?search_query=Esperanza+de+Vida+Música+Cristiana",
      spotifyUrl: "https://open.spotify.com/search/Esperanza%20de%20Vida%20Música%20Cristiana"
    },
    motivationalVideo: {
      title: "Atletas Que Superaron Discapacidades Físicas",
      youtubeUrl: "https://www.youtube.com/watch?v=xqRv6_zy-wc",
      description: "Historias inspiradoras de atletas paralímpicos y deportistas que convirtieron sus debilidades en fortalezas.",
      duration: "7:00"
    }
  },
  {
    day: 25,
    month: "Enero",
    monthId: 1,
    title: "Contentamiento y Ambición",
    verse: {
      text: "No lo digo porque tenga escasez, pues he aprendido a contentarme, cualquiera que sea mi situación.",
      reference: "Filipenses 4:11"
    },
    reflection: "Existe una tensión saludable entre contentamiento y ambición. El contentamiento no es conformismo, es paz con donde estás mientras trabajas hacia donde vas. Puedes estar agradecido por tu posición actual y aún así entrenar para mejorar. Puedes celebrar tus logros presentes mientras persigues metas más grandes. El problema surge cuando tu felicidad depende de logros futuros. Pablo aprendió a estar contento en toda situación, no porque dejara de esforzarse, sino porque su gozo no dependía de las circunstancias.",
    quote: {
      text: "El contentamiento no es la realización de lo que quieres, sino la realización de cuánto ya tienes.",
      author: "Proverbio"
    },
    challenge: "Haz dos listas: una de cosas por las que estás agradecido ahora, otra de metas que aún persigues. Celebra ambas.",
    song: {
      title: "Tu Nombre",
      artist: "Miel San Marcos",
      youtubeUrl: "https://www.youtube.com/watch?v=Vv6S4oeHPU0",
      spotifyUrl: "https://open.spotify.com/track/2JZ9xtZrEvZ76cbiKwySUf"
    },
    motivationalVideo: {
      title: "Kobe Bryant - Balance Entre Contentamiento y Ambición",
      youtubeUrl: "https://www.youtube.com/watch?v=VSceuiPBpxY",
      description: "Kobe habla sobre cómo mantuvo el equilibrio entre estar agradecido y seguir hambriento de éxito.",
      duration: "4:55"
    }
  },
  {
    day: 26,
    month: "Enero",
    monthId: 1,
    title: "Respeto por los Rivales",
    verse: {
      text: "Honrad a todos. Amad a los hermanos. Temed a Dios. Honrad al rey.",
      reference: "1 Pedro 2:17"
    },
    reflection: "La competencia saca lo mejor de nosotros, pero también puede sacar lo peor si no tenemos cuidado. Respetar a tu rival no es debilidad, es carácter. Puedes competir ferozmente y aún así honrar a tu oponente. Los grandes atletas no necesitan menospreciar a otros para sentirse grandes. Reconocen que sus rivales los hacen mejores. Después del partido, el rival se convierte en colega. ¿Cómo hablas de tus oponentes? ¿Con respeto o con desprecio?",
    quote: {
      text: "Respeta a tu oponente, pero no le temas.",
      author: "Roger Federer"
    },
    challenge: "Después de tu próxima competencia, busca a tu rival y felicitálo por algo específico que hizo bien.",
    song: {
      title: "Mejores Tiempos",
      artist: "Lilly Goodman",
      youtubeUrl: "https://www.youtube.com/watch?v=mNf7-TNN0Fs",
      spotifyUrl: "https://open.spotify.com/track/04wdnzU6Af2zrMhptFFvLd"
    },
    motivationalVideo: {
      title: "Momentos de Respeto Entre Rivales en el Deporte",
      youtubeUrl: "https://www.youtube.com/watch?v=xqRv6_zy-wc",
      description: "Compilación de hermosos momentos donde atletas muestran respeto y admiración por sus rivales.",
      duration: "5:20"
    }
  },
  {
    day: 27,
    month: "Enero",
    monthId: 1,
    title: "Preparación Excelente",
    verse: {
      text: "Todo lo que te viniere a la mano para hacer, hazlo según tus fuerzas; porque en el Seol, adonde vas, no hay obra, ni trabajo, ni ciencia, ni sabiduría.",
      reference: "Eclesiastés 9:10"
    },
    reflection: "La excelencia no es un accidente, es el resultado de preparación intencional. Los campeones no se hacen el día del partido, se hacen en los entrenamientos que nadie ve. La Biblia nos llama a hacer todo con excelencia, no para impresionar a otros, sino porque representamos a Dios. Cuando te preparas con excelencia, honras el talento que Dios te dio. La mediocridad es una elección, y la excelencia también. ¿Cómo es tu preparación cuando nadie te está mirando?",
    quote: {
      text: "La voluntad de ganar es importante, pero la voluntad de prepararse es vital.",
      author: "Joe Paterno"
    },
    challenge: "Hoy, en tu entrenamiento, da un 10% más de esfuerzo en cada repetición. Hazlo como si Dios estuviera observando (porque lo está).",
    song: {
      title: "Amigos",
      artist: "Alex Campos",
      youtubeUrl: "https://www.youtube.com/watch?v=vDJxYL8qr-s",
      spotifyUrl: "https://open.spotify.com/track/3BLZZBrpbJNEmqTivlf9tK"
    },
    motivationalVideo: {
      title: "Kobe Bryant - La Preparación Obsesiva de un Campeón",
      youtubeUrl: "https://www.youtube.com/watch?v=VSceuiPBpxY",
      description: "Historias de la legendaria ética de trabajo de Kobe y cómo su preparación lo diferenciaba de otros jugadores.",
      duration: "6:10"
    }
  },
  {
    day: 28,
    month: "Enero",
    monthId: 1,
    title: "Legado Eterno",
    verse: {
      text: "Porque ¿qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma?",
      reference: "Marcos 8:36"
    },
    reflection: "Los trofeos se oxidan, los récords se rompen, la fama se desvanece. ¿Qué quedará cuando tu carrera deportiva termine? Tu verdadero legado no son tus estadísticas, sino las vidas que tocaste, el carácter que desarrollaste, la fe que viviste. Jesús hace una pregunta penetrante: ¿de qué sirve ganar todo si pierdes tu alma? El éxito temporal sin propósito eterno es vacío. ¿Estás construyendo un legado que trascienda tu carrera deportiva?",
    quote: {
      text: "El legado no es lo que dejas para la gente, es lo que dejas en la gente.",
      author: "Peter Strople"
    },
    challenge: "Escribe cómo quieres ser recordado cuando tu carrera deportiva termine. ¿Estás viviendo de manera consistente con esa visión?",
    song: {
      title: "Dame Tus Ojos",
      artist: "Jesús Adrián Romero, Marcela Gándara",
      youtubeUrl: "https://www.youtube.com/watch?v=T5gGDtW9l2Y",
      spotifyUrl: "https://open.spotify.com/track/3HZCMyuazaSOLgXexcMASl"
    },
    movie: {
      title: "Facing the Giants",
      platform: "Prime Video",
      youtubeUrl: "https://www.youtube.com/watch?v=xLCn88bfW1o",
      description: "Un entrenador de fútbol americano enfrenta desafíos personales y profesionales, y descubre que el verdadero éxito va más allá de ganar partidos. Una película cristiana poderosa sobre fe, liderazgo y legado."
    },
    motivationalVideo: {
      title: "El Legado de Muhammad Ali - Más Que Un Boxeador",
      youtubeUrl: "https://www.youtube.com/watch?v=xqRv6_zy-wc",
      description: "Cómo Muhammad Ali usó su plataforma para impactar al mundo más allá del boxeo.",
      duration: "6:40"
    }
  },
  {
    day: 29,
    month: "Enero",
    monthId: 1,
    title: "Esperanza Inquebrantable",
    verse: {
      text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
      reference: "Jeremías 29:11"
    },
    reflection: "La esperanza no es optimismo ciego, es confianza en que Dios tiene un plan incluso cuando no puedes verlo. En el deporte, habrá temporadas difíciles, lesiones devastadoras, derrotas aplastantes. Pero la esperanza en Dios no depende de las circunstancias. Él tiene pensamientos de bien para ti, un futuro y una esperanza. Cuando todo parece perdido, la esperanza te mantiene en pie. No es ilusión, es fe en acción.",
    quote: {
      text: "La esperanza es el sueño del hombre despierto.",
      author: "Aristóteles"
    },
    challenge: "Si estás pasando por un momento difícil, escribe Jeremías 29:11 en una tarjeta y ponla donde la veas todos los días.",
    song: {
      title: "Mi Gozo",
      artist: "Barak",
      youtubeUrl: "https://www.youtube.com/watch?v=IxD3JiOo9DY",
      spotifyUrl: "https://open.spotify.com/track/5J4RMfjzVCfH1BEohUJ2zZ"
    },
    motivationalVideo: {
      title: "Bethany Hamilton - Esperanza Después del Ataque de Tiburón",
      youtubeUrl: "https://www.youtube.com/watch?v=xqRv6_zy-wc",
      description: "La surfista profesional comparte cómo su fe le dio esperanza para volver a surfear después de perder un brazo.",
      duration: "5:35"
    }
  },
  {
    day: 30,
    month: "Enero",
    monthId: 1,
    title: "Unidad en la Diversidad",
    verse: {
      text: "Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también Cristo.",
      reference: "1 Corintios 12:12"
    },
    reflection: "Un equipo fuerte no es aquel donde todos son iguales, sino donde cada uno aporta sus fortalezas únicas. En el cuerpo de Cristo, cada miembro tiene un don diferente, y todos son necesarios. Lo mismo ocurre en un equipo deportivo: el delantero necesita al defensa, el pitcher necesita al receptor, el base necesita al ala-pívot. La unidad no significa uniformidad, significa trabajar juntos a pesar de las diferencias. ¿Estás valorando las diferencias de tu equipo o tratándolas como problemas?",
    quote: {
      text: "La fuerza del equipo es cada miembro individual. La fuerza de cada miembro es el equipo.",
      author: "Phil Jackson"
    },
    challenge: "Identifica algo único que cada miembro de tu equipo aporta. Agradece a tres de ellos por sus contribuciones específicas.",
    song: {
      title: "Cerca de Ti",
      artist: "Jesús Adrián Romero",
      youtubeUrl: "https://www.youtube.com/watch?v=MMF_ReEbZuI",
      spotifyUrl: "https://open.spotify.com/track/3hqxcbk0Qy4EzYPiwbl8dV"
    },
    motivationalVideo: {
      title: "Motivación DEPORTIVA | TRABAJO EN EQUIPO - Unidad en Diversidad",
      youtubeUrl: "https://www.youtube.com/watch?v=HAel-_Jd7hk",
      description: "Cómo los grandes equipos valoran las fortalezas únicas de cada miembro. Video en español.",
      duration: "4:15"
    }
  },
  {
    day: 31,
    month: "Enero",
    monthId: 1,
    title: "Reflexión y Evaluación",
    verse: {
      text: "Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis pensamientos; y ve si hay en mí camino de perversidad, y guíame en el camino eterno.",
      reference: "Salmos 139:23-24"
    },
    reflection: "Los mejores atletas evalúan constantemente su desempeño: ¿qué funcionó? ¿Qué no? ¿Dónde puedo mejorar? La vida espiritual requiere la misma reflexión honesta. David invita a Dios a examinarlo, no porque sea perfecto, sino porque quiere crecer. Al final de este mes, es momento de evaluar: ¿Cómo ha crecido tu fe? ¿Qué hábitos has desarrollado? ¿Dónde necesitas ajustar? La reflexión sin acción es solo pensamiento; la acción sin reflexión es solo actividad.",
    quote: {
      text: "Sin reflexión, vamos ciegamente por nuestro camino, creando más consecuencias no deseadas y no logrando alcanzar nada útil.",
      author: "Margaret J. Wheatley"
    },
    challenge: "Dedica 30 minutos hoy a reflexionar sobre este mes: ¿Qué aprendiste? ¿Qué cambiarás en febrero? Escribe tus respuestas.",
    song: {
      title: "Gracias",
      artist: "Marcos Witt",
      youtubeUrl: "https://www.youtube.com/watch?v=f12sNAX_Hg0",
      spotifyUrl: "https://open.spotify.com/track/1jnUCPGWdEXtjTaviVG9E9"
    },
    motivationalVideo: {
      title: "Los Mejores Atletas - Reflexión y Crecimiento",
      youtubeUrl: "https://www.youtube.com/watch?v=A65-qpO2jn4",
      description: "Grandes atletas comparten cómo la reflexión constante los ayuda a seguir mejorando. Video en español.",
      duration: "5:00"
    }
  }
];
