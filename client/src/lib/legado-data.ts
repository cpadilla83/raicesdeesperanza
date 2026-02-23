// Legado de Impacto - 365 Días de Liderazgo para Empresarios y Emprendedores

export interface LegadoDay {
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
  song?: {
  title: string;
  artist: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  };
  movie?: {
  title: string;
  platform: string;
  description: string;
  youtubeUrl?: string;
  };
}

export const legadoData: LegadoDay[] = [
  // ENERO - Fundamentos del Liderazgo Cristiano
  {
  day: 1,
  month: "Enero",
  monthId: 1,
  title: "El Comienzo de la Sabiduría",
  verse: {
  text: "El principio de la sabiduría es el temor del Señor; buen entendimiento tienen todos los que practican sus mandamientos.",
  reference: "Salmos 111: 10",
  },
  reflection: "Como empresarios y líderes, enfrentamos decisiones complejas cada día. El verdadero liderazgo no comienza con estrategias de mercado o análisis financiero, sino con una relación correcta con Dios. El temor del Señor no es miedo paralizante, sino reverencia profunda que nos lleva a buscar Su voluntad en cada decisión empresarial. Cuando reconocemos que Dios es la fuente de toda sabiduría, nuestras empresas se convierten en plataformas para Su gloria, no solo en vehículos para nuestro éxito personal.",
  quote: {
  text: "El verdadero éxito empresarial se mide por cuántas vidas transformas, no solo por cuánto dinero generas.",
  author: "Dave Ramsey",
  },
  challenge: "Hoy, antes de tomar cualquier decisión empresarial importante, dedica 10 minutos a orar y pedir sabiduría divina. Escribe en tu diario: ¿Qué decisión importante enfrento hoy? ¿He buscado la dirección de Dios?",
  song: {
  title: "Renuévame",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=SNHtwDiRI50",
  spotifyUrl: "https://open.spotify.com/track/4s9u7U9Ac1QvFuss2IgpPO",
  },
  },
  {
  day: 2,
  month: "Enero",
  monthId: 1,
  title: "Liderazgo Servicial",
  verse: {
  text: "El que quiera hacerse grande entre vosotros será vuestro servidor, y el que de vosotros quiera ser el primero, será siervo de todos.",
  reference: "Marcos 10: 43-44",
  },
  reflection: "En el mundo empresarial, el liderazgo a menudo se mide por el poder, la autoridad y los resultados financieros. Jesús revolucionó este concepto al enseñar que el verdadero liderazgo se mide por la capacidad de servir. Un líder cristiano en los negocios no busca ser servido, sino servir a su equipo, clientes y comunidad. Este principio contrarrítmico transforma culturas organizacionales y crea ambientes donde las personas prosperan, no solo las ganancias.",
  quote: {
  text: "El liderazgo es influencia, nada más, nada menos.",
  author: "John Maxwell",
  },
  challenge: "Identifica una manera concreta de servir a tu equipo hoy. Puede ser tan simple como escuchar activamente a un empleado, reconocer públicamente el trabajo de alguien, o ayudar en una tarea que normalmente delegarías.",
  song: {
  title: "Waymaker",
  artist: "Mandisa",
  youtubeUrl: "https://www.youtube.com/watch?v=yNAAVPxjxbY",
  spotifyUrl: "https://open.spotify.com/track/5I3ovmdLCPcfDqjueQmLoj",
  },
  },
  {
  day: 3,
  month: "Enero",
  monthId: 1,
  title: "Integridad en las Decisiones",
  verse: {
  text: "El que camina en integridad anda confiado; mas el que pervierte sus caminos será quebrantado.",
  reference: "Proverbios 10: 9",
  },
  reflection: "La integridad es el fundamento de un liderazgo sostenible. En un mundo donde los atajos y las medias verdades son comunes, el líder cristiano se destaca por su compromiso inquebrantable con la verdad. La integridad no es solo evitar mentiras flagrantes; es alinear nuestras acciones privadas con nuestros valores públicos, mantener nuestras promesas incluso cuando es costoso, y tratar a todos con justicia sin importar su posición. Las empresas construidas sobre integridad pueden enfrentar tormentas que destruirían organizaciones cimentadas en la conveniencia.",
  quote: {
  text: "La integridad es hacer lo correcto, incluso cuando nadie está mirando.",
  author: "C.S. Lewis",
  },
  challenge: "Revisa tus compromisos pendientes. ¿Hay alguna promesa que no has cumplido? ¿Alguna situación donde has comprometido tus valores por conveniencia? Toma acción correctiva hoy.",
  song: {
  title: "Admirable Dios",
  artist: "Aviva Fest Band",
  youtubeUrl: "https://www.youtube.com/watch?v=WzYjlNI3144",
  spotifyUrl: "https://open.spotify.com/track/54VC4t00UQZ5SWXmlDJNa3",
  },
  },
  {
  day: 4,
  month: "Enero",
  monthId: 1,
  title: "Visión Clara",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; dichosos los que son obedientes a la ley.",
  reference: "Proverbios 29: 18",
  },
  reflection: "Una visión clara es el combustible que impulsa a las organizaciones hacia adelante. Como líderes, debemos articular no solo QUÉ hacemos, sino POR QUÉ lo hacemos. Una visión bíblica va más allá de metas financieras; responde a la pregunta: ¿Cómo está usando Dios mi empresa para avanzar Su reino? Cuando tu equipo comprende que su trabajo tiene propósito eterno, la motivación trasciende el salario y se convierte en misión.",
  quote: {
  text: "Un líder con visión clara inspira a otros a ver lo que es posible y a trabajar juntos para lograrlo",
  author: "John C. Maxwell",
  },
  challenge: "Escribe en una frase el propósito eterno de tu empresa o rol de liderazgo. Compártelo con al menos una persona de tu equipo hoy y pregunta: ¿Cómo podemos vivir esto mejor?",
  song: {
  title: "Océanos",
  artist: "Hillsong United",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/track/6nK1x5xWT3x1N1gzhSB7gw",
  },
  },
  {
  day: 5,
  month: "Enero",
  monthId: 1,
  title: "Mayordomía Fiel",
  verse: {
  text: "Ahora bien, se requiere de los administradores, que cada uno sea hallado fiel.",
  reference: "1 Corintios 4: 2",
  },
  reflection: "Como empresarios, no somos dueños absolutos de nuestros recursos; somos mayordomos de lo que Dios nos ha confiado. Esta perspectiva transforma radicalmente cómo manejamos finanzas, personal y oportunidades. La mayordomía fiel implica administrar con excelencia, invertir sabiamente, y usar los recursos para bendecir a otros. Al final, rendiremos cuentas no solo de las ganancias generadas, sino de cómo usamos esas ganancias para impactar vidas y glorificar a Dios.",
  quote: {
  text: "El carácter es más importante que la competencia.",
  author: "Rick Warren",
  },
  challenge: "Revisa tus finanzas empresariales o personales. ¿Qué porcentaje estás invirtiendo en el reino de Dios? ¿Cómo podrías ser más generoso sin comprometer la sostenibilidad?",
  song: {
  title: "Goodness of God",
  artist: "Bethel Music",
  youtubeUrl: "https://www.youtube.com/watch?v=IvSuGyJQ6oM",
  spotifyUrl: "https://open.spotify.com/track/1O6OPFAXdTdjHtT7Z2Hlt8",
  },
  },
  {
  day: 6,
  month: "Enero",
  monthId: 1,
  title: "Humildad en el Éxito",
  verse: {
  text: "Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de espíritu.",
  reference: "Proverbios 16: 18",
  },
  reflection: "El éxito empresarial puede ser embriagador. Cuando los números crecen y el reconocimiento llega, es fácil olvidar que todo don viene de Dios. La humildad no es pensar menos de ti mismo, sino pensar en ti mismo menos frecuentemente. Un líder humilde reconoce que su talento, oportunidades y logros son regalos divinos, no solo fruto de su esfuerzo. Esta postura protege contra la arrogancia que precede a las caídas más dolorosas.",
  quote: {
  text: "La humildad no es pensar menos de ti mismo, sino pensar en ti mismo menos.",
  author: "Rick Warren",
  },
  challenge: "Identifica un logro reciente y escribe tres factores externos (personas, circunstancias, provisión divina) que contribuyeron a ese éxito. Agradece públicamente a quienes te ayudaron.",
  song: {
  title: "Surrounded (Fight My Battles)",
  artist: "UPPERROOM",
  youtubeUrl: "https://www.youtube.com/watch?v=vx6mfAgHDsY",
  spotifyUrl: "https://open.spotify.com/track/5YHBpuXGcSWWWWdjOQCQxl",
  },
  },
  {
  day: 7,
  month: "Enero",
  monthId: 1,
  title: "Reflexión Semanal: Perseverancia",
  verse: {
  text: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.",
  reference: "Gálatas 6: 9",
  },
  reflection: "El emprendimiento y el liderazgo requieren resistencia a largo plazo. Habrá días donde los resultados no llegan, los clientes se quejan, y los competidores avanzan. En esos momentos, la perseverancia fundamentada en la fe marca la diferencia entre el fracaso y el éxito duradero. Dios nos llama a ser fieles en las temporadas difíciles, confiando que Él traerá la cosecha en Su tiempo perfecto.",
  quote: {
  text: "El liderazgo cristiano en los negocios requiere una perseverancia inquebrantable, confiando en la guía divina para superar cada desafío y alcanzar el propósito.",
  author: "John C. Maxwell",
  },
  challenge: "Reflexiona sobre tu semana: ¿Qué desafío enfrentaste? ¿Cómo respondiste? Escribe una oración pidiendo fortaleza para perseverar.",
  song: {
  title: "Reckless Love",
  artist: "Cory Asbury",
  youtubeUrl: "https://www.youtube.com/watch?v=Sc6SSHuZvQE",
  spotifyUrl: "https://open.spotify.com/track/0DWXEQvxbrDlJ1tt9Q1Zc9",
  },
  movie: {
  title: "La Búsqueda de la Felicidad",
  platform: "Netflix",
  youtubeUrl: "https://www.youtube.com/watch?v=DMOBlEcRuw8",
  description: "La historia real de Chris Gardner muestra cómo la perseverancia, la fe y el amor por su hijo lo llevaron de la indigencia a fundar su propia firma de corretaje. Una poderosa lección sobre no rendirse ante la adversidad.",
  },
  },
  {
  day: 8,
  month: "Enero",
  monthId: 1,
  title: "Propósito Eterno",
  verse: {
  text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
  reference: "Mateo 6: 33",
  },
  reflection: "Es fácil invertir toda nuestra energía en construir imperios terrenales y olvidar que estamos llamados a construir el reino eterno de Dios. Cuando priorizamos el reino, nuestras empresas se convierten en herramientas para alcanzar almas, bendecir comunidades y demostrar el amor de Cristo. Las ganancias son importantes, pero son medios, no fines. El verdadero éxito se mide por vidas transformadas y gloria dada a Dios.",
  quote: {
  text: "El liderazgo más poderoso es el que se ejerce con el ejemplo, no con las palabras.",
  author: "Billy Graham",
  },
  challenge: "Define una manera específica en que tu empresa o liderazgo puede avanzar el reino de Dios esta semana. Puede ser a través de generosidad, testimonio, o crear oportunidades para otros.",
  song: {
  title: "Que Se Abra el Cielo",
  artist: "Marcos Brunet",
  youtubeUrl: "https://www.youtube.com/watch?v=aLEo5JljVHY",
  spotifyUrl: "https://open.spotify.com/track/795ipT8LPC3Zlbro5Umykx",
  },
  },
  {
  day: 9,
  month: "Enero",
  monthId: 1,
  title: "Justicia en el Mercado",
  verse: {
  text: "No haréis injusticia en juicio, ni en medida de tierra, ni en peso, ni en otra medida.",
  reference: "Levítico 19: 35",
  },
  reflection: "La justicia en los negocios va más allá de cumplir leyes; es tratar a todos con equidad, pagar salarios justos, y rechazar prácticas engañosas. En un mundo donde maximizar ganancias a cualquier costo es la norma, el líder cristiano se destaca por su compromiso con la justicia. Esto puede significar menores márgenes a corto plazo, pero construye reputación y confianza que generan prosperidad sostenible.",
  quote: {
  text: "La excelencia es hacer las cosas comunes de manera extraordinaria para la gloria de Dios.",
  author: "Charles Spurgeon",
  },
  challenge: "Evalúa tus prácticas comerciales: ¿Hay algún área donde podrías ser más justo con empleados, proveedores o clientes? Implementa un cambio concreto hoy.",
  song: {
  title: "Raise A Hallelujah",
  artist: "Bethel Music",
  youtubeUrl: "https://www.youtube.com/watch?v=G2XtRuPfaAU",
  spotifyUrl: "https://open.spotify.com/track/0YxrPdW9NpNFtqh7Fw0rva",
  },
  },
  {
  day: 10,
  month: "Enero",
  monthId: 1,
  title: "Sabiduría en Consejo",
  verse: {
  text: "Donde no hay dirección sabia, caerá el pueblo; mas en la multitud de consejeros hay seguridad.",
  reference: "Proverbios 11: 14",
  },
  reflection: "Ningún líder tiene todas las respuestas. La sabiduría reconoce sus limitaciones y busca consejo de personas con experiencia, perspectivas diversas y carácter probado. Rodearte de consejeros sabios no es señal de debilidad, sino de humildad y prudencia. Los mejores líderes son aprendices perpetuos que valoran la retroalimentación y están dispuestos a cambiar de rumbo cuando es necesario.",
  quote: {
  text: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.",
  author: "Henry Ford",
  },
  challenge: "Identifica una decisión importante que enfrentas. Busca consejo de al menos dos personas sabias antes de decidir. Escucha activamente, sin defensividad.",
  song: {
  title: "The Blessing",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=Zp6aygmvzM4",
  spotifyUrl: "https://open.spotify.com/track/2elEVvWjPZltkotzcCwKvM",
  },
  },
  {
  day: 11,
  month: "Enero",
  monthId: 1,
  title: "Excelencia vs. Perfeccionismo",
  verse: {
  text: "La excelencia no es un acto, sino un hábito. Enfócate en mejorar continuamente, no en la perfección inalcanzable, para liderar con impacto.",
  reference: "Colosenses 3: 23",
  },
  reflection: "Dios nos llama a la excelencia, no al perfeccionismo. La excelencia es dar lo mejor de nosotros reconociendo nuestras limitaciones; el perfeccionismo es una búsqueda ansiosa de validación a través del desempeño impecable. Como líderes, debemos cultivar culturas de excelencia donde se celebra el esfuerzo genuino, se aprende de los errores, y se reconoce que nuestro valor no depende de resultados perfectos sino de trabajar con integridad para la gloria de Dios.",
  quote: {
  text: "La excelencia no es un acto, sino un hábito. Enfócate en mejorar continuamente, no en la perfección inalcanzable, para liderar con impacto.",
  author: "John C. Maxwell",
  },
  challenge: "Identifica un área donde el perfeccionismo te paraliza. Da un paso imperfecto pero valiente hoy. Celebra el progreso, no la perfección.",
  song: {
  title: "Aquí Estoy",
  artist: "Hillsong Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=7zGNhhEgDb4",
  spotifyUrl: "https://open.spotify.com/track/5drMuMDqTk2CA513ov0uSB",
  },
  },
  {
  day: 12,
  month: "Enero",
  monthId: 1,
  title: "Generosidad Estratégica",
  verse: {
  text: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo.",
  reference: "Lucas 6: 38",
  },
  reflection: "La generosidad no es solo un acto de caridad; es una estrategia del reino. Cuando damos generosamente de nuestro tiempo, recursos y conocimiento, activamos principios espirituales que traen bendición multiplicada. Esto no es prosperidad egoísta, sino reconocimiento de que Dios prospera a quienes usan su prosperidad para bendecir a otros. Un líder generoso crea culturas de abundancia, no de escasez.",
  quote: {
  text: "No se trata de tener tiempo, se trata de hacer tiempo.",
  author: "Zig Ziglar",
  },
  challenge: "Identifica una manera de ser generoso hoy que te cueste algo. Puede ser tiempo, dinero, o una oportunidad que podrías compartir con alguien que lo necesita.",
  song: {
  title: "Give Me Jesus",
  artist: "Fernando Ortega",
  youtubeUrl: "https://www.youtube.com/watch?v=DKVgKn2EKjc",
  spotifyUrl: "https://open.spotify.com/track/5WSUVpSF97wTZX9mkLWau3",
  },
  },
  {
  day: 13,
  month: "Enero",
  monthId: 1,
  title: "Paciencia en Procesos",
  verse: {
  text: "Por tanto, hermanos, tened paciencia hasta la venida del Señor. Mirad cómo el labrador espera el precioso fruto de la tierra.",
  reference: "Santiago 5: 7",
  },
  reflection: "Vivimos en una cultura de gratificación instantánea, pero los negocios sostenibles y el liderazgo maduro requieren paciencia. Así como un agricultor siembra, riega y espera la cosecha, los líderes sabios invierten en procesos que darán fruto a largo plazo. La paciencia no es pasividad; es confianza activa en que Dios está obrando mientras nosotros hacemos nuestra parte con diligencia.",
  quote: {
  text: "Un líder lleva a las personas a donde necesitan ir, no a donde quieren ir.",
  author: "John C. Maxwell",
  },
  challenge: "Identifica un proyecto o relación donde has sido impaciente. Escribe tres acciones que puedes tomar para invertir en el proceso a largo plazo, no solo en resultados inmediatos.",
  song: {
  title: "Waymaker",
  artist: "Mandisa",
  youtubeUrl: "https://www.youtube.com/watch?v=yNAAVPxjxbY",
  spotifyUrl: "https://open.spotify.com/track/5I3ovmdLCPcfDqjueQmLoj",
  },
  },
  {
  day: 14,
  month: "Enero",
  monthId: 1,
  title: "Reflexión Semanal: Innovación",
  verse: {
  text: "He aquí que yo hago cosa nueva; pronto saldrá a luz; ¿no la conoceréis? Otra vez abriré camino en el desierto, y ríos en la soledad.",
  reference: "Isaías 43: 19",
  },
  reflection: "Dios es un Dios de creatividad e innovación. Como líderes creados a Su imagen, estamos llamados a innovar, no solo a mantener el status quo. La innovación requiere valentía para cuestionar lo establecido, humildad para aprender de los fracasos, y fe para invertir en ideas que aún no tienen garantía de éxito. Las organizaciones que se resisten al cambio eventualmente se vuelven irrelevantes.",
  quote: {
  text: "La innovación en el liderazgo empresarial cristiano no es solo crear cosas nuevas, sino aplicar principios divinos para servir y transformar el mercado con propósito.",
  author: "Peter Drucker",
  },
  challenge: "Reflexiona: ¿Qué innovación ha estado en tu mente pero no has implementado por miedo? Da un paso concreto hacia esa idea esta semana.",
  song: {
  title: "Oceans (Where Feet May Fail)",
  artist: "Hillsong UNITED",
  youtubeUrl: "https://www.youtube.com/watch?v=dy9nwe9_xzw",
  spotifyUrl: "https://open.spotify.com/track/5Mw9bXG1dLNhbjofkVS2oR",
  },
  movie: {
  title: "Moneyball: Rompiendo las Reglas",
  platform: "Prime Video",
  youtubeUrl: "https://www.youtube.com/watch?v=-4QPVo0UIzc",
  description: "La historia de Billy Beane muestra cómo el pensamiento innovador y la valentía para desafiar convenciones pueden revolucionar industrias enteras. Una lección sobre liderazgo basado en datos y visión.",
  },
  },
  {
  day: 15,
  month: "Enero",
  monthId: 1,
  title: "Comunicación Transparente",
  verse: {
  text: "Por lo cual, desechando la mentira, hablad verdad cada uno con su prójimo.",
  reference: "Efesios 4: 25",
  },
  reflection: "La comunicación transparente construye confianza; la opacidad la destruye. Como líderes, debemos crear culturas donde la verdad se dice con amor, las malas noticias se comparten rápidamente, y las personas se sienten seguras expresando desacuerdos. La transparencia no significa compartir todo con todos, pero sí significa que lo que compartimos es verdadero, oportuno y útil.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker",
  },
  challenge: "Identifica una conversación difícil que has evitado. Programa tiempo hoy para tenerla con honestidad y gracia.",
  song: {
  title: "Speak, O Lord",
  artist: "Keith & Kristyn Getty",
  youtubeUrl: "https://www.youtube.com/watch?v=aH1Wn4fTiBs",
  spotifyUrl: "https://open.spotify.com/track/5S3KGLRJlrwZq0xfT3VLdV",
  },
  },
  {
  day: 16,
  month: "Enero",
  monthId: 1,
  title: "Equilibrio Vida-Trabajo",
  verse: {
  text: "Seis días trabajarás, y harás toda tu obra; mas el séptimo día es reposo para Jehová tu Dios; no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas.",
  reference: "Éxodo 20: 9-10",
  },
  reflection: "El principio del sabbat no es solo un mandamiento religioso; es sabiduría divina para la sostenibilidad humana. Dios diseñó el ritmo de trabajo y descanso porque sabía que necesitamos ambos para prosperar. Los líderes que trabajan sin cesar eventualmente se queman, dañan sus relaciones, y toman malas decisiones. El descanso no es debilidad; es obediencia y sabiduría.",
  quote: {
  text: "El verdadero liderazgo cristiano equilibra la ambición con el servicio, encontrando propósito en cada esfuerzo y descanso.",
  author: "John C. Maxwell",
  },
  challenge: "Evalúa tu equilibrio vida-trabajo. ¿Cuándo fue la última vez que descansaste verdaderamente? Programa un día de descanso completo esta semana, sin correos ni llamadas de trabajo.",
  song: {
  title: "Descanso",
  artist: "Maverick City Music",
  youtubeUrl: "https://www.youtube.com/watch?v=jX9QW88Gy3U",
  spotifyUrl: "https://open.spotify.com/track/0A402ZdxwQzaVdyH5Zav5X",
  },
  },
  {
  day: 17,
  month: "Enero",
  monthId: 1,
  title: "Mentoría Intencional",
  verse: {
  text: "Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros.",
  reference: "2 Timoteo 2: 2",
  },
  reflection: "El liderazgo sostenible se multiplica a través de la mentoría. Los grandes líderes no solo construyen organizaciones exitosas; desarrollan a la próxima generación de líderes. La mentoría requiere inversión intencional de tiempo, vulnerabilidad para compartir fracasos, y generosidad para abrir puertas. Tu legado no será lo que lograste, sino a quién desarrollaste.",
  quote: {
  text: "El liderazgo efectivo es poner las necesidades de otros antes que las propias.",
  author: "John Wooden",
  },
  challenge: "Identifica a alguien en tu esfera de influencia que podría beneficiarse de tu mentoría. Invítalo a café esta semana y comienza una relación de mentoría intencional.",
  song: {
  title: "Teu Amor Não Falha",
  artist: "Nívea Soares",
  youtubeUrl: "https://www.youtube.com/watch?v=mQFDEGNNfbQ",
  spotifyUrl: "https://open.spotify.com/track/2Ks7M9qpGfX2ozh9G6UAUz",
  },
  },
  {
  day: 18,
  month: "Enero",
  monthId: 1,
  title: "Resiliencia en Crisis",
  verse: {
  text: "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.",
  reference: "Juan 16: 33",
  },
  reflection: "Las crisis son inevitables en el mundo empresarial: recesiones económicas, pérdida de clientes clave, errores costosos. La diferencia entre líderes que sobreviven y los que prosperan está en su resiliencia. La resiliencia cristiana no es optimismo ciego, sino confianza profunda en que Dios es soberano incluso en medio del caos. Esta fe nos permite mantener la calma, tomar decisiones sabias, y liderar con esperanza cuando otros entran en pánico.",
  quote: {
  text: "Un líder es aquel que conoce el camino, va por el camino y muestra el camino.",
  author: "John Maxwell",
  },
  challenge: "Reflexiona sobre una crisis pasada: ¿Cómo respondiste? ¿Qué aprendiste? Escribe tres principios que aplicarás en la próxima crisis.",
  song: {
  title: "Promesas",
  artist: "Maverick City Musica ft. Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=qsREqdhgXgg",
  spotifyUrl: "https://open.spotify.com/track/1BJ8ddsIfAdQSEef845rRF",
  },
  },
  {
  day: 19,
  month: "Enero",
  monthId: 1,
  title: "Diversidad e Inclusión",
  verse: {
  text: "Ya no hay judío ni griego; no hay esclavo ni libre; no hay varón ni mujer; porque todos vosotros sois uno en Cristo Jesús.",
  reference: "Gálatas 3: 28",
  },
  reflection: "La diversidad no es solo una tendencia corporativa; es un reflejo del reino de Dios. Equipos diversos aportan perspectivas variadas que enriquecen la toma de decisiones, expanden la creatividad, y reflejan mejor a los clientes que servimos. Como líderes cristianos, debemos crear culturas donde personas de diferentes trasfondos, géneros, razas y experiencias se sientan valoradas y empoderadas para contribuir plenamente.",
  quote: {
  text: "El liderazgo cristiano valora la diversidad, creando un ambiente donde cada voz es escuchada y cada persona contribuye plenamente al éxito común.",
  author: "John C. Maxwell",
  },
  challenge: "Evalúa la diversidad en tu equipo u organización. ¿Hay barreras invisibles que impiden la inclusión? Toma una acción concreta para crear un ambiente más inclusivo.",
  song: {
  title: "Your Love Never Fails",
  artist: "Jesus Culture",
  youtubeUrl: "https://www.youtube.com/watch?v=IoezWBPGRAc",
  spotifyUrl: "https://open.spotify.com/track/3FjOBB4EyIXHYUtSgrIdY9",
  },
  },
  {
  day: 20,
  month: "Enero",
  monthId: 1,
  title: "Responsabilidad Social",
  verse: {
  text: "Aprended a hacer el bien; buscad el juicio, restituid al agraviado, haced justicia al huérfano, amparad a la viuda.",
  reference: "Isaías 1: 17",
  },
  reflection: "Las empresas no existen solo para generar ganancias; tienen responsabilidad con las comunidades donde operan. La responsabilidad social corporativa desde una perspectiva bíblica va más allá de donaciones filantrópicas; implica operar con justicia, cuidar el medio ambiente, y usar nuestra influencia para defender a los vulnerables. Cuando las empresas prosperan, las comunidades también deben prosperar.",
  quote: {
  text: "El liderazgo empresarial cristiano se manifiesta al servir a la comunidad, creando valor y promoviendo el bienestar social con integridad.",
  author: "John C. Maxwell",
  },
  challenge: "Identifica una necesidad en tu comunidad que tu empresa o liderazgo podría abordar. Diseña un plan de acción para comenzar a hacer una diferencia tangible.",
  song: {
  title: "Grande Es Tu Fidelidad",
  artist: "Christine D'Clario & Daniel Calveti",
  youtubeUrl: "https://www.youtube.com/watch?v=Uw-FVgsUJnA",
  spotifyUrl: "https://open.spotify.com/track/4Esk2M440NFes0pYGl6Cbc",
  },
  },
  {
  day: 21,
  month: "Enero",
  monthId: 1,
  title: "Reflexión Semanal: Ética",
  verse: {
  text: "El que camina en integridad y hace justicia, y habla verdad en su corazón.",
  reference: "Salmos 15: 2",
  },
  reflection: "La ética no es un lujo opcional en los negocios; es el fundamento de la sostenibilidad. Decisiones éticas a veces cuestan a corto plazo, pero siempre pagan dividendos a largo plazo en forma de reputación, confianza y paz interior. Los líderes cristianos deben ser conocidos no solo por su competencia, sino por su carácter inquebrantable incluso bajo presión.",
  quote: {
  text: "La innovación distingue a un líder de un seguidor.",
  author: "Steve Jobs",
  },
  challenge: "Reflexiona sobre tu semana: ¿Hubo algún momento donde comprometiste tus valores? ¿Cómo responderás diferente la próxima vez?",
  song: {
  title: "Simplemente Gracias",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=qBq0Xjf0UYQ",
  spotifyUrl: "https://open.spotify.com/track/1dFO3EzDl1bdNm258j2WNK",
  },
  movie: {
  title: "El Fundador",
  platform: "Netflix",
  youtubeUrl: "https://www.youtube.com/watch?v=AX2uz2XYkbo",
  description: "La historia de Ray Kroc y McDonald's plantea preguntas profundas sobre ambición, ética empresarial y el costo del éxito. Una reflexión sobre cómo las decisiones éticas definen nuestro legado.",
  },
  },
  {
  day: 22,
  month: "Enero",
  monthId: 1,
  title: "Delegación Efectiva",
  verse: {
  text: "No es bueno lo que haces. Desfallecerás del todo, tú, y también este pueblo que está contigo; porque el trabajo es demasiado pesado para ti.",
  reference: "Éxodo 18: 17-18",
  },
  reflection: "Moisés aprendió una lección crucial: los líderes que intentan hacerlo todo terminan agotados e ineficaces. La delegación no es abdicación; es empoderamiento estratégico. Requiere confianza en otros, claridad en expectativas, y disposición a permitir que las personas aprendan incluso a través de errores. Los líderes que delegan efectivamente multiplican su impacto y desarrollan equipos fuertes.",
  quote: {
  text: "El propósito de los negocios es crear y mantener clientes.",
  author: "Peter Drucker",
  },
  challenge: "Identifica tres tareas que estás haciendo que podrían ser delegadas. Asígnalas esta semana con instrucciones claras y confianza.",
  song: {
  title: "Poderoso Dios",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=jzr24y4FWb4",
  spotifyUrl: "https://open.spotify.com/track/7uH1rEIxTHMDs2PcXj08Az",
  },
  },
  {
  day: 23,
  month: "Enero",
  monthId: 1,
  title: "Gestión de Conflictos",
  verse: {
  text: "Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres.",
  reference: "Romanos 12: 18",
  },
  reflection: "El conflicto es inevitable cuando personas con perspectivas diferentes trabajan juntas. La pregunta no es si habrá conflicto, sino cómo lo manejaremos. Los líderes sabios no evitan el conflicto ni lo escalan innecesariamente; lo abordan con honestidad, empatía y compromiso de encontrar soluciones que honren a todas las partes. El conflicto bien manejado fortalece relaciones; el conflicto evitado las corroe.",
  quote: {
  text: "Busca primero entender, luego ser entendido. Esta es la clave para resolver conflictos y construir relaciones sólidas en cualquier empresa.",
  author: "Stephen Covey",
  },
  challenge: "Identifica un conflicto no resuelto en tu equipo u organización. Facilita una conversación esta semana donde ambas partes puedan expresarse y buscar resolución.",
  song: {
  title: "Gracias",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=f12sNAX_Hg0",
  spotifyUrl: "https://open.spotify.com/track/1jnUCPGWdEXtjTaviVG9E9",
  },
  },
  {
  day: 24,
  month: "Enero",
  monthId: 1,
  title: "Innovación Sostenible",
  verse: {
  text: "El hombre bueno, del buen tesoro de su corazón saca lo bueno; y el hombre malo, del mal tesoro de su corazón saca lo malo; porque de la abundancia del corazón habla la boca.",
  reference: "Lucas 6: 45",
  },
  reflection: "La innovación sin valores puede ser destructiva. La historia está llena de innovaciones que generaron ganancias pero dañaron personas, comunidades o el medio ambiente. La innovación sostenible busca crear valor económico mientras protege y mejora el bienestar social y ambiental. Como líderes cristianos, debemos preguntarnos no solo '¿Podemos hacerlo?' sino '¿Debemos hacerlo?'",
  quote: {
  text: "La innovación sostenible requiere líderes que vean el cambio como una oportunidad, no como una amenaza, para construir un futuro duradero.",
  author: "Peter Drucker",
  },
  challenge: "Evalúa un proyecto o producto actual: ¿Está creando valor sostenible o solo ganancias a corto plazo? ¿Qué ajustes podrías hacer para alinear innovación con responsabilidad?",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd",
  },
  },
  {
  day: 25,
  month: "Enero",
  monthId: 1,
  title: "Liderazgo en Adversidad",
  verse: {
  text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
  reference: "Josué 1: 9",
  },
  reflection: "Los verdaderos líderes se revelan en la adversidad. Cuando los mercados colapsan, los clientes se van, o los proyectos fallan, el carácter del líder determina el destino de la organización. El liderazgo en adversidad requiere valentía para tomar decisiones difíciles, transparencia para comunicar realidades duras, y fe para mantener la esperanza cuando las circunstancias parecen desesperadas.",
  quote: {
  text: "En la adversidad, el liderazgo cristiano se revela. Tu fe y principios guían el camino, transformando cada desafío en una oportunidad para edificar y crecer.",
  author: "John C. Maxwell",
  },
  challenge: "Reflexiona sobre una adversidad actual: ¿Cómo estás liderando a través de ella? ¿Qué mensaje de esperanza puedes comunicar a tu equipo hoy?",
  song: {
  title: "Como Dijiste",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=3uUJCvdbH3k",
  spotifyUrl: "https://open.spotify.com/track/7BY5JRklkQUu4e0tlZDBy7",
  },
  },
  {
  day: 26,
  month: "Enero",
  monthId: 1,
  title: "Cultura Organizacional",
  verse: {
  text: "Mirad, pues, con diligencia cómo andéis, no como necios sino como sabios.",
  reference: "Efesios 5: 15",
  },
  reflection: "La cultura organizacional es el ADN invisible que determina cómo se hacen las cosas cuando el líder no está presente. Una cultura sana se construye intencionalmente a través de valores claros, comportamientos modelados, y sistemas que recompensan lo correcto. Los líderes cristianos deben crear culturas donde la excelencia, la integridad, el respeto y la generosidad son normas, no excepciones.",
  quote: {
  text: "La única forma de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs",
  },
  challenge: "Identifica un valor que quieres fortalecer en tu cultura organizacional. Diseña una acción concreta que refuerce ese valor esta semana.",
  song: {
  title: "Eres Todopoderoso",
  artist: "Danilo Montero",
  youtubeUrl: "https://www.youtube.com/watch?v=5kg2pzCSKjOKwBIC2i7oYb",
  spotifyUrl: "https://open.spotify.com/track/5kg2pzCSKjOKwBIC2i7oYb",
  },
  },
  {
  day: 27,
  month: "Enero",
  monthId: 1,
  title: "Toma de Decisiones Sabias",
  verse: {
  text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
  reference: "Santiago 1: 5",
  },
  reflection: "Las decisiones definen destinos. Como líderes, tomamos docenas de decisiones diariamente, algunas triviales y otras trascendentales. La sabiduría para decidir bien no viene solo de experiencia o análisis; viene de buscar a Dios en oración, consultar consejeros sabios, y evaluar opciones a la luz de principios bíblicos. Las mejores decisiones alinean estrategia empresarial con valores del reino.",
  quote: {
  text: "Las decisiones sabias en el liderazgo empresarial cristiano se basan en principios divinos y buscan el bien común, guiando a la prosperidad con integridad.",
  author: "John C. Maxwell",
  },
  challenge: "Antes de tomar tu próxima decisión importante, completa este proceso: 1) Ora pidiendo sabiduría, 2) Consulta a dos consejeros, 3) Evalúa opciones según valores bíblicos.",
  song: {
  title: "Al Que Está Sentado En El Trono",
  artist: "Marcos Brunet, Toma Tu Lugar & Lucas Conslie",
  youtubeUrl: "https://www.youtube.com/watch?v=RsIs23SjUK4",
  spotifyUrl: "https://open.spotify.com/track/499FGrXrU5vMuuh9EG0vEU",
  },
  },
  {
  day: 28,
  month: "Enero",
  monthId: 1,
  title: "Reflexión Semanal: Legado",
  verse: {
  text: "Memoria del justo será bendita; mas el nombre de los impíos se pudrirá.",
  reference: "Proverbios 10: 7",
  },
  reflection: "Al final de nuestras vidas, lo que importará no será cuánto dinero acumulamos o cuántos títulos obtuvimos, sino el legado que dejamos. Un legado de impacto se construye día a día a través de decisiones que priorizan personas sobre ganancias, integridad sobre conveniencia, y el reino eterno sobre imperios terrenales. ¿Qué legado estás construyendo hoy?",
  quote: {
  text: "La grandeza no se logra por accidente, es el resultado de decisiones deliberadas.",
  author: "Jim Collins",
  },
  challenge: "Escribe tu epitafio deseado: ¿Cómo quieres ser recordado? Luego pregunta: ¿Mis decisiones actuales están construyendo ese legado?",
  song: {
  title: "Proezas",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=L600CKAVctE",
  spotifyUrl: "https://open.spotify.com/track/7A4niQ2FA8nOnnqyhUsOOt",
  },
  movie: {
  title: "Steve Jobs",
  platform: "Apple TV+",
  youtubeUrl: "https://www.youtube.com/watch?v=aEr6K1bwIVs",
  description: "Un retrato complejo de un líder visionario que cambió el mundo pero luchó con relaciones personales. Una reflexión sobre qué significa verdaderamente dejar un legado.",
  },
  },
  {
  day: 29,
  month: "Enero",
  monthId: 1,
  title: "Gratitud en Prosperidad",
  verse: {
  text: "Cuídate de no olvidarte del Señor tu Dios... no suceda que comas y te sacies... y digas en tu corazón: Mi poder y la fuerza de mi mano me han traído esta riqueza.",
  reference: "Deuteronomio 8: 11-17",
  },
  reflection: "La prosperidad puede ser más peligrosa espiritualmente que la adversidad. Cuando los negocios van bien, es fácil atribuir el éxito a nuestra astucia y olvidar que Dios es quien da la capacidad de generar riqueza. La gratitud en prosperidad nos mantiene humildes, generosos y dependientes de Dios. Un corazón agradecido reconoce que todo lo que tenemos es regalo, no derecho.",
  quote: {
  text: "El liderazgo es la capacidad de elevar la visión de una persona.",
  author: "Peter Drucker",
  },
  challenge: "Haz una lista de 10 bendiciones en tu vida empresarial o profesional. Agradece a Dios específicamente por cada una y comparte tu gratitud con alguien que contribuyó a esas bendiciones.",
  song: {
  title: "Eres Mi Protector",
  artist: "Maranatha! Latin",
  youtubeUrl: "https://www.youtube.com/watch?v=SYymeDERFlE",
  spotifyUrl: "https://open.spotify.com/track/7B2MTnxcpb0oBRCMv2P6cE",
  },
  },
  {
  day: 30,
  month: "Enero",
  monthId: 1,
  title: "Integridad Financiera",
  verse: {
  text: "Ninguno puede servir a dos señores; porque o aborrecerá al uno y amará al otro, o estimará al uno y menospreciará al otro. No podéis servir a Dios y a las riquezas.",
  reference: "Mateo 6: 24",
  },
  reflection: "El dinero es un siervo maravilloso pero un amo terrible. La integridad financiera significa manejar recursos con honestidad, transparencia y generosidad. Implica pagar impuestos justos, ser honestos en reportes financieros, y resistir la tentación de enriquecimiento a costa de otros. Cuando servimos a Dios con nuestras finanzas, el dinero se convierte en herramienta para el reino, no en ídolo que domina nuestras decisiones.",
  quote: {
  text: "Haz de tu vida una misión, no una carrera.",
  author: "Rick Warren",
  },
  challenge: "Revisa tus prácticas financieras personales y empresariales. ¿Hay algún área donde la integridad está comprometida? Toma acción correctiva inmediata.",
  song: {
  title: "Abre Mis Ojos",
  artist: "Danilo Montero",
  youtubeUrl: "https://www.youtube.com/watch?v=ouUhhEVH2PI",
  spotifyUrl: "https://open.spotify.com/track/6QN2LDi1HULluoF0cETe6H",
  },
  },
  {
  day: 31,
  month: "Enero",
  monthId: 1,
  title: "Cierre del Mes: Evaluación",
  verse: {
  text: "Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos.",
  reference: "2 Corintios 13: 5",
  },
  reflection: "El último día del mes es momento para reflexión honesta. ¿Cómo lideraste este mes? ¿Qué decisiones honraron a Dios? ¿Dónde fallaste? La auto-evaluación no es para condenación, sino para crecimiento. Los líderes sabios regularmente hacen pausa, evalúan su desempeño, celebran victorias, aprenden de fracasos, y ajustan rumbo para el próximo mes.",
  quote: {
  text: "El verdadero liderazgo no es acerca de ti, es acerca de servir a otros.",
  author: "Ken Blanchard"
  },
  challenge: "Dedica 30 minutos a evaluar enero: 1) ¿Qué logré? 2) ¿Dónde fallé? 3) ¿Qué aprendí? 4) ¿Qué ajustaré en febrero? Escribe tus respuestas y compártelas con un mentor o amigo de confianza.",
  song: {
  title: "Renuévame",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=SNHtwDiRI50",
  spotifyUrl: "https://open.spotify.com/track/4s9u7U9Ac1QvFuss2IgpPO",
  },
  },

  {
  day: 33,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el motor que impulsa cualquier emprendimiento exitoso. En el contexto empresarial cristiano, una visión clara no solo define metas financieras, sino que también alinea el propósito del negocio con los principios divinos. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de visión, donde la ausencia de un rumbo claro lleva al desorden y la ineficacia. Un líder con visión inspira a su equipo, establece prioridades y toma decisiones estratégicas que trascienden el corto plazo, buscando un impacto duradero y significativo en su entorno y en el Reino de Dios. La visión debe ser comunicada constantemente para mantener a todos los miembros de la organización enfocados y motivados hacia un objetivo común.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu negocio o área de liderazgo. Asegúrate de que sea clara, inspiradora y esté alineada con tus valores. Comunícala a tu equipo y busca retroalimentación para fortalecerla.",
  song: {
  title: "Visión Pastoral",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=2Dm7CRH-bTg",
  spotifyUrl: "https://open.spotify.com/track/6cqoOr1XTghTaUTojFrqDQ"
  }
},
  {
  day: 34,
  month: "Febrero",
  monthId: 2,
  title: "Escribir la Visión: Claridad y Comunicación",
  verse: {
  text: "Y Jehová me respondió, y dijo: Escribe la visión, y declárala en tablas, para que corra el que leyere en ella.",
  reference: "Habacuc 2:2"
  },
  reflection: "Habacuc 2:2 nos enseña un principio fundamental para el liderazgo: la visión debe ser escrita y comunicada con claridad. No basta con tener una idea brillante en la mente; debe ser articulada de manera que otros puedan comprenderla, abrazarla y correr con ella. En el contexto empresarial, esto significa documentar la visión de forma clara y accesible, asegurándose de que cada miembro del equipo entienda hacia dónde se dirige la organización y cómo su trabajo contribuye a ese destino. Una visión bien comunicada genera alineación, elimina ambigüedades y empodera a los colaboradores para tomar decisiones autónomas que estén en sintonía con el propósito mayor. Cuando la visión está escrita y es visible, se convierte en un recordatorio constante del por qué y el para qué del trabajo diario.",
  quote: {
  text: "Una visión sin una tarea es solo un sueño; una tarea sin visión es trabajo pesado; pero una visión con una tarea puede cambiar el mundo.",
  author: "Rick Warren"
  },
  challenge: "Escribe la visión de tu empresa o proyecto en un documento claro y conciso (no más de una página). Compártela con tu equipo esta semana y asegúrate de que esté visible en lugares estratégicos (oficina, plataformas digitales). Pide retroalimentación para confirmar que todos la entienden y se sienten inspirados por ella.",
  song: {
  title: "Visión Pastoral",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=2Dm7CRH-bTg",
  spotifyUrl: "https://open.spotify.com/track/56dvXXeWKdsUKHpDwIMlWq"
  },},
  {
  day: 35,
  month: "Febrero",
  monthId: 2,
  title: "Visión con Propósito: Planes de Bienestar",
  verse: {
  text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
  reference: "Jeremías 29:11"
  },
  reflection: "Jeremías 29:11 nos revela que Dios tiene planes específicos para cada uno de nosotros, planes de bienestar y esperanza. Como líderes empresariales cristianos, esta verdad debe moldear nuestra visión. Nuestra empresa no es solo un medio para generar ingresos, sino una plataforma para cumplir propósitos divinos: bendecir a empleados, servir a clientes con excelencia, y generar un impacto positivo en la comunidad. Una visión alineada con los planes de Dios trasciende las métricas financieras y busca el bienestar integral de todos los involucrados. Esto implica tomar decisiones que honren a Dios, cultivar una cultura de integridad y servicio, y confiar en que cuando alineamos nuestros planes con los suyos, Él nos guía hacia un futuro lleno de esperanza y propósito eterno.",
  quote: {
  text: "El propósito de Dios para tu vida es mucho más grande que tus propios planes, tus sueños, tus ambiciones, tus carreras, e incluso tu familia y tus amigos.",
  author: "Rick Warren"
  },
  challenge: "Reflexiona sobre cómo la visión de tu empresa refleja los planes de bienestar que Dios tiene. Identifica una decisión o iniciativa que puedas implementar esta semana que demuestre que tu negocio busca bendecir a otros y no solo maximizar ganancias. Compártela con tu equipo y explica cómo se alinea con los valores del Reino.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos, David Reyes & Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=2Q4o64e7_8M",
  spotifyUrl: "https://open.spotify.com/track/10AHJmPp1y86W3hYg5fjeH"
  },
  movie: {
    title: "Overcomer (Vencedor)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=pTu8ZXbP3Ks",
    description:
      "La historia de Mark Zuckerberg y la creación de Facebook muestra cómo la visión, la innovación y la determinación pueden transformar una idea en un imperio global, aunque también revela los dilemas éticos del éxito empresarial."
  }
},
  {
  day: 36,
  month: "Febrero",
  monthId: 2,
  title: "Conocimiento Divino, Fortaleza Empresarial",
  verse: {
  text: "...pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "El versículo de Daniel 11: 32 resalta una verdad profunda para líderes y emprendedores: la verdadera fortaleza y la capacidad de lograr grandes hazañas provienen de conocer a Dios. En el exigente mundo de los negocios, los desafíos son constantes y el camino al éxito rara vez es sencillo. Este conocimiento de Dios proporciona un fundamento inquebrantable, ofreciendo sabiduría, discernimiento y resiliencia. No se trata solo de observancia religiosa, sino de integrar principios divinos en cada aspecto del liderazgo y la toma de decisiones. Un líder arraigado en esta comprensión puede navegar las incertidumbres con fe, inspirar a su equipo con integridad y perseguir su visión con un propósito que trasciende la mera ganancia. Esta fortaleza espiritual se traduce en una fortaleza práctica, permitiéndoles superar obstáculos y llevar sus empresas a logros significativos, reflejando un legado construido sobre algo más que el esfuerzo humano.",
  quote: {
  text: "Un líder es aquel que conoce el camino, recorre el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a reflexionar sobre cómo los principios bíblicos pueden aplicarse directamente a una decisión clave que enfrentas en tu negocio. Busca sabiduría en la oración y en la Palabra de Dios, y luego actúa con la convicción de que tu conocimiento de Él te fortalecerá para lograr tus objetivos empresariales.",
  song: {
  title: "Dios De Oportunidades",
  artist: "Evan Craft",
  youtubeUrl: "https://www.youtube.com/watch?v=WH02EjAyq1Q",
  spotifyUrl: "https://open.spotify.com/track/4WRBlv7X6EGE4Kh58lKB1v"
  }
},
  {
  day: 37,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, tanto en la vida personal como en el ámbito empresarial. En el contexto de un negocio, la \"visión\" no es solo un sueño, sino una declaración clara y concisa del futuro deseado, un faro que guía todas las decisiones y acciones. Sin una visión definida, un equipo empresarial puede perder el rumbo, caer en la inercia o perseguir objetivos desalineados, lo que lleva a la ineficiencia y al fracaso. Un líder cristiano, inspirado por este versículo, debe cultivar una visión que no solo busque el éxito material, sino que también refleje los valores del Reino, impactando positivamente a empleados, clientes y la comunidad. Mantener la visión viva y comunicarla constantemente es clave para mantener al equipo enfocado y motivado, transformando el caos potencial en un camino claro hacia el propósito.",
  quote: {
  text: "La visión es la imagen mental de lo que el liderazgo quiere que el futuro sea.",
  author: "John C. Maxwell"
  },
  challenge: "Define o revisa la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable a todo tu equipo. Luego, comparte esta visión con al menos tres miembros clave de tu equipo y pide su retroalimentación para asegurar que todos estén alineados y comprometidos con el mismo propósito.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=5pAe2LKKyxg",
  spotifyUrl: "https://open.spotify.com/intl-es/track/10AHJmPp1y86W3hYg5fjeH"
  }
},
  {
  day: 38,
  month: "febrero",
  monthId: 2,
  title: "Trabajo con Excelencia para el Señor",
  verse: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la motivación detrás de nuestro trabajo es tan crucial como el trabajo en sí. Colosenses 3: 23-24 nos insta a realizar cada tarea con un corazón íntegro, como si estuviéramos sirviendo directamente a Cristo. Esto transforma la perspectiva de nuestro esfuerzo diario. No se trata solo de cumplir objetivos o satisfacer a clientes y superiores, sino de honrar a Dios a través de la excelencia y la integridad. Un líder cristiano entiende que su negocio es una plataforma para el servicio y un testimonio de su fe. Esta mentalidad fomenta una cultura de alta calidad, responsabilidad y propósito, atrayendo bendiciones y un impacto duradero que trasciende lo meramente material.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde la calidad o el servicio podrían mejorar. Desarrolla un plan para elevar el estándar en esa área, enfocándote en realizarlo con la misma dedicación y excelencia que tendrías si estuvieras sirviendo directamente a Dios. Comunica esta visión a tu equipo, inspirándolos a adoptar una mentalidad de trabajo con propósito y excelencia.",
  song: {
  title: "Trabajar y Orar",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1o_l2z_z_zE",
  spotifyUrl: "https://open.spotify.com/track/3v1X1X1X1X1X1X1X1X1X1X"
  }
},
  {
  day: 39,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Afirmada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este versículo de Proverbios nos ofrece una poderosa verdad para el mundo empresarial: la importancia de la fe en la planificación y ejecución. Encomendar nuestras obras a Dios no significa pasividad, sino una entrega activa de nuestros planes y esfuerzos a Su voluntad. Para el empresario cristiano, esto implica buscar la dirección divina en cada decisión, desde la estrategia de mercado hasta la gestión de equipos. Cuando nuestros pensamientos y proyectos están alineados con los principios de Dios, Él promete afirmarlos. Esta afirmación no siempre se traduce en éxito material inmediato, sino en la certeza de que estamos construyendo sobre un fundamento sólido, con propósito y resiliencia frente a los desafíos. La fe nos da la perspectiva para ver más allá de las circunstancias actuales y confiar en que nuestros esfuerzos, dedicados a Su gloria, darán fruto a Su debido tiempo.",
  quote: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar una nueva semana o proyecto, dedica tiempo a la oración y a la reflexión sobre cómo tus planes se alinean con los valores y principios cristianos. Escribe tres objetivos clave para tu negocio esta semana y, junto a cada uno, anota una acción específica que demuestre tu confianza en la guía divina para lograrlos.",
  song: {
  title: "Tu Fidelidad",
  artist: "Martin Valverde",
  youtubeUrl: "https://www.youtube.com/watch?v=Xq33i7g4y4o",
  spotifyUrl: "https://open.spotify.com/track/303120y1s90z8b6e6t7z2b"
  }
},
  {
  day: 40,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que son obedientes a la ley!",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión. En el ámbito empresarial, una visión clara no es un lujo, sino una necesidad imperativa. Sin una dirección definida, las empresas y sus equipos pueden perder el rumbo, desperdiciar recursos y carecer de la motivación necesaria para superar los desafíos. La visión actúa como una brújula, guiando cada decisión estratégica y operativa. Permite a los líderes anticipar el futuro, innovar y comunicar un propósito convincente que inspire a todos los colaboradores. Un líder cristiano debe buscar la visión de Dios para su negocio, asegurándose de que sus planes estén alineados con principios éticos y un propósito trascendente, no solo con ganancias materiales.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Luego, identifica al menos tres acciones concretas que tu equipo puede tomar para avanzar hacia esa visión en los próximos 30 días.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s44Q6g9z36g",
  spotifyUrl: "https://open.spotify.com/track/62112qXy8t714013g95v4D"
  }
},
  {
  day: 41,
  month: "Febrero",
  monthId: 2,
  title: "Excelencia en el Trabajo: Un Llamado Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje bíblico nos insta a ver nuestro trabajo no solo como una tarea secular, sino como un servicio directo a Dios. En el ámbito empresarial, esto se traduce en un compromiso inquebrantable con la excelencia, la integridad y la ética. Cada decisión, cada proyecto y cada interacción con clientes y colaboradores debe reflejar los valores del Reino. Al trabajar con un corazón dedicado, no solo buscamos el éxito terrenal, sino que también honramos a nuestro Creador, confiando en que Él es quien finalmente recompensa nuestra fidelidad y esfuerzo. Esta perspectiva transforma la rutina diaria en una oportunidad para manifestar el propósito divino en el mercado.",
  quote: {
  text: "La eficiencia es hacer las cosas bien; la eficacia es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde puedas elevar el estándar de excelencia esta semana. Puede ser en la calidad de un producto, la atención al cliente, la gestión de un equipo o la implementación de un nuevo proceso. Comprométete a realizarlo como si lo estuvieras haciendo directamente para Dios, buscando no solo la eficiencia, sino también la eficacia en el resultado.",
  song: {
  title: "Tal Como Soy",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=wa51woRoneE",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6XarD2h57xjHfdcnAep4nD"
  }
},
  {
  day: 42,
  month: "Febrero",
  monthId: 2,
  title: "La Diligencia: Sembrando para la Cosecha del Éxito",
  verse: {
  text: "Los proyectos del diligente ciertamente son ventaja, mas todo el que se apresura, ciertamente llega a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos enseña sobre la importancia de la diligencia y la planificación en cualquier emprendimiento. En el ámbito empresarial, la prisa y la falta de previsión a menudo conducen a resultados desfavorables. Un líder cristiano debe entender que el éxito duradero no es fruto de la improvisación, sino de un esfuerzo constante y bien pensado. La diligencia implica no solo trabajar arduamente, sino también hacerlo con sabiduría, evaluando cada paso y buscando la guía divina. Al igual que un agricultor que prepara su tierra con esmero, el empresario debe sembrar con paciencia y dedicación, confiando en que Dios bendecirá sus proyectos bien fundamentados. La visión a largo plazo y la ejecución metódica son pilares para construir un legado de impacto.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde la falta de diligencia o una decisión apresurada haya generado un obstáculo. Dedica tiempo esta semana a desarrollar un plan detallado para abordar ese problema, aplicando principios de planificación estratégica y buscando la sabiduría necesaria para ejecutarlo con paciencia y persistencia.",
  song: {
  title: "Temprano Yo Te Buscaré",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=w0xpYAX3z7g",
  spotifyUrl: "https://open.spotify.com/track/2UpIPk8SGn02aqZCfOEXcW"
  },
  movie: {
    title: "Joy",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=uR-2TiQVY-k",
    description:
      "La historia real de Joy Mangano, una madre soltera que superó la adversidad y construyó un imperio empresarial con su invento del trapeador milagroso, demostrando que la perseverancia y la fe en uno mismo pueden vencer cualquier obstáculo.",
  },
},
  {
  day: 43,
  month: "Febrero",
  monthId: 2,
  title: "Afirmando tus Obras: Estrategia Divina en los Negocios",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación estratégica y la toma de decisiones son fundamentales. Sin embargo, como líderes cristianos, nuestra perspectiva se eleva más allá de la mera eficiencia y rentabilidad. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, reconociendo que nuestros esfuerzos y planes encuentran su verdadero fundamento y dirección en Él. Esto implica una dependencia activa de Dios en cada paso, desde la concepción de una idea de negocio hasta la ejecución de proyectos complejos. Al alinear nuestros objetivos empresariales con los principios divinos, no solo buscamos el éxito terrenal, sino también un impacto que trascienda, afirmando nuestros pensamientos y acciones en un propósito mayor. Esta encomienda no exime de la diligencia, sino que la potencia con sabiduría y discernimiento espiritual, permitiendo que la visión de Dios moldee nuestra estrategia y operaciones.",
  quote: {
  text: "La única manera de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Identifica un proyecto o decisión importante en tu negocio esta semana. Antes de avanzar, dedica tiempo a la oración, encomendando este asunto a Dios. Busca Su dirección a través de la lectura bíblica y la reflexión, y luego actúa con la confianza de que Él afirmará tus pensamientos y guiará tus pasos. Evalúa cómo esta práctica impacta tu enfoque y los resultados obtenidos.",
  song: {
  title: "Tú Estás Aquí",
  artist: "Jesús Adrián Romero ft. Marcela Gándara",
  youtubeUrl: "https://www.youtube.com/watch?v=-ALOwx-RHm4",
  spotifyUrl: "https://open.spotify.com/track/73sVU2NvFYSsuNVI69qQMi"
  }
},
  {
  day: 44,
  month: "Febrero",
  monthId: 2,
  title: "La Dirección Divina en Nuestros Planes",
  verse: {
  text: "El corazón del hombre piensa su camino; Mas Jehová endereza sus pasos.",
  reference: "Proverbios 16: 9"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Trazamos metas, desarrollamos modelos de negocio y anticipamos desafíos. Sin embargo, Proverbios 16: 9 nos recuerda que, aunque nuestros planes son importantes, la dirección final proviene de Dios. Esto no minimiza la importancia de la diligencia y la visión, sino que nos invita a someter nuestros esfuerzos a la sabiduría divina. Un líder cristiano entiende que su éxito no depende únicamente de su intelecto o esfuerzo, sino de la guía y el favor de Dios. Al reconocer esto, cultivamos humildad y dependencia, abriendo la puerta a oportunidades y soluciones que quizás no habíamos considerado, alineando nuestros negocios con un propósito mayor.",
  quote: {
  text: "Liderar es influir, nada más y nada menos.",
  author: "John C. Maxwell"
  },
  challenge: "Esta semana, antes de tomar cualquier decisión importante en tu negocio o proyecto, dedica tiempo a la oración y busca la dirección de Dios. Presenta tus planes ante Él y estate atento a las señales o la paz que Él te dé, confiando en que Él enderezará tus pasos hacia el mejor camino.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship, Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=KHXXpFOvryY",
  spotifyUrl: "https://open.spotify.com/track/3feWC4iQUr9xllyiVh3BQh"
  }
},
  {
  day: 45,
  month: "Febrero",
  monthId: 2,
  title: "Prioridades en el Liderazgo: Escuchar y Actuar con Propósito",
  verse: {
  text: "Mientras iba en camino con sus discípulos, Jesús entró en una aldea, y una mujer llamada Marta lo recibió en su casa. Tenía ella una hermana llamada María, que sentada a los pies de Jesús, escuchaba lo que él decía. Marta, por su parte, se sentía abrumada porque tenía mucho que hacer. Así que se acercó a él y le dijo: Señor, ¿no te importa que mi hermana me haya dejado sirviendo sola? ¡Dile que me ayude! Y respondiendo Jesús, le dijo: Marta, Marta, eres muy cuidadosa y preocupada por muchas cosas. Pero sólo una cosa es necesaria. María ha escogido la mejor, y nadie se la quitará.",
  reference: "Lucas 10: 38-42"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de Marta, abrumados por la multitud de tareas y responsabilidades. Este pasaje nos invita a reflexionar sobre la importancia de establecer prioridades claras. María eligió escuchar a Jesús, lo que representa la sabiduría, la visión y el propósito superior en el liderazgo. Un líder efectivo no solo se enfoca en la ejecución, sino también en la dirección y el discernimiento. Tomarse el tiempo para escuchar, aprender y conectar con el propósito divino puede ser la 'única cosa necesaria' que impulse un negocio hacia un éxito significativo y duradero, más allá de la mera productividad.",
  quote: {
  text: "Para ti, ciertamente llevarás a cabo el propósito de Dios, sin importar cómo actúes, pero hace una diferencia para ti si sirves como Judas o como Juan.",
  author: "C.S. Lewis"
  },
  challenge: "Identifica una tarea en tu negocio que te consume mucho tiempo pero que no contribuye directamente a tu visión o propósito principal. Delega o elimina esa tarea y dedica ese tiempo a una actividad que te permita escuchar, reflexionar o planificar estratégicamente para el crecimiento de tu empresa.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 46,
  month: "Enero",
  monthId: 1,
  title: "La Visión Divina en el Emprendimiento",
  verse: {
  text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
  reference: "Jeremías 29: 11"
  },
  reflection: "Este versículo nos recuerda que Dios tiene un plan y un propósito para nuestras vidas, incluyendo nuestra trayectoria profesional y empresarial. Como líderes cristianos, nuestra visión no debe limitarse a metas terrenales, sino que debe alinearse con el propósito eterno de Dios. Al buscar Su dirección, podemos desarrollar estrategias de negocio que no solo generen éxito financiero, sino que también impacten positivamente a la sociedad y glorifiquen Su nombre. La fe en Su plan nos da la confianza para perseverar a través de los desafíos, sabiendo que Él nos guiará hacia un futuro de esperanza y prosperidad, tanto espiritual como material. Es crucial integrar nuestra fe con nuestras decisiones empresariales, permitiendo que los principios bíblicos moldeen nuestra ética de trabajo, nuestras relaciones y nuestra visión a largo plazo.",
  quote: {
  text: "Los obreros cristianos fracasan porque ubican su deseo de santidad personal por encima del deseo de conocer a Dios",
  author: "Oswald Chambers"
  },
  challenge: "Dedica tiempo esta semana a orar y reflexionar sobre la visión de tu negocio. ¿Está alineada con los principios de Dios? Identifica una acción concreta que puedas tomar para integrar más tu fe en tus decisiones empresariales, ya sea en la forma en que tratas a tus empleados, en tus prácticas comerciales o en cómo sirves a tu comunidad. Busca conocer más a Dios para que tu santidad personal sea un resultado natural de esa relación y no un fin en sí mismo.",
  song: {
  title: "Gracia Sublime Es",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=DuYipn5C-Gw",
  spotifyUrl: "https://open.spotify.com/track/5fx0pSrRtDq2u7qlaly8fC"
  }
},
  {
  day: 47,
  month: "Febrero",
  monthId: 2,
  title: "La Fortaleza en la Debilidad Empresarial",
  verse: {
  text: "Todo lo puedo en Cristo que me fortalece.",
  reference: "Filipenses 4: 13"
  },
  reflection: "En el camino del emprendimiento y el liderazgo, a menudo nos enfrentamos a desafíos que parecen insuperables. Momentos de debilidad, incertidumbre o fracaso pueden minar nuestra confianza. Sin embargo, Filipenses 4: 13 nos recuerda una verdad poderosa: nuestra fuerza no reside en nuestras propias capacidades limitadas, sino en la fortaleza que Cristo nos proporciona. Para el líder cristiano, esto significa que incluso en las situaciones empresariales más adversas, podemos encontrar la resiliencia y la sabiduría necesarias para perseverar. No se trata de una negación de la realidad o de una actitud pasiva, sino de una dependencia activa en Dios, buscando su guía y permitiendo que su poder se manifieste a través de nuestras debilidades. Esta perspectiva nos permite abordar los problemas con una fe inquebrantable y una determinación renovada, sabiendo que no estamos solos en la batalla.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área de tu negocio donde te sientas débil o inseguro. En lugar de evitarla, busca activamente la guía divina y desarrolla un plan de acción para fortalecerla, confiando en que puedes superar este desafío con la ayuda de Dios. Comparte tu plan con un mentor o colega de confianza para obtener perspectiva y apoyo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=5pAe2LKKyxg",
  spotifyUrl: "https://open.spotify.com/intl-es/track/10AHJmPp1y86W3hYg5fjeH"
  }
},
  {
  day: 48,
  month: "Febrero",
  monthId: 2,
  title: "La Diligencia en la Planificación y el Trabajo Duro",
  verse: {
  text: "Los planes bien pensados y el arduo trabajo llevan a la prosperidad; la prisa y la pereza, a la pobreza.",
  reference: "Proverbios 21: 5 (NTV)"
  },
  reflection: "Este proverbio nos recuerda la importancia de la planificación estratégica y la ejecución diligente en el ámbito empresarial. No basta con tener grandes ideas o planes ambiciosos; la verdadera prosperidad y el éxito sostenible provienen de la combinación de una visión clara y el esfuerzo constante. En el liderazgo cristiano, esto se traduce en administrar los recursos y talentos que Dios nos ha dado con sabiduría y responsabilidad. La prisa, a menudo impulsada por la impaciencia o la falta de fe, puede llevarnos a tomar decisiones precipitadas, mientras que la pereza nos impide alcanzar nuestro máximo potencial. Un líder de impacto entiende que cada paso, por pequeño que sea, contribuye a la construcción de un legado duradero, fundamentado en principios bíblicos de trabajo arduo y disciplina.",
  quote: {
  text: "Los planes son solo buenas intenciones a menos que degeneren inmediatamente en trabajo duro.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa uno de tus planes de negocio o proyectos actuales. Identifica las acciones concretas que necesitas tomar esta semana para transformar esas \"buenas intenciones\" en \"trabajo duro\" y establece un cronograma para su ejecución diligente. Comprométete a seguirlo, confiando en que la diligencia te acercará a la prosperidad que Dios tiene para tu negocio.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1SNJTouyG6mRfHYk9Kp3W8"
  }
},
  {
  day: 49,
  month: "Febrero",
  monthId: 2,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, la motivación detrás de nuestro trabajo es tan crucial como el trabajo mismo. Colosenses 3: 23 nos llama a realizar cada tarea con un corazón íntegro, como si estuviéramos sirviendo directamente a Dios. Esto transforma la perspectiva de nuestro negocio, elevándolo de una mera búsqueda de ganancias a una plataforma para honrar al Creador. Cuando los líderes y emprendedores adoptan esta mentalidad, no solo buscan la excelencia en sus productos o servicios, sino que también cultivan un ambiente de trabajo donde la integridad, la dedicación y el propósito son valores fundamentales. Esta aproximación no solo mejora la calidad del trabajo, sino que también inspira a los equipos y construye un legado duradero que trasciende lo material.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Reflexiona sobre cómo puedes abordarlo con una mentalidad de servicio a Dios, buscando la excelencia y la mejora continua. Luego, implementa al menos una acción concreta esta semana para elevar la calidad o el propósito de esa tarea, y observa cómo cambia tu perspectiva y la de tu equipo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t48x7xQ60",
  spotifyUrl: "https://open.spotify.com/track/0X2l60831627702672"
  },
  movie: {
    title: "The Intern (Pasante de Moda)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=ZU3Xban0Y6A",
    description:
      "Un viudo de 70 años se convierte en pasante senior de una startup de moda online, demostrando que la experiencia, la sabiduría y el liderazgo servicial pueden transformar una organización y las vidas de quienes la integran.",
  },
},
  {
  day: 50,
  month: "Enero",
  monthId: 1,
  title: "La Visión Guiada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos invita a ir más allá de la mera estrategia humana. Al encomendar nuestras obras al Señor, no solo buscamos su bendición, sino que alineamos nuestros planes con su propósito divino. Esto no significa pasividad, sino una colaboración activa donde nuestra visión y esfuerzos son guiados por su sabiduría. Cuando nuestros pensamientos son afirmados por Dios, obtenemos claridad, dirección y una paz que trasciende las incertidumbres del mercado. Esta conexión profunda entre la fe y la gestión nos permite construir negocios con un legado duradero, no solo en términos de éxito material, sino de impacto espiritual y social. Es un recordatorio de que cada decisión, cada proyecto y cada meta empresarial puede ser un acto de adoración y servicio.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes y objetivos empresariales. Identifica un área clave donde sientas que necesitas mayor claridad o dirección. Luego, en oración, encomienda específicamente esa área a Dios, pidiéndole que afirme tus pensamientos y te revele su voluntad. Busca activamente cómo puedes integrar principios bíblicos en la toma de decisiones y en la ejecución de tus tareas diarias.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=h1_x791XQ6g",
  spotifyUrl: "https://open.spotify.com/track/4y00J0z8o9g0b29J10b00L"
  }
},
  {
  day: 51,
  month: "Febrero",
  monthId: 2,
  title: "Excelencia en el Servicio: Como para el Señor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una meta, sino un testimonio de nuestro compromiso. Colosenses 3: 23 nos insta a realizar cada tarea con una dedicación que trasciende las expectativas humanas, viéndola como un servicio directo a Dios. Esto transforma la perspectiva del trabajo, elevándolo de una simple transacción a una oportunidad para honrar al Creador. Un líder cristiano entiende que cada producto, servicio o decisión empresarial debe reflejar integridad, calidad y un propósito superior. Al operar con esta mentalidad, no solo construimos negocios exitosos, sino que también cultivamos un legado de impacto que glorifica a Dios y beneficia a la sociedad, inspirando a otros a buscar la misma excelencia y propósito en sus propias esferas de influencia.",
  quote: {
  text: "Empieza con el fin en mente.",
  author: "Stephen Covey"
  },
  challenge: "Identifica un área clave en tu negocio o liderazgo donde puedas elevar el estándar de excelencia esta semana. Desarrolla un plan concreto para implementar mejoras, asegurándote de que cada paso refleje un compromiso de hacer las cosas como para el Señor, no solo para obtener ganancias o reconocimiento humano.",
  song: {
  title: "Dios de Pactos",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s0b_x8y4M-k",
  spotifyUrl: "https://open.spotify.com/track/6211z0q03tX9l3f2j7n11G"
  }
},
  {
  day: 52,
  month: "Febrero",
  monthId: 2,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia y el propósito son pilares fundamentales. Colosenses 3: 23-24 nos insta a realizar cada tarea con dedicación plena, como si nuestro esfuerzo fuera directamente para Dios. Esta perspectiva transforma la naturaleza de nuestro trabajo, elevándolo de una mera obligación a una ofrenda. No se trata solo de cumplir objetivos, sino de hacerlos con integridad, pasión y un estándar de calidad que refleje nuestro servicio a un propósito mayor. La distinción de Peter Drucker entre 'hacer las cosas bien' (gestión) y 'hacer las cosas correctas' (liderazgo) cobra un significado profundo aquí. Un líder cristiano no solo busca la eficiencia, sino que también se asegura de que sus acciones y las de su empresa estén alineadas con valores éticos y un impacto positivo, sirviendo a Dios en cada decisión y acción.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus responsabilidades clave en el negocio esta semana. ¿La estás realizando con excelencia, como para el Señor? Identifica una acción concreta para mejorar la calidad o el impacto de esa tarea, asegurándote de que no solo se haga bien, sino que sea la cosa correcta a hacer para tu propósito y valores.",
  song: {
  title: "Grande y Fuerte",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=L99xtEJpqVQ",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2YJ8AzNQjkEnX1TH33E46g"
  }
},
  {
  day: 53,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clara: Fundamento del Liderazgo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión. En el ámbito empresarial, una visión clara no es solo una declaración inspiradora, sino el cimiento sobre el cual se construye todo el liderazgo y la estrategia. Sin una dirección definida, los equipos pueden perder el enfoque, los recursos se dispersan y la empresa corre el riesgo de desviarse de sus objetivos. Un líder cristiano en los negocios debe buscar una visión que no solo impulse el éxito material, sino que también refleje valores y propósitos trascendentes. Esta visión debe ser comunicada con pasión y convicción, inspirando a cada miembro del equipo a alinear sus esfuerzos hacia un fin común, creando así un legado de impacto duradero.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y se sientan parte de ella. Comunícala de nuevo con pasión y busca formas prácticas de alinear las acciones diarias con esa visión.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=5pAe2LKKyxg",
  spotifyUrl: "https://open.spotify.com/intl-es/track/10AHJmPp1y86W3hYg5fjeH"
  }
},
  {
  day: 54,
  month: "febrero",
  monthId: 2,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, la excelencia a menudo se mide por resultados y reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a elevar nuestra perspectiva. Al entender que nuestro trabajo es una ofrenda a Dios, cada tarea, cada decisión y cada interacción adquiere un significado trascendente. Esta mentalidad no solo impulsa una ética de trabajo superior, sino que también fomenta la integridad y la perseverancia, incluso cuando los desafíos son grandes o el reconocimiento humano es escaso. Los líderes cristianos están llamados a ser mayordomos fieles, administrando sus negocios y equipos con una dedicación que honra a su Creador, sabiendo que su verdadera recompensa viene de arriba.",
  quote: {
  text: "Un líder es aquel que conoce el camino, va por el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio y pregúntate: ¿Cómo puedo realizar esto con una excelencia que honre a Dios? Identifica un área donde puedas mejorar tu dedicación o integridad, y comprométete a implementarlo esta semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s02_f9_4j30",
  spotifyUrl: "https://open.spotify.com/track/4j9x4r1x0o1o0q1o0q1o0q"
  }
},
  {
  day: 55,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Afirmada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación y la visión son cruciales. Sin embargo, Proverbios 16: 3 nos invita a ir más allá de la mera estrategia humana, animándonos a encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y confianza en la guía divina. Para el empresario cristiano, cada proyecto, cada decisión y cada meta debe ser presentada ante Dios en oración. Al hacerlo, no solo buscamos su aprobación, sino que permitimos que sus propósitos moldeen y afirmen nuestros pensamientos y planes. Esta entrega nos brinda una perspectiva celestial, transformando la incertidumbre en una convicción sólida y la ansiedad en paz, sabiendo que nuestros esfuerzos están alineados con un propósito mayor y eterno.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un proyecto o decisión importante en tu negocio esta semana. Dedica tiempo a orar específicamente por ello, encomendándolo a Dios. Luego, revisa tus planes y estrategias, buscando formas en que puedas alinear tus acciones con principios bíblicos y la guía del Espíritu Santo.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=wz-k4z15J70",
  spotifyUrl: "https://open.spotify.com/track/30g03g688j94e094767g12"
  }
},
  {
  day: 56,
  month: "Febrero",
  monthId: 2,
  title: "La Diligencia del Líder Visionario",
  verse: {
  text: "La mano negligente empobrece; Mas la mano de los diligentes enriquece.",
  reference: "Proverbios 10: 4"
  },
  reflection: "Proverbios 10: 4 nos presenta una verdad fundamental para el liderazgo empresarial cristiano: la diligencia es la clave para la prosperidad y el impacto. Un líder negligente no solo se estanca, sino que también arrastra a su equipo y a su visión. La diligencia, por otro lado, no es solo trabajar duro, sino trabajar con sabiduría, propósito y fe. Implica una gestión eficaz del tiempo, una búsqueda constante de conocimiento y una ejecución impecable. Para el empresario cristiano, la diligencia es una expresión de mayordomía, reconociendo que los talentos y recursos provienen de Dios. Es a través de un esfuerzo constante y enfocado que se construyen legados duraderos y se honra a Dios en el mercado. La prosperidad que resulta de la diligencia no es un fin en sí misma, sino un medio para bendecir a otros y expandir el Reino.",
  quote: {
  text: "Un líder es aquel que conoce el camino, hace el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde la negligencia ha frenado el progreso. Desarrolla un plan de acción concreto para aplicar diligencia en esa área durante la próxima semana, delegando tareas si es necesario y monitoreando el avance. Evalúa cómo tu ejemplo de diligencia impacta a tu equipo y busca oportunidades para guiarles en este principio.",
  song: {
  title: "En La Cruz",
  artist: "Propósito Music",
  youtubeUrl: "https://www.youtube.com/watch?v=QmuHMNGMTVw",
  spotifyUrl: "https://open.spotify.com/track/04kPT7u8RBDtUwh12UG5uF"
  },
  movie: {
    title: "Hidden Figures (Talentos Ocultos)",
    platform: "Disney+",
    youtubeUrl: "https://www.youtube.com/watch?v=5wfrDhgUMGI",
    description:
      "La historia real de tres mujeres afroamericanas matemáticas en la NASA que superaron la discriminación racial y de género para contribuir al programa espacial estadounidense, demostrando que el talento y la excelencia trascienden cualquier barrera.",
  },
},
  {
  day: 57,
  month: "Febrero",
  monthId: 2,
  title: "Liderazgo con Propósito Divino: Haciéndolo para el Señor",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en resultados, ganancias y reconocimiento humano. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: realizar cada tarea con excelencia y dedicación, como si fuera directamente para Dios. Esta mentalidad transforma el trabajo de una simple obligación a un acto de adoración. Un líder cristiano entiende que su negocio no es solo una fuente de ingresos, sino una plataforma para glorificar a Dios, servir a los demás y manifestar principios divinos en el mercado. Al operar con esta convicción, la motivación trasciende lo terrenal, impulsando la integridad, la ética y un compromiso inquebrantable con la calidad y el servicio, sabiendo que la verdadera recompensa viene de lo alto.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una decisión importante que debas tomar en tu negocio esta semana. Antes de actuar, ora y busca la dirección de Dios, asegurándote de que tu decisión no solo sea 'hacer las cosas bien' (gestión eficiente), sino 'hacer las cosas correctas' (liderazgo con propósito divino y ético), reflejando los valores del Reino en tu esfera de influencia.",
  song: {
  title: "Gracia Sublime Es",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=0pOVNIsyIXM",
  spotifyUrl: "https://open.spotify.com/intl-es/track/5y5o4CayTLb3nMtrGkGko6"
  }
},
  {
  day: 58,
  month: "Enero",
  monthId: 1,
  title: "Trabajo con Propósito: Un Legado para el Señor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en resultados, ganancias y reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: trabajar con un propósito trascendente. Cuando dedicamos nuestro esfuerzo, creatividad y diligencia a Dios, cada tarea, por pequeña que parezca, adquiere un significado eterno. Este enfoque no solo eleva la calidad de nuestro trabajo, sino que también transforma nuestra motivación, pasando de la búsqueda de la aprobación humana a la satisfacción de honrar a nuestro Creador. Un líder cristiano entiende que su negocio es una plataforma para servir a Dios y a su prójimo, dejando un legado que va más allá de lo material.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea en tu negocio que consideres rutinaria o poco inspiradora. Realízala hoy con una actitud de excelencia, como si la estuvieras haciendo directamente para Dios. Observa cómo cambia tu perspectiva y el resultado de tu trabajo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s3w2y5t5-i0",
  spotifyUrl: "https://open.spotify.com/track/4j9X0o54z2g9l2y2z5z5z5"
  }
},
  {
  day: 59,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clarificada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la claridad de visión es fundamental. A menudo, nos encontramos con desafíos y decisiones que nublan nuestro camino. Proverbios 16: 3 nos invita a un principio poderoso: encomendar nuestras obras al Señor. Esto no significa pasividad, sino una entrega activa de nuestros planes y esfuerzos a la guía divina. Cuando alineamos nuestras estrategias de negocio con los principios de Dios, nuestros pensamientos y, por ende, nuestras decisiones, adquieren una firmeza y dirección que trascienden la lógica puramente humana. Esta fe nos proporciona una perspectiva superior, permitiéndonos ver más allá de las circunstancias inmediatas y construir un legado de impacto con propósito y resiliencia.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y a la reflexión, pidiendo a Dios que clarifique tu visión y afirme tus planes de negocio. Escribe tres áreas clave donde necesitas mayor claridad y busca activamente la guía divina en ellas.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=0_20j96y1gA",
  spotifyUrl: "https://open.spotify.com/track/4j98v77b7g92s8e7f1g2cW"
  }
},
  {
  day: 60,
  month: "Febrero",
  monthId: 2,
  title: "La Visión Clara: Fundamento del Liderazgo Impactante",
  verse: {
  text: "El liderazgo no es un rango ni un privilegio, es una responsabilidad. Es la capacidad de influir en otros para lograr un objetivo común.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión, no solo en la vida espiritual, sino también en el ámbito empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y sin rumbo fijo. En el mundo de los negocios, la visión proporciona dirección, propósito y un marco para la toma de decisiones. Es la fuerza impulsora que inspira a los equipos, fomenta la innovación y permite superar los desafíos. Para el empresario cristiano, esta visión debe estar arraigada en principios bíblicos, buscando no solo el éxito material, sino también un impacto positivo en la sociedad y la gloria de Dios. Desarrollar y comunicar una visión convincente es el primer paso para construir un legado duradero y significativo.",
  quote: {
  text: "El liderazgo no es un rango ni un privilegio, es una responsabilidad. Es la capacidad de influir en otros para lograr un objetivo común.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a reevaluar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y esté alineada con tus valores. Luego, compártela con tu equipo de manera que todos comprendan su importancia y cómo sus roles contribuyen a alcanzarla.",
  song: {
  title: "Al Estar Aquí",
  artist: "Danilo Montero",
  youtubeUrl: "https://www.youtube.com/watch?v=3DKAFkoDrQ0",
  spotifyUrl: "https://open.spotify.com/track/0UG4ArCCfVi8HkhBJBV05x"
  }
},
  {
  day: 61,
  month: "Marzo",
  monthId: 3,
  title: "La Bendición que Trae Riquezas",
  verse: {
  text: "La bendición del SEÑOR trae riquezas, y nada se gana con preocuparse.",
  reference: "Proverbios 10: 22"
  },
  reflection: "Este proverbio nos recuerda que la verdadera prosperidad y las riquezas duraderas provienen de la bendición de Dios, no solo del esfuerzo humano o la ansiedad. En el ámbito empresarial, esto significa que, si bien la planificación estratégica y el trabajo arduo son esenciales, la confianza en la provisión divina es fundamental. Un líder cristiano entiende que su negocio no solo busca ganancias, sino que también es un vehículo para glorificar a Dios y bendecir a otros. La preocupación excesiva puede nublar el juicio y desviar el enfoque de los principios divinos. Al confiar en la bendición del Señor, los empresarios pueden operar con paz, sabiduría y una perspectiva eterna, sabiendo que Dios es el proveedor supremo y que su favor es la fuente de toda verdadera riqueza y éxito.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área de tu negocio donde la preocupación te ha estado dominando. Dedica tiempo a orar y entregar esa preocupación a Dios, pidiéndole sabiduría y dirección. Luego, toma una acción concreta basada en la fe y en los principios bíblicos, en lugar de la ansiedad, para abordar esa situación. Observa cómo tu perspectiva y los resultados comienzan a cambiar.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y3_j7z5-z1k",
  spotifyUrl: "https://open.spotify.com/track/3030303030303030303030303030303030303030303030303030303030303030"
  }
},
  {
  day: 62,
  month: "Marzo",
  monthId: 3,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación es la piedra angular del éxito. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las estrategias de mercado y los objetivos financieros. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, lo que significa alinear nuestros planes y esfuerzos con Su voluntad. Esto no exime la necesidad de una planificación diligente, sino que la eleva. Al buscar la dirección divina, nuestros pensamientos y decisiones empresariales adquieren una base sólida y un propósito trascendente. La afirmación de nuestros pensamientos no es una garantía de ausencia de desafíos, sino la seguridad de que, incluso en la adversidad, nuestros cimientos son firmes en Él.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Esta semana, dedica tiempo a revisar tus planes de negocio o proyectos actuales. Identifica al menos una área donde puedas integrar más explícitamente principios bíblicos o buscar la dirección de Dios. Presenta tus planes en oración, pidiendo sabiduría y alineación con Su propósito, y luego actúa con diligencia y fe en la ejecución.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=e_047t7_8lQ",
  spotifyUrl: "https://open.spotify.com/track/62259z610080zQj1122334"
  }
},
  {
  day: 63,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara en la Gestión Estratégica",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión. En el ámbito empresarial, una visión clara no es solo un ideal inspirador, sino una brújula estratégica que guía cada decisión y acción. Sin una dirección definida, los equipos pueden perder el enfoque, los recursos se dispersan y la organización se vuelve vulnerable a la ineficiencia y la desmotivación. Un líder cristiano debe cultivar una visión que no solo busque el éxito material, sino que también refleje valores éticos y un propósito trascendente. Esta visión debe ser comunicada con pasión y coherencia, inspirando a todos los colaboradores a alinear sus esfuerzos hacia un objetivo común, asegurando así un legado de impacto duradero y significativo.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es lo suficientemente clara, inspiradora y comunicada eficazmente a tu equipo? Identifica al menos tres acciones concretas para fortalecer la visión y asegurar que todos la comprendan y la vivan en su trabajo diario.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0t123456789",
  spotifyUrl: "https://open.spotify.com/track/1t234567890"
  },
  movie: {
  title: "War Room",
  platform: "Amazon Prime Video",
  description: "Una pareja en crisis matrimonial descubre el poder de la oración y la estrategia espiritual para transformar sus vidas y su familia, con lecciones aplicables a la perseverancia y la planificación en cualquier ámbito."
  }
},
  {
  day: 64,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara del Líder",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Un líder sin una visión clara es como un capitán sin brújula, navegando sin rumbo fijo. Proverbios 29: 18 nos recuerda que la falta de visión lleva al desorden y a la pérdida de propósito. En el ámbito empresarial, esto se traduce en equipos desmotivados, estrategias inconsistentes y, en última instancia, fracaso. Un líder cristiano debe buscar la visión de Dios para su negocio, comunicarla con pasión y asegurarse de que cada miembro del equipo la entienda y la internalice. Esta visión no solo debe ser inspiradora, sino también práctica y alineada con los valores del reino, impulsando la innovación y el crecimiento sostenible.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, concisa y que inspire a tu equipo. Luego, comunica esta visión a todos los involucrados, pidiendo retroalimentación y asegurándote de que todos comprendan su papel en alcanzarla.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0MXSa7v7fm7QGs5JssOu67"
  }
},
  {
  day: 65,
  month: "marzo",
  monthId: 3,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El verdadero liderazgo se mide por la capacidad de influir, inspirar y conectar con otros para lograr un propósito común.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos advierte que sin una visión clara, la gente se desorienta. En el ámbito empresarial, esto se traduce en falta de dirección, decisiones inconsistentes y una cultura organizacional débil. Un líder cristiano debe no solo tener una visión inspirada por Dios, sino también comunicarla eficazmente a su equipo. Esta visión debe ser lo suficientemente robusta para soportar los desafíos del mercado y lo suficientemente flexible para adaptarse a los cambios. Al igual que un pastor guía a su rebaño, un empresario debe liderar con una visión que motive, alinee y empodere a sus colaboradores, asegurando que cada paso contribuya al propósito mayor de la organización y al impacto positivo en la sociedad.",
  quote: {
  text: "El verdadero liderazgo se mide por la capacidad de influir, inspirar y conectar con otros para lograr un propósito común.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y articular claramente la visión de tu empresa o proyecto. Compártela con tu equipo y asegúrate de que todos comprendan cómo su trabajo contribuye a esa visión.",
  song: {
  title: "La Visión",
  artist: "En Espíritu y en Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=g92931_426s",
  spotifyUrl: "https://open.spotify.com/track/622h7f00X3t618z14y6s7D"
  }
},
  {
  day: 66,
  month: "marzo",
  monthId: 3,
  title: "La Diligencia en la Planificación y el Trabajo",
  verse: {
  text: "Los planes bien pensados y el arduo trabajo llevan a la prosperidad, pero los atajos tomados a la carrera conducen a la pobreza.",
  reference: "Proverbios 21: 5 (NTV)"
  },
  reflection: "En el mundo empresarial, la visión y la estrategia son fundamentales, pero Proverbios 21: 5 nos recuerda que estas deben ir acompañadas de una ejecución diligente. Un plan brillante sin trabajo duro es solo una aspiración. Los líderes cristianos están llamados a ser mayordomos fieles de los recursos y talentos que Dios les ha dado, lo que implica una planificación cuidadosa y un esfuerzo constante. Evitar los atajos no es solo una cuestión de ética, sino también de sabiduría, ya que la prosperidad duradera se construye sobre cimientos sólidos de integridad y perseverancia. La fe en Dios no exime al empresario de la responsabilidad de trabajar con excelencia y dedicación, confiando en que Él bendecirá el esfuerzo honesto y bien dirigido.",
  quote: {
  text: "Los planes son solamente buenas intenciones a menos que degeneren inmediatamente en trabajo duro.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto o iniciativa actual en tu negocio. ¿Has dedicado suficiente tiempo a la planificación detallada? ¿Estás comprometido con el trabajo arduo necesario para su ejecución, o estás buscando atajos? Identifica un área donde puedas aplicar mayor diligencia en la planificación y el esfuerzo, y comprométete a implementarlo esta semana.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong United",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 67,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión, tanto en la vida personal como en el ámbito empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y sin rumbo fijo. En el contexto de los negocios, la visión no es solo un sueño ambicioso, sino una declaración estratégica que guía cada decisión, cada inversión y cada esfuerzo del equipo. Es el faro que ilumina el camino en tiempos de incertidumbre y la fuerza que une a los colaboradores hacia un objetivo común. Mantener la visión viva y comunicarla constantemente es una tarea esencial para el líder cristiano, asegurando que la empresa no solo persiga el éxito material, sino que también cumpla con un propósito trascendente y ético.",
  quote: {
  text: "La visión sin acción es un sueño. La acción sin visión es una pesadilla.",
  author: "Ken Blanchard"
  },
  challenge: "Dedica tiempo esta semana a revisar y clarificar la visión de tu negocio o equipo. Asegúrate de que sea inspiradora, medible y comunicada eficazmente a todos tus colaboradores. Invita a tu equipo a reflexionar sobre cómo sus roles contribuyen a esa visión y busca maneras de fortalecer su compromiso con ella.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0_0_0_0_0",
  spotifyUrl: "https://open.spotify.com/track/0_0_0_0_0"
  }
},
  {
  day: 68,
  month: "marzo",
  monthId: 3,
  title: "Confía tus planes a Dios: La base del éxito empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de depender únicamente de nuestra propia sabiduría y esfuerzo. Sin embargo, Proverbios 16: 3 nos ofrece una perspectiva divina: al encomendar nuestras obras al Señor, nuestros planes se afirman. Esto no significa pasividad, sino una profunda dependencia y colaboración con Dios en cada decisión. Para el empresario cristiano, esto implica buscar la dirección divina en la estrategia, la gestión de equipos, las finanzas y la innovación. Cuando nuestros pensamientos y proyectos están alineados con Su voluntad, no solo encontramos paz, sino que también experimentamos una solidez y un propósito que trascienden el éxito meramente terrenal. Es un recordatorio de que el verdadero legado se construye sobre cimientos eternos.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a orar específicamente por tus planes de negocio y decisiones estratégicas, buscando la dirección de Dios en cada paso. Anota las ideas o confirmaciones que recibas y considera cómo puedes integrarlas en tu gestión diaria.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=0h6154w_l5w",
  spotifyUrl: "https://open.spotify.com/track/303lQ38861jJ6e81v9s94g"
  }
},
  {
  day: 69,
  month: "Marzo",
  monthId: 3,
  title: "Principios Atemporales y la Verdadera Innovación",
  verse: {
  text: "Lo que ya ha acontecido volverá a acontecer; lo que ya se ha hecho se volverá a hacer. ¡No hay nada nuevo bajo el sol! Hay quien llega a decir: «¡Mira que esto sí es una novedad!». Pero eso ya existía desde siempre, entre aquellos que nos precedieron.",
  reference: "Eclesiastés 1: 9-10 (NVI)"
  },
  reflection: "El sabio Salomón nos recuerda que, aunque el mundo cambie constantemente, los principios fundamentales permanecen. En el ámbito empresarial, esto significa que las 'nuevas' tendencias a menudo son reempaques de verdades antiguas. La verdadera innovación no siempre radica en inventar algo completamente nuevo, sino en aplicar principios atemporales de una manera fresca y efectiva. Como líderes, debemos discernir entre la novedad superficial y la sabiduría perdurable. La eficiencia es crucial, pero la efectividad, es decir, hacer las cosas correctas, es lo que realmente impulsa el éxito sostenible. Reconocer que no hay 'nada nuevo bajo el sol' nos libera para enfocarnos en la maestría de lo esencial y en la aplicación creativa de lo que ya funciona, en lugar de perseguir cada moda pasajera.",
  quote: {
  text: "La eficiencia es hacer las cosas bien; la efectividad es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un 'nuevo' desafío o tendencia en tu negocio. Reflexiona sobre cómo los principios fundamentales de liderazgo, gestión o servicio al cliente pueden aplicarse de manera innovadora para abordarlo. Prioriza la efectividad sobre la mera eficiencia en tu solución.",
  song: {
  title: "Milagro Creativo",
  artist: "Daniel Calveti",
  youtubeUrl: "https://www.youtube.com/watch?v=ByT_j2ADaCQ",
  spotifyUrl: "https://open.spotify.com/track/6yedl2SHijIsNr80px4sni"
  }
},
  {
  day: 70,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o emprendimiento. Proverbios 29: 18 nos advierte que sin una visión clara, hay desorden y falta de dirección. En el ámbito empresarial cristiano, la visión no solo se refiere a metas financieras, sino también a un propósito superior que honre a Dios y sirva a la comunidad. Un líder cristiano debe buscar la dirección divina para establecer una visión que inspire a su equipo, alinee sus esfuerzos y les permita navegar los desafíos con fe y determinación. Esta visión debe ser comunicada constantemente, arraigada en valores bíblicos y lo suficientemente robusta para soportar las pruebas del mercado, asegurando que cada paso contribuya a un legado de impacto duradero y significativo.",
  quote: {
  text: "Empieza con el fin en mente.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y esté alineada con tus valores cristianos. Comunícala a tu equipo y busca su retroalimentación para fortalecerla.",
  song: {
  title: "Visión",
  artist: "Un Corazón",
  youtubeUrl: "https://www.youtube.com/watch?v=s-0q_j-2Y7c",
  spotifyUrl: "https://open.spotify.com/track/5sQ9g3h10s6t9X7l8Q7m3o"
  },
  movie: {
  title: "El Fundador (The Founder)",
  platform: "Netflix",
  description: "La historia de Ray Kroc, un vendedor que transformó la idea de los hermanos McDonald en una de las cadenas de restaurantes más grandes del mundo, mostrando la importancia de la visión y la perseverancia en los negocios."
  }
},
  {
  day: 71,
  month: "Marzo",
  monthId: 3,
  title: "Liderazgo de Servicio: El Verdadero Impacto",
  verse: {
  text: "Porque el Hijo del Hombre no vino para ser servido, sino para servir y para dar su vida en rescate por muchos.",
  reference: "Marcos 10: 45"
  },
  reflection: "En el mundo empresarial, a menudo se asocia el liderazgo con el poder y la autoridad. Sin embargo, la perspectiva cristiana nos invita a redefinir este concepto. Marcos 10: 45 nos presenta a Jesús como el máximo ejemplo de liderazgo de servicio, donde el propósito principal no es ser atendido, sino atender a los demás. Para el empresario y líder cristiano, esto significa priorizar las necesidades de su equipo, clientes y comunidad. Un líder servidor busca empoderar, desarrollar y apoyar a quienes le rodean, creando un ambiente donde todos pueden prosperar. Este enfoque no solo genera lealtad y compromiso, sino que también produce un impacto duradero y significativo, reflejando los valores del Reino en el ámbito de los negocios.",
  quote: {
  text: "El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo.",
  author: "Simon Sinek"
  },
  challenge: "Identifica una situación en tu negocio o equipo donde puedas aplicar el principio de liderazgo de servicio. ¿Cómo puedes poner las necesidades de tus colaboradores o clientes por encima de las tuyas? Implementa una acción concreta esta semana que demuestre tu compromiso con el servicio y evalúa el impacto que genera.",
  song: {
  title: "Como en el Cielo (Here As In Heaven)",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=uDb5qFQblmg",
  spotifyUrl: "https://open.spotify.com/track/7gR2K9p8v5BB0uGLCcVimW"
  }
},
  {
  day: 72,
  month: "Marzo",
  monthId: 3,
  title: "La Excelencia del Obrero Aprobado",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "El versículo de 2 Timoteo 2: 15 nos insta a presentarnos como obreros aprobados, manejando con precisión la palabra de verdad. En el ámbito empresarial, esto se traduce en la búsqueda constante de la excelencia y la integridad. Un líder cristiano no solo busca el éxito material, sino que también se esfuerza por operar con ética, transparencia y un compromiso inquebrantable con la verdad en todas sus interacciones. La diligencia en el trabajo y la honestidad en la comunicación son pilares que construyen una reputación sólida y una empresa duradera. Al igual que un obrero que no tiene de qué avergonzarse, el empresario cristiano debe asegurarse de que sus prácticas y productos reflejen los más altos estándares de calidad y moralidad, honrando a Dios en cada decisión y acción.",
  quote: {
  text: "Los planes son solamente buenas intenciones a menos que degeneren inmediatamente en trabajo duro.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde puedas aplicar el principio de \"usar bien la palabra de verdad\". Puede ser en la comunicación con tus empleados, clientes o proveedores. Desarrolla un plan para mejorar la transparencia y la honestidad en esa área específica durante la próxima semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/47BagMbxr3VP3UFxUfO7I1"
  },
  movie: {
  title: "Overcomer",
  platform: "Netflix",
  description: "Cuando un reacio entrenador de baloncesto tiene que liderar el equipo de campo a través, descubre que su única corredora tiene una historia que desafiará las creencias de ambos."
  }
},
  {
  day: 73,
  month: "Marzo",
  monthId: 3,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Colosenses 3: 23-24 nos llama a una ética de trabajo excepcional, no motivada por el reconocimiento humano, sino por el servicio a Cristo. En el ámbito empresarial, esto se traduce en realizar cada tarea, desde la más mundana hasta la más estratégica, con excelencia y un propósito superior. Un líder cristiano entiende que su labor es una extensión de su adoración, impactando no solo los resultados financieros, sino también la cultura organizacional y la vida de sus colaboradores. Esta perspectiva eleva el trabajo de una mera transacción a una vocación sagrada, donde la integridad, la diligencia y la pasión se convierten en sellos distintivos. Al trabajar de esta manera, no solo honramos a Dios, sino que también construimos un legado de impacto duradero, caracterizado por la calidad y el servicio genuino.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Enfócate en realizarlo esta semana con una mentalidad de \"como para el Señor\", buscando la excelencia en cada detalle y reflexionando sobre cómo tu esfuerzo puede glorificar a Dios y beneficiar a otros. Evalúa el impacto de este cambio de perspectiva en tu motivación y en la calidad del resultado final.",
  song: {
  title: "Cuán Grande Es Dios",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=yhSQZHZZy08",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0fpW2x6Cd3cBgTGaU8TZKE"
  }
},
  {
  day: 74,
  month: "Marzo",
  monthId: 3,
  title: "La Sabiduría del Consejo en la Estrategia Empresarial",
  verse: {
  text: "Cuando falta el consejo, fracasan los planes; cuando abunda el consejo, prosperan.",
  reference: "Proverbios 15: 22"
  },
  reflection: "En el mundo empresarial, la toma de decisiones es constante y crítica. Proverbios 15: 22 nos recuerda la importancia vital de buscar consejo. Un líder cristiano no debe operar en aislamiento, sino rodearse de asesores sabios y experimentados. Esto no solo minimiza riesgos, sino que también enriquece la visión y la estrategia. La humildad para reconocer que no tenemos todas las respuestas y la disposición para escuchar diferentes perspectivas son cualidades esenciales. Al integrar diversas opiniones y la guía divina, los planes de negocio se fortalecen, llevando a una mayor prosperidad y un impacto más significativo en el reino de Dios y en el mercado.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área clave en tu negocio donde necesites tomar una decisión importante. Busca el consejo de al menos dos personas sabias y de confianza (mentores, colegas, pastores) antes de proceder. Reflexiona sobre sus aportes y cómo pueden influir en tu estrategia, buscando también la dirección de Dios en oración.",
  song: {
  title: "El Nombre De Jesús",
  artist: "Redimi2 ft. Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=bQNikeLRJQw",
  spotifyUrl: "https://open.spotify.com/track/1VeEjFbT1Unvcb8Od5o2jA"
  }
},
  {
  day: 75,
  month: "marzo",
  monthId: 3,
  title: "Encomienda tus Obras: Fundamentos de un Negocio con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil perder de vista el propósito superior. Proverbios 16: 3 nos invita a un principio fundamental: entregar nuestras labores al Señor. Esto no significa pasividad, sino una dependencia activa de la sabiduría divina en cada decisión y proyecto. Para el empresario cristiano, encomendar sus obras implica buscar la dirección de Dios en la estrategia, la ética, la gestión de equipos y la innovación. Cuando nuestros planes se alinean con los principios de Dios, nuestros pensamientos y, por ende, nuestras acciones, adquieren una solidez y una dirección que trascienden la lógica puramente humana. Esta conexión nos permite construir negocios no solo rentables, sino también significativos y con un impacto duradero.",
  quote: {
  text: "El liderazgo no es acerca de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio o proyecto actual donde sientas que necesitas dirección. Dedica tiempo a orar y reflexionar sobre cómo los principios bíblicos pueden guiar tu enfoque en esa área. Luego, toma una acción concreta basada en esa dirección, confiando en que tus planes serán afirmados.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1tX375t6a1g",
  spotifyUrl: "https://open.spotify.com/track/4j79qj8g5y322t31f50m5u"
  }
},
  {
  day: 76,
  month: "Marzo",
  monthId: 3,
  title: "La Diligencia como Semilla de Prosperidad",
  verse: {
  text: "El verdadero liderazgo empresarial inspira a otros a alcanzar su máximo potencial, transformando desafíos en oportunidades de crecimiento.",
  reference: "Proverbios 10: 4"
  },
  reflection: "La diligencia es una virtud fundamental en el ámbito empresarial y en la vida cristiana. Proverbios 10: 4 nos recuerda que la negligencia conduce a la escasez, mientras que el trabajo arduo y constante es la clave para la prosperidad. En el liderazgo, la diligencia se traduce en una gestión proactiva, atención al detalle y un compromiso inquebrantable con la excelencia. No se trata solo de trabajar muchas horas, sino de trabajar con sabiduría y propósito, invirtiendo tiempo y energía en tareas que generen valor real. Un líder diligente inspira a su equipo, establece un estándar de compromiso y construye una base sólida para el crecimiento sostenible, honrando a Dios con su esfuerzo y dedicación.",
  quote: {
  text: "El verdadero liderazgo empresarial inspira a otros a alcanzar su máximo potencial, transformando desafíos en oportunidades de crecimiento.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde has sido negligente. Desarrolla un plan de acción concreto para aplicar diligencia en esa área durante la próxima semana, estableciendo metas claras y medibles.",
  song: {
  title: "Me Sostendrá",
  artist: "Majo y Dan",
  youtubeUrl: "https://www.youtube.com/watch?v=fbX6HFv4jBo",
  spotifyUrl: "https://open.spotify.com/track/7zxuPZFuueFBEj8HkqQSSY"
  }
},
  {
  day: 77,
  month: "marzo",
  monthId: 3,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; pero el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este proverbio subraya la importancia de una visión clara, un principio fundamental tanto en la vida espiritual como en el ámbito empresarial. Un líder sin una dirección definida lleva a su equipo a la confusión y la ineficacia. En el contexto de los negocios, la visión no es solo un sueño, sino una declaración concisa del futuro deseado que guía cada decisión y acción. Permite a los empresarios y líderes cristianos alinear sus estrategias con un propósito superior, asegurando que sus esfuerzos no solo generen ganancias, sino que también impacten positivamente a la sociedad y reflejen los valores del Reino. Mantener la visión viva y comunicarla constantemente inspira a los colaboradores y fomenta un ambiente de disciplina y propósito.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Comunícala de manera efectiva y evalúa cómo cada tarea contribuye a alcanzarla.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cZ4m9f2L6z7z5z7z5z7z5"
  },
  movie: {
  title: "Un Sueño Posible (The Blind Side)",
  platform: "Netflix",
  description: "Basada en una historia real, esta película inspiradora muestra cómo la visión y el apoyo incondicional de una familia pueden transformar la vida de un joven sin hogar, llevándolo al éxito en el fútbol americano y en la vida."
  }
},
  {
  day: 78,
  month: "marzo",
  monthId: 3,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "El liderazgo efectivo se basa en principios, no en emociones. Sé proactivo, enfócate en lo importante y construye un legado duradero.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, la motivación detrás de nuestro trabajo a menudo se centra en el éxito, el reconocimiento o las ganancias. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Nos recuerda que cada tarea, cada decisión y cada interacción en nuestro negocio puede ser un acto de adoración. Al trabajar con un corazón sincero y con la mentalidad de que estamos sirviendo a Cristo, nuestra ética laboral se transforma. La excelencia se convierte en un estándar, la integridad en un pilar y el servicio a los demás en una prioridad. Esta visión no solo dignifica nuestro trabajo, sino que también nos libera de la presión de buscar la aprobación humana, enfocándonos en la recompensa eterna y en el impacto trascendente que podemos generar a través de nuestra empresa.",
  quote: {
  text: "El liderazgo efectivo se basa en principios, no en emociones. Sé proactivo, enfócate en lo importante y construye un legado duradero.",
  author: "Stephen Covey"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio esta semana que consideres mundano o rutinario. Abórdalo con la mentalidad de que lo estás haciendo directamente para el Señor. Busca maneras de aplicar excelencia, creatividad y un espíritu de servicio en esa tarea, y observa cómo cambia tu perspectiva y el resultado.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_110g8-5M",
  spotifyUrl: "https://open.spotify.com/track/62g21y265s7b0e14j227jC"
  }
},
  {
  day: 79,
  month: "marzo",
  monthId: 3,
  title: "La Firmeza de la Visión Divina",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ajetreo del mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, Proverbios 16: 3 nos invita a ir un paso más allá: a encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y confianza en la sabiduría divina para guiar nuestras decisiones y proyectos. Un líder cristiano entiende que el éxito duradero no se basa solo en la capacidad humana, sino en la alineación con el propósito de Dios. Al someter nuestros planes a Él, nuestros pensamientos y visiones se fortalecen, adquiriendo una claridad y una dirección que trascienden la lógica puramente empresarial. Esta encomienda nos proporciona paz en medio de la incertidumbre y asegura que nuestros esfuerzos contribuyan a un legado con impacto eterno, no solo terrenal.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de tomar una decisión importante o iniciar un nuevo proyecto, dedica un tiempo específico a la oración, pidiendo dirección divina y alineando tus planes con los principios bíblicos. Luego, documenta cómo esta práctica influyó en el resultado o en tu perspectiva.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=0_20j4Xq0j0",
  spotifyUrl: "https://open.spotify.com/track/4j4029f63YtX4f603j420c"
  }
},
  {
  day: 80,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichoso el que obedece la ley!",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Sin una dirección clara, los esfuerzos se dispersan y el progreso se estanca. Este proverbio nos recuerda que un liderazgo efectivo comienza con una visión bien definida, no solo para el éxito financiero, sino también para el impacto y el propósito. Los líderes cristianos en el ámbito empresarial deben buscar la dirección divina para establecer una visión que honre a Dios y beneficie a la sociedad. Esta visión debe ser comunicada con pasión y claridad, inspirando a cada miembro del equipo a alinear sus talentos y esfuerzos hacia un objetivo común. Una visión sólida es la base para la toma de decisiones estratégicas y la resiliencia ante los desafíos.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Tómate un tiempo esta semana para revisar o establecer la visión de tu empresa o equipo. Asegúrate de que sea clara, inspiradora y que todos tus colaboradores la comprendan y la compartan. Evalúa si tus acciones diarias están alineadas con esa visión a largo plazo.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2oYa7geFquIGxUMbRzqqqQ"
  }
},
  {
  day: 81,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara en la Adversidad",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "En el mundo empresarial, la visión es el faro que guía a la organización a través de las tormentas. Proverbios 29: 18 nos recuerda que sin una visión clara, la gente se desorienta y pierde el rumbo. Un líder cristiano debe cultivar una visión que no solo busque el éxito material, sino que también honre los principios divinos. Esta visión debe ser comunicada constantemente, inspirando a cada miembro del equipo a trabajar con propósito y pasión, incluso cuando los desafíos parecen insuperables. Mantener la visión viva es crucial para la resiliencia y el crecimiento sostenible del negocio.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una situación actual en tu negocio donde la visión se haya nublado. Dedica tiempo a redefinir y comunicar claramente esa visión a tu equipo, asegurándote de que todos comprendan cómo su trabajo contribuye a ella. Luego, establece tres acciones concretas para alinear tus operaciones diarias con esa visión renovada.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=5pAe2LKKyxg",
  spotifyUrl: "https://open.spotify.com/intl-es/track/10AHJmPp1y86W3hYg5fjeH"
  }
},
  {
  day: 82,
  month: "marzo",
  monthId: 3,
  title: "La Diligencia como Fundamento del Éxito Empresarial",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos recuerda que la diligencia y la planificación son pilares fundamentales para la prosperidad. En el ámbito empresarial, esto se traduce en una gestión cuidadosa, una estrategia bien definida y una ejecución paciente. Los líderes cristianos están llamados a ser mayordomos sabios de los recursos y oportunidades que Dios les confía. Esto implica no solo trabajar arduamente, sino también pensar estratégicamente, evaluar riesgos y tomar decisiones informadas, evitando la impulsividad que a menudo conduce a resultados desfavorables. La abundancia no es solo material, sino también en sabiduría y propósito, fruto de un esfuerzo constante y guiado por principios divinos. La paciencia y la perseverancia son virtudes que, aplicadas con diligencia, construyen un legado duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto o iniciativa actual en tu negocio. ¿Estás actuando con diligencia y planificación estratégica, o te estás apresurando? Dedica tiempo esta semana a revisar tus planes, identificar posibles riesgos y ajustar tu estrategia para asegurar un camino más sólido hacia la abundancia y el éxito sostenible.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0Q03w56x29Q",
  spotifyUrl: "https://open.spotify.com/track/4j9X0g2l4y304q6f3j2e1F"
  }
},
  {
  day: 83,
  month: "Marzo",
  monthId: 3,
  title: "Prioridad en el Propósito: Liderazgo con Visión Clara",
  verse: {
  text: "Mientras iba en camino con sus discípulos, Jesús entró en una aldea, y una mujer llamada Marta lo recibió en su casa. Tenía ella una hermana llamada María, que sentada a los pies de Jesús, escuchaba lo que él decía. Marta, por su parte, se sentía abrumada porque tenía mucho que hacer. Así que se acercó a él y le dijo: Señor, ¿no te importa que mi hermana me haya dejado sirviendo sola? ¡Dile que me ayude! Y respondiendo Jesús, le dijo: Marta, Marta, eres muy cuidadosa y preocupada por muchas cosas. Pero sólo una cosa es necesaria. María ha escogido la mejor, y nadie se la quitará.",
  reference: "Lucas 10: 38-42"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de Marta, abrumados por las múltiples tareas y preocupaciones diarias. Sin embargo, la historia de Marta y María nos recuerda la importancia de establecer prioridades claras. Un líder cristiano debe discernir entre lo urgente y lo importante, enfocándose en el propósito fundamental de su negocio o emprendimiento. Al igual que María eligió escuchar a Jesús, debemos buscar la sabiduría divina y el propósito superior en nuestras decisiones. La gestión eficiente es crucial, pero el liderazgo efectivo radica en hacer lo correcto, manteniendo la visión y los valores alineados con principios eternos. Esto nos permite construir un legado de impacto que trasciende lo meramente material.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea en tu negocio que te consume tiempo y energía, pero que no está directamente alineada con tu visión o propósito principal. Delega, automatiza o elimina esa tarea para liberar espacio y enfocarte en lo que realmente importa para el crecimiento y el impacto de tu emprendimiento.",
  song: {
  title: "La Niña de tus Ojos",
  artist: "Daniel Calveti",
  youtubeUrl: "https://www.youtube.com/watch?v=q9O82hAbWyY",
  spotifyUrl: "https://open.spotify.com/track/4B6Dq9yCXAyZUzGH8ULq1N"
  }
},
  {
  day: 84,
  month: "Marzo",
  monthId: 3,
  title: "La Fidelidad en lo Pequeño: Fundamento del Gran Liderazgo",
  verse: {
  text: "El que es fiel en lo muy poco, también en lo mucho es fiel; y el que en lo muy poco es injusto, también en lo mucho es injusto.",
  reference: "Lucas 16: 10"
  },
  reflection: "La fidelidad, a menudo subestimada en el vertiginoso mundo empresarial, es la piedra angular de un liderazgo duradero y efectivo. Lucas 16: 10 nos recuerda que nuestra capacidad para manejar grandes responsabilidades se forja en la manera en que gestionamos las pequeñas. En el ámbito de los negocios, esto se traduce en la consistencia, la integridad y la atención al detalle en cada tarea, por insignificante que parezca. Un líder fiel no solo cumple sus promesas, sino que también demuestra confiabilidad en la gestión de recursos, el trato con los empleados y la entrega a los clientes. Esta constancia genera confianza, un activo invaluable que fortalece equipos, atrae inversores y construye una reputación sólida. La verdadera prueba de nuestro carácter y liderazgo no está en cómo manejamos los grandes éxitos, sino en cómo nos mantenemos firmes y justos en las decisiones cotidianas y los desafíos menores.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea rutinaria o un detalle que a menudo pasas por alto en tu negocio. Comprométete a ejecutarla con excelencia y fidelidad esta semana, observando cómo tu atención a lo pequeño impacta la calidad general y la confianza de tu equipo o clientes.",
  song: {
  title: "Fiel",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X9e_m0L5g",
  spotifyUrl: "https://open.spotify.com/track/4j4j4j4j4j4j4j4j4j4j4j"
  },
  movie: {
    title: "The Imitation Game (El Código Enigma)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=nuPZUUED5uk",
    description:
      "La historia real de Alan Turing, quien lideró el equipo que descifró el código Enigma nazi durante la Segunda Guerra Mundial, demostrando cómo la innovación bajo presión puede cambiar el curso de la historia.",
  },
},
  {
  day: 85,
  month: "marzo",
  monthId: 3,
  title: "La Excelencia como Servicio",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una estrategia para el éxito, sino una expresión de nuestro propósito. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si estuviéramos sirviendo directamente a Dios. Esto transforma la perspectiva del trabajo, elevándolo de una mera transacción a un acto de adoración. Para el empresario cristiano, esto significa ir más allá de las expectativas, innovar con integridad y liderar con un compromiso inquebrantable con la calidad. Cuando operamos con esta mentalidad, no solo construimos negocios prósperos, sino que también reflejamos los valores del Reino, impactando positivamente a nuestros empleados, clientes y la comunidad. La excelencia se convierte en un testimonio tangible de nuestra fe.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un proceso clave en tu negocio esta semana. Identifica al menos dos áreas donde puedes elevar el estándar de excelencia, no solo para mejorar la eficiencia o las ganancias, sino para reflejar un compromiso más profundo con la calidad y el servicio. Implementa los cambios y observa el impacto en tu equipo y clientes.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=0_s_J0e4_2k",
  spotifyUrl: "https://open.spotify.com/track/54g12s6f1o9y2X6m2j2t7f"
  }
},
  {
  day: 86,
  month: "marzo",
  monthId: 3,
  title: "Encomienda tus planes al Señor",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que nuestros planes más sólidos deben ser presentados y encomendados a Dios. Esto no significa pasividad, sino una dependencia activa de Su sabiduría y dirección. Al alinear nuestras metas y estrategias con los principios divinos, no solo buscamos el éxito terrenal, sino también la edificación de un legado que honre a Dios. La afirmación de nuestros pensamientos y la estabilidad de nuestros proyectos provienen de esta entrega, permitiéndonos operar con una visión clara y una confianza inquebrantable, incluso en medio de la incertidumbre del mercado. Es un llamado a la diligencia en la planificación y a la humildad en la dependencia.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a orar y encomendar tus planes a Dios, buscando Su dirección y sabiduría en cada paso.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=sY0g1q03_14",
  spotifyUrl: "https://open.spotify.com/track/4Xq4h064z222e4t3j7j0gD"
  }
},
  {
  day: 87,
  month: "Marzo",
  monthId: 3,
  title: "Excelencia en el Trabajo: Un Acto de Adoración",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia a menudo se persigue por razones de rentabilidad, reputación o competitividad. Sin embargo, como líderes cristianos, nuestra motivación va más allá. Colosenses 3: 23-24 nos llama a realizar cada tarea con un corazón íntegro, como si estuviéramos sirviendo directamente a Cristo. Esta perspectiva transforma el trabajo mundano en un acto de adoración. Significa que cada decisión, cada producto, cada interacción con clientes y empleados debe reflejar los valores del Reino. Al operar con esta mentalidad, no solo buscamos el éxito terrenal, sino que también honramos a Dios y construimos un legado que trasciende lo material, sabiendo que nuestra verdadera recompensa proviene de Él.",
  quote: {
  text: "El verdadero liderazgo no se trata de estar a cargo, sino de cuidar a los que están a tu cargo.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio o emprendimiento donde la calidad o el servicio podrían mejorar. Desarrolla un plan concreto para elevar el estándar en esa área, enfocándote en la excelencia como una forma de honrar a Dios y servir mejor a tus clientes y equipo. Implementa este plan esta semana y evalúa los resultados, no solo en términos de negocio, sino también en cómo refleja tus valores cristianos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t32v6gQ1Y",
  spotifyUrl: "https://open.spotify.com/track/5sQj0o2t9l1X2x0t1z7X3Y"
  }
},
  {
  day: 88,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Proactiva en el Liderazgo Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Proverbios 16: 3 nos invita a una profunda reflexión sobre la planificación y la ejecución en el liderazgo empresarial. No se trata solo de la ambición o la estrategia humana, sino de la sabiduría de alinear nuestros proyectos y metas con la guía divina. Al encomendar nuestras obras a Dios, reconocemos que Su perspectiva es superior y que Su dirección es esencial para el éxito duradero. Esta actitud proactiva, lejos de ser pasiva, implica una diligencia en la preparación y una fe activa en que nuestros pensamientos y planes serán establecidos con un propósito mayor. Un líder que opera bajo este principio no solo busca la rentabilidad, sino también el impacto y la trascendencia, construyendo un legado que honra a Dios y beneficia a la sociedad.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto clave en tu negocio. ¿Has encomendado este proyecto a Dios en oración? ¿Están tus planes alineados con principios éticos y valores cristianos? Desarrolla un plan de acción que refleje tanto tu diligencia empresarial como tu dependencia de la dirección divina.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1g71_t16f3A",
  spotifyUrl: "https://open.spotify.com/track/4jQ06zJ4w6b2e1t51v1v9o"
  }
},
  {
  day: 89,
  month: "Marzo",
  monthId: 3,
  title: "La Diligencia en la Planificación para la Abundancia",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "En el ámbito empresarial, la diligencia no es solo una virtud, sino una estrategia fundamental. Proverbios 21: 5 nos recuerda que la planificación cuidadosa y el esfuerzo constante son precursores de la prosperidad. Un líder cristiano entiende que su negocio es una extensión de su mayordomía, y por lo tanto, cada plan, cada decisión, debe ser abordada con oración y meticulosidad. Evitar la prisa imprudente y la toma de decisiones impulsivas es crucial. La abundancia a la que se refiere el versículo no es solo financiera, sino también en impacto, propósito y legado. La paciencia, la investigación y la ejecución estratégica son los pilares que sostienen un crecimiento sostenible y una influencia duradera en el mercado y en la sociedad.",
  quote: {
  text: "La planificación a largo plazo no se ocupa de decisiones futuras, sino del futuro impacto de decisiones presentes.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto o iniciativa actual en tu negocio. ¿Estás aplicando la diligencia necesaria en su planificación y ejecución, o te estás apresurando? Dedica tiempo esta semana a revisar tus planes, buscando áreas donde una mayor reflexión y esfuerzo puedan conducir a mejores resultados y a una abundancia más significativa.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1Y2j17j149Y",
  spotifyUrl: "https://open.spotify.com/track/303s503b414s82y4979e2P"
  }
},
  {
  day: 90,
  month: "Marzo",
  monthId: 3,
  title: "La Visión Clara: Fundamento del Liderazgo Estratégico",
  verse: {
  text: "Un verdadero líder empresarial inspira crecimiento, cultiva la visión y empodera a su equipo para alcanzar metas extraordinarias con integridad.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o iniciativa. Proverbios 29: 18 nos advierte que sin una visión clara, el pueblo se desenfrena, lo que en el contexto empresarial se traduce en falta de dirección, objetivos difusos y equipos desmotivados. Un líder cristiano en el ámbito de los negocios debe ser un visionario, capaz de articular un propósito que trascienda la mera ganancia. Esta visión debe estar arraigada en principios bíblicos, buscando impactar positivamente a la sociedad, a los empleados y a los clientes. Una visión bien definida no solo inspira, sino que también establece los límites y las prioridades, permitiendo una toma de decisiones estratégica y coherente. Es la base sobre la cual se construye un legado duradero y significativo, alineado con los valores del Reino.",
  quote: {
  text: "Un verdadero líder empresarial inspira crecimiento, cultiva la visión y empodera a su equipo para alcanzar metas extraordinarias con integridad.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y se sientan parte de ella. Comunícala de manera efectiva y evalúa cómo cada decisión y acción se alinea con esa visión.",
  song: {
  title: "Visión",
  artist: "En Espíritu y en Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=Xw8e0Q7f92Y",
  spotifyUrl: "https://open.spotify.com/track/5w7h7e1w0Z8m7o9p7g7z0e"
  }
},
  {
  day: 91,
  month: "Abril",
  monthId: 4,
  title: "La Visión que Impulsa el Legado",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18 (RVR60)"
  },
  reflection: "La visión es el motor que impulsa a todo empresario y líder cristiano. Sin una dirección clara, es fácil perder el rumbo y caer en la inercia. Proverbios 29: 18 nos recuerda que la falta de visión lleva al desenfreno, a la falta de propósito y a la ineficacia. En el ámbito empresarial, esto se traduce en negocios sin estrategia, equipos desmotivados y resultados mediocres. Una visión inspirada por Dios no solo define el destino, sino que también alinea los valores, motiva al equipo y atrae los recursos necesarios. Es la brújula que guía cada decisión y cada esfuerzo, asegurando que el legado que construimos tenga un impacto duradero y significativo, honrando a Dios en cada paso.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión clara para tu negocio o proyecto. Asegúrate de que esta visión sea inspiradora, medible y esté alineada con tus valores cristianos. Comunícala a tu equipo y busca formas de integrarla en las operaciones diarias para que todos trabajen hacia un objetivo común.",
  song: {
  title: "Visión Pastoral",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=DZeostTrgp8",
  spotifyUrl: "https://open.spotify.com/track/6cqoOr1XTghTaUTojFrqDQ"
  },
  movie: {
    title: "Pay It Forward (Cadena de Favores)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=qXJG9qhA-Gg",
    description:
      "Un niño crea un movimiento de bondad que transforma vidas, demostrando que el servicio desinteresado y la generosidad pueden crear un impacto exponencial en la sociedad.",
  },
},
  {
  day: 92,
  month: "abril",
  monthId: 4,
  title: "Liderazgo y Ejecución Estratégica",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la planificación y la ejecución son pilares fundamentales. Proverbios 16: 3 nos recuerda que, más allá de nuestras estrategias y esfuerzos, la verdadera solidez de nuestros planes proviene de encomendarlos a Dios. Esto no significa pasividad, sino una dependencia activa y una búsqueda de dirección divina en cada decisión. Un líder cristiano entiende que su visión y sus proyectos no solo deben ser viables, sino también alineados con principios éticos y un propósito superior. Al confiar nuestras obras al Señor, no solo encontramos paz, sino que también experimentamos una claridad y una afirmación en nuestros pensamientos que trascienden la lógica puramente humana, llevando a una ejecución más efectiva y con mayor impacto.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus decisiones estratégicas recientes. ¿La encomendaste a Dios en oración? ¿Refleja principios que van más allá de la rentabilidad inmediata? Dedica tiempo a buscar dirección divina para tu próximo gran proyecto y ajusta tu plan según lo que disciernas.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d4z1l2b2gM",
  spotifyUrl: "https://open.spotify.com/track/4j1Q1j9015024w4hX2g2gM"
  }
},
  {
  day: 93,
  month: "Abril",
  monthId: 4,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "El liderazgo efectivo en los negocios se trata de inspirar a otros a alcanzar su máximo potencial y construir un legado duradero.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos recuerda que sin una visión clara, tanto las personas como las organizaciones carecen de dirección y propósito, lo que puede llevar al caos y la ineficacia. En el ámbito empresarial cristiano, la visión no solo se trata de metas financieras, sino también de un propósito superior que honre a Dios y sirva a la comunidad. Un líder con visión inspira a su equipo, fomenta la innovación y establece un camino claro para el crecimiento sostenible. Es crucial comunicar esta visión de manera constante y asegurarse de que cada miembro del equipo comprenda su papel en la consecución de los objetivos comunes, manteniendo siempre los principios éticos y morales como fundamento.",
  quote: {
  text: "El liderazgo efectivo en los negocios se trata de inspirar a otros a alcanzar su máximo potencial y construir un legado duradero.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y clarificar la visión de tu empresa o proyecto. Asegúrate de que sea inspiradora, medible y comunicable. Luego, comparte esta visión con tu equipo y pídeles retroalimentación sobre cómo pueden contribuir activamente a alcanzarla. Identifica al menos tres acciones concretas que tú y tu equipo pueden tomar para alinear sus esfuerzos diarios con esa visión.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3ngh2nS1P1GOr6qDGzwojQ"
  }
},
  {
  day: 94,
  month: "Abril",
  monthId: 4,
  title: "Fortaleza y Hazañas a Través del Conocimiento Divino",
  verse: {
  text: "...pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "El versículo de Daniel 11: 32 nos recuerda que el conocimiento de Dios es una fuente de fortaleza y capacidad para lograr grandes cosas. En el ámbito empresarial, esto se traduce en la importancia de la sabiduría divina para la toma de decisiones estratégicas y la ejecución de proyectos ambiciosos. Un líder cristiano, al conocer profundamente a su Creador, adquiere una perspectiva única que le permite enfrentar desafíos con fe, discernimiento y resiliencia. Esta conexión con lo divino no solo fortalece su carácter, sino que también le capacita para inspirar a su equipo, innovar con propósito y alcanzar metas que trascienden lo meramente material, dejando un legado de impacto tanto en el mercado como en el reino de Dios.",
  quote: {
  text: "No hay nada malo en una empresa pequeña. Cada gran empresa comenzó siendo pequeña.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área de tu negocio donde te sientas limitado o débil. Busca la guía de Dios a través de la oración y el estudio de Su Palabra para encontrar soluciones innovadoras y estratégicas que te permitan superar ese obstáculo y lograr \"grandes hazañas\".",
  song: {
  title: "Dímelo",
  artist: "Alex Campos",
  youtubeUrl: "https://www.youtube.com/watch?v=ziGZzkRtPys",
  spotifyUrl: "https://open.spotify.com/track/2mjFfGZxpFp03PLu4xAyL8"
  }
},
  {
  day: 95,
  month: "Abril",
  monthId: 4,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo excepcional requiere una disciplina inquebrantable y la visión para construir algo que perdure más allá de uno mismo.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este proverbio subraya la importancia fundamental de la visión en cualquier colectivo, y de manera particular en el ámbito empresarial. Un líder sin una visión clara y comunicada efectivamente, deja a su equipo sin dirección, lo que puede llevar a la desorganización, la falta de propósito y, en última instancia, al fracaso. En el contexto cristiano, la visión no solo se refiere a metas estratégicas, sino también a un propósito superior que alinea los objetivos del negocio con los valores del Reino. Un empresario cristiano debe buscar la guía divina para establecer una visión que inspire, motive y dirija a su equipo hacia el éxito sostenible, no solo en términos de ganancias, sino también de impacto positivo en la sociedad y en la vida de sus colaboradores. La visión actúa como un faro, manteniendo a todos enfocados y comprometidos con el camino correcto.",
  quote: {
  text: "El liderazgo excepcional requiere una disciplina inquebrantable y la visión para construir algo que perdure más allá de uno mismo.",
  author: "Jim Collins"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y compartan. Comunícala de manera efectiva y evalúa cómo cada tarea diaria contribuye a alcanzar esa visión.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cOdK2wGQHJs2APvC04C5f"
  }
},
  {
  day: 96,
  month: "abril",
  monthId: 4,
  title: "La Visión Clara en la Gestión",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18 (RVR60)"
  },
  reflection: "La visión es el faro que guía cualquier empresa. Sin una dirección clara, los equipos pueden perder el rumbo, la energía se dispersa y los recursos se malgastan. Este proverbio nos recuerda que una visión divina no solo previene el caos, sino que también trae bendición. En el ámbito empresarial, esto se traduce en establecer metas claras, definir un propósito trascendente y comunicar eficazmente hacia dónde se dirige la organización. Un líder cristiano debe buscar la visión de Dios para su negocio, asegurándose de que cada estrategia y decisión esté alineada con principios éticos y un impacto positivo. Una visión inspiradora motiva a los empleados, atrae a los clientes adecuados y fomenta una cultura de excelencia y propósito.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Considera cómo esta visión se alinea con los principios cristianos y cómo puede generar un impacto positivo más allá de las ganancias. Comunica esta visión con pasión y convicción a tus colaboradores y clientes.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0X2z_7_2y_Y",
  spotifyUrl: "https://open.spotify.com/track/5rX3Y8m0L6X1j2j0X9X8X8"
  }
},
  {
  day: 97,
  month: "Abril",
  monthId: 4,
  title: "La Visión como Motor del Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, no solo en el ámbito espiritual, sino también en el empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y sin rumbo fijo. En el mundo de los negocios, la visión proporciona dirección, inspira a los equipos y alinea los esfuerzos hacia un objetivo común. Es la brújula que guía las decisiones estratégicas y operativas, permitiendo a la empresa navegar a través de los desafíos y aprovechar las oportunidades. Mantener la visión viva y comunicarla eficazmente es una tarea constante del líder cristiano, quien busca no solo el éxito material, sino también un impacto trascendente, honrando a Dios en cada paso y decisión empresarial.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y se sientan parte de ella. Comunícala de manera efectiva y busca formas de integrarla en las operaciones diarias para que guíe cada acción y decisión.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 98,
  month: "Abril",
  monthId: 4,
  title: "Trabajo con Propósito: Sirviendo a Dios en los Negocios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: hacer todo de corazón, como para el Señor. Esto transforma nuestra visión del trabajo, convirtiéndolo en un acto de adoración y servicio. Un líder cristiano en los negocios no solo busca la excelencia profesional, sino que también se esfuerza por honrar a Dios en cada decisión, interacción y proyecto. Esta mentalidad fomenta la integridad, la ética y la pasión, sabiendo que nuestro verdadero empleador es el Creador. Al trabajar con un propósito divino, no solo impactamos positivamente a nuestros equipos y clientes, sino que también construimos un legado que trasciende lo terrenal.",
  quote: {
  text: "El éxito es... conocer tu propósito en la vida, crecer para alcanzar tu máximo potencial y sembrar semillas que beneficien a otros.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio esta semana que puedas abordar con una mentalidad renovada, haciéndolo de corazón como si fuera directamente para el Señor. Observa cómo esta perspectiva cambia tu enfoque, tu esfuerzo y los resultados.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship & Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=KHXXpFOvryY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3feWC4iQUr9xllyiVh3BQh"
  },
  movie: {
    title: "Patch Adams",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=DJBx1SaLFWc",
    description:
      "La historia real de un médico que revolucionó la atención médica al tratar a los pacientes con humor y compasión, demostrando que el servicio con amor transforma vidas.",
  },
},
  {
  day: 100,
  month: "abril",
  monthId: 4,
  title: "Visión y Propósito Divino en los Negocios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Proverbios 16: 3 nos invita a confiar nuestras obras al Señor para que nuestros planes sean firmes. En el ámbito empresarial, esto significa más que solo orar por el éxito; implica alinear nuestras estrategias, decisiones y operaciones con principios éticos y valores cristianos. Un líder que encomienda sus obras a Dios busca la sabiduría divina en la planificación, la ejecución y la gestión de su equipo. Esta dependencia no anula la necesidad de la diligencia y la excelencia, sino que las potencia, asegurando que cada esfuerzo esté cimentado en un propósito mayor. Al hacerlo, la visión del negocio se clarifica y se fortalece, trascendiendo la mera ganancia para impactar positivamente a la sociedad y glorificar a Dios.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área clave en tu negocio o emprendimiento donde te sientas estancado o incierto. Dedica tiempo a la oración y la reflexión, buscando la guía divina para ese desafío. Luego, desarrolla un plan de acción concreto que integre principios bíblicos con estrategias empresariales sólidas, confiando en que tus pensamientos serán afirmados al encomendar tus obras al Señor.",
  song: {
  title: "Alfarero",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=07-2e11z47k",
  spotifyUrl: "https://open.spotify.com/track/56x00j4j9g4Y2Y07w01Q8g"
  }
},
  {
  day: 101,
  month: "Abril",
  monthId: 4,
  title: "Liderazgo con Propósito: Haciendo lo Correcto de Corazón",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "El versículo de Colosenses 3: 23 nos insta a realizar todas nuestras tareas con dedicación, como si estuviéramos sirviendo directamente al Señor. En el ámbito empresarial, esto se traduce en un compromiso inquebrantable con la excelencia, la ética y la integridad. No se trata solo de cumplir con las expectativas humanas o de buscar el reconocimiento, sino de operar con un propósito más elevado. Un líder cristiano en los negocios entiende que cada decisión, cada proyecto y cada interacción es una oportunidad para reflejar los valores del Reino. Esta perspectiva transforma el trabajo de una mera transacción a una vocación, donde la calidad y el servicio son expresiones de fe. Al hacer las cosas de corazón, no solo impactamos positivamente a nuestros equipos y clientes, sino que también honramos a Dios en nuestro quehacer diario, construyendo un legado de impacto duradero.",
  quote: {
  text: "Management is doing things right; leadership is doing the right things.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde la motivación principal ha sido el reconocimiento o el beneficio personal. Reflexiona sobre cómo puedes reorientar tus esfuerzos para que tu motivación principal sea servir a Dios y a los demás, y luego implementa un cambio concreto esta semana para reflejar esa nueva perspectiva.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/track/72ZftLrMPFWcBR0wMjEh1o"
  }
},
  {
  day: 102,
  month: "Abril",
  monthId: 4,
  title: "Planificación Divina y Éxito Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo de los negocios, la planificación estratégica es fundamental. Sin embargo, como creyentes, Proverbios 16: 3 nos invita a ir más allá de la mera estrategia humana: a encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y una invitación a Dios para que guíe nuestros planes y esfuerzos. Al alinear nuestras intenciones y proyectos con Su voluntad, nuestros pensamientos y decisiones empresariales adquieren una firmeza y una dirección que trascienden la sabiduría terrenal. Esta encomienda nos libera de la ansiedad por el resultado, permitiéndonos trabajar con diligencia y fe, sabiendo que Él afirmará nuestros pasos. La verdadera innovación y el éxito sostenible en el liderazgo cristiano nacen de esta colaboración divina, donde la visión empresarial se fusiona con el propósito eterno.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y presenta tus planes a Dios, pidiendo Su dirección y sabiduría. Luego, actúa con diligencia, confiando en que Él afirmará tus pasos y te guiará hacia el éxito.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2v-3-e22e2A",
  spotifyUrl: "https://open.spotify.com/track/62X20X41v2z0q2X6z6Z6Z6"
  }
},
  {
  day: 103,
  month: "abril",
  monthId: 4,
  title: "La Sabiduría en la Planificación Estratégica",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación estratégica es fundamental. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, asegurando que nuestros planes y pensamientos se establecerán. Esto no significa pasividad, sino una dependencia activa de la guía divina en cada etapa de la toma de decisiones. Un líder cristiano entiende que la verdadera sabiduría proviene de Dios, y alinear los objetivos empresariales con principios bíblicos no solo fortalece la visión, sino que también asegura una base sólida para el éxito sostenible. Al buscar la dirección de Dios en la estrategia, se fomenta la integridad, la ética y la resiliencia, elementos cruciales para navegar los desafíos del mercado y construir un legado de impacto duradero.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar un nuevo proyecto o tomar una decisión estratégica importante, dedica tiempo a la oración y a la reflexión sobre cómo los principios bíblicos pueden guiar tu enfoque. Documenta tus planes y busca la confirmación de Dios a través de Su Palabra y la sabiduría de consejeros piadosos. Evalúa cómo esta práctica impacta la claridad y la dirección de tus decisiones empresariales.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=wz839w-841M",
  spotifyUrl: "https://open.spotify.com/track/5sQ7t2o3s4p3s4p3s4p3s4"
  }
},
  {
  day: 104,
  month: "abril",
  monthId: 4,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje de Colosenses nos ofrece una perspectiva transformadora sobre el trabajo. Para el empresario y líder cristiano, no se trata solo de cumplir tareas o alcanzar metas financieras, sino de ver cada labor como una oportunidad para servir a Dios. La excelencia en el trabajo, la integridad en las decisiones y la dedicación en el servicio al cliente se convierten en actos de adoración. Al hacer todo \"de corazón, como para el Señor\", elevamos nuestros estándares, no por la aprobación humana, sino por un propósito divino. Esta mentalidad fomenta una cultura empresarial de alta calidad, responsabilidad y un compromiso inquebrantable con la ética, sabiendo que nuestra verdadera recompensa proviene de una fuente superior.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un proyecto o tarea actual en tu negocio. ¿Cómo puedes abordarlo con una mentalidad de servicio y excelencia, como si lo estuvieras haciendo directamente para Dios? Identifica al menos una acción concreta para elevar el estándar de calidad o servicio en ese proyecto.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t4-44s-0s",
  spotifyUrl: "https://open.spotify.com/track/62g1j9o2l2g1x2g1x2g1x2"
  }
},
  {
  day: 105,
  month: "Abril",
  monthId: 4,
  title: "La Mejor Parte en el Liderazgo Empresarial",
  verse: {
  text: "Mientras iba en camino con sus discípulos, Jesús entró en una aldea, y una mujer llamada Marta lo recibió en su casa. Tenía ella una hermana llamada María, que sentada a los pies de Jesús, escuchaba lo que él decía. Marta, por su parte, se sentía abrumada porque tenía mucho que hacer. Así que se acercó a él y le dijo: Señor, ¿no te importa que mi hermana me haya dejado sirviendo sola? ¡Dile que me ayude! Y respondiendo Jesús, le dijo: Marta, Marta, eres muy cuidadosa y preocupada por muchas cosas. Pero sólo una cosa es necesaria. María ha escogido la mejor, y nadie se la quitará.",
  reference: "Lucas 10: 38-42"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de Marta, preocupados y afanados por múltiples tareas. Sin embargo, Jesús nos recuerda la importancia de elegir \"la mejor parte\", como María, que se sentó a escuchar a los pies del Maestro. Para el empresario y líder cristiano, esto significa priorizar la comunión con Dios y buscar su dirección antes de sumergirse en la vorágine de los negocios. Es en esos momentos de quietud y escucha donde se encuentra la verdadera sabiduría y la perspectiva divina para tomar decisiones, gestionar equipos y enfrentar desafíos. Al igual que María, debemos cultivar una relación profunda con Cristo, permitiendo que su voz guíe cada paso de nuestro emprendimiento, asegurando que nuestro legado no solo sea de impacto terrenal, sino también eterno.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica los primeros 15 minutos de tu jornada laboral a la oración y la lectura bíblica, pidiendo a Dios dirección específica para tus decisiones empresariales del día. Anota las ideas o impresiones que recibas y procura aplicarlas en tu gestión.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  },
  movie: {
    title: "Mr. Holland's Opus",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=8OBdXvKJLIU",
    description:
      "Un profesor de música descubre que su verdadero legado no está en la sinfonía que nunca completó, sino en las vidas de miles de estudiantes que inspiró a lo largo de su carrera.",
  },
},
  {
  day: 106,
  month: "Abril",
  monthId: 4,
  title: "La Diligencia en el Trabajo como Servicio a Dios",
  verse: {
  text: "Todo lo que hagan, háganlo de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la diligencia y la excelencia a menudo se ven como medios para alcanzar el éxito personal o corporativo. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con pasión y dedicación como si estuviéramos sirviendo directamente a Cristo. Esta mentalidad transforma cada tarea, cada proyecto y cada interacción comercial en un acto de adoración. Reconocer que nuestra recompensa final proviene del Señor nos libera de la búsqueda incesante de la aprobación humana y nos impulsa a mantener altos estándares de integridad y calidad, incluso cuando nadie nos observa. Es un recordatorio poderoso de que nuestro trabajo es una extensión de nuestra fe y un testimonio de nuestro compromiso con Dios en el mercado.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Enfócate en realizarlo con una actitud de servicio a Dios, buscando la excelencia en cada detalle. Observa cómo esta perspectiva cambia tu motivación y el resultado final.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship, Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=12-34567890",
  spotifyUrl: "https://open.spotify.com/track/1234567890"
  }
},
  {
  day: 107,
  month: "Abril",
  monthId: 4,
  title: "La Diligencia en la Planificación",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, mas todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos ofrece una verdad fundamental para el mundo empresarial: la importancia de la planificación diligente. En un entorno donde la inmediatez a menudo se valora por encima de todo, este versículo nos recuerda que el éxito sostenible no es fruto de la prisa desmedida, sino de la consideración cuidadosa y la ejecución metódica. Los líderes cristianos deben entender que la fe no exime de la necesidad de una estrategia bien pensada. La diligencia implica investigar, analizar, establecer metas claras y desarrollar un camino para alcanzarlas. Aquellos que se apresuran sin un plan sólido, a menudo encuentran que sus esfuerzos son en vano, llevando a la escasez en lugar de la abundancia. La paciencia y la sabiduría en la planificación son virtudes que Dios honra y que se traducen en resultados tangibles en el negocio.",
  quote: {
  text: "El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo.",
  author: "Simon Sinek"
  },
  challenge: "Evalúa un proyecto o iniciativa actual en tu negocio. ¿Has dedicado suficiente tiempo a la planificación diligente o te has apresurado? Identifica al menos tres áreas donde una planificación más cuidadosa podría mejorar los resultados y establece un plan de acción para implementarlas esta semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s0n-m-j5z7g",
  spotifyUrl: "https://open.spotify.com/track/4j9t0944061qf0376q121l"
  }
},
  {
  day: 108,
  month: "Abril",
  monthId: 4,
  title: "La Disciplina del Enfoque en el Liderazgo",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Filipenses 3: 13-14 (NVI)"
  },
  reflection: "En el ámbito empresarial, la disciplina del enfoque es crucial para el éxito sostenido. Pablo nos enseña a dejar atrás lo que ya pasó, sean éxitos o fracasos, y a concentrarnos con determinación en la meta. Los líderes cristianos deben aplicar este principio para dirigir sus empresas, evitando distracciones y priorizando aquello que alinea su visión con los propósitos divinos. Un enfoque claro permite una asignación eficiente de recursos, una toma de decisiones más efectiva y la capacidad de perseverar ante los desafíos, manteniendo siempre la mirada en el objetivo final y en el llamado superior.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Identifica las tres distracciones principales que afectan tu enfoque empresarial esta semana y desarrolla un plan concreto para eliminarlas o minimizarlas, dedicando tiempo específico a tus objetivos más importantes.",
  song: {
  title: "En Tu Nombre",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=wz6s1G78y9Q",
  spotifyUrl: "https://open.spotify.com/track/0s2x8tX6k0j9s1l8v7p8cQ"
  }
},
  {
  day: 109,
  month: "Abril",
  monthId: 4,
  title: "Excelencia en el Trabajo para la Gloria de Dios",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Colosenses 3: 23 nos llama a una ética de trabajo superior, donde cada tarea, grande o pequeña, se realiza con un compromiso total, no para impresionar a nuestros superiores o clientes, sino como una ofrenda a Dios. En el ámbito empresarial, esto se traduce en buscar la excelencia en cada producto, servicio y relación. Significa ir más allá de lo esperado, no por obligación, sino por un deseo genuino de honrar a Aquel que nos ha dado talentos y oportunidades. Un líder cristiano entiende que su negocio es una plataforma para glorificar a Dios, impactando positivamente a empleados, clientes y la comunidad a través de la integridad, la calidad y el servicio desinteresado. Esta perspectiva transforma el trabajo de una mera obligación a una vocación sagrada.",
  quote: {
  text: "El liderazgo no se trata de ser el mejor, se trata de hacer que los demás sean mejores.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio o trabajo donde puedas elevar el estándar de excelencia esta semana. ¿Cómo puedes realizar esa tarea o proyecto no solo bien, sino de una manera que refleje tu compromiso con Dios y que inspire a quienes te rodean a ser mejores? Implementa un cambio concreto y observa el impacto.",
  song: {
  title: "Por La Excelencia",
  artist: "Alfarero",
  youtubeUrl: "https://www.youtube.com/watch?v=ANARYFEiTtA",
  spotifyUrl: "https://open.spotify.com/intl-es/track/4P6NMMAzT6JVvHjxYRvIYJ"
  }
},
  {
  day: 110,
  month: "Abril",
  monthId: 4,
  title: "La Sabiduría Divina en la Gestión Empresarial",
  verse: {
  text: "Si alguno de ustedes tiene falta de sabiduría, pídala a Dios, quien da a todos abundantemente y sin reproche, y le será dada.",
  reference: "Santiago 1: 5 (NBLA)"
  },
  reflection: "En el dinámico mundo empresarial, la toma de decisiones es constante y a menudo compleja. Los líderes cristianos enfrentan el desafío de integrar su fe con las exigencias del mercado. Santiago 1: 5 nos recuerda que la sabiduría no es solo un atributo humano, sino un don divino accesible a todos los que la buscan. Para el empresario, esto significa ir más allá del análisis de datos y la estrategia de mercado; implica buscar la guía de Dios en cada paso. La sabiduría divina nos permite discernir oportunidades, gestionar recursos con integridad y liderar equipos con una visión que trasciende lo meramente terrenal. Al pedir sabiduría, no solo mejoramos nuestras decisiones de negocio, sino que también reflejamos los valores del Reino en nuestra esfera de influencia, construyendo un legado de impacto duradero y con propósito.",
  quote: {
  text: "La verdadera medida de un líder no es la cantidad de personas que le sirven, sino la cantidad de personas a las que él sirve.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una decisión importante que debas tomar en tu negocio esta semana. Antes de actuar, dedica tiempo a la oración, pidiendo a Dios sabiduría específica para esa situación. Luego, evalúa tus opciones a la luz de los principios bíblicos y los valores de tu empresa. Registra cómo esta búsqueda de sabiduría influyó en tu decisión final y en sus resultados.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_y5e7j-w-A",
  spotifyUrl: "https://open.spotify.com/track/4j9t3v9x4x0x4x0x4x0x4x"
  }
},
  {
  day: 111,
  month: "Abril",
  monthId: 4,
  title: "Planificación Divina y Ejecución Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que nuestra planificación debe ir más allá de la mera estrategia humana. Al encomendar nuestras obras al Señor, no solo buscamos su aprobación, sino también su guía y sabiduría. Esto implica presentar nuestros planes, proyectos y decisiones de negocio ante Él en oración, confiando en que Él afirmará nuestros pensamientos y dirigirá nuestros pasos. Esta dependencia de Dios no es un sustituto de la diligencia o el trabajo arduo, sino un fundamento que asegura que nuestros esfuerzos estén alineados con un propósito mayor y que nuestros resultados sean sostenibles y bendecidos. Es una invitación a operar con una perspectiva eterna en cada decisión empresarial.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un proyecto o decisión importante en tu negocio esta semana. Antes de avanzar, dedica tiempo a la oración, encomendando este asunto a Dios. Busca su dirección y sabiduría, y luego procede con confianza, sabiendo que tus pensamientos serán afirmados por Él.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d4z174_L4k",
  spotifyUrl: "https://open.spotify.com/track/4j4mQe72w1z04t129w2t3n"
  }
},
  {
  day: 112,
  month: "Abril",
  monthId: 4,
  title: "La Diligencia: Semilla de Prosperidad y Sabiduría",
  verse: {
  text: "Los proyectos del diligente ciertamente son ventaja, mas todo el que se apresura, ciertamente llega a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos recuerda la importancia de la diligencia y la planificación en el ámbito empresarial. Los proyectos bien pensados y ejecutados con esmero no solo traen ventaja, sino que también nos alejan de la precipitación que a menudo conduce a la escasez. En el liderazgo cristiano, la diligencia se traduce en una mayordomía responsable de los recursos y talentos que Dios nos ha confiado. No se trata solo de trabajar duro, sino de trabajar con sabiduría, buscando la dirección divina en cada decisión y evitando atajos que comprometan la integridad o la sostenibilidad a largo plazo. Un líder diligente invierte tiempo en la estrategia, en el desarrollo de su equipo y en la mejora continua, construyendo un legado sólido y duradero.",
  quote: {
  text: "El fracaso es simplemente la oportunidad de empezar de nuevo, pero esta vez de forma más inteligente.",
  author: "Henry Ford"
  },
  challenge: "Identifica un proyecto o área en tu negocio donde la falta de diligencia o la prisa han generado resultados subóptimos. Dedica tiempo esta semana a revisar y reestructurar ese proyecto, aplicando principios de planificación cuidadosa y ejecución esmerada. Involucra a tu equipo en este proceso, fomentando una cultura de diligencia y excelencia.",
  song: {
  title: "Aqui Estas (Way Maker)",
  artist: "Nacion Alabanza",
  youtubeUrl: "https://www.youtube.com/watch?v=ie_Lzr7RwGI",
  spotifyUrl: "https://open.spotify.com/intl-es/track/7riMnlruFE4n1A4o7RINSD"
  },
  movie: {
    title: "Dead Poets Society (La Sociedad de los Poetas Muertos)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=ye5zXu5QfHs",
    description:
      "Un profesor inspirador enseña a sus estudiantes a pensar por sí mismos y aprovechar el día, demostrando que el verdadero liderazgo educativo transforma el pensamiento y libera el potencial.",
  },
},
  {
  day: 113,
  month: "Abril",
  monthId: 4,
  title: "La Diligencia en la Gestión de Recursos",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura, ciertamente tiende a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos enseña una verdad fundamental para el mundo empresarial: la importancia de la diligencia y la planificación. En un entorno donde la inmediatez a menudo se valora, la sabiduría bíblica nos insta a la paciencia y al esfuerzo constante. Los líderes y emprendedores cristianos deben comprender que el éxito duradero no se construye sobre atajos o decisiones impulsivas, sino sobre una gestión cuidadosa, una estrategia bien pensada y un trabajo arduo y persistente. La abundancia prometida no es solo material, sino también en la solidez de la empresa, la reputación y el impacto positivo. Evitar la prisa por el enriquecimiento implica una ética de trabajo íntegra y una confianza en el proceso divino, sabiendo que la verdadera prosperidad es un fruto de la fidelidad y la diligencia en cada paso.",
  quote: {
  text: "El verdadero liderazgo cristiano en los negocios se mide por el impacto que creamos en los demás, sirviendo con integridad y propósito divino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área de tu negocio donde has sentido la tentación de buscar resultados rápidos. Desarrolla un plan de acción que incorpore la diligencia y la paciencia, estableciendo metas realistas y pasos concretos para alcanzarlas, confiando en que el esfuerzo sostenido producirá mejores frutos a largo plazo.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=y3834-311gM",
  spotifyUrl: "https://open.spotify.com/track/4j9X0o0qX6q2J8p1j8Y70g"
  }
},
  {
  day: 114,
  month: "abril",
  monthId: 4,
  title: "Excelencia en el Trabajo: Un Legado para el Señor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una estrategia para el éxito, sino una expresión de nuestra fe. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si nuestro trabajo fuera directamente para Dios. Esto transforma nuestra perspectiva: ya no trabajamos solo por un salario o reconocimiento humano, sino con un propósito divino. Un líder cristiano entiende que su empresa, sus productos y sus servicios son una extensión de su mayordomía. Al buscar la excelencia en cada detalle, no solo honramos a Dios, sino que también construimos un legado de impacto que refleja sus valores y atrae bendición. Esta mentalidad fomenta la integridad, la innovación y un servicio al cliente superior, elementos cruciales para el crecimiento sostenible y la influencia positiva en el mercado.",
  quote: {
  text: "Liderar es influir, nada más y nada menos.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área específica de tu negocio o de tu rol de liderazgo donde puedas elevar el estándar de excelencia. Identifica una tarea o proceso que puedas mejorar significativamente, haciéndolo con la mentalidad de que lo estás haciendo directamente para el Señor. Luego, implementa los cambios necesarios y observa cómo esta nueva perspectiva impacta la calidad de tu trabajo y la motivación de tu equipo.",
  song: {
  title: "Lo Harás Otra Vez (Do It Again)",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=es34Nr2JovU",
  spotifyUrl: "https://open.spotify.com/track/3vcfHBHNmN5LG8otn8j4Kg"
  }
},
  {
  day: 115,
  month: "Abril",
  monthId: 4,
  title: "Planificación Divina y Acción Diligente",
  verse: {
  text: "Encomienda al Señor tus acciones, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación es la piedra angular del éxito. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las estrategias y los números. Proverbios 16: 3 nos invita a encomendar nuestras acciones al Señor, lo que implica buscar su dirección y sabiduría en cada paso. Esto no significa pasividad, sino una diligencia activa guiada por la fe. Al alinear nuestros planes con la voluntad de Dios, no solo encontramos propósito, sino que también experimentamos una afirmación y un respaldo divino que trasciende la lógica humana. La verdadera prosperidad y el impacto duradero provienen de un liderazgo que confía plenamente en el plan maestro de Dios, ejecutando con excelencia y una visión celestial.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino, y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio, dedica tiempo a la oración y a la reflexión, buscando la dirección de Dios. Luego, actúa con diligencia y confianza, sabiendo que Él afirmará tus pasos si tus intenciones están alineadas con Su propósito.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0MXSa7v7fm7QGs5JssOu67"
  }
},
  {
  day: 116,
  month: "abril",
  monthId: 4,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Sin una dirección clara, los esfuerzos se dispersan y la energía se disipa, llevando a la ineficacia y al desorden. En el ámbito empresarial cristiano, la visión no solo se refiere a metas financieras o de mercado, sino también a un propósito superior que honra a Dios y sirve a la comunidad. Un líder con visión inspira a su equipo, fomenta la disciplina y alinea cada acción con un objetivo trascendente. Mantener la visión viva y comunicarla constantemente es crucial para evitar que la organización \"se desenfrene\", asegurando que todos comprendan su papel en el panorama general y trabajen con un propósito unificado. La claridad de propósito es la base de la gestión efectiva y el crecimiento sostenible.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Identifica al menos una acción concreta para comunicar o reforzar esa visión entre tus colaboradores.",
  song: {
  title: "Visión",
  artist: "Un Corazón",
  youtubeUrl: "https://www.youtube.com/watch?v=12345abcdeF",
  spotifyUrl: "https://open.spotify.com/track/67890fghijK"
  }
},
  {
  day: 117,
  month: "Abril",
  monthId: 4,
  title: "Fortaleza y Hazañas a Través del Conocimiento Divino",
  verse: {
  text: "... pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "En el mundo empresarial, la fortaleza no solo se mide por los recursos financieros o la capacidad estratégica, sino también por la resiliencia y la visión que provienen de un fundamento sólido. Daniel 11: 32 nos recuerda que un profundo conocimiento de Dios es la fuente de una fuerza inquebrantable y la capacidad de lograr grandes hazañas. Para el líder cristiano, esto significa que la fe no es un aspecto separado de los negocios, sino el pilar que sostiene cada decisión y cada desafío. Al buscar la sabiduría divina, los empresarios pueden enfrentar la adversidad con confianza, innovar con propósito y liderar con integridad, transformando los obstáculos en oportunidades para manifestar el poder de Dios en su esfera de influencia. Este conocimiento nos impulsa a ir más allá de nuestras limitaciones, confiando en que Dios nos capacita para alcanzar lo que humanamente parece imposible.",
  quote: {
  text: "La disciplina tarde o temprano supera al talento.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde te sientas limitado o enfrentes un gran desafío. Dedica tiempo a buscar la dirección de Dios a través de la oración y la lectura bíblica, pidiéndole sabiduría y fortaleza para superar ese obstáculo. Luego, aplica una disciplina constante en esa área, confiando en que el conocimiento y la guía divina te permitirán lograr hazañas que antes parecían inalcanzables.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  }
},
  {
  day: 119,
  month: "Abril",
  monthId: 4,
  title: "Confianza en la Visión Divina",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, Proverbios 16: 3 nos invita a ir más allá de la mera planificación humana, a encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y búsqueda de la dirección divina en cada decisión. Para el líder cristiano, confiar en Dios es reconocer que Su sabiduría supera cualquier análisis de mercado o proyección financiera. Al alinear nuestros planes con Su propósito, encontramos una estabilidad y una claridad que trascienden las circunstancias. Esta confianza nos permite perseverar en medio de la incertidumbre, sabiendo que nuestros pensamientos y proyectos serán afirmados por Aquel que tiene el control absoluto. Es un llamado a la humildad y a la fe activa en la gestión de nuestros negocios.",
  quote: {
  text: "La fe no es la ausencia de miedo, sino la capacidad de actuar a pesar de él.",
  author: "Billy Graham"
  },
  challenge: "Identifica un área clave en tu negocio donde te sientas abrumado o incierto. Dedica tiempo a la oración y a la reflexión, encomendando esa situación a Dios. Luego, toma una decisión o un paso de acción basado en la sabiduría que recibas, confiando en que Él afirmará tus pasos. Documenta el proceso y los resultados en tu diario de liderazgo.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=33b11e2y500",
  spotifyUrl: "https://open.spotify.com/track/4j9x1f2h1o8z1z1z1z1z1z"
  },
  movie: {
    title: "Apollo 13",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=KtEIMC58sZo",
    description:
      "La historia real de la misión espacial que enfrentó un desastre catastrófico, demostrando cómo el trabajo en equipo, la innovación bajo presión y la fe pueden superar lo imposible.",
  },
},
  {
  day: 120,
  month: "abril",
  monthId: 4,
  title: "La Diligencia en la Administración de los Talentos",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Mateo 25: 21 (NTV)"
  },
  reflection: "El pasaje de Mateo 25: 21, parte de la parábola de los talentos, resalta un principio fundamental para el liderazgo empresarial cristiano: la fidelidad en la administración. Como empresarios y líderes, se nos han confiado recursos, habilidades y oportunidades que no son inherentemente nuestros, sino dones de Dios. La 'pequeña cantidad' mencionada puede ser nuestro capital inicial, nuestro equipo, nuestra influencia o incluso nuestro tiempo. La clave no reside en la magnitud de lo que se nos da, sino en cómo lo gestionamos. Ser 'buenos y fieles' implica diligencia, sabiduría y una búsqueda constante de maximizar el impacto de estos talentos para el bien común y la gloria de Dios. Esta fidelidad no solo honra a Dios, sino que también construye una base sólida para un crecimiento sostenible y una mayor responsabilidad en el ámbito empresarial.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Evalúa hoy un área de tu negocio o liderazgo donde sientes que podrías ser más diligente. Desarrolla un plan de acción concreto para mejorar la administración de ese recurso o talento, buscando maximizar su potencial y su impacto.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s0a51sX4J7g",
  spotifyUrl: "https://open.spotify.com/track/62g1z0h8r5o1v8w2p1g5o9"
  }
},
  {
  day: 121,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Clara en la Adversidad",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión, no solo en la vida personal sino especialmente en el ámbito empresarial. En un entorno de negocios volátil, incierto, complejo y ambiguo (VUCA), una visión clara actúa como una brújula inquebrantable. Los líderes cristianos deben anclar su visión en principios eternos, permitiendo que esta guíe cada decisión estratégica y operativa. Cuando la adversidad golpea, es la visión compartida la que cohesiona al equipo, inspira resiliencia y mantiene el rumbo hacia los objetivos a largo plazo. Sin una visión definida, las empresas pueden caer en la improvisación y la ineficacia, perdiendo su propósito y potencial de impacto. Mantener la ley, en este contexto, implica operar con integridad y sabiduría divina, lo que conduce a una prosperidad duradera y significativa.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar y comunicar la visión de tu empresa o proyecto. Asegúrate de que cada miembro de tu equipo comprenda cómo su rol contribuye a esa visión y cómo pueden mantener la integridad en su ejecución diaria.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2oYa7geFquIGxUMbRzqqqQ"
  }
},
  {
  day: 122,
  month: "Mayo",
  monthId: 5,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia y el propósito son pilares fundamentales. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si estuviéramos sirviendo directamente a Dios. Esto transforma la perspectiva del trabajo, elevándolo de una mera obligación a una oportunidad de honrar a nuestro Creador. Para el líder cristiano, esto significa ir más allá de las expectativas, buscando la calidad en cada producto, servicio o decisión. Implica una ética de trabajo inquebrantable, donde la integridad y la pasión se reflejan en cada interacción. Al operar con esta mentalidad, no solo se construye un negocio exitoso, sino que también se deja un legado de impacto que trasciende lo material, inspirando a otros a buscar un propósito mayor en su labor diaria.",
  quote: {
  text: "El liderazgo no es acerca de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio o equipo donde la calidad o el servicio podrían mejorar significativamente. Desarrolla un plan de acción para elevar los estándares, motivando a tu equipo a trabajar con una mentalidad de excelencia, recordando que cada esfuerzo contribuye a un propósito mayor. Evalúa los resultados al final de la semana.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s359-x3j5wQ",
  spotifyUrl: "https://open.spotify.com/track/0xX9s7v2o1k9q0t5x7w0w0"
  }
},
  {
  day: 123,
  month: "Mayo",
  monthId: 5,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia a menudo se mide por la rentabilidad y el éxito en el mercado. Sin embargo, para el líder cristiano, la motivación va más allá de las ganancias. Colosenses 3: 23 nos llama a realizar cada tarea con un corazón entregado, como si estuviéramos sirviendo directamente a Dios. Esto transforma la visión del trabajo, elevándolo de una mera transacción comercial a un acto de adoración. Al operar con esta perspectiva, cada decisión, cada producto y cada interacción con el cliente se infunde con un propósito superior, buscando no solo la satisfacción humana, sino la gloria divina. Esta mentalidad no solo mejora la calidad del trabajo, sino que también edifica un legado de impacto que trasciende lo terrenal.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área clave en tu negocio o proyecto donde puedas elevar el estándar de excelencia, no solo por resultados, sino como una ofrenda a Dios. Desarrolla un plan de acción para implementar mejoras significativas en esa área, asegurándote de que cada paso refleje un compromiso con la integridad y el servicio, y evalúa el impacto de esta nueva perspectiva en tu equipo y tus clientes.",
  song: {
  title: "Tú Estás Aquí",
  artist: "Jesús Adrián Romero ft. Marcela Gándara",
  youtubeUrl: "https://www.youtube.com/watch?v=-ALOwx-RHm4",
  spotifyUrl: "https://open.spotify.com/track/0z9DXuG0neo1ohRJNzujM7"
  }
},
  {
  day: 124,
  month: "Mayo",
  monthId: 5,
  title: "La Confianza en Dios y la Planificación Estratégica",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que nuestra planificación debe ir acompañada de una profunda confianza en Dios. Encomendar nuestras obras al Señor no significa pasividad, sino reconocer que Él es la fuente de toda sabiduría y que Sus propósitos prevalecerán. Al integrar la fe en nuestra estrategia, buscamos Su dirección en cada decisión, desde la visión a largo plazo hasta las operaciones diarias. Esta perspectiva nos permite enfrentar los desafíos con paz, sabiendo que, aunque nuestros planes sean meticulosos, es la bendición de Dios la que afirma nuestros pasos y nos conduce a resultados que van más allá de nuestra propia capacidad.",
  quote: {
  text: "La fe y el trabajo duro son la combinación perfecta para el éxito en cualquier empresa.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración y a encomendar tus planes a Dios. Luego, procede con diligencia y excelencia, confiando en que Él afirmará tus pensamientos y te guiará.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y201X2-s3oU",
  spotifyUrl: "https://open.spotify.com/track/303s1l32qf4z9x7s1j2k2k"
  }
},
  {
  day: 125,
  month: "Mayo",
  monthId: 5,
  title: "Conocimiento Divino, Acciones Extraordinarias",
  verse: {
  text: "...pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "El conocimiento de Dios no es meramente teórico; es una fuente de fortaleza y capacidad para el líder cristiano en el ámbito empresarial. Daniel 11: 32 nos asegura que aquellos que realmente conocen a su Dios no solo serán fuertes, sino que también realizarán grandes hazañas. En el mundo de los negocios, esto se traduce en una visión clara, una ética inquebrantable y la audacia para innovar y liderar con integridad. Conocer a Dios implica entender sus principios de justicia, diligencia y servicio, aplicándolos en cada decisión empresarial. Esta conexión profunda con lo divino empodera al empresario para enfrentar desafíos con fe, tomar decisiones sabias y construir un legado que trascienda lo material, impactando positivamente a su equipo, clientes y comunidad.",
  quote: {
  text: "La única forma de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Identifica un área en tu negocio donde la falta de conocimiento o la debilidad te impiden avanzar. Busca la sabiduría de Dios a través de la oración y el estudio de Su Palabra, y luego toma una acción audaz y estratégica para transformar esa debilidad en una fortaleza, confiando en que Él te capacitará para lograr hazañas.",
  song: {
  title: "Cantamos Aleluya",
  artist: "Gerson Jonatan",
  youtubeUrl: "https://www.youtube.com/watch?v=C8eu8O1AFL4",
  spotifyUrl: "https://open.spotify.com/track/4e7UHgichPiKV3Ar2XIkbz"
  }
},
  {
  day: 126,
  month: "Mayo",
  monthId: 5,
  title: "Principios Eternos en un Mundo Cambiante",
  verse: {
  text: "Lo que ya ha acontecido volverá a acontecer; lo que ya se ha hecho se volverá a hacer ¡y no hay nada nuevo bajo el sol! Hay quien llega a decir: «¡Mira que esto sí es una novedad!» Pero eso ya existía desde siempre, entre aquellos que nos precedieron.",
  reference: "Eclesiastés 1: 9-10"
  },
  reflection: "En el vertiginoso mundo de los negocios, a menudo nos sentimos presionados a buscar la próxima gran innovación o la última tendencia. Sin embargo, Eclesiastés 1: 9-10 nos recuerda una verdad profunda: no hay nada realmente nuevo bajo el sol. Esto no minimiza la creatividad o el progreso, sino que nos invita a mirar más allá de las modas pasajeras y a identificar los principios fundamentales que perduran. Para el empresario cristiano, esto significa anclar nuestras estrategias en valores y verdades bíblicas que son atemporales. Al comprender que muchos de los desafíos y soluciones actuales tienen raíces en experiencias pasadas, podemos abordar la innovación con sabiduría, construyendo sobre cimientos sólidos en lugar de perseguir lo efímero. La verdadera ventaja competitiva a menudo reside en la aplicación consistente de principios probados, adaptados a contextos modernos.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda por el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un 'nuevo' concepto o tendencia en tu industria. Reflexiona sobre cómo este concepto se conecta con principios empresariales o bíblicos que ya existen. Desarrolla una estrategia para aplicarlo en tu negocio, asegurándote de que esté fundamentado en verdades atemporales y no solo en la novedad.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=0hXg8021m20",
  spotifyUrl: "https://open.spotify.com/track/4j9gq2y6z0w5q1z1g7x2y0"
  },
  movie: {
    title: "Flash of Genius (Un Hombre Brillante)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=qhZc2pZ5EXQ",
    description:
      "La historia real de Robert Kearns, quien luchó contra las grandes automotrices por el reconocimiento de su invento del limpiaparabrisas intermitente, demostrando que la justicia vale la pena.",
  },
},
  {
  day: 127,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Un verdadero líder inspira a su equipo a alcanzar metas que nunca creyeron posibles, transformando la visión en realidad con pasión y propósito.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos recuerda que sin una visión clara, tanto las personas como las organizaciones pueden perder el rumbo. Para el empresario cristiano, esta visión no solo debe ser estratégica y orientada al mercado, sino también arraigada en principios divinos. Un líder con visión inspira a su equipo, fomenta la innovación y establece metas que trascienden el beneficio económico, buscando un impacto positivo en la sociedad y el reino de Dios. Es fundamental comunicar esta visión de manera constante y asegurar que cada miembro del equipo comprenda su papel en alcanzarla, transformando el trabajo diario en un propósito mayor.",
  quote: {
  text: "Un verdadero líder inspira a su equipo a alcanzar metas que nunca creyeron posibles, transformando la visión en realidad con pasión y propósito.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es clara, inspiradora y comunicada eficazmente a tu equipo? Identifica al menos tres acciones concretas para fortalecer y difundir esa visión entre tus colaboradores, asegurando que todos remen en la misma dirección con un propósito compartido.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0_3_0_0_0_0",
  spotifyUrl: "https://open.spotify.com/track/0_0_0_0_0"
  }
},
  {
  day: 128,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia en el Trabajo del Señor",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "La diligencia es una virtud fundamental tanto en la vida espiritual como en el ámbito empresarial. Este versículo nos insta a ser obreros aprobados, lo que implica un compromiso con la excelencia y la verdad en todo lo que hacemos. En el contexto de los negocios, esto se traduce en una ética de trabajo intachable, la búsqueda constante de la mejora y la honestidad en todas las transacciones. Un líder cristiano debe esforzarse por ser un ejemplo de integridad y dedicación, no solo para sus empleados y clientes, sino también como testimonio de su fe. La diligencia en el trabajo no solo produce resultados tangibles, sino que también edifica un legado de confianza y respeto.",
  quote: {
  text: "El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo.",
  author: "Simon Sinek"
  },
  challenge: "Evalúa un área de tu negocio o liderazgo donde puedas aplicar mayor diligencia y excelencia. Desarrolla un plan de acción para mejorar en esa área durante la próxima semana, buscando no solo la eficiencia, sino también la integridad y el impacto positivo.",
  song: {
  title: "Gracia Sublime Es",
  artist: "En Espíritu Y En Verdad, Omar Rodriguez Music",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_1W4y-12A",
  spotifyUrl: "https://open.spotify.com/track/621B41a5f4f5f5f5f5f5f5"
  }
},
  {
  day: 129,
  month: "Mayo",
  monthId: 5,
  title: "Liderazgo con Propósito y Dirección Divina",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en la eficiencia y la ejecución impecable. Sin embargo, este versículo nos recuerda que antes de la acción, está la intención y la dirección. Encomendar nuestras obras a Dios no es un acto pasivo, sino una declaración de dependencia y una búsqueda de sabiduría superior. Un líder cristiano entiende que el verdadero éxito no solo se mide por los resultados financieros, sino por el impacto y la integridad con la que se logran. Al alinear nuestros planes y estrategias con los principios divinos, nuestros pensamientos y decisiones se fortalecen, proporcionando una base sólida para el liderazgo y la gestión. Esto nos permite navegar los desafíos del mercado con una visión clara y un propósito inquebrantable, sabiendo que nuestra labor tiene un significado trascendente.",
  quote: {
  text: "La gestión consiste en hacer las cosas bien; el liderazgo consiste en hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una decisión clave que debas tomar en tu negocio esta semana. Antes de actuar, dedica tiempo a la oración y la reflexión, buscando la guía divina. Evalúa si tu decisión no solo es eficiente, sino también moralmente correcta y alineada con tus valores cristianos. Luego, procede con confianza, encomendando el resultado a Dios.",
  song: {
  title: "Vasos de Barro",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=bJh3KhTCTO8",
  spotifyUrl: "https://open.spotify.com/intl-es/track/79NDChR1S9Dul7wOhViNz9"
  }
},
  {
  day: 130,
  month: "Mayo",
  monthId: 5,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la motivación detrás de nuestro trabajo es tan crucial como el trabajo mismo. Colosenses 3: 23-24 nos llama a una ética laboral superior, donde cada tarea, cada decisión y cada interacción se realizan con la misma dedicación que si estuviéramos sirviendo directamente a Cristo. Esto transforma la visión del trabajo de una mera búsqueda de ganancias a una oportunidad para glorificar a Dios. Al operar con esta mentalidad, los líderes y emprendedores cristianos no solo buscan la excelencia en sus productos o servicios, sino que también cultivan un ambiente de integridad, servicio y propósito que impacta positivamente a empleados, clientes y la comunidad. Reconocer que nuestra recompensa final viene del Señor nos libera de la presión de la aprobación humana y nos impulsa a dar lo mejor de nosotros en todo momento.",
  quote: {
  text: "La verdadera prueba de un líder no es la cantidad de seguidores que tiene, sino cuántos líderes crea.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio esta semana. Realízalo con la máxima dedicación y excelencia, imaginando que tu cliente o supervisor es el mismo Cristo. Observa cómo esta perspectiva cambia tu enfoque, tu actitud y la calidad de tu trabajo. Luego, comparte esta visión con tu equipo, inspirándolos a encontrar un propósito más elevado en sus propias responsabilidades.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1L3g_1X9p-o",
  spotifyUrl: "https://open.spotify.com/track/62g1g593j5Xj1x70v02J4P"
  }
},
  {
  day: 131,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto las personas como las organizaciones pueden perder el rumbo. En el ámbito empresarial cristiano, la visión no solo se trata de metas financieras, sino de un propósito superior que honre a Dios y sirva a la comunidad. Un líder con visión inspira a su equipo, fomenta la innovación y establece una cultura de excelencia. Es crucial comunicar esta visión de manera constante, asegurándose de que cada miembro del equipo comprenda su papel en la consecución de los objetivos. La claridad en la visión empresarial es un pilar fundamental para el crecimiento sostenible y el impacto positivo.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y articular la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y se sientan parte de ella. Si es necesario, organiza una sesión para reafirmar o redefinir esta visión colectivamente.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=Xwz86-i2t1k",
  spotifyUrl: "https://open.spotify.com/track/6979z881x08J3z31f7x2hQ"
  }
},
  {
  day: 132,
  month: "mayo",
  monthId: 5,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, la búsqueda de la excelencia es una constante. Colosenses 3: 23 nos invita a elevar esa búsqueda a un nivel superior, realizando cada tarea, cada proyecto, cada interacción comercial como si fuera directamente para Dios. Esta perspectiva transforma la motivación: ya no se trata solo de ganancias o reconocimiento humano, sino de honrar a un propósito mayor. Para el empresario y líder cristiano, esto significa que la integridad, la calidad y el servicio al cliente no son meras estrategias de negocio, sino expresiones de su fe. Al trabajar con un corazón entregado, se cultiva una cultura de excelencia que no solo beneficia a la empresa, sino que también refleja los valores del Reino en el mercado, dejando un legado de impacto que trasciende lo material.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas o proyectos actuales en tu negocio. ¿Cómo podrías abordarlo con una mentalidad de 'hacerlo para el Señor'? Identifica una acción concreta que puedas tomar esta semana para elevar la calidad o la ética en ese proyecto, reflejando un compromiso más profundo con la excelencia y el servicio.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2L1t702jX6Q",
  spotifyUrl: "https://open.spotify.com/track/65f6s76s40x40X20X40X40"
  }
},
  {
  day: 133,
  month: "Mayo",
  monthId: 5,
  title: "La Sabiduría de la Planificación Divina",
  verse: {
  text: "Pon todo lo que hagas en manos del SEÑOR, y tus planes tendrán éxito.",
  reference: "Proverbios 16: 3 (NTV)"
  },
  reflection: "Este versículo nos invita a una profunda reflexión sobre la gestión y el liderazgo en el ámbito empresarial. En un mundo donde la planificación estratégica es crucial, Proverbios 16: 3 nos recuerda que, más allá de nuestras habilidades y esfuerzos, el éxito duradero proviene de encomendar nuestros planes al Señor. Esto no significa pasividad, sino una dependencia activa y una búsqueda de dirección divina en cada decisión. Un líder cristiano entiende que su visión y sus estrategias deben alinearse con principios superiores, buscando no solo la rentabilidad, sino también el impacto y la integridad. Al poner nuestros proyectos en Sus manos, no solo buscamos Su bendición, sino también Su sabiduría para \"hacer las cosas correctas\" y no solo \"hacer las cosas correctamente\".",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un plan estratégico actual en tu negocio o emprendimiento. Identifica al menos una área donde puedes buscar más dirección divina y un paso práctico para integrarla en tu toma de decisiones. Luego, encomienda ese plan y sus posibles resultados al Señor en oración.",
  song: {
  title: "Creo En Ti",
  artist: "Julio Melgar",
  youtubeUrl: "https://www.youtube.com/watch?v=xJ_ZZkM5fGY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1ZdBf0NZR4oi7Gtxyy4E9Q"
  },
  movie: {
    title: "Temple Grandin",
    platform: "HBO",
    youtubeUrl: "https://www.youtube.com/watch?v=cpkN0JdXRpM",
    description:
      "La historia real de una mujer con autismo que revolucionó la industria ganadera con sus innovaciones, demostrando que las limitaciones pueden convertirse en fortalezas únicas.",
  },
},
  {
  day: 134,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Afirmada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, como líderes cristianos, nuestra dependencia no debe limitarse a la sabiduría humana. Proverbios 16: 3 nos invita a un principio superior: encomendar nuestras obras al Señor. Esto implica no solo orar por nuestros proyectos, sino también alinear nuestras intenciones, valores y decisiones con los principios divinos. Cuando sometemos nuestros planes a Dios, Él no solo los bendice, sino que también los refina y los afirma. Esta confianza nos libera de la ansiedad y nos otorga una claridad de propósito que trasciende cualquier análisis de mercado. Un liderazgo que se apoya en la fe es un liderazgo que construye sobre cimientos inquebrantables, asegurando que cada paso esté guiado por una visión que honra a Dios y genera un impacto duradero.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un proyecto o decisión clave en tu negocio esta semana. Antes de avanzar, dedica tiempo a la oración, pidiendo a Dios dirección y sabiduría. Luego, revisa tus planes y ajusta tus acciones para asegurar que reflejen los valores y principios que Él te ha revelado. Observa cómo esta dependencia transforma tu perspectiva y los resultados.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s9w0f2t0z_o",
  spotifyUrl: "https://open.spotify.com/track/6211832sXqg875gQ50Q280"
  }
},
  {
  day: 135,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia en la Gestión de Recursos",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  reference: "Proverbios 18: 9"
  },
  reflection: "Este proverbio nos advierte sobre la importancia de la diligencia en todas nuestras tareas, especialmente en el ámbito empresarial. La negligencia no solo implica una falta de esfuerzo, sino que puede llevar a la destrucción de recursos, oportunidades y la reputación. En el liderazgo cristiano, la gestión de recursos (tiempo, talento, finanzas) debe reflejar un compromiso con la excelencia, honrando a Dios con cada acción. Un líder diligente no solo busca la eficiencia, sino que también inspira a su equipo a operar con integridad y propósito, entendiendo que cada esfuerzo contribuye al bienestar común y a la misión de la empresa.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área de tu negocio donde la negligencia podría estar causando pérdidas o ineficiencias. Desarrolla un plan de acción para implementar mejoras y asigna responsabilidades claras para asegurar la diligencia en esa área.",
  song: {
  title: "Comenzar De Cero",
  artist: "Tercer Cielo",
  youtubeUrl: "https://www.youtube.com/watch?v=MnFGS-1ge4E",
  spotifyUrl: "https://open.spotify.com/track/7Kop0XtAYqTkFzUdGD3BLv"
  }
},
  {
  day: 136,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia como Semilla de Cosecha Abundante",
  verse: {
  text: "La mano negligente empobrece; mas la mano de los diligentes enriquece.",
  reference: "Proverbios 10: 4"
  },
  reflection: "La diligencia en el ámbito empresarial no es solo una virtud, sino una estrategia fundamental para el éxito sostenible. Proverbios 10: 4 nos recuerda que la negligencia conduce a la escasez, mientras que la diligencia abre las puertas a la prosperidad. En el liderazgo cristiano, esto se traduce en una administración responsable de los talentos y recursos que Dios nos ha confiado. Un líder diligente no solo trabaja con esmero, sino que también planifica, ejecuta con excelencia y busca constantemente mejorar. Esta actitud proactiva no solo beneficia a la empresa, sino que también glorifica a Dios al reflejar su carácter de orden y productividad. La diligencia es la semilla que, sembrada con fe y esfuerzo, produce una cosecha abundante en todos los aspectos de la vida y el negocio.",
  quote: {
  text: "La vida puede ser aburrida al menos que pongas algo de esfuerzo en ella.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde la negligencia ha generado estancamiento o pérdidas. Desarrolla un plan de acción concreto para aplicar la diligencia en esa área durante la próxima semana, estableciendo metas claras y medibles. Evalúa los resultados al final de la semana y ajusta tu enfoque según sea necesario.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 137,
  month: "Mayo",
  monthId: 5,
  title: "Trabajo con Propósito: Un Llamado Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23 (RVR1960)"
  },
  reflection: "Colosenses 3: 23 nos insta a realizar cada tarea con dedicación y excelencia, no como un mero cumplimiento de deberes terrenales, sino como una ofrenda a Dios. En el ámbito empresarial, esto se traduce en una ética de trabajo impecable, donde la integridad, la calidad y el servicio al prójimo son primordiales. Cada decisión, cada proyecto, cada interacción con clientes y colaboradores se convierte en una oportunidad para honrar a nuestro Creador. Al ver nuestro trabajo como un llamado divino, trascendemos la búsqueda de ganancias personales para enfocarnos en generar un impacto positivo y duradero, reflejando los valores del Reino en el mercado. Esta perspectiva eleva el propósito de nuestro emprendimiento, transformándolo en una plataforma para la gloria de Dios.",
  quote: {
  text: "El trabajo se vuelve un llamado cuando se hace para el Señor.",
  author: "C.S. Lewis"
  },
  challenge: "Identifica una tarea en tu negocio que consideres rutinaria o poco inspiradora. Comprométete a realizarla esta semana con una actitud renovada, enfocándote en cómo puedes hacerla con excelencia, como si la estuvieras haciendo directamente para Dios. Observa cómo cambia tu perspectiva y el resultado.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3xTHbxcvbj7xLHOuTqDAdF"
  }
},
  {
  day: 138,
  month: "Mayo",
  monthId: 5,
  title: "Confianza y Planificación Estratégica",
  verse: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas. Enfócate en la efectividad.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación es fundamental, pero la confianza en Dios es el cimiento que sostiene todo esfuerzo. Proverbios 16: 3 nos invita a entregar nuestras obras al Señor, asegurando que nuestros planes se establecerán. Esto no significa pasividad, sino una diligencia activa acompañada de una dependencia espiritual. Un líder cristiano entiende que su visión y estrategias deben alinearse con principios divinos. Al encomendar nuestros proyectos, buscamos sabiduría para tomar decisiones, discernimiento para enfrentar desafíos y paz en medio de la incertidumbre. Esta perspectiva transforma la gestión de riesgos en una oportunidad para ver la providencia de Dios, y la búsqueda de resultados en un acto de fe y obediencia. La verdadera afirmación de nuestros pensamientos y planes proviene de esta conexión.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas. Enfócate en la efectividad.",
  author: "Peter Drucker"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración, encomendando tus planes a Dios y pidiendo su dirección. Luego, procede con diligencia y confianza.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t4-4-v_0o",
  spotifyUrl: "https://open.spotify.com/track/4j4mQe0q9eQ2g0m3z3j1gC"
  }
},
  {
  day: 139,
  month: "Mayo",
  monthId: 5,
  title: "De la Intención a la Acción: La Diligencia que Transforma",
  verse: {
  text: "En toda labor hay fruto; Mas las vanas palabras de los labios empobrecen.",
  reference: "Proverbios 14: 23"
  },
  reflection: "Este proverbio nos confronta con una verdad fundamental en el mundo empresarial y en la vida cristiana: la diferencia entre la intención y la ejecución. Muchos líderes y emprendedores tienen ideas brillantes y planes ambiciosos, pero sin la diligencia y el trabajo arduo, estas ideas permanecen como meras palabras. La Biblia nos enseña que el fruto, el resultado tangible, proviene del esfuerzo y la labor. En el liderazgo, esto significa no solo diseñar estrategias, sino también implementarlas con disciplina y perseverancia. La fe sin obras es muerta, y de igual manera, un plan sin acción es estéril. Debemos ser hacedores, no solo oyentes o planificadores, confiando en que Dios bendecirá el trabajo de nuestras manos.",
  quote: {
  text: "Los planes son solo buenas intenciones a menos que degeneren inmediatamente en trabajo duro.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un plan o proyecto importante en tu negocio o ministerio que ha estado estancado. Desarrolla un plan de acción concreto para los próximos 7 días, asignando tareas específicas y plazos. Comprométete a ejecutar al menos una de esas tareas cada día, transformando la intención en acción tangible.",
  song: {
  title: "Haz Aumentar Mi Fe",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s_x450s_X4k",
  spotifyUrl: "https://open.spotify.com/track/4j4h2qX3y7X8q8w7X8q8w7X8q8w"
  }
},
  {
  day: 140,
  month: "Mayo",
  monthId: 5,
  title: "La Dirección Divina en la Estrategia Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la planificación estratégica y la ejecución diligente son pilares fundamentales. Sin embargo, Proverbios 16: 3 nos invita a ir más allá de la mera capacidad humana, recordándonos la importancia de encomendar nuestras obras al Señor. Esto no significa una pasividad en la toma de decisiones, sino una dependencia activa y una búsqueda de la guía divina en cada paso. Un líder cristiano entiende que sus planes, por muy bien elaborados que estén, alcanzan su verdadero potencial cuando están alineados con la voluntad de Dios. Al confiar nuestros proyectos y estrategias a Él, no solo encontramos paz, sino que también permitimos que nuestros pensamientos y decisiones sean afirmados y dirigidos hacia un propósito mayor, asegurando una base sólida y una visión clara para el éxito sostenible de nuestro negocio.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión estratégica importante esta semana, dedica tiempo a la oración y a la reflexión, pidiendo a Dios que afirme tus pensamientos y dirija tus pasos. Luego, documenta cómo esta práctica influyó en tu enfoque y en los resultados obtenidos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X5g435_1Q",
  spotifyUrl: "https://open.spotify.com/track/62283w22941sQ8b0j4t0vB"
  },
  movie: {
  title: "A Prueba de Fuego",
  platform: "Amazon Prime Video",
  description: "Un bombero que enfrenta una crisis matrimonial descubre el poder del amor incondicional a través de un desafío de 40 días, aplicando principios de fe y compromiso en su vida personal y profesional."
  }
},
  {
  day: 141,
  month: "Mayo",
  monthId: 5,
  title: "Afirmando tus Planes con Propósito Divino",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las proyecciones financieras y los análisis de mercado. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, lo que implica alinear nuestros planes y decisiones con Su voluntad. Esto no significa pasividad, sino una dependencia activa en Su sabiduría. Al integrar la fe en nuestra estrategia, nuestros pensamientos y proyectos adquieren una base sólida y un propósito trascendente. Esta conexión divina nos brinda claridad, dirección y la confianza de que nuestros esfuerzos están respaldados por un poder superior, transformando el negocio en un vehículo para Su gloria.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos actuales. Identifica al menos una área donde puedas integrar más explícitamente principios bíblicos o buscar la dirección de Dios. Luego, ora específicamente por esa área, encomendando tus esfuerzos y decisiones al Señor, confiando en que Él afirmará tus pasos y te guiará hacia el éxito con propósito.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y3Yj6j7w_0o",
  spotifyUrl: "https://open.spotify.com/track/0q8J9y9z7f2x5x4x3x2x1x"
  }
},
  {
  day: 142,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia como Fundamento del Éxito Empresarial",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos ofrece una verdad fundamental para el mundo empresarial: la diligencia y la planificación son precursores de la prosperidad. En un entorno de negocios dinámico, es fácil caer en la trampa de la prisa, buscando resultados inmediatos sin una estrategia sólida. Sin embargo, este versículo nos advierte que la precipitación conduce a la escasez. Un líder cristiano debe cultivar la paciencia y la meticulosidad, invirtiendo tiempo en la elaboración de planes bien pensados y ejecutándolos con constancia. La abundancia no es fruto de la suerte, sino de un esfuerzo sostenido y una gestión prudente. La diligencia en la planificación y ejecución de proyectos, la administración de recursos y el desarrollo de equipos, son pilares que construyen un legado de impacto duradero y un éxito sostenible, honrando a Dios en cada paso.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar y refinar tu plan estratégico, asegurándote de que cada paso esté alineado con tus objetivos a largo plazo y se ejecute con diligencia. Identifica un área donde la prisa te ha llevado a errores y comprométete a aplicar un enfoque más meditado y diligente.",
  song: {
  title: "Tú Harás",
  artist: "Living",
  youtubeUrl: "https://www.youtube.com/watch?v=03z-l_1880g",
  spotifyUrl: "https://open.spotify.com/track/4j9013v9f0X9009z0z0z0z"
  }
},
  {
  day: 143,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia y la Visión Estratégica",
  verse: {
  text: "Los proyectos del diligente ciertamente son ventaja, mas todo el que se apresura, ciertamente llega a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Este proverbio resalta la importancia de la diligencia y la planificación estratégica en cualquier emprendimiento. En el mundo empresarial, la prisa y la falta de previsión a menudo conducen a errores costosos y al fracaso. La diligencia implica no solo trabajar arduamente, sino también hacerlo con sabiduría, analizando cada paso y considerando las implicaciones a largo plazo. Un líder cristiano debe cultivar la paciencia y la disciplina para desarrollar proyectos sólidos, buscando la guía divina en cada decisión. La verdadera ventaja no proviene de la velocidad, sino de la solidez y la visión con la que se construyen los cimientos de un negocio, asegurando una prosperidad sostenible y con propósito.",
  quote: {
  text: "Un líder es aquel que conoce el camino, recorre el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un proyecto actual en tu negocio o emprendimiento. ¿Estás actuando con diligencia y planificación, o te estás apresurando? Dedica tiempo esta semana a revisar tu estrategia, identificar posibles riesgos y ajustar tu plan para asegurar una ejecución más sólida y reflexiva. Busca la sabiduría de Dios en cada paso.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1y1z02f0000",
  spotifyUrl: "https://open.spotify.com/track/1y1z02f0000"
  }
},
  {
  day: 144,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Clara en la Ejecución Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión, no solo en la vida espiritual, sino también en el ámbito empresarial. Sin una visión clara, una empresa puede perder su rumbo, sus equipos pueden desmotivarse y sus esfuerzos carecer de dirección. Una visión bien definida actúa como una brújula, guiando cada decisión estratégica y operativa. Para el empresario cristiano, esta visión debe estar arraigada en principios bíblicos, buscando no solo el éxito financiero, sino también un impacto positivo en la sociedad y el reino de Dios. Mantener esta visión viva y comunicarla constantemente es clave para inspirar a los colaboradores y asegurar que todos trabajen hacia un propósito común, evitando la dispersión y el desenfreno que menciona el proverbio.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Define o revisa la visión de tu empresa. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Luego, establece tres acciones concretas que ejecutarás esta semana para avanzar hacia esa visión, comunicándolas a tu equipo.",
  song: {
  title: "Quiero Más",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=ui1_8SQyt64",
  spotifyUrl: "https://open.spotify.com/track/0diRFo7VGmlbSt9JEeNNeT"
  }
},
  {
  day: 145,
  month: "Mayo",
  monthId: 5,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en resultados, ganancias y reconocimiento. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Nos recuerda que cada tarea, cada decisión y cada interacción en nuestro negocio puede ser un acto de adoración. Cuando trabajamos con excelencia, integridad y un corazón dispuesto, no solo estamos construyendo una empresa, sino que estamos sirviendo a un propósito mayor. Esta mentalidad transforma el trabajo de una simple obligación a una oportunidad para honrar a Dios, sabiendo que nuestra verdadera recompensa proviene de Él, no solo de los logros terrenales. Es un llamado a la mayordomía fiel y a la búsqueda de la excelencia en todo lo que emprendemos.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Reflexiona sobre cómo puedes abordarlo con una actitud de servicio y excelencia, como si lo estuvieras haciendo directamente para el Señor. Luego, ejecuta esa tarea con un renovado sentido de propósito y observa cómo cambia tu perspectiva y el resultado.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=0w5_v_0Q_0Q",
  spotifyUrl: "https://open.spotify.com/track/6x637v546l660f666f666f"
  }
},
  {
  day: 146,
  month: "Mayo",
  monthId: 5,
  title: "La Diligencia como Fundamento del Éxito Duradero",
  verse: {
  text: "El alma del perezoso desea, y nada alcanza; Mas el alma de los diligentes será prosperada.",
  reference: "Proverbios 13: 4"
  },
  reflection: "En el ámbito empresarial, la diligencia no es solo una virtud, sino un pilar fundamental para el éxito. Proverbios 13: 4 nos recuerda que el deseo sin acción es estéril, mientras que el esfuerzo constante y dedicado produce frutos. Un líder cristiano en los negocios entiende que la prosperidad no es un golpe de suerte, sino el resultado de una gestión sabia, trabajo arduo y perseverancia. La diligencia implica no solo trabajar duro, sino también trabajar inteligentemente, buscando la excelencia en cada tarea, desde la planificación estratégica hasta la ejecución diaria. Es la capacidad de mantener el enfoque y la disciplina, incluso cuando los desafíos son grandes, confiando en que Dios bendice el esfuerzo de nuestras manos. Esta actitud no solo beneficia a la empresa, sino que también glorifica a Dios al reflejar su carácter de orden y propósito.",
  quote: {
  text: "La excelencia es el resultado de un esfuerzo constante y una dedicación inquebrantable a la mejora.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde la falta de diligencia ha impedido el progreso. Desarrolla un plan de acción concreto con pasos específicos y plazos para aplicar mayor diligencia esta semana, delegando o ejecutando con mayor intencionalidad.",
  song: {
  title: "Diligencia",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cZg3g7t7t7t7t7t7t7t7t"
  }
},
  {
  day: 147,
  month: "Mayo",
  monthId: 5,
  title: "La Claridad de la Visión Empresarial",
  verse: {
  text: "Y Jehová me respondió, y dijo: Escribe la visión, y declárala en tablas, para que corra el que la leyere.",
  reference: "Habacuc 2: 2 (RVR60)"
  },
  reflection: "En el ámbito empresarial, la visión es el faro que guía cada decisión y acción. Habacuc 2: 2 nos insta a escribir la visión y hacerla clara, un principio fundamental para cualquier líder o emprendedor cristiano. Una visión bien definida no solo proporciona dirección estratégica, sino que también inspira y unifica al equipo. Cuando la visión es comunicada con claridad, cada miembro de la organización puede alinear sus esfuerzos y talentos hacia un objetivo común. Esto fomenta la eficiencia, la innovación y la resiliencia frente a los desafíos. Para el empresario cristiano, esta visión debe estar arraigada en los valores del Reino, buscando no solo el éxito material, sino también un impacto positivo y transformador en la sociedad, reflejando el propósito divino en su labor.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Considera cómo esta visión se alinea con tus valores cristianos y cómo puedes comunicarla de manera más efectiva para motivar a tu equipo.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_e_Y_o_o_o",
  spotifyUrl: "https://open.spotify.com/track/3X0v8Z0v8Z0v8Z0v8Z0v8Z"
  },
  movie: {
    title: "Remember the Titans",
    platform: "Disney+",
    youtubeUrl: "https://www.youtube.com/watch?v=DJVtXbmKwRY",
    description:
      "La historia real de un entrenador que unió un equipo racialmente dividido, demostrando que el liderazgo auténtico trasciende las diferencias y construye unidad en la diversidad.",
  },
},
  {
  day: 148,
  month: "Mayo",
  monthId: 5,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este versículo subraya la importancia crítica de la visión. En el ámbito empresarial, una visión clara es el faro que orienta a la organización a través de los desafíos y hacia el éxito. Un líder cristiano no solo debe poseer una visión inspirada por principios divinos, sino también comunicarla de manera efectiva para que su equipo la internalice y la persiga con fervor. Sin una dirección definida, los esfuerzos se fragmentan, los recursos se disipan y la motivación disminuye. Una visión empresarial, fundamentada en valores bíblicos, no solo busca la prosperidad económica, sino también generar un impacto positivo en la comunidad y en el bienestar de los colaboradores. Es la guía que asegura que cada decisión y acción contribuyan a un propósito trascendente, manteniendo a todos cohesionados y enfocados en el objetivo final.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. ¿Cómo puedes comunicar esta visión de manera más efectiva para alinear a tu equipo?",
  song: {
  title: "La Visión de Dios",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=g4h_4g-010U",
  spotifyUrl: "https://open.spotify.com/track/5r51p3x0s2z5z0z0z0z0z0"
  }
},
  {
  day: 149,
  month: "Mayo",
  monthId: 5,
  title: "Trabajo con Propósito y Pasión Divina",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos invita a ver nuestro trabajo no solo como una tarea, sino como una ofrenda a Dios. En el ámbito empresarial, esto significa ir más allá de la mera obligación o la búsqueda de ganancias. Implica inyectar pasión, excelencia y un propósito superior en cada proyecto, decisión y relación. Cuando un líder o empresario opera con esta mentalidad, su trabajo adquiere un significado trascendente, impactando positivamente a empleados, clientes y la comunidad. La dedicación y el esfuerzo que ponemos en nuestras labores, sabiendo que es para el Señor, nos impulsa a mantener altos estándares de integridad y calidad, construyendo un legado que honra a Dios y beneficia a la sociedad. Es un llamado a la excelencia impulsada por la fe.",
  quote: {
  text: "Working hard for something we don't care about is called stress: Working hard for something we love is called passion.",
  author: "Simon Sinek"
  },
  challenge: "Identifica un área en tu negocio donde la pasión ha disminuido. Reflexiona sobre cómo puedes reavivar esa pasión, conectándola con un propósito mayor que honre a Dios y sirva a tu comunidad. Implementa un cambio pequeño esta semana para actuar con más corazón en esa área.",
  song: {
  title: "Mi Libertador",
  artist: "Miel San Marcos, Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=bBUmp2AsIXs",
  spotifyUrl: "https://open.spotify.com/track/3PDI2JGivXW4WguUBbhPgw"
  }
},
  {
  day: 150,
  month: "Mayo",
  monthId: 5,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos invita a una ética de trabajo superior, donde cada tarea, por pequeña que sea, se realiza con dedicación y excelencia, como si fuera directamente para Dios. En el ámbito empresarial, esto se traduce en un compromiso inquebrantable con la calidad, la integridad y el servicio. Un líder cristiano entiende que su labor no es solo para obtener ganancias, sino para glorificar a Dios a través de su esfuerzo y la forma en que gestiona su negocio. Al trabajar con un propósito divino, se fomenta un ambiente de responsabilidad, innovación y valor, impactando positivamente a empleados, clientes y la comunidad en general. La recompensa no es solo terrenal, sino también espiritual, sabiendo que cada acción contribuye a un legado de impacto.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio esta semana. Enfócate en realizarlo con la máxima excelencia y un corazón de servicio, buscando no solo el resultado final, sino también cómo tu esfuerzo puede reflejar los principios de integridad y propósito cristiano. Evalúa cómo esta mentalidad impacta tu productividad y la calidad de tu trabajo.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3xTHbxcvbj7xLHOuTqDAdF"
  }
},
  {
  day: 151,
  month: "Mayo",
  monthId: 5,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con un propósito divino. Como líderes y emprendedores cristianos, nuestro trabajo no es solo una transacción comercial, sino un acto de servicio a Dios. Cuando realizamos nuestras tareas con excelencia y dedicación, como si fuera directamente para el Señor, transformamos nuestro entorno laboral. Esta mentalidad nos impulsa a ir más allá de las expectativas, a innovar con integridad y a tratar a nuestros colaboradores y clientes con amor y respeto. La verdadera recompensa no es solo terrenal, sino eterna, forjando un legado que trasciende el éxito material.",
  quote: {
  text: "El éxito es conocer tu propósito en la vida, crecer para alcanzar tu máximo potencial y sembrar semillas que beneficien a otros.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio esta semana que consideres rutinario o poco inspirador. Enfócate en realizarlo con la máxima excelencia y una actitud de servicio, como si estuvieras trabajando directamente para Dios. Observa cómo cambia tu perspectiva y el impacto en los resultados.",
  song: {
  title: "Jesucristo Basta",
  artist: "Un Corazón, Kim Richards",
  youtubeUrl: "https://www.youtube.com/watch?v=RNni6999i9c",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6XgnLNskskRPjdfa3CyKGA"
  }
},
  {
  day: 152,
  month: "junio",
  monthId: 6,
  title: "La Diligencia como Camino a la Excelencia",
  verse: {
  text: "¿Has visto un hombre diligente en su trabajo? Delante de los reyes estará; no estará delante de los de baja condición.",
  reference: "Proverbios 22: 29"
  },
  reflection: "La diligencia en el trabajo no es solo una virtud, sino una estrategia fundamental para el éxito en el ámbito empresarial. Proverbios 22: 29 nos asegura que la excelencia y el esfuerzo constante abren puertas a oportunidades significativas y a la influencia. Para el empresario cristiano, esto significa ir más allá de la mera competencia, buscando la calidad y la integridad en cada tarea. La dedicación no solo honra a Dios, sino que también construye una reputación sólida, atrayendo reconocimiento y confianza. Un líder diligente inspira a su equipo, establece altos estándares y demuestra que el compromiso con la excelencia es un reflejo de su fe y su llamado a ser mayordomos fieles de los talentos y recursos que se le han confiado. Es a través de esta dedicación que se logra un impacto duradero y un legado significativo.",
  quote: {
  text: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio donde la diligencia ha disminuido. Desarrolla un plan de acción concreto para reavivar el compromiso con la excelencia en esa área, estableciendo metas claras y un sistema de seguimiento para asegurar la mejora continua. Comunica este plan a tu equipo y lidera con el ejemplo.",
  song: {
  title: "Grandes Cosas",
  artist: "Maverick City Music x Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=1Y732y40X70",
  spotifyUrl: "https://open.spotify.com/track/4j9g4y2f2k2q9g9g9g9g9g"
  }
},
  {
  day: 153,
  month: "Junio",
  monthId: 6,
  title: "La Visión Clara: El Faro del Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18 (RVR60)"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, no solo en la vida espiritual, sino también en el ámbito empresarial. Un líder sin una visión clara es como un barco sin brújula, a la deriva y sin un destino definido. En el mundo de los negocios, la visión es el faro que guía las decisiones estratégicas, inspira a los equipos y motiva a superar los desafíos. Es la capacidad de ver más allá del presente, de anticipar el futuro y de trazar un camino hacia el éxito sostenible. Cultivar una visión inspiradora y comunicarla eficazmente es una de las responsabilidades más críticas de todo empresario y líder cristiano, asegurando que la empresa no solo sobreviva, sino que prospere con propósito y dirección.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Comunícala de manera constante y busca formas creativas de mantenerla viva en la mente de todos.",
  song: {
  title: "Gracia Sublime Es",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=DuYipn5C-Gw",
  spotifyUrl: "https://open.spotify.com/track/5fx0pSrRtDq2u7qlaly8fC"
  }
},
  {
  day: 154,
  month: "junio",
  monthId: 6,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo en los negocios se trata de inspirar a otros a alcanzar su máximo potencial, construyendo un legado duradero de éxito y propósito.",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión. En el ámbito empresarial, una visión clara no es solo un ideal, sino una necesidad estratégica. Sin una dirección definida, equipos y organizaciones pueden perder el rumbo, desperdiciar recursos y carecer de motivación. Un líder cristiano en los negocios debe cultivar una visión que no solo busque el éxito material, sino que también honre principios éticos y un propósito trascendente. Esta visión debe ser comunicada con pasión y convicción, inspirando a cada miembro del equipo a alinear sus esfuerzos hacia un objetivo común. La claridad de propósito permite tomar decisiones acertadas, superar obstáculos y construir un legado duradero que va más allá de las ganancias.",
  quote: {
  text: "El liderazgo efectivo en los negocios se trata de inspirar a otros a alcanzar su máximo potencial, construyendo un legado duradero de éxito y propósito.",
  author: "John C. Maxwell"
  },
  challenge: "Tómate un tiempo hoy para revisar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y que refleje tus valores. Luego, compártela con tu equipo y pídeles retroalimentación sobre cómo pueden alinear mejor sus tareas diarias con esa visión.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4uLUgX50gX01x72t4z0e2j"
  },
  movie: {
    title: "Hoosiers (Hoosiers: Más Que Ídolos)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=5gY3bFMwQtw",
    description:
      "Un equipo de baloncesto de un pequeño pueblo de Indiana supera las expectativas mediante el trabajo en equipo y la disciplina, demostrando que la grandeza viene de la colaboración.",
  },
},
  {
  day: 155,
  month: "Junio",
  monthId: 6,
  title: "La Diligencia como Pilar del Éxito Empresarial",
  verse: {
  text: "La mano negligente empobrece; Mas la mano de los diligentes enriquece.",
  reference: "Proverbios 10: 4"
  },
  reflection: "La diligencia es una virtud fundamental en el ámbito empresarial cristiano. Proverbios 10: 4 nos recuerda que la falta de esfuerzo y atención en nuestras labores conduce a la escasez, mientras que la dedicación y el trabajo arduo son recompensados con prosperidad. En el mundo de los negocios, esto se traduce en la necesidad de ser proactivos, constantes y meticulosos en cada tarea. Un líder cristiano debe modelar la diligencia, no solo para alcanzar el éxito material, sino también para honrar a Dios con su trabajo. La excelencia en la gestión, la innovación y el servicio al cliente son frutos de una actitud diligente, que busca siempre ir más allá de lo esperado, confiando en que el Señor bendice el esfuerzo de sus hijos.",
  quote: {
  text: "Si te falta destreza, suple con diligencia.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio donde la negligencia ha causado o podría causar un impacto negativo. Desarrolla un plan de acción concreto para aplicar mayor diligencia en esa área durante la próxima semana, estableciendo metas claras y medibles. Evalúa los resultados al final de la semana y ajusta tu enfoque si es necesario.",
  song: {
  title: "Comenzar De Cero",
  artist: "Tercer Cielo",
  youtubeUrl: "https://www.youtube.com/watch?v=MnFGS-1ge4E",
  spotifyUrl: "https://open.spotify.com/intl-es/track/7Kop0XtAYqTkFzUdGD3BLv"
  }
},
  {
  day: 156,
  month: "Junio",
  monthId: 6,
  title: "La Estrategia Divina en los Negocios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es crucial, pero Proverbios 16: 3 nos recuerda que hay una dimensión superior. Encomendar nuestras obras al Señor no es una invitación a la pasividad, sino a alinear nuestros planes y esfuerzos con Su voluntad. Esto implica buscar sabiduría divina en cada decisión, desde la formulación de un nuevo producto hasta la gestión de un equipo. Cuando nuestros pensamientos y acciones están arraigados en principios bíblicos, obtenemos una claridad y una dirección que trascienden la lógica puramente humana. Esta confianza activa en Dios no solo afirma nuestros planes, sino que también nos proporciona paz en medio de la incertidumbre del mercado, sabiendo que Él guía nuestros pasos hacia un propósito mayor.",
  quote: {
  text: "La verdadera prueba de un líder no es cuántos seguidores tiene, sino cuántos líderes crea.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y a la reflexión bíblica, buscando la dirección de Dios. Luego, documenta cómo esta búsqueda de sabiduría influyó en tu estrategia o decisión final, y evalúa los resultados al final de la semana.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=w9-g390_75g",
  spotifyUrl: "https://open.spotify.com/track/0l1q032l91z7x0e6t0z7x0"
  }
},
  {
  day: 157,
  month: "junio",
  monthId: 6,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos recuerda que cada tarea, grande o pequeña, en nuestro emprendimiento o liderazgo, debe ser realizada con la máxima dedicación y un corazón íntegro. No trabajamos solo para obtener ganancias o reconocimiento humano, sino como una ofrenda a Dios. Esta perspectiva transforma el trabajo en un acto de adoración, elevando los estándares de calidad, ética y servicio. Al operar con esta mentalidad, no solo honramos a Dios, sino que también construimos un legado de impacto duradero, caracterizado por la excelencia y la integridad, que trasciende lo meramente terrenal y genera un impacto positivo en nuestro entorno y en la vida de quienes nos rodean.",
  quote: {
  text: "Si piensas que puedes, puedes. Si piensas que no puedes estas en lo cierto.",
  author: "Henry Ford"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que hayas estado realizando con menos entusiasmo. Comprométete a abordarlo esta semana con una actitud renovada, haciéndolo con excelencia como si fuera directamente para Dios. Observa cómo cambia tu perspectiva y los resultados.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/track/78FO5RmeiJanUkI0dqM8TW"
  }
},
  {
  day: 158,
  month: "junio",
  monthId: 6,
  title: "La Cosecha de la Perseverancia",
  verse: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  reference: "Gálatas 6: 9 (RVR60)"
  },
  reflection: "En el mundo empresarial, la perseverancia es una virtud cardinal. Gálatas 6: 9 nos recuerda que el esfuerzo constante y la dedicación a hacer lo correcto, incluso cuando los resultados no son inmediatos, eventualmente rinden frutos. Los líderes y emprendedores a menudo enfrentan períodos de incertidumbre y desafíos que pueden desanimar. Sin embargo, este versículo nos insta a no desmayar. Mantener la visión, la ética y el compromiso con la excelencia en cada paso del camino es fundamental. La paciencia estratégica, combinada con la acción diligente, asegura que, a su debido tiempo, cosecharemos los beneficios de nuestro trabajo, construyendo un legado de impacto duradero y significativo.",
  quote: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un proyecto o iniciativa en tu negocio que esté enfrentando dificultades o que requiera un esfuerzo sostenido. Desarrolla un plan de acción para mantener la perseverancia en este proyecto durante las próximas dos semanas, buscando pequeñas victorias y ajustando la estrategia sin perder el enfoque en el objetivo final.",
  song: {
  title: "Cuan Grande Es Él",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_1J_j4d-c",
  spotifyUrl: "https://open.spotify.com/track/4j1qX8wX1k7v3n0y5q5j7X"
  }
},
  {
  day: 159,
  month: "Junio",
  monthId: 6,
  title: "El Propósito Divino en tus Emprendimientos",
  verse: {
  text: "Encomienda al Señor tus acciones, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el camino del emprendimiento y el liderazgo, es fácil dejarse llevar por la planificación humana y la búsqueda de resultados inmediatos. Sin embargo, Proverbios 16: 3 nos recuerda la importancia de someter nuestros planes y esfuerzos a la voluntad de Dios. Al encomendar nuestras acciones al Señor, no solo buscamos su aprobación, sino que también invitamos su sabiduría y dirección en cada paso. Esta confianza nos permite operar con una paz que trasciende las circunstancias, sabiendo que nuestros pensamientos y estrategias serán afirmados por un propósito mayor. Integrar la fe en la gestión empresarial no es una debilidad, sino una fuente inagotable de fortaleza y claridad, permitiéndonos construir un legado que honre a Dios y beneficie a la sociedad.",
  quote: {
  text: "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área de tu negocio o liderazgo donde te sientas estancado o incierto. Dedica tiempo a orar y encomendar esa situación a Dios, pidiéndole dirección y sabiduría. Luego, busca una acción concreta que puedas tomar esta semana, confiando en que Él afirmará tus pasos si están alineados con su voluntad.",
  song: {
  title: "Tu Proposito",
  artist: "Nancy Amancio",
  youtubeUrl: "https://www.youtube.com/watch?v=HXKYHG9fi-E",
  spotifyUrl: "https://open.spotify.com/track/2Rlh1fLQ9XoVNB51rUz8qv"
  }
},
  {
  day: 160,
  month: "junio",
  monthId: 6,
  title: "La Sabiduría en la Planificación Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación es la piedra angular del éxito. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las estrategias y los números. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, lo que implica una profunda dependencia y confianza en Su dirección. Esto no significa pasividad, sino una diligencia activa en la que nuestros planes son presentados a Dios para que Él los refine y los afirme. Cuando nuestros pensamientos y proyectos están alineados con Su voluntad, podemos esperar una guía clara y una estabilidad que trasciende las fluctuaciones del mercado. La sabiduría divina nos equipa para tomar decisiones estratégicas, gestionar recursos con integridad y liderar con propósito, sabiendo que nuestros esfuerzos están respaldados por el Creador.",
  quote: {
  text: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.",
  author: "Henry Ford"
  },
  challenge: "Identifica un proyecto clave en tu negocio esta semana. Antes de iniciar cualquier acción, dedica tiempo a la oración, pidiendo dirección y sabiduría a Dios. Luego, elabora un plan detallado, encomendando cada paso al Señor. Ejecuta con diligencia y evalúa cómo esta dependencia divina impacta la claridad y el éxito de tu proyecto.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=wz-2h2jX8aQ",
  spotifyUrl: "https://open.spotify.com/track/4j9tq65j8s9Xh4eJ4f5X2P"
  }
},
  {
  day: 161,
  month: "junio",
  monthId: 6,
  title: "La Visión Clara en la Ejecución",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que obedecen la ley!",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía cualquier empresa. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto individuos como organizaciones pueden perder el rumbo. En el ámbito empresarial, esto se traduce en la necesidad de una visión estratégica bien definida que no solo inspire, sino que también alinee los esfuerzos de todo el equipo. Un líder cristiano debe buscar la visión no solo a través de la planificación y el análisis de mercado, sino también a través de la oración y la guía divina. Una visión inspirada por Dios no solo busca el éxito material, sino también el impacto positivo y la edificación del Reino. Mantener esta visión clara y comunicarla eficazmente es crucial para la ejecución y para evitar que el equipo se desvíe de los objetivos fundamentales.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es lo suficientemente clara y concisa? ¿La conoce y comprende todo tu equipo? Si no es así, trabaja en refinarla y comunicarla de manera efectiva para asegurar que todos estén alineados y enfocados en el mismo propósito.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_116y8g0o",
  spotifyUrl: "https://open.spotify.com/track/432wQj73eQ27m8qf9z6x9N"
  },
  movie: {
  title: "Un Sueño Posible (The Blind Side)",
  platform: "Netflix",
  description: "Basada en una historia real, esta película muestra cómo la compasión y la visión de una familia pueden transformar la vida de un joven sin hogar, llevándolo al éxito en el fútbol americano. Destaca el poder de la mentoría y la creencia en el potencial de los demás."
  }
},
  {
  day: 162,
  month: "Junio",
  monthId: 6,
  title: "Diligencia y Liderazgo Estratégico",
  verse: {
  text: "La mano negligente empobrece; Mas la mano de los diligentes enriquece.",
  reference: "Proverbios 10: 4"
  },
  reflection: "Proverbios 10: 4 nos presenta una verdad fundamental para el mundo empresarial: la diligencia es la clave para la prosperidad, mientras que la negligencia conduce a la escasez. En el liderazgo cristiano, esto se traduce en una administración responsable de los talentos y recursos que Dios nos ha confiado. No se trata solo de trabajar duro, sino de trabajar con propósito y sabiduría. Un líder diligente no solo se esfuerza en sus tareas diarias, sino que también busca constantemente formas de mejorar, innovar y servir mejor a su equipo y a sus clientes. La diligencia, vista desde una perspectiva bíblica, es una expresión de nuestra fe y obediencia, y un reflejo de nuestro compromiso con la excelencia en todo lo que hacemos para la gloria de Dios.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área de tu negocio o liderazgo donde la negligencia podría estar impidiendo el crecimiento. Desarrolla un plan de acción concreto para aplicar la diligencia y la estrategia, buscando no solo hacer las cosas bien, sino hacer las cosas correctas que impulsen tu visión y propósito.",
  song: {
  title: "Dios De Oportunidades",
  artist: "Evan Craft",
  youtubeUrl: "https://www.youtube.com/watch?v=WH02EjAyq1Q",
  spotifyUrl: "https://open.spotify.com/track/4WRBlv7X6EGE4Kh58lKB1v"
  }
},
  {
  day: 163,
  month: "Junio",
  monthId: 6,
  title: "La Fidelidad del Administrador",
  verse: {
  text: "Ahora bien, se requiere de los administradores, que cada uno sea hallado fiel.",
  reference: "1 Corintios 4: 2"
  },
  reflection: "En el ámbito empresarial, la fidelidad es un pilar fundamental que sostiene la confianza y la reputación. Este versículo nos recuerda que, como administradores de los recursos, talentos y oportunidades que Dios nos ha dado, nuestra principal responsabilidad es ser fieles. Esto implica integridad en las finanzas, honestidad en las relaciones comerciales y diligencia en el cumplimiento de nuestras tareas. Un líder fiel no solo busca el beneficio propio, sino que también vela por el bienestar de su equipo, sus clientes y la comunidad. La fidelidad en la gestión empresarial no es solo una virtud moral, sino una estrategia que construye un legado duradero y honra a Dios en cada decisión.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área de tu negocio donde la fidelidad pueda ser fortalecida. Podría ser en la gestión de proyectos, la comunicación con tu equipo o la transparencia con tus clientes. Desarrolla un plan de acción concreto para mejorar la fidelidad en esa área durante la próxima semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/track/5gX3127m334e3x12w1g9jS"
  }
},
  {
  day: 164,
  month: "junio",
  monthId: 6,
  title: "Afirmando tus Proyectos en Dios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil perder de vista la fuente de nuestra verdadera fortaleza. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, prometiendo que, al hacerlo, nuestros pensamientos serán afirmados. Esto no significa que Dios hará todo por nosotros, sino que alinear nuestros planes y esfuerzos con Su voluntad nos proporciona una base sólida y una dirección clara. Un líder cristiano entiende que el éxito duradero no se mide solo por las ganancias, sino por la integridad y el propósito divino en cada decisión. Al confiar en Dios, nuestras estrategias adquieren una perspectiva eterna, y nuestras acciones reflejan valores que trascienden lo meramente terrenal. La fe en el trabajo diario nos permite enfrentar desafíos con sabiduría y perseverancia, sabiendo que no estamos solos en la construcción de nuestro legado.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y busca la dirección de Dios. Anota cómo esta práctica influye en tu claridad mental y en la toma de decisiones.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2v-1j9X51oQ",
  spotifyUrl: "https://open.spotify.com/track/026857111026857111"
  }
},
  {
  day: 165,
  month: "Junio",
  monthId: 6,
  title: "La Visión Que Construye el Futuro",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o líder cristiano a través de las aguas turbulentas del mercado. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de visión: el desenfreno y la pérdida de dirección. En el ámbito empresarial, esto se traduce en decisiones erráticas, falta de propósito y, en última instancia, el fracaso. Un líder con visión clara no solo inspira a su equipo, sino que también establece un rumbo estratégico, anticipa desafíos y fomenta la innovación. La visión no es solo un sueño; es un plan estratégico arraigado en principios bíblicos, que permite a la organización avanzar con propósito y resiliencia, construyendo un legado duradero y significativo para el Reino.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar y articular claramente la visión de tu empresa o proyecto. Comparte esta visión con tu equipo y asegúrate de que cada miembro comprenda su papel en la consecución de ese futuro deseado. Evalúa si tus acciones diarias están alineadas con esa visión a largo plazo.",
  song: {
  title: "Tu Fidelidad",
  artist: "Martin Valverde",
  youtubeUrl: "https://www.youtube.com/watch?v=1z3l652z3Xo",
  spotifyUrl: "https://open.spotify.com/track/30l6eQ4305yQ2oX2o32o32"
  }
},
  {
  day: 166,
  month: "Junio",
  monthId: 6,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Es a Cristo el Señor a quien sirven.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje de Colosenses nos llama a una ética de trabajo superior, donde cada tarea, grande o pequeña, se realiza con un compromiso total, como si fuera directamente para Dios. En el ámbito empresarial, esto se traduce en buscar la excelencia no solo por el beneficio personal o de la empresa, sino como una forma de honrar a nuestro Creador. Implica integridad en las decisiones, calidad en los productos o servicios, y un trato justo a los empleados y clientes. Reconocer que servimos a Cristo en nuestro trabajo eleva nuestra perspectiva, transformando las responsabilidades diarias en oportunidades para manifestar el Reino de Dios en el mercado. Esta mentalidad fomenta la innovación, la resiliencia y un liderazgo que inspira a otros a alcanzar su máximo potencial, sabiendo que nuestra verdadera recompensa proviene de Él.",
  quote: {
  text: "Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde la calidad o el esfuerzo podrían mejorar. Comprométete a aplicar el principio de 'hacerlo como para el Señor' durante esta semana, buscando la excelencia en cada detalle y observando cómo esto impacta en tus resultados y en el ambiente de trabajo.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=1d4F-111g7Y",
  spotifyUrl: "https://open.spotify.com/track/30sX341g23t227t1160352"
  }
},
  {
  day: 167,
  month: "junio",
  monthId: 6,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial y creen un impacto duradero.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, Proverbios 16: 3 nos invita a ir más allá de la mera elaboración de planes. Nos insta a encomendar nuestras obras y pensamientos al Señor. Esto no significa pasividad, sino una profunda dependencia y confianza en la guía divina. Un líder cristiano entiende que sus mejores estrategias y decisiones deben estar alineadas con el propósito de Dios. Al someter nuestros planes a Él, no solo buscamos su aprobación, sino que permitimos que Él afirme y dirija nuestros pasos, asegurando que nuestros esfuerzos no solo sean productivos, sino también significativos y trascendentes. Esta perspectiva transforma la planificación en un acto de fe y obediencia, garantizando que el legado construido tenga un fundamento eterno.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial y creen un impacto duradero.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración, encomendando tus planes y buscando la dirección de Dios. Escribe los tres objetivos más importantes para tu negocio y, junto a cada uno, anota cómo puedes alinear ese objetivo con principios bíblicos y la voluntad de Dios.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s71_42r4_0o",
  spotifyUrl: "https://open.spotify.com/track/0x915f333l9r333l9r333l9r"
  }
},
  {
  day: 168,
  month: "junio",
  monthId: 6,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo es la capacidad de inspirar a otros a perseguir una visión compartida con pasión y dedicación.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos recuerda que sin una visión clara, tanto las personas como las organizaciones pueden perder el rumbo. En el ámbito empresarial cristiano, la visión no solo se trata de metas financieras, sino también de un propósito superior que honre a Dios y sirva a la comunidad. Un líder debe ser el principal custodio de esta visión, comunicándola constantemente y asegurándose de que cada miembro del equipo la comprenda y la internalice. Esto implica no solo definir hacia dónde se dirige la empresa, sino también cómo se llegará allí, manteniendo siempre la integridad y los valores bíblicos en el centro de todas las decisiones. Una visión bien articulada inspira, motiva y unifica, transformando el trabajo diario en una misión con significado trascendente.",
  quote: {
  text: "El liderazgo efectivo es la capacidad de inspirar a otros a perseguir una visión compartida con pasión y dedicación.",
  author: "Warren Buffett"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es clara, inspiradora y está alineada con tus valores cristianos? Comunícala de nuevo a tu equipo, asegurándote de que todos comprendan su importancia y su rol en alcanzarla.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=2tvrCaJBV8I",
  spotifyUrl: "https://open.spotify.com/track/6gabDLa4YCL2tvrCaJBV8I"
  },
  movie: {
  title: "Un Sueño Posible (The Blind Side)",
  platform: "Netflix",
  description: "Basada en una historia real, una familia adinerada acoge a un joven sin hogar, ayudándolo a descubrir su potencial en el fútbol americano y en la vida, demostrando el poder de la visión y el apoyo."
  }
},
  {
  day: 169,
  month: "Junio",
  monthId: 6,
  title: "Excelencia Radical en el Negocio",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "El versículo de Colosenses 3: 23 nos llama a una excelencia radical en todo lo que hacemos, no solo como una obligación laboral, sino como un acto de adoración. Para el empresario y líder cristiano, esto significa que cada decisión, cada producto, cada servicio y cada interacción con empleados y clientes debe ser ejecutado con la máxima integridad y dedicación, como si estuviéramos sirviendo directamente a Dios. Esta perspectiva eleva el trabajo más allá de la mera búsqueda de ganancias, transformándolo en una vocación sagrada. Implica una ética de trabajo superior, donde la calidad, la honestidad y el servicio son reflejos de nuestra fe. Al operar con esta mentalidad, no solo honramos a Dios, sino que también construimos negocios sólidos y sostenibles que impactan positivamente a la sociedad.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área específica en tu negocio o liderazgo donde puedas aplicar el principio de \"hacerlo de corazón, como para el Señor\". Puede ser mejorando la calidad de un producto, optimizando un proceso interno, o sirviendo a un cliente con una actitud de excelencia. Implementa un cambio concreto esta semana y observa el impacto en tu equipo y en los resultados.",
  song: {
  title: "Un Pacto Con Dios",
  artist: "Rabito",
  youtubeUrl: "https://www.youtube.com/watch?v=boA7r9_aTyk",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2dEBDezty7mCppaKkf8DbX"
  }
},
  {
  day: 170,
  month: "Junio",
  monthId: 6,
  title: "La Atemporalidad de los Principios en el Liderazgo Empresarial",
  verse: {
  text: "Lo que ya ha acontecido volverá a acontecer; lo que ya se ha hecho se volverá a hacer ¡y no hay nada nuevo bajo el sol! Hay quien llega a decir: «¡Mira que esto sí es una novedad!» Pero eso ya existía desde siempre, entre aquellos que nos precedieron.",
  reference: "Eclesiastés 1: 9-10"
  },
  reflection: "En el dinámico mundo empresarial, a menudo buscamos la \"próxima gran cosa\" o la \"última tendencia\" que nos garantice el éxito. Sin embargo, Eclesiastés 1: 9-10 nos recuerda una verdad fundamental: \"no hay nada nuevo bajo el sol\". Este principio bíblico es profundamente relevante para el liderazgo y la gestión. Nos enseña que, si bien las herramientas y las tecnologías pueden evolucionar, los principios subyacentes del éxito, la ética, la integridad y el servicio permanecen constantes. Un líder cristiano en los negocios comprende que la sabiduría atemporal de las Escrituras ofrece una base sólida para la toma de decisiones, la construcción de equipos y la innovación. Al anclarnos en estos principios eternos, podemos navegar los cambios del mercado con confianza y propósito, construyendo un legado duradero que trasciende las modas pasajeras y honra a Dios.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un principio bíblico que consideres fundamental para tu negocio o liderazgo. Reflexiona sobre cómo este principio se aplica en tu contexto actual y desarrolla un plan para integrarlo más conscientemente en tus decisiones y acciones durante la próxima semana. Evalúa el impacto de esta aplicación en tu equipo y en los resultados de tu empresa.",
  song: {
  title: "Majestad",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=RfFufEylHT8",
  spotifyUrl: "https://open.spotify.com/track/6h3PoWCIPCl3BkNoIZvmNn"
  }
},
  {
  day: 171,
  month: "Junio",
  monthId: 6,
  title: "La Visión Clara: Brújula del Liderazgo",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que son obedientes a la ley!",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "Proverbios 29: 18 subraya la importancia fundamental de la visión en cualquier ámbito, especialmente en el liderazgo empresarial. Sin una dirección clara, un equipo o una organización pueden perder el rumbo, desperdiciar recursos y caer en la ineficiencia. Un líder cristiano en los negocios no solo debe tener una visión estratégica para su empresa, sino que esta visión debe estar anclada en principios éticos y valores bíblicos. La 'ley' a la que se refiere el versículo puede interpretarse como los principios divinos que guían nuestras acciones. Una visión que honra a Dios y busca el bienestar de todos los involucrados no solo asegura el éxito a largo plazo, sino que también construye un legado de impacto duradero y significativo. Es la brújula que mantiene a la empresa en el camino correcto, incluso en medio de la incertidumbre.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es clara, inspiradora y comunicada eficazmente a tu equipo? Identifica al menos una acción concreta para fortalecer o recalibrar esa visión, asegurándote de que esté alineada con tus valores y objetivos a largo plazo.",
  song: {
  title: "La Visión",
  artist: "En Espíritu y en Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=f2wX1k0Y20o",
  spotifyUrl: "https://open.spotify.com/track/62g1g1J4g2w9t8f8j0q0q0"
  }
},
  {
  day: 172,
  month: "junio",
  monthId: 6,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 subraya la importancia crítica de la visión, un principio fundamental tanto en la vida espiritual como en el ámbito empresarial. En el contexto de un líder cristiano, la visión no es meramente una meta estratégica, sino una dirección inspirada por Dios que guía cada decisión y acción. Sin una visión clara, las empresas pueden perder el rumbo, sus equipos pueden carecer de propósito y la energía se dispersa en esfuerzos improductivos. Un líder con visión define el futuro deseado, comunica esa imagen con pasión y moviliza a su equipo hacia la consecución de objetivos que trascienden lo meramente comercial, buscando un impacto significativo y duradero. La visión actúa como un faro, manteniendo a la organización enfocada y resiliente ante los desafíos, asegurando que cada paso contribuya a un propósito mayor.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión clara para tu negocio o proyecto. Asegúrate de que sea inspiradora, medible y que todos en tu equipo la comprendan y la compartan. Comunícala de manera efectiva y busca formas de alinear las actividades diarias con este propósito superior.",
  song: {
  title: "Visión",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=0_f_0_f_0_f",
  spotifyUrl: "https://open.spotify.com/track/0_f_0_f_0_f"
  }
},
  {
  day: 173,
  month: "junio",
  monthId: 6,
  title: "Excelencia en el Trabajo: Un Propósito Mayor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje bíblico nos invita a redefinir nuestra perspectiva sobre el trabajo. Para el empresario y líder cristiano, cada tarea, cada decisión y cada interacción comercial se convierte en una oportunidad para honrar a Dios. No se trata solo de alcanzar metas financieras o de crecimiento, sino de operar con una ética y una calidad que reflejen los valores del Reino. Hacerlo de corazón significa dedicación, integridad y pasión, no buscando la aprobación humana, sino la divina. Esta mentalidad transforma el entorno laboral, fomentando un ambiente de excelencia, servicio y propósito trascendente, donde el verdadero éxito se mide por la fidelidad a los principios divinos y el impacto positivo en la sociedad.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos en tu negocio. ¿Cómo puedes abordarlo con una mentalidad de 'hacerlo como para el Señor', buscando la excelencia y la integridad en cada detalle, más allá de las expectativas humanas? Implementa al menos un cambio concreto esta semana que refleje esta perspectiva.",
  song: {
  title: "Agradecido",
  artist: "Danny Gokey, Alex Zurdo",
  youtubeUrl: "https://www.youtube.com/watch?v=Jz_LbGdyx20",
  spotifyUrl: "https://open.spotify.com/track/4oui4DGF163Vc22PVajbPz"
  }
},
  {
  day: 174,
  month: "Junio",
  monthId: 6,
  title: "La Dirección de Dios en tus Proyectos",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que la verdadera solidez en nuestros planes proviene de encomendar nuestras obras a Dios. Esto implica no solo orar por nuestros proyectos, sino también alinear nuestras decisiones y estrategias con Sus principios. Cuando nuestros pensamientos y acciones están arraigados en la voluntad divina, obtenemos una perspectiva y una sabiduría que trascienden la lógica humana. Esta confianza en Dios no elimina la necesidad de diligencia y esfuerzo, sino que los potencia, asegurando que nuestros emprendimientos no solo busquen el éxito terrenal, sino que también glorifiquen a Dios y contribuyan a Su reino, afirmando así cada paso de nuestro camino empresarial.",
  quote: {
  text: "La única forma de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos actuales. Identifica al menos una área donde puedas aplicar Proverbios 16: 3 de manera más intencional, encomendando ese aspecto específico a Dios en oración y buscando Su dirección para alinear tus estrategias con Sus principios.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y3Y1v1h3o6c",
  spotifyUrl: "https://open.spotify.com/track/58e2o347f7j2b2w7w0q7tQ"
  }
},
  {
  day: 175,
  month: "Junio",
  monthId: 6,
  title: "La Fe que Mueve Montañas en los Negocios",
  verse: {
  text: "Si tuvierais fe como un grano de mostaza, diríais a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible.",
  reference: "Mateo 17: 20"
  },
  reflection: "En el mundo empresarial, a menudo nos enfrentamos a desafíos que parecen insuperables, como montañas que bloquean nuestro camino. El versículo de Mateo 17: 20 nos recuerda el poder transformador de una fe genuina, incluso si es tan pequeña como un grano de mostaza. Para el líder cristiano, esta fe no es solo una creencia pasiva, sino una fuerza activa que impulsa la visión, la innovación y la resiliencia. Significa confiar en la provisión divina y en la guía de Dios para tomar decisiones estratégicas, superar obstáculos económicos y liderar equipos con integridad. La fe nos capacita para ver oportunidades donde otros ven problemas y para perseverar cuando las circunstancias son adversas, sabiendo que con Dios, lo imposible se vuelve posible en nuestros emprendimientos.",
  quote: {
  text: "El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo.",
  author: "Simon Sinek"
  },
  challenge: "Identifica un \"monte\" (un desafío significativo) en tu negocio o proyecto actual. Dedica tiempo a orar y a buscar la dirección de Dios sobre cómo abordarlo. Luego, con fe, da un paso concreto esta semana para empezar a mover ese \"monte\", ya sea desarrollando una nueva estrategia, buscando un mentor o invirtiendo en una nueva habilidad.",
  song: {
  title: "Creeré",
  artist: "Tercer Cielo",
  youtubeUrl: "https://www.youtube.com/watch?v=-5dmC-WZT8s",
  spotifyUrl: "https://open.spotify.com/track/2ORT42xQNKCKIEzIIqxbEv"
  },
  movie: {
    title: "Rudy",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=xPpsgXrmo-s",
    description:
      "La historia real de Rudy Ruettiger, quien superó todas las limitaciones para jugar fútbol americano en Notre Dame, demostrando que la perseverancia y los sueños pueden vencer cualquier obstáculo.",
  },
},
  {
  day: 176,
  month: "junio",
  monthId: 6,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las proyecciones financieras y los análisis de mercado. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, asegurando que nuestros pensamientos y planes serán afirmados. Esto implica buscar la dirección divina en cada decisión, desde la visión general de la empresa hasta los detalles operativos. Al alinear nuestros objetivos con los propósitos de Dios, no solo buscamos prosperidad material, sino también un impacto eterno. Esta encomienda no es pasividad, sino una acción deliberada de fe que informa y fortalece nuestra diligencia y esfuerzo. Un negocio guiado por principios divinos tiene una base sólida y una visión clara, trascendiendo las fluctuaciones del mercado y las presiones externas.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes estratégicos o proyectos actuales. Identifica al menos tres áreas donde puedes integrar explícitamente principios bíblicos o buscar dirección divina. Luego, presenta estos planes en oración, pidiendo a Dios que afirme tus pensamientos y guíe tus pasos para que tu trabajo no solo sea exitoso, sino también glorifique Su nombre y tenga un impacto significativo en tu comunidad y más allá.",
  song: {
  title: "El Mismo Cielo",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=02w77f32w3E",
  spotifyUrl: "https://open.spotify.com/track/5sQ7571y692x4jX63499eG"
  }
},
  {
  day: 177,
  month: "junio",
  monthId: 6,
  title: "Trabajo con Propósito: Sirviendo a Cristo en los Negocios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Nos recuerda que cada tarea, cada decisión y cada interacción en nuestro negocio puede ser un acto de adoración. Cuando trabajamos con excelencia, integridad y un corazón dispuesto, no solo estamos construyendo una empresa, sino que estamos sirviendo a Cristo mismo. Esta mentalidad transforma el trabajo de una obligación a una oportunidad sagrada, donde la recompensa final no es solo terrenal, sino eterna. Al ver nuestro negocio como un campo de servicio al Señor, encontramos un propósito más profundo y una motivación inquebrantable para impactar positivamente a nuestros empleados, clientes y la comunidad en general.",
  quote: {
  text: "El liderazgo no es acerca de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio y pregúntate: ¿Cómo puedo realizar esto de una manera que honre a Dios y sirva a mis clientes y equipo con excelencia? Implementa un cambio específico basado en esta reflexión.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=0w_l5j2w01I",
  spotifyUrl: "https://open.spotify.com/track/62g217z4z4q0m1j0g1m0j0"
  }
},
  {
  day: 178,
  month: "junio",
  monthId: 6,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos invita a una perspectiva transformadora en el ámbito empresarial. No se trata solo de cumplir objetivos o alcanzar metas, sino de infundir cada tarea con un sentido de propósito divino. Para el líder cristiano, esto significa que cada decisión, cada interacción con el equipo y cada estrategia de negocio debe reflejar un compromiso con la excelencia que honra a Dios. Trabajar de corazón implica dedicación, integridad y una búsqueda constante de mejora, sabiendo que nuestro esfuerzo trasciende lo meramente terrenal. Es un llamado a liderar con pasión y a gestionar con sabiduría, entendiendo que nuestro trabajo es una forma de adoración y servicio, impactando no solo el mercado sino también el reino de Dios.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus principales responsabilidades en el negocio esta semana. ¿Cómo puedes abordarla con una mentalidad de 'hacerlo de corazón, como para el Señor'? Identifica al menos una acción concreta para elevar el estándar de excelencia y propósito en esa tarea.",
  song: {
  title: "Tu Proposito",
  artist: "Nancy Amancio",
  youtubeUrl: "https://www.youtube.com/watch?v=HXKYHG9fi-E",
  spotifyUrl: "https://open.spotify.com/track/2Rlh1fLQ9XoVNB51rUz8qv"
  }
},
  {
  day: 179,
  month: "Junio",
  monthId: 6,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, la excelencia a menudo se persigue por ganancias o reconocimiento. Sin embargo, como líderes cristianos, nuestra motivación trasciende lo terrenal. Colosenses 3: 23-24 nos llama a realizar cada tarea con un corazón íntegro, como si estuviéramos sirviendo directamente a Cristo. Esta perspectiva transforma el trabajo de una simple obligación a una oportunidad de adoración. Cuando operamos con esta mentalidad, la calidad de nuestro trabajo, la ética en nuestras decisiones y la forma en que tratamos a nuestros colaboradores y clientes reflejan un propósito superior. La recompensa no es solo el éxito material, sino la herencia eterna que proviene de servir a un propósito divino en cada aspecto de nuestro negocio.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que puedas abordar con una mentalidad renovada, enfocándote en la excelencia y el servicio a Dios. ¿Cómo puedes elevar los estándares de calidad o la ética en ese ámbito, no solo por el resultado final, sino por el propósito de honrar a Dios en tu trabajo? Ponlo en práctica esta semana y observa la diferencia en tu actitud y en los resultados.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  }
},
  {
  day: 180,
  month: "junio",
  monthId: 6,
  title: "La Prioridad Correcta en el Liderazgo Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de ser el mejor, sino de hacer que todos los demás sean mejores.",
  reference: "Lucas 10: 38-42"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de Marta, abrumados por las múltiples tareas y responsabilidades. Nos enfocamos en el \"hacer\", en la eficiencia y la productividad, a menudo descuidando el \"ser\". Este pasaje nos recuerda la importancia de establecer prioridades claras. Como líderes cristianos, nuestra primera prioridad debe ser sentarnos a los pies de Jesús, buscando su dirección y sabiduría. Es en ese tiempo de quietud y escucha donde encontramos la perspectiva y la fuerza para gestionar nuestros negocios con propósito y discernimiento. Un liderazgo efectivo no se mide solo por la cantidad de trabajo realizado, sino por la calidad de la conexión con la fuente de toda sabiduría.",
  quote: {
  text: "El verdadero liderazgo no se trata de ser el mejor, sino de hacer que todos los demás sean mejores.",
  author: "Jim Collins"
  },
  challenge: "Dedica 15 minutos al inicio de tu jornada laboral para la reflexión y la oración, buscando la dirección de Dios para tus decisiones empresariales. Anota las ideas o la claridad que recibas y observa cómo impacta tu día.",
  song: {
  title: "Un Siervo Para Tu Gloria",
  artist: "Gracia Soberana Música",
  youtubeUrl: "https://www.youtube.com/watch?v=_MsvCwPC2TE",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2wsQKBkbysdWlm1rXHU8Z5"
  }
},
  {
  day: 181,
  month: "Junio",
  monthId: 6,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la búsqueda de la excelencia a menudo se asocia con la rentabilidad y el reconocimiento. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Este pasaje nos desafía a realizar cada tarea, cada decisión y cada interacción comercial con una dedicación que trasciende lo meramente humano, haciéndolo como si fuera directamente para el Señor. Esto implica integridad inquebrantable, ética laboral superior y un compromiso con la calidad que no depende de la supervisión externa. Para el líder cristiano, trabajar de esta manera no solo honra a Dios, sino que también construye un legado de impacto duradero, fundamentado en principios divinos que inspiran confianza y respeto en el mercado. Es un recordatorio de que nuestro verdadero empleador y recompensador es Cristo mismo.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proceso clave en tu negocio o área de liderazgo. Identifica al menos una acción concreta que puedas implementar esta semana para elevar el estándar de excelencia, realizándola con la mentalidad de que estás sirviendo directamente a Dios, no solo a tus clientes o superiores. Luego, comprométete a ejecutarla con diligencia y observa el impacto.",
  song: {
  title: "Estoy convencido",
  artist: "Averly Morillo",
  youtubeUrl: "https://www.youtube.com/watch?v=7TzJKEn4q_c",
  spotifyUrl: "https://open.spotify.com/track/3tibAhUL1rTJjnqipgRwgl"
  }
},
  {
  day: 182,
  month: "Julio",
  monthId: 7,
  title: "Trabajo con Propósito: Haciéndolo para el Señor",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados, la rentabilidad y el reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: \"Hagan lo que hagan, háganlo de corazón, como para el Señor y no para los hombres\". Este versículo transforma nuestra visión del trabajo, elevándolo de una mera actividad económica a un acto de adoración. Para el líder cristiano, esto significa que cada tarea, desde la planificación estratégica hasta la atención al cliente, debe realizarse con excelencia y dedicación, no para impresionar a superiores o clientes, sino como una ofrenda a Dios. Esta mentalidad no solo mejora la calidad de nuestro trabajo, sino que también infunde un sentido de propósito y paz, liberándonos de la presión de la aprobación humana y enfocándonos en la aprobación divina.",
  quote: {
  text: "Éxito no es sinónimo de prosperidad, poder, popularidad o cualquiera de las nociones mundanas de éxito. El éxito verdadero consiste en hacer la voluntad de Dios, cueste lo que cueste.",
  author: "John MacArthur"
  },
  challenge: "Identifica una tarea en tu negocio o rol de liderazgo que sueles ver como mundana o rutinaria. Durante esta semana, aborda esa tarea con una actitud renovada, realizándola con la máxima excelencia y dedicación, como si la estuvieras haciendo directamente para el Señor. Observa cómo cambia tu perspectiva y el impacto en la calidad de tu trabajo y en tu equipo.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship, Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=KHXXpFOvryY",
  spotifyUrl: "https://open.spotify.com/track/3feWC4iQUr9xllyiVh3BQh"
  },
  movie: {
    title: "Invictus",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=RZY8c_a_dlQ",
    description:
      "Nelson Mandela usa el rugby para unir a Sudáfrica después del apartheid, demostrando que el liderazgo transformador puede sanar naciones divididas y construir un futuro común.",
  },
},
  {
  day: 183,
  month: "Julio",
  monthId: 7,
  title: "La Diligencia como Sello de Excelencia Empresarial",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "La diligencia en el ámbito empresarial no es solo una cuestión de productividad, sino un reflejo de nuestro carácter y compromiso. Este versículo nos insta a trabajar con esmero, buscando la aprobación divina a través de la excelencia en nuestras labores. Para el líder cristiano, esto significa ir más allá de la mera rentabilidad, enfocándose en la calidad, la ética y la integridad en cada decisión y acción. Un negocio diligente construye una reputación sólida, fomenta la confianza y genera un impacto positivo duradero, demostrando que el trabajo bien hecho honra a Dios y beneficia a la sociedad. Es un llamado a la mejora continua y a la búsqueda de la perfección en todo lo que emprendemos.",
  quote: {
  text: "Reunirse es el comienzo. Mantenerse juntos es un progreso. Trabajar juntos es el éxito.",
  author: "Henry Ford"
  },
  challenge: "Evalúa un proceso clave en tu negocio o área de liderazgo. Identifica al menos dos puntos donde la diligencia puede ser mejorada para alcanzar un estándar de excelencia superior. Implementa los cambios necesarios esta semana y observa los resultados.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s07_21X728k",
  spotifyUrl: "https://open.spotify.com/track/4j9g4h9g4h9g4h9g4h9g4h"
  }
},
  {
  day: 184,
  month: "Julio",
  monthId: 7,
  title: "Planificación Divina y Liderazgo Efectivo",
  verse: {
  text: "Encomienda al Señor tus acciones, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la planificación es fundamental, pero Proverbios 16: 3 nos recuerda que la verdadera sabiduría reside en encomendar nuestras acciones al Señor. Esto no significa pasividad, sino una dependencia activa de la guía divina en cada decisión estratégica. Un líder cristiano entiende que sus planes, por muy bien elaborados que estén, alcanzan su máximo potencial cuando se alinean con el propósito de Dios. Al someter nuestros proyectos y metas a Su voluntad, encontramos claridad y dirección, permitiendo que nuestros pensamientos sean afirmados y nuestros esfuerzos fructifiquen de una manera que trasciende la lógica humana. Esta confianza nos libera de la ansiedad y nos impulsa a actuar con integridad y visión a largo plazo.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración y a la reflexión, encomendando tus planes a Dios. Busca Su dirección y asegúrate de que tus acciones no solo sean eficientes (hacer las cosas correctamente), sino también éticas y alineadas con principios divinos (hacer lo correcto). Anota cómo esta práctica influye en la claridad de tus decisiones y en los resultados obtenidos.",
  song: {
  title: "Los Planes De Dios",
  artist: "Alabanzas De Adoración",
  youtubeUrl: "https://www.youtube.com/watch?v=2ulIAHxCBl4",
  spotifyUrl: "https://open.spotify.com/intl-pt/track/69ioVYH8f2D6rgVolPfPZR"
  }
},
  {
  day: 185,
  month: "Julio",
  monthId: 7,
  title: "Excelencia en el Servicio Empresarial",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos llama a una ética de trabajo superior, donde cada tarea, cada decisión empresarial y cada interacción con clientes o empleados se realiza con un compromiso total, como si estuviéramos sirviendo directamente a Dios. Para el empresario y líder cristiano, esto significa ir más allá de la mera rentabilidad o el reconocimiento humano. Implica buscar la excelencia en la calidad de los productos o servicios, en la integridad de las operaciones y en el trato justo a todas las personas. Cuando trabajamos de corazón para el Señor, nuestra motivación trasciende lo terrenal, infundiendo propósito y significado a nuestro esfuerzo diario. Esta perspectiva transforma el negocio en un campo de misión, donde la fidelidad y la dedicación reflejan los valores del Reino, impactando positivamente a la sociedad y glorificando a Dios a través de nuestra labor.",
  quote: {
  text: "La única forma de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos en tu negocio esta semana. ¿Cómo puedes elevar la calidad o el impacto de este trabajo si lo consideraras una ofrenda directa a Dios? Identifica una acción concreta para implementar esta perspectiva y comprométete a ejecutarla con excelencia.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=X0000000000",
  spotifyUrl: "https://open.spotify.com/track/0000000000000000000000"
  }
},
  {
  day: 186,
  month: "Julio",
  monthId: 7,
  title: "Planificación Divina y Éxito Empresarial",
  verse: {
  text: "El liderazgo es una elección, no una posición. Se trata de influir en los demás para lograr un propósito compartido.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo de los negocios, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos invita a ir más allá de la mera estrategia humana. Al encomendar nuestras obras a Jehová, reconocemos Su soberanía y buscamos Su dirección en cada decisión. Esto no significa pasividad, sino una colaboración activa donde nuestros planes se alinean con Su propósito. Cuando nuestros pensamientos y proyectos están arraigados en la fe y la oración, Dios puede afirmarlos, proveyendo sabiduría, recursos y oportunidades que superan nuestra capacidad natural. Esta dependencia divina nos da una perspectiva única, permitiéndonos tomar decisiones con confianza y paz, sabiendo que el éxito verdadero proviene de Su mano y no solo de nuestro esfuerzo.",
  quote: {
  text: "El liderazgo es una elección, no una posición. Se trata de influir en los demás para lograr un propósito compartido.",
  author: "Stephen Covey"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración, encomendando tus planes a Dios. Luego, busca activamente Su dirección a través de la lectura bíblica y la reflexión, y ajusta tus estrategias según lo que percibas de Su voluntad.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=pot566ui6Kg",
  spotifyUrl: "https://open.spotify.com/track/4rxHHuJwrYKk6xu45PIkFz"
  }
},
  {
  day: 187,
  month: "julio",
  monthId: 7,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo es la capacidad de inspirar confianza y motivar a otros a alcanzar un objetivo común con integridad y visión.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto individuos como organizaciones pueden perder el rumbo y caer en el desorden. En el ámbito empresarial cristiano, la visión no solo se trata de metas financieras, sino de un propósito superior que alinea los valores del reino con las operaciones diarias. Un líder con visión inspira a su equipo, fomenta la innovación y establece un camino estratégico que honra a Dios y sirve a la comunidad. Mantener la ley, en este contexto, implica operar con integridad, ética y sabiduría divina, asegurando que la búsqueda del éxito esté cimentada en principios inquebrantables. Una visión bien definida es el cimiento para un legado de impacto duradero.",
  quote: {
  text: "El liderazgo es la capacidad de inspirar confianza y motivar a otros a alcanzar un objetivo común con integridad y visión.",
  author: "Warren Buffett"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que refleje tus valores cristianos. Comunícala eficazmente a tu equipo para alinear a todos hacia un propósito común y medible.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=X-j8-z_qg1o",
  spotifyUrl: "https://open.spotify.com/track/62X7a1j2s2j2j2j2j2j2j2"
  }
},
  {
  day: 188,
  month: "Julio",
  monthId: 7,
  title: "La Claridad de la Visión Empresarial",
  verse: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, fomentando el crecimiento y la innovación constante.",
  reference: "Habacuc 2: 2"
  },
  reflection: "En el ámbito empresarial, la visión es el faro que guía cada decisión y acción. Habacuc 2: 2 nos insta a escribir la visión claramente, un principio fundamental para cualquier líder o emprendedor. Una visión bien definida y comunicada no solo inspira a los equipos, sino que también alinea los esfuerzos hacia un objetivo común. Permite que todos comprendan el propósito de su trabajo y cómo contribuyen al panorama general. Sin una visión clara, las empresas pueden desviarse, perder el enfoque y carecer de la motivación necesaria para superar los desafíos. Es la base sobre la que se construye el éxito sostenible, fomentando la innovación y la resiliencia en el camino.",
  quote: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, fomentando el crecimiento y la innovación constante.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, concisa y que inspire a tu equipo. Luego, comunícala de manera efectiva a todos los involucrados, buscando su retroalimentación y asegurándote de que cada miembro comprenda su rol en la consecución de esa visión. Considera crear un plan de acción con pasos concretos para hacer realidad esa visión.",
  song: {
  title: "La Visión (En Vivo)",
  artist: "Para Su Gloria",
  youtubeUrl: "https://www.youtube.com/watch?v=X2x11OBw-6c",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6fGHe51DVBhJSpXKuqwNQQ"
  }
},
  {
  day: 189,
  month: "Julio",
  monthId: 7,
  title: "La Visión Clara: Fundamento del Liderazgo Estratégico",
  verse: {
  text: "El liderazgo efectivo comienza con una visión clara y la disciplina para alinear cada acción con esos principios fundamentales para el éxito.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este proverbio resalta la importancia fundamental de la visión en cualquier colectivo, y esto es especialmente cierto en el ámbito empresarial. Un líder sin una visión clara y comunicada deja a su equipo sin dirección, lo que puede llevar a la confusión, la ineficiencia y, en última instancia, al fracaso. La visión actúa como una brújula estratégica, guiando las decisiones, inspirando la innovación y unificando los esfuerzos hacia un objetivo común. En el contexto cristiano, esta visión no solo busca el éxito material, sino también un impacto que honre a Dios y beneficie a la sociedad. Mantenerse anclado en principios éticos y valores bíblicos asegura que la visión empresarial sea sostenible y trascendente, evitando que la ambición desmedida desvíe el propósito original.",
  quote: {
  text: "El liderazgo efectivo comienza con una visión clara y la disciplina para alinear cada acción con esos principios fundamentales para el éxito.",
  author: "Stephen Covey"
  },
  challenge: "Define o revisa la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Luego, comunica esta visión de manera efectiva en tu próxima reunión de equipo, explicando cómo cada rol contribuye a alcanzarla.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s_Q2z1X3X_0",
  spotifyUrl: "https://open.spotify.com/track/622sW243j6v00x7j8X0Q7w"
  },
  movie: {
    title: "Unbroken (Inquebrantable)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=XrjJbl7kRrI",
    description:
      "La historia real de Louis Zamperini, quien sobrevivió 47 días en el océano y años de tortura como prisionero de guerra, demostrando una resiliencia inquebrantable alimentada por la fe.",
  },
},
  {
  day: 190,
  month: "Julio",
  monthId: 7,
  title: "Afirmando tus planes en Dios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, Proverbios 16: 3 nos recuerda que, más allá de nuestras mejores estrategias y esfuerzos, la verdadera estabilidad y el éxito provienen de encomendar nuestras obras al Señor. Esto no significa pasividad, sino una dependencia activa en la sabiduría divina. Al alinear nuestros planes con los principios de Dios, no solo buscamos su bendición, sino que también cultivamos una perspectiva que trasciende las fluctuaciones del mercado. Confiar en Él afirma nuestros pensamientos, dándonos claridad y propósito, y transformando nuestras ambiciones en un legado con impacto eterno. Es un llamado a integrar la fe en cada decisión empresarial, reconociendo que su guía es la brújula más segura.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración, encomendando tus planes a Dios. Luego, procede con diligencia, confiando en que Él afirmará tus pasos y te guiará hacia el mejor resultado para tu negocio.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s0e-l2h8o1Q",
  spotifyUrl: "https://open.spotify.com/track/3067f96g18oXg0x101037S"
  }
},
  {
  day: 191,
  month: "Julio",
  monthId: 7,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como líderes cristianos, nuestra planificación debe ir más allá de las métricas financieras y los objetivos de mercado. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, lo que implica alinear nuestros planes y decisiones con Su voluntad y propósito. Esto no significa pasividad, sino una dependencia activa de Dios en cada etapa del proceso. Al hacerlo, nuestros pensamientos y estrategias no solo se afirman, sino que también se infunden con una sabiduría y una dirección que trascienden la comprensión humana. Reconocer a Dios como el arquitecto principal de nuestros emprendimientos nos permite construir negocios con un legado duradero y un impacto significativo, tanto en lo terrenal como en lo espiritual.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos actuales. Identifica al menos tres áreas clave donde puedes integrar de manera más explícita la oración y la búsqueda de la dirección de Dios. Luego, toma acciones concretas para implementar estos cambios, confiando en que Él afirmará tus pasos y te guiará hacia un impacto mayor.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=s3w44w-h1aY",
  spotifyUrl: "https://open.spotify.com/track/30302Q02y9e1e1f1f1f1f1?si=a1b2c3d4e5f6g7h8"
  }
},
  {
  day: 192,
  month: "Julio",
  monthId: 7,
  title: "La Sabiduría Divina en la Estrategia Empresarial",
  verse: {
  text: "Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia; en todos tus caminos sométete a él, y él enderezará tus sendas.",
  reference: "Proverbios 3: 5-6"
  },
  reflection: "En el mundo empresarial, la toma de decisiones es constante y a menudo compleja. Proverbios 3: 5-6 nos invita a confiar plenamente en la sabiduría de Dios, en lugar de depender únicamente de nuestra propia inteligencia o experiencia. Para un líder cristiano, esto significa buscar dirección divina en cada estrategia, plan de negocio o desafío. No se trata de ignorar la prudencia o el análisis de datos, sino de complementarlos con una perspectiva espiritual. Al someter nuestros caminos al Señor, reconocemos que Él tiene una visión más amplia y un plan perfecto para nuestro negocio. Esta confianza nos libera de la ansiedad y nos capacita para tomar decisiones audaces y éticas que no solo buscan el éxito material, sino también el impacto eterno y la gloria de Dios en el mercado.",
  quote: {
  text: "La gerencia es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una decisión importante que debas tomar en tu negocio esta semana. Antes de actuar, dedica tiempo a la oración y busca la guía de Dios a través de Su Palabra. Luego, evalúa cómo esa dirección divina puede influir en tu estrategia y en las acciones que tomarás, asegurándote de que estén alineadas con principios éticos y de fe.",
  song: {
  title: "Sumérgeme",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=ZZkSo5claV0",
  spotifyUrl: "https://open.spotify.com/track/4vmPvQY7m6MC77mKDdJIkD"
  }
},
  {
  day: 193,
  month: "Julio",
  monthId: 7,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en resultados, ganancias y reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Este pasaje nos recuerda que cada tarea, cada decisión y cada interacción en nuestro negocio puede ser un acto de adoración. Al trabajar con diligencia y excelencia, no solo estamos construyendo una empresa, sino que estamos sirviendo a un propósito mayor. La motivación no debe ser solo el éxito terrenal, sino la convicción de que nuestro esfuerzo honra a Dios. Esta mentalidad transforma el trabajo de una obligación a una oportunidad para manifestar los valores del Reino, impactando positivamente a empleados, clientes y la comunidad, sabiendo que la verdadera recompensa viene de Él.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos actuales en tu negocio. ¿Cómo puedes abordarlo con una mentalidad de 'hacerlo para el Señor', buscando la excelencia y la integridad en cada detalle? Identifica una acción específica que tomarás esta semana para elevar la calidad de tu trabajo o servicio, no solo por el beneficio de tu empresa, sino como una ofrenda a Dios.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=0e6402z_y8Y",
  spotifyUrl: "https://open.spotify.com/track/6226615l4z01x08yX3221p"
  }
},
  {
  day: 194,
  month: "Julio",
  monthId: 7,
  title: "Trabajo con Propósito: Sirviendo a Cristo en el Negocio",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje nos invita a ver nuestro trabajo no solo como una tarea secular, sino como una oportunidad para servir a Dios. En el ámbito empresarial, esto significa ir más allá de la mera búsqueda de ganancias o reconocimiento humano. Implica realizar cada tarea, desde la estrategia de alto nivel hasta la atención al cliente, con excelencia y dedicación, como si Cristo mismo fuera nuestro cliente o supervisor. Esta perspectiva transforma la motivación, fomenta la integridad y eleva la calidad de nuestro desempeño. Al entender que nuestra recompensa final viene del Señor, cultivamos una ética de trabajo que honra a Dios y beneficia a todos los involucrados, construyendo un legado de impacto duradero y significativo.",
  quote: {
  text: "El liderazgo no es algo que se hace a la gente, es algo que se hace con la gente.",
  author: "Ken Blanchard"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Reflexiona sobre cómo podrías abordarlo con una mentalidad de servicio a Cristo, buscando la excelencia y el impacto positivo más allá de las expectativas mínimas. Implementa al menos un cambio en tu enfoque o en la ejecución de esa tarea esta semana.",
  song: {
  title: "Mi Mejor Adoración",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=X00m2_X_l_k",
  spotifyUrl: "https://open.spotify.com/track/4j9t10168x40411v328X5j"
  }
},
  {
  day: 195,
  month: "Julio",
  monthId: 7,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Sin una dirección clara, los equipos pueden perder el enfoque, las decisiones se vuelven erráticas y el progreso se estanca. Proverbios 29: 18 nos advierte que la falta de visión lleva al desenfreno, una realidad que se manifiesta en el ámbito empresarial como desorganización, baja moral y objetivos no alcanzados. Un líder cristiano en los negocios debe cultivar una visión inspiradora que no solo busque el éxito material, sino que también refleje valores éticos y un propósito trascendente. Esta visión debe ser comunicada constantemente, sirviendo como un ancla en tiempos de incertidumbre y un motor para la innovación. Mantener la visión viva y alinear cada acción con ella es fundamental para construir un legado de impacto duradero.",
  quote: {
  text: "La visión sin acción es un sueño. La acción sin visión es una pesadilla.",
  author: "Ken Blanchard"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Identifica al menos tres acciones concretas que puedes tomar para alinear mejor tus operaciones diarias con esa visión.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=X-s_l2X-r0k",
  spotifyUrl: "https://open.spotify.com/track/0j5X4Y12J7Y8G2J7X8Z7X8"
  }
},
  {
  day: 196,
  month: "julio",
  monthId: 7,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, tanto en la vida como en los negocios. Un líder empresarial sin una visión clara es como un barco sin timón, a la deriva y susceptible a las corrientes del mercado. La visión no es solo un sueño; es una dirección estratégica que alinea a todo el equipo, define objetivos y motiva a la acción. En el contexto cristiano, esta visión debe estar anclada en principios bíblicos, buscando no solo el éxito financiero, sino también un impacto positivo y ético. Una visión bien comunicada y compartida evita la confusión y el desenfreno, permitiendo que la empresa avance con propósito y resiliencia, construyendo un legado duradero que honre a Dios y beneficie a la sociedad.",
  quote: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y esté alineada con tus valores. Luego, comunica esta visión a tu equipo de manera efectiva, asegurándote de que cada miembro comprenda su rol en la consecución de ese objetivo común. Busca retroalimentación y ajusta según sea necesario para fomentar un compromiso colectivo.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=02f146h6-2c",
  spotifyUrl: "https://open.spotify.com/track/4j4x1y0l2x5y0t0z9z0z9z"
  },
  movie: {
    title: "Soul Surfer (Alma de Surfista)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=OmBxVfQTuvI",
    description:
      "La historia real de Aron Ralston, quien quedó atrapado en un cañón y tomó la decisión extrema de amputarse el brazo para sobrevivir, demostrando una determinación inquebrantable.",
  },
},
  {
  day: 197,
  month: "Julio",
  monthId: 7,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o iniciativa. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de una dirección clara: el desorden y la ineficacia. Para el líder cristiano en el ámbito empresarial, esto significa no solo tener una meta ambiciosa, sino también buscar la guía divina para establecerla. Una visión inspirada por Dios y claramente comunicada a todo el equipo no solo alinea los esfuerzos, sino que también infunde propósito y pasión. Es la base para la planificación estratégica, la toma de decisiones y la resiliencia ante los desafíos. Sin una visión definida, las acciones carecen de rumbo, los recursos se dispersan y el potencial de impacto se diluye, llevando a la frustración y al estancamiento. Un líder con visión clara, sin embargo, construye un legado duradero.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión clara para tu empresa o equipo. Asegúrate de que sea inspiradora, medible y comunicable a todos tus colaboradores, y ora por dirección divina en este proceso.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1g03h50x39Y",
  spotifyUrl: "https://open.spotify.com/track/4P2tq3f04qQ1m11q600s7e"
  }
},
  {
  day: 198,
  month: "Julio",
  monthId: 7,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Proverbios 29: 18 nos recuerda que sin una visión clara, hay desorden y falta de dirección. En el ámbito empresarial cristiano, esto significa que los líderes deben buscar a Dios para discernir el propósito y la dirección de su organización. Una visión inspirada no solo motiva a los empleados, sino que también alinea sus esfuerzos hacia un objetivo común. Es crucial comunicar esta visión de manera constante y apasionada, asegurándose de que cada miembro del equipo comprenda su papel en la consecución de los objetivos. Un líder con visión no solo ve el futuro, sino que también capacita a otros para que lo vean y trabajen juntos para hacerlo realidad, evitando la dispersión de esfuerzos y fomentando la productividad.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o equipo. ¿Es clara, inspiradora y bien comunicada? Si no, trabaja en refinarla y en desarrollar un plan para compartirla de manera efectiva con todos tus colaboradores, asegurándote de que cada uno entienda cómo su trabajo contribuye a esa visión.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0MXSa7v7fm7QGs5JssOu67"
  }
},
  {
  day: 199,
  month: "Julio",
  monthId: 7,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Colosenses 3: 23 nos llama a una ética de trabajo superior: hacer todo de corazón, como para el Señor. En el ámbito empresarial, esto trasciende la mera búsqueda de ganancias, invitándonos a operar con un propósito divino. Significa que cada decisión, cada producto, cada interacción con clientes y empleados debe reflejar un compromiso con la excelencia y la integridad que honre a Dios. Un líder cristiano entiende que su negocio es una plataforma para servir, innovar y bendecir a otros, no solo un medio para acumular riqueza. Esta perspectiva transforma la cultura organizacional, fomenta la responsabilidad y eleva el estándar de calidad, reconociendo que nuestro trabajo es una forma de adoración.",
  quote: {
  text: "Un negocio que solo hace dinero, es un negocio pobre.",
  author: "Henry Ford"
  },
  challenge: "Identifica un proceso clave en tu negocio esta semana (ej. atención al cliente, desarrollo de producto, gestión de equipo) y evalúa cómo puedes elevar su estándar de excelencia, realizándolo \"como para el Señor\". Implementa un cambio concreto que refleje este compromiso con la calidad y el servicio, y observa el impacto en tu equipo y tus resultados.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  }
},
  {
  day: 200,
  month: "julio",
  monthId: 7,
  title: "La Visión Clara en la Empresa",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; pero el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 subraya la importancia fundamental de la visión para la dirección y el orden. En el ámbito empresarial, una visión clara no es solo una declaración; es el motor que impulsa la innovación, la estrategia y la cohesión del equipo. Sin una visión definida, las empresas pueden desviarse, perder el enfoque y experimentar desorden, similar a un barco sin timón. Los líderes cristianos deben buscar la visión de Dios para sus emprendimientos, permitiendo que sus valores guíen cada decisión. Una visión inspirada divinamente no solo busca el éxito material, sino también un impacto duradero y significativo, alineado con propósitos mayores. Es la brújula que mantiene a la organización en curso, incluso en medio de la incertidumbre, fomentando la disciplina y la perseverancia.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Comparte esta visión con tu equipo y busca su retroalimentación para asegurar que todos estén alineados y comprometidos con el mismo propósito.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=s16fQ21_X74",
  spotifyUrl: "https://open.spotify.com/track/5sQ9012q222t6e11802o21"
  }
},
  {
  day: 201,
  month: "julio",
  monthId: 7,
  title: "Afirmando tus Planes con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, nuestra planificación va más allá de las proyecciones financieras y los análisis de mercado. Proverbios 16: 3 nos invita a encomendar nuestras obras a Dios, asegurando que nuestros pensamientos y planes se afirmen. Esto implica buscar la dirección divina en cada decisión, desde la visión general de la empresa hasta los detalles operativos. No se trata de una pasividad que espera que Dios haga todo, sino de una colaboración activa donde nuestra diligencia se une a la sabiduría celestial. Al alinear nuestros objetivos empresariales con los principios del Reino, no solo buscamos el éxito terrenal, sino también un impacto eterno. Esta encomienda nos da paz y confianza, sabiendo que nuestros esfuerzos están respaldados por un propósito mayor y una guía infalible.",
  quote: {
  text: "Un líder es aquel que conoce el camino, va por el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar un plan estratégico clave de tu negocio. Ora específicamente sobre él, pidiendo a Dios que afirme tus pensamientos y te revele cualquier ajuste necesario para alinearlo con Su propósito. Busca al menos una oportunidad para delegar una tarea importante, confiando en tu equipo y en la guía divina para el resultado.",
  song: {
  title: "Ven Espíritu Ven",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=zkQQPY-vwDw",
  spotifyUrl: "https://open.spotify.com/intl-es/track/05BkWRVy0cubbSnsyzw2lu"
  }
},
  {
  day: 202,
  month: "Julio",
  monthId: 7,
  title: "La Planificación Divina en los Negocios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil caer en la trampa de la autosuficiencia, creyendo que nuestro éxito depende únicamente de nuestra astucia y esfuerzo. Sin embargo, Proverbios 16: 3 nos ofrece una perspectiva transformadora: al encomendar nuestras obras al Señor, nuestros planes y pensamientos se afirman. Esto no significa pasividad, sino una colaboración activa con la sabiduría divina. Un líder cristiano entiende que la verdadera visión y la dirección estratégica provienen de una fuente superior. Al integrar la fe en la planificación empresarial, no solo buscamos la prosperidad material, sino también un propósito que trasciende lo terrenal, asegurando que cada decisión y cada proyecto estén alineados con principios eternos y contribuyan a un legado de impacto duradero.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos actuales. Identifica al menos una área donde has confiado predominantemente en tu propia fuerza y conocimiento. Ora específicamente sobre esa área, encomendándola a Dios y pidiendo su dirección. Luego, busca activamente cómo puedes integrar principios bíblicos en tu estrategia, ya sea en la toma de decisiones, la gestión de equipos o la relación con tus clientes. Documenta los cambios que implementes y observa cómo esta perspectiva divina impacta tus resultados.",
  song: {
  title: "El Sonido del Silencio",
  artist: "Alex Campos",
  youtubeUrl: "https://www.youtube.com/watch?v=07645f-w-70",
  spotifyUrl: "https://open.spotify.com/track/3035f29l89vXz2t10g2h0n"
  }
},
  {
  day: 203,
  month: "Julio",
  monthId: 7,
  title: "Conocimiento Divino, Éxito Empresarial",
  verse: {
  text: "... pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "En el mundo empresarial, la fortaleza y la capacidad de lograr grandes hazañas a menudo se asocian con la astucia, la estrategia o los recursos materiales. Sin embargo, Daniel 11: 32 nos revela una fuente de poder superior: el conocimiento de Dios. Para el empresario y líder cristiano, esto significa que la verdadera fuerza no reside solo en las habilidades humanas, sino en una profunda relación con el Creador. Conocer a Dios implica entender sus principios de justicia, integridad y sabiduría, los cuales son fundamentales para construir un negocio sólido y ético. Esta conexión divina no solo proporciona dirección en la toma de decisiones, sino que también infunde una resiliencia inquebrantable frente a los desafíos, permitiendo alcanzar logros que trascienden las expectativas humanas.",
  quote: {
  text: "El secreto para una vida exitosa es encontrar nuestro propósito y luego hacerlo.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área clave en tu negocio donde necesites fortaleza o dirección. Dedica tiempo a buscar la sabiduría de Dios a través de la oración y la lectura bíblica, aplicando los principios que descubras a esa situación específica. Observa cómo esta conexión divina te capacita para superar obstáculos y lograr resultados extraordinarios.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/track/2t99YvXhYfFp8y2T4h7g6F"
  },
  movie: {
    title: "The Case for Christ (El Caso de Cristo)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=92NiDM_j6fE",
    description:
      "La historia de inversores que predijeron la crisis financiera de 2008, revelando la importancia de la ética financiera y las consecuencias de la codicia desmedida.",
  },
},
  {
  day: 204,
  month: "Julio",
  monthId: 7,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto las personas como las organizaciones pueden perder el rumbo. En el ámbito empresarial, esto se traduce en la necesidad de establecer una visión estratégica que inspire, motive y alinee a todo el equipo. Un líder cristiano debe buscar la sabiduría divina para discernir la visión que Dios tiene para su negocio, comunicarla eficazmente y trabajar diligentemente para alcanzarla. Una visión clara no solo previene la desviación, sino que también impulsa la innovación, la resiliencia y el crecimiento sostenible, permitiendo que la empresa cumpla su propósito y glorifique a Dios en cada paso.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y se sientan parte de ella. Comunícala de nuevo con pasión y busca formas prácticas de alinear las operaciones diarias con esa visión.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=gWr6ORjlH4M",
  spotifyUrl: "https://open.spotify.com/track/62g25e1vQy2j5z0g7X7Y9g"
  }
},
  {
  day: 205,
  month: "Julio",
  monthId: 7,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados tangibles y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Cada tarea, cada decisión, cada interacción en nuestro negocio puede ser un acto de adoración. Cuando trabajamos con la mentalidad de que servimos a Cristo, nuestra motivación trasciende las ganancias o la aprobación de los demás. Esta perspectiva infunde un propósito más profundo en nuestro quehacer diario, impulsándonos a la excelencia, la integridad y la ética en todas nuestras operaciones. Reconocer que nuestra recompensa final viene del Señor nos libera de la presión de buscar validación constante y nos permite construir un legado de impacto que honra a Dios.",
  quote: {
  text: "El trabajo duro hará casi todo; pero en el servicio de Dios no solo debe ser trabajo duro, sino trabajo ardiente. El corazón debe estar en llamas.",
  author: "Charles Spurgeon"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Reflexiona sobre cómo puedes abordarlo con una mentalidad de servicio a Dios, buscando la excelencia y la integridad en cada detalle. Implementa este cambio de perspectiva durante la próxima semana y observa cómo impacta tu motivación y los resultados.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong United",
  youtubeUrl: "https://www.youtube.com/watch?v=N_Xo4t_1y14",
  spotifyUrl: "https://open.spotify.com/track/6L9f9aKz1w0y2z4g1s7r3c"
  }
},
  {
  day: 206,
  month: "Julio",
  monthId: 7,
  title: "El Carácter como Fundamento del Éxito Duradero",
  verse: {
  text: "La integridad de los rectos los guiará, mas la perversidad de los pecadores los destruirá.",
  reference: "Proverbios 11: 3"
  },
  reflection: "En el mundo empresarial, a menudo se mide el éxito por los resultados financieros o el crecimiento. Sin embargo, este versículo de Proverbios nos recuerda que la verdadera guía y el fundamento de un éxito duradero radican en la integridad. Un líder cristiano en los negocios entiende que el carácter no es un accesorio, sino el pilar sobre el cual se construye toda empresa. La honestidad, la ética y la transparencia no solo son virtudes morales, sino también estrategias empresariales sólidas que generan confianza y lealtad. Descuidar el carácter en pos de ganancias rápidas es un camino que, a la larga, lleva a la destrucción, mientras que la integridad asegura una base firme para el crecimiento sostenible y un legado de impacto positivo.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una decisión reciente en tu negocio. ¿Fue tomada basándose únicamente en la rentabilidad o también consideraste los principios de integridad y el impacto en tu carácter y el de tu equipo? Comprométete a tomar decisiones futuras donde la integridad sea el factor principal, incluso si implica un camino más desafiante.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 207,
  month: "julio",
  monthId: 7,
  title: "Excelencia en el Servicio y el Trabajo",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Colosenses 3: 23 nos llama a una ética de trabajo superior, no solo para impresionar a nuestros empleadores o clientes, sino como un acto de adoración a Dios. Para el empresario y líder cristiano, esto significa ir más allá de la mera satisfacción de requisitos. Implica buscar la excelencia en cada producto, servicio y decisión, entendiendo que nuestro trabajo es una extensión de nuestro testimonio. Al operar con integridad, pasión y un compromiso inquebrantable con la calidad, reflejamos el carácter de Cristo en el mercado. Esta perspectiva transforma el trabajo de una obligación a una oportunidad para glorificar a Dios y servir a la humanidad con distinción, construyendo un legado de impacto que trasciende lo material.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde la calidad podría mejorarse significativamente. Desarrolla un plan de acción con pasos concretos para elevar el estándar, recordando que este esfuerzo es para la gloria de Dios y el beneficio de tus clientes o equipo.",
  song: {
  title: "Haz lo que quieras",
  artist: "Evan Craft ft. Funky",
  youtubeUrl: "https://www.youtube.com/watch?v=0e68q4j4-wY",
  spotifyUrl: "https://open.spotify.com/track/307040qX19307040qX19"
  }
},
  {
  day: 208,
  month: "julio",
  monthId: 7,
  title: "Visión Clara, Impacto Duradero",
  verse: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "Proverbios 29: 18 nos recuerda que la falta de una visión clara lleva al desorden y la ineficacia. En el ámbito empresarial, esto se traduce en estrategias sin rumbo, equipos desmotivados y recursos malgastados. Un líder cristiano debe cultivar una visión inspirada por Dios, que no solo busque el éxito material, sino también el impacto positivo en la sociedad y la gloria de Dios. Esta visión debe ser comunicada con pasión y convicción, sirviendo como brújula para cada decisión y acción. Una visión bien definida alinea a todos los miembros de la organización hacia un propósito común, fomentando la innovación y la resiliencia frente a los desafíos. Es la base para construir un legado que trascienda lo temporal.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y que refleje tus valores cristianos. Luego, compártela con tu equipo y busca su retroalimentación para asegurar que todos estén alineados y comprometidos con ella.",
  song: {
  title: "La Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=y38-2w1-4fQ",
  spotifyUrl: "https://open.spotify.com/track/62g1t9w99z0t2l8p1q0t1q"
  }
},
  {
  day: 209,
  month: "Julio",
  monthId: 7,
  title: "La Excelencia como Acto de Adoración",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Colosenses 3: 23 nos llama a una excelencia radical en todo lo que hacemos, no para impresionar a otros, sino como una ofrenda a Dios. En el ámbito empresarial, esto significa ir más allá de la mera rentabilidad. Implica operar con integridad inquebrantable, buscar la innovación que sirva genuinamente a las personas y liderar con un propósito que trascienda las ganancias. Cuando un empresario cristiano abraza esta perspectiva, cada decisión, cada producto y cada interacción se convierte en una oportunidad para reflejar el carácter de Dios. La excelencia en el trabajo no es una opción, sino una expresión de nuestra fe y un testimonio poderoso en un mundo que observa. Es un recordatorio de que nuestro trabajo tiene un valor eterno cuando se realiza con un corazón entregado al Señor.",
  quote: {
  text: "No hay nada tan inútil, como hacer con gran eficacia algo que no debería hacerse en absoluto.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus tareas o proyectos actuales en tu negocio. ¿Estás haciéndolo con excelencia, como si fuera para el Señor? Identifica un área donde puedas elevar el estándar de calidad o servicio, no por obligación, sino como un acto de adoración y un testimonio de tu fe.",
  song: {
  title: "Adorador por Excelencia",
  artist: "Alabanzas Cristianas",
  youtubeUrl: "https://www.youtube.com/watch?v=KKRNf2TFwUw",
  spotifyUrl: "https://open.spotify.com/track/1h2zhnbz5RilvmmwRXMPwA"
  }
},
  {
  day: 210,
  month: "Julio",
  monthId: 7,
  title: "Liderazgo que Sirve y Transforma",
  verse: {
  text: "Apacentad la grey de Dios que está entre vosotros, cuidando de ella, no por fuerza, sino voluntariamente; no por ganancia deshonesta, sino con ánimo pronto; no como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey. Y cuando aparezca el Príncipe de los pastores, vosotros recibiréis la corona incorruptible de gloria.",
  reference: "1 Pedro 5: 1-4"
  },
  reflection: "El apóstol Pedro nos llama a un liderazgo que va más allá de la autoridad o el beneficio personal. En el ámbito empresarial, esto se traduce en una gestión que prioriza el bienestar y el desarrollo del equipo, no solo los resultados financieros. Un líder cristiano en los negocios entiende que su posición es una oportunidad para servir, guiar y ser un modelo de integridad y diligencia. No se trata de imponer, sino de inspirar; no de acumular, sino de edificar. Al cuidar de quienes están bajo nuestra influencia con un corazón dispuesto y desinteresado, no solo construimos empresas más sólidas y éticas, sino que también reflejamos los principios del Reino de Dios en el mercado. Este enfoque de servicio genuino es la clave para un legado duradero y significativo.",
  quote: {
  text: "El liderazgo no se trata de estar a cargo. Se trata de cuidar a los que están a tu cargo.",
  author: "Simon Sinek"
  },
  challenge: "Evalúa una de tus responsabilidades de liderazgo esta semana. ¿Cómo puedes abordarla desde una perspectiva de servicio, buscando el beneficio y crecimiento de tu equipo o colaboradores, en lugar de solo cumplir con una tarea o alcanzar una meta personal? Identifica una acción concreta para implementar este principio.",
  song: {
  title: "Mi Libertador",
  artist: "Miel San Marcos, Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=s0f9w31zY7Q",
  spotifyUrl: "https://open.spotify.com/track/414x020aXz5v80z1f0s1jQ"
  },
  movie: {
    title: "Courageous (Valientes)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=cDHNqTHFLyY",
    description:
      "24 horas en un banco de inversión al inicio de la crisis financiera de 2008, mostrando las decisiones éticas difíciles que enfrentan los líderes en momentos de crisis.",
  },
},
  {
  day: 211,
  month: "Julio",
  monthId: 7,
  title: "Conocimiento Divino, Liderazgo Poderoso",
  verse: {
  text: "Un buen líder empresarial inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  reference: "Daniel 11: 32"
  },
  reflection: "El versículo de Daniel nos recuerda que el verdadero poder y la capacidad de lograr grandes hazañas provienen de un profundo conocimiento de Dios. En el ámbito empresarial, esto se traduce en buscar la sabiduría divina para la toma de decisiones, la gestión de equipos y la visión estratégica. Un líder que se apoya en principios bíblicos no solo busca el éxito material, sino también un impacto trascendente. Este conocimiento nos equipa para enfrentar desafíos con fortaleza, innovar con propósito y liderar con integridad, sabiendo que nuestra fuente de poder es inagotable y nuestra visión va más allá de lo terrenal, buscando honrar a Dios en cada paso de nuestro negocio.",
  quote: {
  text: "Un buen líder empresarial inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una decisión importante en tu negocio esta semana. Antes de actuar, dedica tiempo a la oración y a la reflexión en la Palabra de Dios, buscando Su dirección. Luego, aplica los principios que recibas en tu decisión, confiando en que Su sabiduría te guiará a lograr hazañas.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong UNITED",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 212,
  month: "Agosto",
  monthId: 8,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "Colosenses 3: 23 nos invita a una perspectiva transformadora del trabajo. En el ámbito empresarial, esto significa ir más allá de la mera búsqueda de ganancias o reconocimiento humano. Implica infundir cada tarea, decisión y relación comercial con un sentido de propósito divino. Cuando trabajamos de corazón, como para el Señor, nuestra ética laboral se eleva, nuestra integridad se fortalece y nuestra dedicación se profundiza. Esta mentalidad no solo mejora la calidad de nuestro trabajo, sino que también nos permite ver nuestro negocio como un medio para glorificar a Dios y servir a los demás, creando un legado de impacto que trasciende lo material.",
  quote: {
  text: "Si todos avanzamos juntos, el éxito llegará solo.",
  author: "Henry Ford"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio esta semana que consideres rutinario o poco inspirador. Enfócate en realizarlo con excelencia, como si tu único objetivo fuera honrar a Dios a través de él. Observa cómo cambia tu actitud y el resultado final.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3xTHbxcvbj7xLHOuTqDAdF"
  }
},
  {
  day: 213,
  month: "Julio",
  monthId: 7,
  title: "La Ejecución de la Visión Divina",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la visión es fundamental, pero la ejecución es lo que la materializa. Proverbios 16: 3 nos recuerda que al encomendar nuestras obras al Señor, nuestros planes se consolidan. Esto implica no solo orar por nuestros proyectos, sino también actuar con diligencia y sabiduría, confiando en que Dios guiará nuestros pasos. Un líder cristiano entiende que su visión empresarial, si está alineada con principios divinos, requiere esfuerzo y una gestión eficaz. La fe se demuestra en la acción, en la planificación estratégica y en la toma de decisiones que honran a Dios, transformando una idea en un legado tangible y de impacto.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Identifica una visión clave para tu negocio o equipo. Desarrolla un plan de acción detallado con pasos concretos y asigna responsabilidades. Luego, encomienda este plan a Dios en oración y comienza a ejecutarlo con disciplina, evaluando el progreso semanalmente.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1g0wW_1z5kY",
  spotifyUrl: "https://open.spotify.com/track/6226s64s8j12x5m70s0q7L"
  }
},
  {
  day: 214,
  month: "agosto",
  monthId: 8,
  title: "Afirmando tus planes con propósito divino",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, Proverbios 16: 3 nos invita a ir más allá de la mera lógica y encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y búsqueda de la dirección divina en cada decisión. Para el empresario y líder cristiano, esto implica alinear los objetivos de negocio con los principios del Reino, buscando que cada proyecto y cada estrategia reflejen un propósito mayor. Al confiar nuestros planes a Dios, no solo buscamos su bendición, sino también su sabiduría para discernir los caminos correctos, evitando errores y maximizando el impacto de nuestras acciones. Esta encomienda nos da paz y la certeza de que, aunque los desafíos surjan, nuestros pensamientos y planes serán afirmados por una fuente inquebrantable.",
  quote: {
  text: "La verdadera medida de un líder no es la cantidad de personas que le sirven, sino la cantidad de personas a las que él sirve.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un plan o proyecto clave en tu negocio esta semana. Antes de ejecutarlo, dedica tiempo a la oración, pidiendo a Dios dirección y sabiduría. Busca cómo puedes alinear este plan con principios bíblicos y confía en que Él afirmará tus pasos, incluso si los resultados no son los esperados inicialmente.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=wX-y00l4Y-Q",
  spotifyUrl: "https://open.spotify.com/track/62j15l0590w3y7q6l7q7l7"
  }
},
  {
  day: 215,
  month: "Agosto",
  monthId: 8,
  title: "La Diligencia como Fundamento del Éxito Sostenible",
  verse: {
  text: "Los proyectos del diligente ciertamente son ventaja, mas todo el que se apresura, ciertamente {llega} a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "La diligencia en el ámbito empresarial no es simplemente trabajar duro, sino trabajar con propósito y planificación. Proverbios 21: 5 nos advierte sobre la prisa y la falta de previsión, destacando que los proyectos bien pensados y ejecutados con esmero son los que realmente generan beneficios duraderos. Un líder cristiano debe entender que la paciencia y la meticulosidad son virtudes que se traducen en estrategias sólidas, procesos eficientes y decisiones informadas. La prisa, por otro lado, a menudo lleva a atajos, errores costosos y, en última instancia, a la escasez. La verdadera prosperidad no es un golpe de suerte, sino el resultado de una siembra constante y cuidadosa, guiada por la sabiduría divina y la aplicación de principios empresariales sólidos.",
  quote: {
  text: "No hay nada tan inútil como hacer con gran eficiencia algo que no debería haberse hecho en absoluto.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto o iniciativa actual en tu negocio. ¿Estás actuando con diligencia y planificación, o la prisa te está llevando a tomar atajos? Dedica tiempo esta semana a revisar tus procesos y asegúrate de que cada paso esté alineado con una estrategia bien definida y un propósito claro, evitando la tentación de la inmediatez que puede comprometer la calidad y los resultados a largo plazo.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d4z9s5451k",
  spotifyUrl: "https://open.spotify.com/track/4j9X3y0b7j5Q2t0k2z010X"
  }
},
  {
  day: 216,
  month: "Agosto",
  monthId: 8,
  title: "Afirmando la Visión con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación y la ejecución son pilares fundamentales. Proverbios 16: 3 nos invita a un nivel superior de estrategia: encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y colaboración con la sabiduría divina. Para el empresario y líder cristiano, cada plan de negocios, cada decisión estratégica y cada proyecto debe ser presentado ante Dios. Al hacerlo, no solo buscamos su bendición, sino que permitimos que nuestros pensamientos y visiones sean moldeados y afirmados por su propósito. Esta alineación espiritual proporciona claridad, dirección y una paz que trasciende las incertidumbres del mercado, asegurando que nuestros esfuerzos no solo busquen el éxito terrenal, sino también un impacto eterno.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes y estrategias empresariales. Presenta cada área clave de tu negocio en oración, pidiendo a Dios que afirme tus pensamientos y te revele cualquier ajuste necesario para alinear tu visión con su propósito. Busca su dirección en las decisiones importantes y confía en que Él guiará tus pasos hacia un impacto significativo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y213-l-1-7U",
  spotifyUrl: "https://open.spotify.com/track/62g1g1h1l31e131d111d11"
  }
},
  {
  day: 217,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos advierte que sin una visión clara, tanto las personas como las organizaciones carecen de dirección y propósito, lo que puede llevar al caos y al fracaso. En el ámbito empresarial cristiano, la visión no solo se trata de metas financieras, sino también de un propósito superior que honre a Dios y sirva a la comunidad. Un líder con visión inspira a su equipo, fomenta la innovación y establece un rumbo estratégico que va más allá de las ganancias inmediatas. Mantener la visión viva requiere comunicación constante, adaptabilidad y una fe inquebrantable en el plan divino. Es la brújula moral y estratégica que asegura que cada paso esté alineado con los valores y objetivos fundamentales de la organización, evitando desviaciones y manteniendo el enfoque en el impacto duradero.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y comunicar la visión de tu empresa o proyecto. Asegúrate de que cada miembro de tu equipo comprenda claramente hacia dónde se dirigen y por qué su trabajo es importante. Si aún no tienes una visión definida, tómate el tiempo para orar y establecer una que sea inspiradora y alineada con principios cristianos.",
  song: {
  title: "Visión",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_0s_0s_0s_0",
  spotifyUrl: "https://open.spotify.com/track/0s0s0s0s0s0s0s0s0s0s"
  },
  movie: {
    title: "Too Big to Fail (Demasiado Grande para Quebrar)",
    platform: "HBO",
    youtubeUrl: "https://www.youtube.com/watch?v=wyz79sd_SDA",
    description:
      "El colapso financiero de 2008 desde la perspectiva del gobierno, mostrando cómo las decisiones de liderazgo en crisis pueden afectar a millones de personas.",
  },
},
  {
  day: 218,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; Mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "En el ámbito empresarial, la visión es el faro que guía cada decisión y acción. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de visión, un principio tan aplicable a una nación como a una empresa. Un líder cristiano debe cultivar una visión clara, no solo para el crecimiento financiero, sino también para el impacto positivo en la sociedad y el cumplimiento de un propósito superior. Sin una dirección definida, los equipos pueden perder el enfoque, la motivación disminuye y los recursos se dispersan. Una visión inspiradora y bien comunicada une a los colaboradores, fomenta la innovación y permite superar los desafíos con resiliencia, siempre bajo la guía de principios éticos y bíblicos que aseguren un legado duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión a largo plazo de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable a todo tu equipo. Reflexiona sobre cómo esta visión se alinea con tus valores cristianos y cómo puedes integrarla en tus operaciones diarias, buscando siempre la dirección divina para cada paso.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/5zh9x8OxWAySBxWhvTDBW2"
  }
},
  {
  day: 219,
  month: "Agosto",
  monthId: 8,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Proverbios 16: 3 nos invita a entregar nuestras obras y planes al Señor para que nuestros pensamientos sean afirmados. En el ámbito empresarial, esto significa ir más allá de la mera estrategia y buscar la dirección divina en cada decisión. No se trata de una pasividad, sino de una dependencia activa en Dios, reconociendo que Él es quien finalmente establece nuestros pasos. Al alinear nuestros objetivos de negocio con Su voluntad, encontramos una base sólida y un propósito trascendente. Esta encomienda nos libera de la ansiedad y nos permite operar con una confianza que va más allá de las circunstancias del mercado, sabiendo que nuestros esfuerzos, cuando son para Su gloria, no serán en vano.",
  quote: {
  text: "La planificación a largo plazo no es pensar en decisiones futuras, sino en el futuro de las decisiones presentes.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto o decisión importante en tu negocio. Antes de avanzar, dedica tiempo a la oración, encomendando ese plan a Dios. Reflexiona sobre cómo tus decisiones actuales están construyendo el futuro de tu empresa y si están alineadas con principios que honran a Dios. Busca Su sabiduría para afirmar tus pensamientos y acciones, y confía en que Él guiará tus pasos hacia un propósito mayor.",
  song: {
  title: "Cuan Grande Es Dios",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=yhSQZHZZy08",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0WigYZOESf55IuZsoWb0YD"
  }
},
  {
  day: 220,
  month: "agosto",
  monthId: 8,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos llama a una ética de trabajo superior, no motivada por la aprobación humana, sino por el deseo de honrar a Dios. Para el empresario y líder cristiano, esto significa que cada tarea, cada decisión y cada interacción deben realizarse con la máxima dedicación y excelencia. No se trata solo de cumplir objetivos o maximizar ganancias, sino de ver nuestro trabajo como una extensión de nuestro servicio a Dios. Al hacerlo, elevamos el estándar de nuestro desempeño, inspiramos a nuestros equipos y construimos un legado de impacto que trasciende lo meramente terrenal, reflejando los valores del Reino en el mercado. Esta perspectiva transforma el trabajo de una obligación a una oportunidad de adoración.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas diarias o proyectos actuales. ¿Cómo puedes abordarlo con una mentalidad de 'hacerlo para el Señor' para elevar su calidad y propósito? Identifica una acción específica que demuestre excelencia y servicio en tu trabajo esta semana.",
  song: {
  title: "Mi Primer Amor",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=0_20j16e4yU",
  spotifyUrl: "https://open.spotify.com/track/3v8l9a8t00g8z8v0v8v0v8"
  }
},
  {
  day: 221,
  month: "agosto",
  monthId: 8,
  title: "Trabajo con Propósito Divino: Más Allá de la Ganancia",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente el mundo.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ajetreo del mundo empresarial, es fácil perder de vista el propósito superior de nuestro trabajo. Colosenses 3: 23-24 nos recuerda que cada tarea, cada decisión y cada interacción en nuestros negocios deben ser realizadas con excelencia y dedicación, como si estuviéramos sirviendo directamente a Dios. Esta perspectiva transforma la rutina en una misión, elevando la calidad de nuestro esfuerzo y la integridad de nuestras acciones. Cuando trabajamos con un corazón entregado al Señor, nuestra motivación trasciende la búsqueda de ganancias o el reconocimiento humano. Nos enfocamos en la excelencia, la ética y el impacto positivo, sabiendo que nuestra verdadera recompensa proviene de Él. Este enfoque no solo edifica nuestro carácter, sino que también inspira a nuestros equipos y clientes, creando un legado de impacto que honra a Dios.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente el mundo.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas o proyectos actuales en el negocio. ¿Cómo puedes abordarlo con una mentalidad de servicio a Dios, buscando la excelencia y el impacto más allá de los resultados esperados? Implementa al menos un cambio concreto en tu enfoque esta semana.",
  song: {
  title: "Dios de Pactos",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s5e125f4b7o",
  spotifyUrl: "https://open.spotify.com/track/0h36y16900216656789012"
  }
},
  {
  day: 222,
  month: "Agosto",
  monthId: 8,
  title: "Conoce tu Negocio: Fundamento de un Legado Duradero",
  verse: {
  text: "El liderazgo es la capacidad de transformar la visión en realidad, inspirando a otros a alcanzar metas extraordinarias.",
  reference: "Proverbios 27: 23-24"
  },
  reflection: "Proverbios nos insta a una gestión diligente y consciente de nuestros recursos. En el ámbito empresarial, esto se traduce en la necesidad imperante de conocer a fondo cada aspecto de nuestro negocio. No basta con tener una visión general; un líder cristiano debe sumergirse en los detalles, entender las métricas, conocer a su equipo y comprender las necesidades de sus clientes. Esta diligencia no solo optimiza la operación diaria, sino que también sienta las bases para un legado sostenible. Las riquezas y el éxito momentáneo son efímeros, pero un liderazgo fundamentado en el conocimiento profundo y la administración responsable perdura a través del tiempo, construyendo un impacto que trasciende generaciones. Es una invitación a la mayordomía sabia y estratégica.",
  quote: {
  text: "El liderazgo es la capacidad de transformar la visión en realidad, inspirando a otros a alcanzar metas extraordinarias.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar en profundidad un área específica de tu negocio que quizás hayas descuidado. Analiza los datos, habla con tu equipo y busca oportunidades de mejora. Implementa al menos una acción concreta basada en este análisis para fortalecer esa área.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y19b-0050fM",
  spotifyUrl: "https://open.spotify.com/track/6226s1z2s1t00000000000"
  }
},
  {
  day: 223,
  month: "Agosto",
  monthId: 8,
  title: "La Excelencia en el Trabajo como Testimonio",
  verse: {
  text: "La esencia del liderazgo es la comunicación efectiva y la construcción de relaciones basadas en la confianza y el respeto mutuo.",
  reference: "Proverbios 22: 29"
  },
  reflection: "Este proverbio nos recuerda que la excelencia y la diligencia en nuestro trabajo no pasan desapercibidas. Como empresarios y líderes cristianos, nuestra habilidad y dedicación en los negocios son un testimonio de nuestra fe. No se trata solo de buscar el éxito personal, sino de honrar a Dios a través de la calidad de nuestro servicio, la integridad en nuestras operaciones y la pasión por lo que hacemos. La destreza y el compromiso nos abren puertas y nos posicionan para influir en esferas de mayor impacto, permitiéndonos llevar los principios del Reino a cada interacción comercial y decisión estratégica. La excelencia es un lenguaje universal que glorifica a Dios y atrae oportunidades.",
  quote: {
  text: "La esencia del liderazgo es la comunicación efectiva y la construcción de relaciones basadas en la confianza y el respeto mutuo.",
  author: "Stephen Covey"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde puedas elevar el estándar de excelencia. Identifica una acción concreta que demuestre un compromiso renovado con la calidad y la diligencia, y ejecútala esta semana.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1L3g_1L3g_1L3g",
  spotifyUrl: "https://open.spotify.com/track/1L3g_1L3g_1L3g"
  }
},
  {
  day: 224,
  month: "agosto",
  monthId: 8,
  title: "La Sabiduría en la Gestión del Tiempo",
  verse: {
  text: "Así que tengan cuidado de su manera de vivir. No vivan como necios, sino como sabios, aprovechando al máximo cada momento, porque los días son malos.",
  reference: "Efesios 5: 15-16 (NVI)"
  },
  reflection: "En el ámbito empresarial, la gestión del tiempo es un pilar fundamental para el éxito. Efesios 5: 15-16 nos insta a vivir con sabiduría, redimiendo el tiempo, una verdad que resuena profundamente en el liderazgo cristiano. Cada decisión, cada proyecto y cada interacción en los negocios consume tiempo, un recurso no renovable. Un líder sabio no solo planifica estratégicamente, sino que también discierne cómo invertir sus horas y las de su equipo para maximizar el impacto y la eficiencia. Esto implica priorizar tareas, delegar eficazmente y evitar distracciones que desvíen del propósito central. Aprovechar al máximo cada momento significa operar con intencionalidad, buscando la excelencia en cada labor y reconociendo que el tiempo es un don divino que debe ser administrado con diligencia y propósito, honrando a Dios en cada acción empresarial.",
  quote: {
  text: "La gestión del tiempo es la gestión de la vida.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea en tu negocio que consume mucho tiempo sin generar un valor proporcional. Desarrolla un plan concreto para optimizarla o delegarla esta semana, liberando tiempo para actividades de mayor impacto estratégico.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d4C4p_w-3Q",
  spotifyUrl: "https://open.spotify.com/track/6e2j04Xy8q40X9X7X5X000"
  },
  movie: {
    title: "Woodlawn",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=T2IaJwkqgPk",
    description:
      "Documental que analiza las causas de la crisis financiera de 2008, revelando la importancia de la integridad y la responsabilidad en el liderazgo financiero.",
  },
},
  {
  day: 225,
  month: "Agosto",
  monthId: 8,
  title: "La Persistencia en Hacer el Bien: Clave del Liderazgo Duradero",
  verse: {
  text: "No nos cansemos de hacer el bien, porque a su debido tiempo cosecharemos si no nos damos por vencidos.",
  reference: "Gálatas 6: 9"
  },
  reflection: "En el mundo empresarial, la tentación de tomar atajos o de ceder ante la presión puede ser grande. Sin embargo, Gálatas 6: 9 nos recuerda la importancia de la persistencia en la integridad y el buen obrar. Un líder cristiano no solo busca el éxito financiero, sino que también se esfuerza por construir un legado basado en principios éticos y valores divinos. Cada decisión, cada interacción y cada estrategia deben reflejar un compromiso inquebrantable con la justicia y la excelencia. La cosecha no siempre es inmediata, pero la paciencia y la fe son virtudes empresariales que, a largo plazo, producen frutos abundantes y duraderos, tanto en el negocio como en el impacto espiritual. Mantenerse firme en hacer lo correcto, incluso cuando es difícil, es el sello de un liderazgo verdaderamente transformador.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una situación en tu negocio donde podrías estar tentado a comprometer tus valores por un beneficio a corto plazo. Comprométete a tomar la decisión correcta, incluso si es el camino más difícil, y documenta el proceso y los resultados. Evalúa cómo esta decisión fortalece tu liderazgo y la reputación de tu empresa.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 226,
  month: "Agosto",
  monthId: 8,
  title: "La Estrategia Divina en los Negocios",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, Proverbios 16: 3 nos invita a ir un paso más allá: encomendar nuestras obras al Señor. Esto no significa pasividad, sino una profunda dependencia y reconocimiento de que, aunque planifiquemos con diligencia, la dirección final y el éxito provienen de Dios. Al alinear nuestros planes de negocio con Sus principios y buscar Su guía, nuestros pensamientos y decisiones se vuelven más firmes y coherentes. Esta perspectiva nos permite operar con una paz que trasciende las incertidumbres del mercado, sabiendo que nuestro esfuerzo, combinado con la sabiduría divina, nos conducirá a un propósito mayor y a resultados duraderos.",
  quote: {
  text: "La planificación a largo plazo no se ocupa de decisiones futuras, sino del futuro impacto de decisiones presentes.",
  author: "Peter Drucker"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración, encomendando tus planes a Dios. Luego, revisa tus estrategias para asegurarte de que reflejan principios de integridad, servicio y propósito, confiando en que Él afirmará tus pasos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=wz-24b868eY",
  spotifyUrl: "https://open.spotify.com/track/6X0s008t9281X4f7z4l0jL"
  }
},
  {
  day: 227,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la claridad de visión es fundamental. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, asegurando que nuestros pensamientos y planes serán afirmados. Esto no es una invitación a la pasividad, sino a una colaboración activa con la sabiduría divina. Un líder cristiano debe buscar la dirección de Dios en cada decisión, desde la estrategia de mercado hasta la gestión de equipos. Al alinear nuestros objetivos empresariales con los principios de Dios, no solo encontramos una base sólida para el éxito, sino que también cultivamos un propósito más elevado que trasciende las ganancias. Esta dependencia nos permite navegar la incertidumbre con confianza, sabiendo que nuestros esfuerzos están respaldados por una visión que va más allá de lo terrenal.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión y misión de tu empresa o proyecto. Ora específicamente por cada aspecto, pidiendo a Dios que afirme tus pensamientos y te dé claridad para los próximos pasos. Identifica una acción concreta que puedas tomar para alinear mejor tus operaciones con los principios bíblicos y la visión que has recibido.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=11gQyQ6-f5E",
  spotifyUrl: "https://open.spotify.com/track/303s4h2sQ2w2q9v9k3q2k2"
  }
},
  {
  day: 228,
  month: "Agosto",
  monthId: 8,
  title: "Planificación y Prosperidad: El Camino del Líder Cristiano",
  verse: {
  text: "La buena planificación y el trabajo duro conducen a la prosperidad, pero los atajos apresurados conducen a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos recuerda que el éxito duradero en cualquier empresa, incluyendo los negocios, no es fruto de la casualidad ni de atajos. Requiere una planificación meticulosa y un trabajo arduo y constante. En el liderazgo cristiano, esta verdad se amplifica, ya que nuestra prosperidad no solo se mide en ganancias, sino en el impacto que generamos y la gloria que damos a Dios. John C. Maxwell, un reconocido líder cristiano, complementa esta idea al afirmar que \"los buenos líderes deben comunicar la visión de forma clara, creativa y continua. Sin embargo, la visión no cobra vida hasta que el líder la modela\". Esto significa que nuestra planificación y esfuerzo deben estar alineados con una visión clara, que no solo se articule, sino que se viva y se demuestre con el ejemplo. La diligencia en la planificación y la ejecución, guiada por principios divinos, es el fundamento sobre el cual se construye un legado de impacto y una prosperidad que trasciende lo material.",
  quote: {
  text: "Los buenos líderes deben comunicar la visión de forma clara, creativa y continua. Sin embargo, la visión no cobra vida hasta que el líder la modela.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa tu plan de negocios actual o un proyecto clave. Identifica al menos dos áreas donde puedes aplicar una planificación más diligente y un esfuerzo más sostenido. Luego, comunica claramente la visión de estas áreas a tu equipo y comprométete a modelar el trabajo duro y la dedicación necesarios para alcanzarla. Evita la tentación de buscar soluciones rápidas y enfócate en construir un progreso sólido y sostenible.",
  song: {
  title: "Al Estar Aquí",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=ZRhAZxua3gM",
  spotifyUrl: "https://open.spotify.com/track/72tVbvGWzJ92cfyXaFd7nw"
  }
},
  {
  day: 229,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara como Brújula Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el motor que impulsa cualquier emprendimiento. Proverbios 29: 18 nos advierte sobre el caos que surge de la falta de una dirección clara. En el ámbito empresarial, una visión definida no solo guía las decisiones estratégicas, sino que también inspira y unifica al equipo. Como líderes cristianos, nuestra visión debe ir más allá de las ganancias, buscando impactar positivamente a la sociedad y reflejar los principios del Reino. Es la brújula que nos mantiene en curso, evitando la dispersión de esfuerzos y asegurando que cada paso contribuya a un propósito mayor. Una visión inspirada por Dios nos permite construir un legado duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión clara de tu empresa o proyecto. Asegúrate de que esta visión no solo sea ambiciosa, sino que también refleje tus valores cristianos y el impacto que deseas generar en tu comunidad y en el mercado. Comparte esta visión con tu equipo y busca su compromiso.",
  song: {
  title: "Visión",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=eX-460h4m7Q",
  spotifyUrl: "https://open.spotify.com/track/0Y4e7wX3k6z5m0v8g7k8p0"
  }
},
  {
  day: 230,
  month: "Agosto",
  monthId: 8,
  title: "Principios Eternos para Negocios Duraderos",
  verse: {
  text: "Lo que ya ha acontecido volverá a acontecer; lo que ya se ha hecho se volverá a hacer ¡y no hay nada nuevo bajo el sol! Hay quien llega a decir: «¡Mira que esto sí es una novedad!» Pero eso ya existía desde siempre, entre aquellos que nos precedieron.",
  reference: "Eclesiastés 1: 9-10"
  },
  reflection: "En el mundo empresarial, a menudo buscamos la próxima gran idea o la última tendencia que nos dará una ventaja. Sin embargo, Eclesiastés nos recuerda que hay principios fundamentales que perduran a través del tiempo. Los líderes cristianos deben discernir estos principios eternos, muchos de los cuales se encuentran en la sabiduría bíblica, y aplicarlos con diligencia. La verdadera innovación no siempre reside en crear algo completamente nuevo, sino en aplicar verdades atemporales de maneras frescas y relevantes. Al anclarnos en estos fundamentos, podemos construir negocios resilientes y con propósito, que no se tambaleen con cada cambio del mercado, sino que prosperen sobre una base sólida de sabiduría y ética.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un principio fundamental de tu negocio o liderazgo que consideres atemporal. Reflexiona sobre cómo puedes aplicarlo de una manera innovadora o más efectiva esta semana, buscando la guía divina para su implementación.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=0e658y2813Y",
  spotifyUrl: "https://open.spotify.com/track/4j61sX4q2g2s8y4Q2g2s8y"
  }
},
  {
  day: 231,
  month: "Agosto",
  monthId: 8,
  title: "Excelencia en el Servicio y Liderazgo",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "El apóstol Pablo nos insta a realizar cada tarea con un compromiso total, como si estuviéramos sirviendo directamente a Dios. En el ámbito empresarial, esto se traduce en una búsqueda incansable de la excelencia. No se trata solo de cumplir con las expectativas, sino de superarlas, no por el reconocimiento humano, sino por un propósito superior. Un líder cristiano entiende que su trabajo es una extensión de su fe, y cada decisión, cada producto, cada interacción con clientes y empleados debe reflejar los valores del Reino. Esta perspectiva transforma el trabajo de una simple transacción a una vocación, donde la integridad, la calidad y el servicio son manifestaciones de un corazón que sirve a Cristo. Al operar con esta mentalidad, no solo construimos negocios exitosos, sino que también dejamos un legado de impacto que trasciende lo material.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde puedas elevar el estándar de excelencia. Comprométete a realizar esa tarea o proyecto con una dedicación y calidad excepcionales, recordándote que tu esfuerzo es para el Señor. Evalúa cómo esta mentalidad impacta tus resultados y la percepción de tu equipo y clientes.",
  song: {
  title: "Al Estar Aquí",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=ZRhAZxua3gM",
  spotifyUrl: "https://open.spotify.com/track/5DPvVdlonKhqL8ZYkufcwY"
  },
  movie: {
    title: "The King's Speech (El Discurso del Rey)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=pKuKwbqAEOk",
    description:
      "El Rey Jorge VI supera su tartamudez para liderar a su nación durante la Segunda Guerra Mundial, demostrando que la comunicación efectiva requiere vulnerabilidad y práctica constante.",
  },
},
  {
  day: 232,
  month: "Agosto",
  monthId: 8,
  title: "Claridad de Visión en la Ejecución Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o emprendimiento. Proverbios 29: 18 nos advierte que sin una dirección clara, la gente se desorienta y actúa sin propósito. En el ámbito empresarial, esto se traduce en falta de enfoque, decisiones inconsistentes y un equipo desmotivado. Un líder cristiano debe cultivar una visión inspirada por Dios, que no solo busque el éxito material, sino también un impacto positivo y ético. Mantenerse fiel a los principios y valores (la 'ley') asegura que la ejecución de esa visión sea íntegra y sostenible. Una visión bien comunicada y arraigada en principios sólidos es la base para la prosperidad y la bendición en los negocios.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es clara, inspiradora y está alineada con tus valores cristianos? Comunícala nuevamente a tu equipo, asegurándote de que todos comprendan su rol en la consecución de esa visión. Identifica una acción concreta que puedas tomar para mejorar la ejecución de un aspecto clave de tu visión.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=11X_8l0Xg5w",
  spotifyUrl: "https://open.spotify.com/track/622117g472y461q4y0y81p"
  }
},
  {
  day: 233,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el motor que impulsa a cualquier empresa o líder. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de visión: el desenfreno y la desorganización. En el ámbito empresarial, una visión clara no solo define el propósito y la dirección de la organización, sino que también inspira y alinea a los equipos. Un líder cristiano debe buscar la visión de Dios para su negocio, permitiendo que los principios bíblicos guíen cada decisión estratégica. Esta visión divina no solo busca el éxito material, sino también un impacto positivo en la sociedad y la glorificación de Dios. Mantener esta visión en el centro de todas las operaciones asegura que la empresa no solo prospere, sino que también cumpla un propósito superior, evitando la deriva y el caos que resultan de la falta de dirección.",
  quote: {
  text: "La visión no es solo una imagen de lo que podría ser; es un llamado a la acción para hacerlo realidad.",
  author: "Rick Warren"
  },
  challenge: "Define o revisa la visión de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y que refleje los valores y principios que deseas implementar. Comunícala a tu equipo y busca su retroalimentación para asegurar que todos estén alineados y comprometidos con ella.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/3Rtfb3h0Y3J1k8j0X0X0X0"
  }
},
  {
  day: 234,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este versículo destaca la importancia de la visión. En el mundo empresarial, una visión clara es la brújula que guía a una organización. Sin ella, los equipos pueden perder el rumbo, los esfuerzos se dispersan y los objetivos se vuelven difusos. Un líder cristiano debe no solo tener una visión inspirada por Dios, sino también comunicarla de manera efectiva para alinear a su equipo. Esta visión debe ser más que una meta financiera; debe reflejar un propósito superior, un legado de impacto que trascienda lo material. Al mantener la visión central y adherirse a principios éticos y bíblicos, los líderes empresariales pueden construir empresas prósperas y con propósito, evitando la anarquía y fomentando la bendición.",
  quote: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a definir o revisar la visión de tu empresa o equipo. Asegúrate de que sea clara, inspiradora y que todos los miembros la comprendan y compartan. Luego, identifica tres acciones concretas que puedes tomar para alinear mejor tus operaciones diarias con esa visión.",
  song: {
  title: "La Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=s3w-32g671Q",
  spotifyUrl: "https://open.spotify.com/track/6l32mX1m0t3m0f2m0f2m0f"
  }
},
  {
  day: 235,
  month: "Agosto",
  monthId: 8,
  title: "Excelencia en el Servicio: Un Legado Duradero",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una meta, sino un reflejo de nuestro compromiso y propósito. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si fuera para Dios mismo. Esta perspectiva transforma la rutina laboral en una oportunidad para honrar a nuestro Creador. Para el empresario cristiano, esto significa ir más allá de las expectativas, no por reconocimiento humano, sino por un estándar divino. Al aplicar este principio, no solo construimos negocios sólidos y éticos, sino que también cultivamos un legado de impacto que trasciende lo material, inspirando a otros a buscar la excelencia en todo lo que hacen. La calidad de nuestro trabajo se convierte en un testimonio de nuestra fe.",
  quote: {
  text: "Management is doing things right; leadership is doing the right things.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área clave en tu negocio donde puedas elevar el estándar de excelencia. Desarrolla un plan para implementar mejoras significativas, asegurándote de que cada paso refleje un compromiso de hacer las cosas de corazón, como para el Señor. Evalúa cómo esta mejora impacta no solo los resultados, sino también la cultura de tu equipo y la percepción de tus clientes.",
  song: {
  title: "Gracia Sublime Es",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=DuYipn5C-Gw",
  spotifyUrl: "https://open.spotify.com/track/5fx0pSrRtDq2u7qlaly8fC"
  }
},
  {
  day: 236,
  month: "agosto",
  monthId: 8,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje nos invita a ver nuestro trabajo, especialmente en el ámbito empresarial, como un servicio directo a Dios. La excelencia en cada tarea, desde la planificación estratégica hasta la atención al cliente, no es solo una meta profesional, sino una expresión de nuestra fe. Cuando un emprendedor o líder cristiano opera con esta mentalidad, su negocio se convierte en un testimonio de integridad, calidad y propósito superior. No se trata solo de buscar ganancias, sino de generar un impacto positivo, honrando a Dios en cada decisión y acción. Esta perspectiva transforma el ambiente laboral y la cultura empresarial, elevando el estándar de todo lo que se hace.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio. ¿Cómo podrías realizarla con una actitud de servicio a Dios, buscando la excelencia y el impacto más allá del cumplimiento básico? Implementa ese cambio hoy.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_1-x8z4o0",
  spotifyUrl: "https://open.spotify.com/track/622w06s9l814zQ4s1t4e8i"
  }
},
  {
  day: 237,
  month: "Agosto",
  monthId: 8,
  title: "La Visión: El Motor del Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo perece; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el motor que impulsa cualquier empresa exitosa. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de una dirección clara, tanto en la vida personal como en el ámbito empresarial. Un líder cristiano debe tener una visión inspirada por Dios, que no solo busque el éxito material, sino también el impacto positivo en la sociedad y la gloria de Dios. Esta visión debe ser comunicada de manera efectiva a todo el equipo, generando un propósito compartido y un compromiso unificado. Sin una visión clara, los esfuerzos se dispersan, la motivación disminuye y el camino hacia el éxito se vuelve incierto. Mantener la visión en el centro de todas las decisiones empresariales es crucial para la sostenibilidad y el crecimiento.",
  quote: {
  text: "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
  author: "Henry Ford"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. ¿Cómo puedes comunicar esta visión de manera más efectiva para alinear a tu equipo hacia un propósito común?",
  song: {
  title: "Muéstrame Mi Propósito",
  artist: "Frei Paco Música Cristiana",
  youtubeUrl: "https://www.youtube.com/watch?v=T0QK-dIWglQ",
  spotifyUrl: ""
  }
},
  {
  day: 238,
  month: "Agosto",
  monthId: 8,
  title: "La Diligencia como Sello de Excelencia Empresarial",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "La diligencia en el ámbito empresarial no es solo una cualidad deseable, sino un mandato bíblico que se traduce en excelencia. Como emprendedores y líderes cristianos, somos llamados a operar con un nivel de compromiso y esmero que refleje nuestra devoción a Dios. Presentarnos 'aprobados' significa que nuestro trabajo debe ser de una calidad intachable, realizado con integridad y profesionalismo. Esta diligencia se manifiesta en la planificación estratégica, la gestión eficiente de recursos, la atención al detalle y la búsqueda constante de mejora. Un obrero que no tiene de qué avergonzarse es aquel que ha invertido tiempo, esfuerzo y sabiduría en cada tarea, construyendo un legado de impacto que honra a Dios y beneficia a su comunidad. La palabra de verdad, en este contexto, puede interpretarse como los principios bíblicos que guían nuestras decisiones y acciones empresariales, asegurando que nuestro éxito no solo sea material, sino también moral y espiritual.",
  quote: {
  text: "Liderar es influir, nada más y nada menos.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde la diligencia podría ser mejorada. Desarrolla un plan de acción con pasos concretos para aplicar mayor esmero y atención al detalle esta semana, buscando la excelencia en cada aspecto.",
  song: {
  title: "Al Que Está Sentado En El Trono",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=oS-kA-XmKNE",
  spotifyUrl: "https://open.spotify.com/track/5Ur5qkGSDNHbJ3k7XZZWZo"
  },
  movie: {
    title: "12 Angry Men (12 Hombres en Pugna)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=fSG38tk6TpI",
    description:
      "Un jurado delibera sobre un caso de asesinato, mostrando cómo la persuasión, la escucha activa y el pensamiento crítico son esenciales para el liderazgo y la justicia.",
  },
},
  {
  day: 239,
  month: "Agosto",
  monthId: 8,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en los resultados tangibles y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con excelencia y de corazón, como si nuestro esfuerzo fuera directamente para Dios. Esta mentalidad transforma la forma en que abordamos cada tarea, cada decisión y cada interacción. Al entender que nuestro trabajo es un acto de servicio a Cristo, la motivación trasciende el beneficio personal o la aprobación de los demás. Nos impulsa a buscar la integridad, la calidad y el impacto duradero, sabiendo que nuestra verdadera recompensa proviene del Señor. Este enfoque no solo eleva el estándar de nuestro desempeño, sino que también infunde un propósito más profundo y significativo en nuestra labor diaria.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Comprométete a realizarlo esta semana con una mentalidad de servicio a Dios, buscando la excelencia en cada detalle y observando cómo cambia tu perspectiva y el resultado final.",
  song: {
  title: "Al Estar Aquí",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=ZRhAZxua3gM",
  spotifyUrl: "https://open.spotify.com/track/2fmfXlSSXJWxDVhZn3snuk"
  }
},
  {
  day: 240,
  month: "Agosto",
  monthId: 8,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo efectivo se trata de acción, no de posición.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, no solo en la vida espiritual sino también en el ámbito empresarial. Un líder cristiano en los negocios debe poseer una visión clara y definida para su empresa. Sin una dirección estratégica, los equipos pueden perder el enfoque, la motivación disminuye y los recursos se dispersan. La visión actúa como un faro, guiando las decisiones, inspirando a los colaboradores y estableciendo los objetivos a largo plazo. Mantener la \"ley\" en este contexto implica adherirse a principios éticos, valores cristianos y una gestión sabia. Una visión inspirada por Dios no solo busca el éxito financiero, sino también impactar positivamente a la sociedad y glorificar a Dios a través de cada operación y relación comercial. Es la base para construir un legado duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo efectivo se trata de acción, no de posición.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Comunícala activamente y busca formas de alinear las operaciones diarias con esta visión.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=s56f1111111",
  spotifyUrl: "https://open.spotify.com/track/1111111111111111111111"
  }
},
  {
  day: 241,
  month: "Agosto",
  monthId: 8,
  title: "La Diligencia que Abre Puertas",
  verse: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, cultivando un ambiente de crecimiento y visión compartida.",
  reference: "Proverbios 22: 29 (NVI)"
  },
  reflection: "Proverbios 22: 29 nos presenta un principio fundamental para el éxito en el ámbito empresarial: la diligencia. Ser hábil y dedicado en nuestro trabajo no solo es una virtud, sino una estrategia divina para el avance. En el contexto del liderazgo cristiano, esto significa ir más allá de la mera competencia; implica una excelencia impulsada por la fe, donde cada tarea se realiza como para el Señor. Esta diligencia nos posiciona para influir en esferas de mayor impacto, abriendo puertas a oportunidades que de otro modo permanecerían cerradas. No se trata de buscar la grandeza personal, sino de ser un testimonio efectivo de la gracia de Dios a través de un trabajo excepcional, impactando a quienes nos rodean con integridad y propósito.",
  quote: {
  text: "Un verdadero líder empresarial inspira a su equipo a alcanzar metas extraordinarias, cultivando un ambiente de crecimiento y visión compartida.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio o rol de liderazgo donde la diligencia y la excelencia podrían generar un impacto significativo. Desarrolla un plan de acción concreto para elevar el estándar en esa área durante la próxima semana, buscando no solo cumplir, sino superar las expectativas. Evalúa cómo esta mejora contribuye a tus objetivos a largo plazo y a tu testimonio como líder cristiano.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1g8-40m9X-k",
  spotifyUrl: "https://open.spotify.com/track/6221124X42e205x5y5t6g5"
  }
},
  {
  day: 242,
  month: "Septiembre",
  monthId: 9,
  title: "Liderazgo con Integridad y Propósito",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la integridad y el propósito son pilares fundamentales. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación, como si fuera para Dios. Esto trasciende la mera ejecución de tareas; implica un compromiso profundo con la honestidad, la ética y la excelencia en cada decisión y acción. Un líder con propósito no solo busca el éxito financiero, sino que también se esfuerza por impactar positivamente a sus empleados, clientes y la comunidad. Al operar con un corazón íntegro, se construye una reputación sólida y se fomenta un ambiente de confianza, lo cual es esencial para el crecimiento sostenible y el legado duradero en el mundo de los negocios.",
  quote: {
  text: "El éxito no viene de proteger lo que tienes. Proviene de equipar a otros para que seas reemplazado, de modo que puedas pasar a cosas más grandes.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una área en tu negocio donde puedas delegar una responsabilidad clave a un miembro de tu equipo, invirtiendo tiempo en su capacitación y empoderamiento. Evalúa cómo esta acción contribuye a su crecimiento y al desarrollo de un liderazgo más sólido dentro de tu organización.",
  song: {
  title: "Comenzar De Cero",
  artist: "Tercer Cielo",
  youtubeUrl: "https://www.youtube.com/watch?v=MnFGS-1ge4E",
  spotifyUrl: "https://open.spotify.com/track/7Kop0XtAYqTkFzUdGD3BLv"
  }
},
  {
  day: 243,
  month: "Septiembre",
  monthId: 9,
  title: "La Diligencia que Abre Puertas",
  verse: {
  text: "¿Has visto hombre solícito en su trabajo? Delante de los reyes estará; No estará delante de los de baja condición.",
  reference: "Proverbios 22: 29 (RVR60)"
  },
  reflection: "En el mundo empresarial, la diligencia no es solo una virtud, sino una estrategia fundamental para el éxito. Proverbios 22: 29 nos asegura que el hombre solícito en su trabajo no solo será reconocido, sino que tendrá acceso a esferas de influencia superiores (\"delante de los reyes estará\"). Esto se traduce en el ámbito de los negocios como la capacidad de un líder o emprendedor para destacarse, no por conexiones o suerte, sino por la calidad y el compromiso inquebrantable con su labor. La excelencia en cada tarea, la atención al detalle y la búsqueda constante de mejora son las marcas de un profesional diligente. Esta actitud no solo genera confianza y reputación, sino que también abre puertas a nuevas oportunidades, alianzas estratégicas y un crecimiento sostenido. La diligencia es la semilla de la cual brota la prosperidad y el impacto duradero.",
  quote: {
  text: "La excelencia de un líder se mide por la capacidad para transformar los problemas en oportunidades.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio o en tu rol de liderazgo donde puedas aplicar un nivel de diligencia superior esta semana. Podría ser en la atención al cliente, la gestión de proyectos, la innovación de productos o la mejora de procesos internos. Comprométete a ir más allá de lo esperado, buscando la excelencia en cada detalle, y observa cómo esta actitud comienza a abrir nuevas puertas y a generar un impacto positivo.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship, Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=LveZsAhVbws",
  spotifyUrl: "https://open.spotify.com/track/3feWC4iQUr9xllyiVh3BQh"
  }
},
  {
  day: 244,
  month: "Septiembre",
  monthId: 9,
  title: "La Diligencia como Fundamento del Éxito Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  reference: "Proverbios 13: 4"
  },
  reflection: "En el ámbito empresarial, la diligencia no es solo una virtud, sino un pilar fundamental para el éxito sostenido. Proverbios 13: 4 nos recuerda que el deseo sin acción es estéril, mientras que el esfuerzo constante y la dedicación son recompensados. Como líderes cristianos, nuestra diligencia debe reflejar no solo una ética de trabajo, sino también nuestra fe en que Dios bendice el trabajo de nuestras manos. Esto implica una gestión proactiva, una planificación cuidadosa y la perseverancia ante los desafíos. La prosperidad mencionada no es solo material, sino también en el desarrollo de carácter, la influencia positiva y la capacidad de servir a otros a través de nuestros emprendimientos. Seamos diligentes en cada tarea, grande o pequeña, confiando en que nuestro esfuerzo honra a Dios y produce frutos duraderos.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área de tu negocio donde la falta de diligencia podría estar limitando el crecimiento. Desarrolla un plan de acción específico para implementar mejoras, asignando responsabilidades y plazos claros para asegurar un seguimiento efectivo y resultados tangibles.",
  song: {
  title: "Diligente",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cZ0g1l8Y2Q7g0J5g2X2pQ"
  }
},
  {
  day: 245,
  month: "Septiembre",
  monthId: 9,
  title: "Visión y Guía Divina en la Innovación Empresarial",
  verse: {
  text: "Pero cuando venga el Espíritu de verdad, él os guiará a toda verdad, porque no hablará de sí mismo, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir.",
  reference: "Juan 16: 13"
  },
  reflection: "En el dinámico mundo empresarial, la innovación es clave para la supervivencia y el crecimiento. Juan 16: 13 nos recuerda que el Espíritu Santo es nuestro guía hacia toda verdad, incluyendo aquellas verdades que nos revelan el futuro y las oportunidades. Para el líder cristiano, esto significa buscar la dirección divina no solo en asuntos espirituales, sino también en las decisiones estratégicas de negocio. La guía del Espíritu puede manifestarse en ideas creativas, discernimiento para identificar tendencias o la sabiduría para tomar riesgos calculados. Al operar bajo esta dirección, los empresarios pueden desarrollar una visión que trascienda lo meramente humano, llevando a sus organizaciones a niveles de innovación y éxito que honren a Dios.",
  quote: {
  text: "La innovación distingue entre un líder y un seguidor.",
  author: "Steve Jobs"
  },
  challenge: "Identifica un área en tu negocio donde la innovación es necesaria. Dedica tiempo a la oración y la reflexión, pidiendo al Espíritu Santo que te revele nuevas ideas o enfoques. Luego, da un paso de fe y comienza a implementar una de esas ideas, confiando en que la guía divina te acompañará en el proceso.",
  song: {
  title: "Plan Plan",
  artist: "Funky, MR. Yeison",
  youtubeUrl: "https://www.youtube.com/watch?v=e7j3JAZZ_8M",
  spotifyUrl: "https://open.spotify.com/track/4oGqUN7kHte9mUzkGDdeOL"
  },
  movie: {
    title: "Lincoln",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=KJVuqYkI2jQ",
    description:
      "Abraham Lincoln lucha por abolir la esclavitud mientras lidera una nación dividida, demostrando que el liderazgo político requiere principios firmes y habilidad para negociar.",
  },
},
  {
  day: 246,
  month: "septiembre",
  monthId: 9,
  title: "La Visión Clara y la Ejecución Diligente",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la claridad de visión es fundamental, pero es la ejecución diligente la que transforma las ideas en resultados tangibles. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, lo que implica no solo pedir su bendición, sino también alinear nuestros planes y esfuerzos con sus principios. Un líder cristiano entiende que la verdadera afirmación de sus pensamientos y estrategias proviene de una dependencia activa en Dios. Esto no exime de la planificación meticulosa o del trabajo arduo, sino que los potencia con sabiduría divina. Al integrar la fe en cada paso del proceso, desde la concepción de la idea hasta su implementación, se construye un legado de impacto que trasciende lo meramente material, reflejando valores eternos en el mercado.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Evalúa un proyecto actual en tu negocio. ¿Has encomendado este proyecto a Dios en oración y has buscado su dirección? Identifica al menos tres acciones concretas que puedes tomar esta semana para mejorar la ejecución de este proyecto, asegurándote de que cada paso refleje los valores cristianos y la diligencia que honra a Dios.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2r679hJ-W0c",
  spotifyUrl: "https://open.spotify.com/track/62g14w7y0J52m7Q004X5gS"
  }
},
  {
  day: 247,
  month: "Septiembre",
  monthId: 9,
  title: "La Visión Divina en la Planificación Empresarial",
  verse: {
  text: "El corazón del hombre piensa su camino; Mas Jehová endereza sus pasos.",
  reference: "Proverbios 16: 9"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, Proverbios 16: 9 nos recuerda que, aunque el ser humano traza sus planes, es Dios quien finalmente dirige sus pasos. Esto no minimiza la importancia de la diligencia y la visión, sino que las eleva a un plano de dependencia divina. Un líder cristiano entiende que su éxito no reside únicamente en su astucia o capacidad, sino en la guía y el favor de Dios. Al integrar la fe en la toma de decisiones, los empresarios pueden buscar una dirección que trascienda lo puramente terrenal, asegurando que sus emprendimientos no solo generen ganancias, sino que también honren a Dios y contribuyan al bien común. La oración y la búsqueda de sabiduría divina deben ser pilares en cada etapa de la planificación y ejecución de un negocio.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración y a la reflexión, buscando la dirección de Dios. Luego, documenta cómo esta búsqueda de sabiduría influyó en tu decisión y en los resultados obtenidos.",
  song: {
  title: "Plan Plan",
  artist: "Funky, MR. Yeison",
  youtubeUrl: "https://www.youtube.com/watch?v=bJNzjmz0Es8",
  spotifyUrl: "https://open.spotify.com/track/4oGqUN7kHte9mUzkGDdeOL"
  }
},
  {
  day: 248,
  month: "Septiembre",
  monthId: 9,
  title: "Conociendo a Dios para Lograr Hazañas en los Negocios",
  verse: {
  text: "... pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "El versículo de Daniel 11: 32 nos revela una verdad poderosa para el ámbito empresarial: el conocimiento profundo de Dios es la fuente de una fuerza inquebrantable y la capacidad de lograr grandes hazañas. En el mundo de los negocios, donde los desafíos son constantes y la competencia feroz, esta conexión con lo divino no es un mero consuelo, sino un fundamento estratégico. Un líder que conoce a su Dios no solo posee una brújula moral, sino también una visión clara, una resiliencia excepcional y una sabiduría que trasciende lo puramente humano. Esta fortaleza interior se traduce en decisiones audaces, una ética inquebrantable y la habilidad de inspirar a equipos a alcanzar metas que parecían imposibles. Es la fe que mueve montañas, aplicada a la construcción de imperios con propósito y legado.",
  quote: {
  text: "Aprende a decir no a las cosas buenas, para poder decir sí a las mejores.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una decisión importante en tu negocio que requiera discernimiento. Busca la guía de Dios a través de la oración y la lectura bíblica, y luego actúa con la convicción de que Él te fortalecerá para lograr resultados extraordinarios.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 249,
  month: "septiembre",
  monthId: 9,
  title: "La Dirección Divina en la Estrategia Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el ámbito empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como líderes cristianos, se nos llama a ir más allá de la mera planificación humana. Proverbios 16: 3 nos insta a encomendar nuestras obras al Señor, prometiendo que nuestros pensamientos serán afirmados. Esto significa invitar a Dios a cada etapa de nuestra estrategia, desde la visión inicial hasta la ejecución diaria. No se trata de pasividad, sino de una colaboración activa donde nuestra diligencia se une a la sabiduría divina. Al alinear nuestros planes con Su propósito, no solo buscamos la prosperidad, sino también la integridad y el impacto eterno.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar un plan estratégico o un proyecto importante en tu negocio. Ora específicamente por cada etapa, pidiendo a Dios que afirme tus pensamientos y dirija tus decisiones. Busca la sabiduría divina en la toma de decisiones clave y confía en que Él guiará tus pasos hacia el éxito y la integridad.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=02f1d-h5y_g",
  spotifyUrl: "https://open.spotify.com/track/4j9t3e5f2X2m1k0g1e1g1e"
  }
},
  {
  day: 250,
  month: "septiembre",
  monthId: 9,
  title: "La Excelencia como Servicio a Dios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la búsqueda de la excelencia a menudo se ve impulsada por la competencia o el deseo de reconocimiento. Sin embargo, para el líder cristiano, la motivación principal debe ser un servicio de corazón a Dios. Este pasaje nos recuerda que cada tarea, cada decisión de negocio, cada interacción con clientes y empleados, es una oportunidad para honrar a Cristo. Cuando trabajamos con esta perspectiva, nuestra ética laboral se eleva, nuestra integridad se fortalece y nuestra visión trasciende las ganancias temporales. La recompensa no es solo terrenal, sino una herencia eterna, lo que añade un propósito profundo y duradero a cada esfuerzo empresarial. Así, la excelencia se convierte en una expresión de nuestra fe y devoción.",
  quote: {
  text: "El trabajo es una bendición, no una maldición. Es la forma en que Dios nos permite participar en Su obra creativa y redentora en el mundo.",
  author: "Tim Keller"
  },
  challenge: "Evalúa un área clave de tu negocio donde la calidad o el servicio podrían mejorar. Desarrolla un plan para elevar los estándares, no solo para satisfacer a los clientes, sino como una ofrenda de excelencia a Dios. Implementa este plan y observa cómo tu motivación y los resultados se transforman.",
  song: {
  title: "Mi Mayor Anhelo",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=wXw2wXw2wXw",
  spotifyUrl: "https://open.spotify.com/track/1234567890abcdef"
  }
},
  {
  day: 251,
  month: "septiembre",
  monthId: 9,
  title: "La Visión Clara en la Ejecución Empresarial",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la claridad de visión es tan crucial como la ejecución. Proverbios 16: 3 nos invita a alinear nuestros planes y esfuerzos con la voluntad divina. Esto no significa pasividad, sino una profunda confianza que informa cada decisión estratégica y operativa. Al encomendar nuestras obras, no solo buscamos aprobación, sino sabiduría para discernir los caminos correctos y la fortaleza para perseverar. Un líder cristiano entiende que su empresa es un mayordomía, y cada proyecto, cada innovación, debe reflejar principios de integridad y propósito. Esta alineación espiritual proporciona una base sólida, permitiendo que nuestros pensamientos y estrategias empresariales no solo sean ambiciosos, sino también firmes y éticamente fundamentados, conduciendo a un impacto duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un proyecto clave en tu negocio o área de liderazgo. Dedica tiempo a orar y reflexionar sobre cómo puedes alinear este proyecto con principios bíblicos de servicio, excelencia e integridad. Luego, elabora un plan de acción detallado que refleje esta visión, asegurándote de que cada paso contribuya a un propósito mayor y no solo a la ganancia material.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_4hX1_x8g",
  spotifyUrl: "https://open.spotify.com/track/4j473r4s39gQ62208h42wD"
  }
},
  {
  day: 252,
  month: "Septiembre",
  monthId: 9,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no como para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje de Colosenses nos invita a ver nuestro trabajo, sea cual sea, como una ofrenda a Dios. Para el empresario o líder cristiano, esto transforma la perspectiva de cada tarea, reunión o decisión. No se trata solo de cumplir objetivos o buscar ganancias, sino de operar con una ética de excelencia que honre a Dios. Hacerlo de corazón implica pasión, integridad y dedicación, sabiendo que nuestra verdadera recompensa viene del Señor. Esta mentalidad no solo eleva la calidad de nuestro trabajo, sino que también impacta positivamente a nuestros equipos, clientes y la comunidad, reflejando los valores del Reino en el mercado. Es un llamado a la mayordomía fiel de los talentos y recursos que se nos han confiado.",
  quote: {
  text: "Tu trabajo va a llenar una gran parte de tu vida, y la única manera de estar verdaderamente satisfecho es hacer lo que crees que es un gran trabajo. Y la única manera de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio. ¿Cómo puedes abordarla con una actitud de servicio y excelencia, como si la estuvieras haciendo directamente para Dios? Identifica un área donde puedas mejorar la calidad o la intención de tu trabajo esta semana.",
  song: {
  title: "Los Negocios del Rey",
  artist: "Jesus Mencia",
  youtubeUrl: "https://www.youtube.com/watch?v=HEZs12MDUMM",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1bSEOEmZAraY33FySE6plo"
  },
  movie: {
    title: "Bridge of Spies (Puente de Espías)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=mBBuzHrZBro",
    description:
      "Un abogado negocia el intercambio de espías durante la Guerra Fría, demostrando que la integridad y los principios son más importantes que la conveniencia política.",
  },
},
  {
  day: 253,
  month: "septiembre",
  monthId: 9,
  title: "El Líder como Distribuidor de Esperanza",
  verse: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "En el mundo empresarial, un líder no solo gestiona recursos y estrategias, sino que también moldea la cultura y el espíritu del equipo. Ser un 'distribuidor de esperanza', como decía Napoleón Bonaparte, adquiere una dimensión más profunda para el líder cristiano. No se trata de un optimismo vacío, sino de una confianza arraigada en la fe y en el propósito que Dios nos ha dado. Nuestra diligencia y excelencia en el trabajo no son solo para obtener ganancias, sino para presentarnos ante Dios como obreros aprobados. Al manejar nuestro negocio con integridad, sabiduría y una visión que inspira, infundimos en nuestro equipo una esperanza que trasciende los desafíos del mercado, recordándoles que nuestro esfuerzo tiene un valor eterno.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  author: "Peter Drucker"
  },
  challenge: "Esta semana, identifica a un miembro de tu equipo que parezca desanimado o abrumado. Busca una oportunidad para conversar con él, ofrecerle tu apoyo y compartir una palabra de aliento genuina que le recuerde su valor y el propósito de su trabajo.",
  song: {
  title: "Creo En Ti",
  artist: "Julio Melgar",
  youtubeUrl: "https://www.youtube.com/watch?v=Q-A-a92SAlM",
  spotifyUrl: "https://open.spotify.com/track/2s63B2h3n23M5f0D2X2j2j"
  }
},
  {
  day: 254,
  month: "septiembre",
  monthId: 9,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia y el propósito son pilares fundamentales. Colosenses 3: 23 nos invita a realizar cada tarea con dedicación plena, no solo para nuestros clientes, empleados o inversores, sino como si estuviéramos sirviendo directamente a Dios. Esta perspectiva transforma el trabajo de una mera obligación a una oportunidad de honrar a nuestro Creador. Un líder cristiano entiende que su negocio es una plataforma para impactar vidas, generar valor y reflejar principios divinos. Al operar con esta mentalidad, no solo buscamos la rentabilidad, sino también la integridad, la justicia y el servicio, construyendo un legado que trasciende lo material y perdura en el tiempo.",
  quote: {
  text: "El liderazgo no es algo que se hace a la gente, es algo que se hace con la gente.",
  author: "Ken Blanchard"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio. ¿Cómo puedes abordarla con una mentalidad de servicio y excelencia, como si la estuvieras haciendo directamente para Dios? Identifica una acción concreta para elevar el estándar de esa tarea esta semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_1-j0z51A",
  spotifyUrl: "https://open.spotify.com/track/62g1b4028l87o647zJ41wW"
  }
},
  {
  day: 255,
  month: "septiembre",
  monthId: 9,
  title: "Fidelidad en la Gestión de Recursos",
  verse: {
  text: "Su señor le dijo: Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.",
  reference: "Mateo 25: 21"
  },
  reflection: "La parábola de los talentos nos enseña una verdad fundamental para el liderazgo empresarial cristiano: la fidelidad en la administración de los recursos. Como empresarios y líderes, se nos confían talentos, habilidades, capital y oportunidades. La expectativa no es solo la acumulación, sino la multiplicación y la gestión sabia. Ser fiel en lo poco significa ser diligente con cada recurso, por pequeño que parezca, buscando maximizar su potencial para el bien. Esta fidelidad construye carácter, genera confianza y prepara el camino para mayores responsabilidades. Reconocer que todo lo que poseemos es un préstamo divino nos impulsa a operar con integridad, propósito y una visión de impacto que trasciende el beneficio personal, honrando a Dios en cada decisión de negocio.",
  quote: {
  text: "La fe y el trabajo son inseparables. No podemos tener uno sin el otro. La fe sin obras es muerta, y las obras sin fe son inútiles.",
  author: "Billy Graham"
  },
  challenge: "Evalúa un área de tu negocio donde sientes que has sido 'fiel en lo poco'. ¿Cómo puedes aplicar esa misma diligencia y principios de buena administración para expandir tu impacto o asumir una 'mayor responsabilidad' en los próximos 30 días? Identifica un recurso subutilizado y crea un plan para optimizarlo.",
  song: {
  title: "Fiel",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_1d_1d_1d",
  spotifyUrl: "https://open.spotify.com/track/1d_1d_1d_1d"
  }
},
  {
  day: 256,
  month: "septiembre",
  monthId: 9,
  title: "Visión y Dirección Divina en el Liderazgo",
  verse: {
  text: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados (Proverbios 16: 3) nos recuerda la importancia de la fe y la dirección divina en el ámbito empresarial. En un mundo de constante cambio, los líderes a menudo se enfrentan a decisiones complejas. Al confiar nuestros planes y esfuerzos a Dios, no solo buscamos su guía, sino que también encontramos una base sólida para nuestra visión. Peter Drucker, un gurú de la gestión, afirmó que \"la gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas\". Esta distinción es crucial. Un empresario cristiano no solo debe esforzarse por la eficiencia (hacer las cosas bien), sino también por la efectividad y la rectitud moral (hacer las cosas correctas), asegurándose de que sus objetivos empresariales estén alineados con principios éticos y un propósito superior. La afirmación de nuestros pensamientos, prometida en el versículo, nos brinda la confianza para liderar con propósito y convicción, sabiendo que nuestros esfuerzos están respaldados por una sabiduría mayor.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar los objetivos estratégicos de tu negocio. Evalúa si están alineados no solo con la rentabilidad, sino también con principios éticos y un propósito que trascienda lo meramente comercial. Ora por dirección divina en cada decisión clave.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_W2yX7i0g",
  spotifyUrl: "https://open.spotify.com/track/6q5l3y6k3m4Y3x2Y0g2g0g"
  }
},
  {
  day: 257,
  month: "septiembre",
  monthId: 9,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión en cualquier esfera, especialmente en el liderazgo empresarial. Sin una dirección clara, las empresas pueden perder el rumbo, sus equipos pueden desmotivarse y los recursos se dispersan. Un líder cristiano debe ser un visionario, capaz de articular un propósito que trascienda las ganancias, inspirando a su equipo a trabajar hacia un objetivo común que honre a Dios. Además, el versículo subraya la bendición de guardar la ley, lo que en el ámbito empresarial se traduce en operar con integridad, ética y transparencia. Una visión poderosa, anclada en principios bíblicos, no solo guía el camino, sino que también construye una cultura de confianza y excelencia, asegurando un legado duradero y significativo.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo. El liderazgo es acción, no posición.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que cada miembro de tu equipo la comprenda y se sienta parte de ella. Evalúa si tus operaciones actuales están alineadas con esa visión y con principios éticos sólidos.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_5t7_f_s0Q",
  spotifyUrl: "https://open.spotify.com/track/306733v919349830293849"
  }
},
  {
  day: 258,
  month: "septiembre",
  monthId: 9,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje nos invita a ver nuestro trabajo no solo como una obligación o un medio para un fin, sino como una oportunidad para servir a Dios. En el ámbito empresarial, esto significa ir más allá de la mera rentabilidad. Implica buscar la excelencia en cada tarea, tratar a empleados y clientes con integridad y respeto, y operar con una ética que refleje los valores del Reino. Cuando trabajamos con esta perspectiva, cada decisión, cada proyecto y cada interacción se convierte en un acto de adoración. La recompensa no es solo terrenal, sino una herencia eterna, recordándonos que nuestro esfuerzo tiene un significado trascendente que va más allá de las ganancias inmediatas. Es un llamado a la mayordomía fiel en todo lo que emprendemos.",
  quote: {
  text: "El trabajo es una bendición, no una maldición. Es la forma en que Dios nos permite participar en Su obra creativa y redentora en el mundo.",
  author: "Tim Keller"
  },
  challenge: "Evalúa una de tus principales responsabilidades laborales o empresariales esta semana. ¿Cómo puedes abordarla con una mentalidad de servicio a Dios, buscando la excelencia y el impacto positivo más allá de los resultados esperados? Implementa al menos un cambio concreto en tu enfoque.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X9e7jY_1g",
  spotifyUrl: "https://open.spotify.com/track/3034t47h84v3wQ8p0f1v1w"
  }
},
  {
  day: 259,
  month: "Septiembre",
  monthId: 9,
  title: "La Diligencia en la Planificación y Ejecución",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos ofrece una perspectiva crucial para el liderazgo empresarial: la importancia de la diligencia en la planificación y la ejecución. En el mundo de los negocios, la prisa sin dirección a menudo conduce a errores costosos y oportunidades perdidas. Un líder sabio no solo visualiza el éxito, sino que también invierte tiempo en desarrollar estrategias sólidas, evaluar riesgos y preparar a su equipo. La abundancia no es fruto de la casualidad, sino de un esfuerzo consciente y metódico. Este versículo nos insta a ser intencionales en cada paso, asegurando que nuestras acciones estén alineadas con nuestros objetivos y valores, construyendo así un legado duradero y próspero.",
  quote: {
  text: "La planificación a largo plazo no es pensar en decisiones futuras, sino en el futuro de las decisiones presentes.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proyecto actual en tu negocio. ¿Has dedicado suficiente tiempo a la planificación diligente o te has apresurado? Identifica al menos dos áreas donde puedes aplicar una mayor diligencia en la planificación o ejecución esta semana para asegurar un resultado más abundante y sostenible.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=5pAe2LKKyxg",
  spotifyUrl: "https://open.spotify.com/intl-es/track/10AHJmPp1y86W3hYg5fjeH"
  },
  movie: {
    title: "The Family Man (Un Hombre de Familia)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=JN1pAhqrVsg",
    description:
      "Un ejecutivo exitoso descubre cómo habría sido su vida si hubiera elegido familia sobre carrera, revelando la importancia del balance y las prioridades correctas.",
  },
},
  {
  day: 260,
  month: "Septiembre",
  monthId: 9,
  title: "La Diligencia en la Planificación Estratégica",
  verse: {
  text: "Los pensamientos del diligente ciertamente tienden a la abundancia; Mas todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "La diligencia no es solo trabajar duro, sino trabajar con propósito y previsión. Proverbios 21: 5 nos recuerda que la abundancia es el resultado de pensamientos y acciones diligentes, mientras que la prisa sin dirección lleva a la escasez. En el ámbito empresarial, esto se traduce en una planificación estratégica cuidadosa. Un líder cristiano entiende que cada decisión presente moldea el futuro de su empresa. La fe no exime de la necesidad de una gestión astuta y una visión a largo plazo. La diligencia en la planificación asegura que los recursos se utilicen sabiamente y que la empresa avance hacia sus objetivos con solidez, honrando a Dios con la administración de lo que Él ha provisto.",
  quote: {
  text: "La planificación a largo plazo no es pensar en decisiones futuras, sino en el futuro de las decisiones presentes.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área clave de tu negocio que requiera planificación a largo plazo. Dedica tiempo esta semana a desarrollar un plan detallado, considerando las implicaciones futuras de tus decisiones actuales. Busca la guía de Dios en cada paso.",
  song: {
  title: "Diligencia",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/3Rbs1jX4QyQ9yQ9yQ9yQ9yQ"
  }
},
  {
  day: 261,
  month: "Septiembre",
  monthId: 9,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos advierte sobre las consecuencias de la falta de visión, un principio que resuena profundamente en el ámbito empresarial. Sin una dirección clara, los equipos pueden perder el enfoque, los recursos se dispersan y las oportunidades se desaprovechan. Un líder cristiano en los negocios entiende que la visión no es solo una meta ambiciosa, sino un propósito arraigado en valores y principios que trascienden lo meramente comercial. Es la capacidad de ver más allá del presente, anticipar desafíos y oportunidades, y comunicar esa imagen futura de manera inspiradora. Desarrollar y mantener una visión clara requiere discernimiento, planificación estratégica y la valentía de seguir adelante, incluso cuando el camino no es evidente. Es a través de esta visión que se construye un legado duradero y se impacta positivamente a la sociedad.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión a largo plazo de tu negocio o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Comparte esta visión con tu equipo y busca su retroalimentación para fortalecerla y asegurar que todos estén alineados con el propósito central.",
  song: {
  title: "Que se abra el Cielo",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=aLEo5JljVHY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3gfyLSFdjHnYZ3HZVmWiBv"
  }
},
  {
  day: 262,
  month: "septiembre",
  monthId: 9,
  title: "Planificación Divina y Ejecución Firme",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este versículo de Proverbios ofrece profunda sabiduría para empresarios y líderes. A menudo, en la búsqueda del éxito empresarial, dependemos en gran medida de nuestras propias estrategias, intelecto y esfuerzos. Sin embargo, Salomón nos recuerda que debemos \"encomendar nuestras obras a Jehová\". Esto no es una rendición pasiva, sino una invitación activa a Dios en nuestra planificación y ejecución. Implica buscar Su guía, alinear nuestras prácticas comerciales con Sus principios y confiar en Su soberanía. Cuando hacemos esto, la promesa es clara: \"tus pensamientos serán afirmados\". Nuestros planes ganan estabilidad, claridad y propósito más allá de nuestra propia comprensión limitada. Esta asociación divina proporciona una base de paz y confianza, incluso en medio de las incertidumbres del mercado, permitiéndonos liderar con integridad y visión.",
  quote: {
  text: "La verdadera medida de un líder no es la cantidad de personas que le sirven, sino la cantidad de personas a las que él sirve.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos actuales. En oración, presenta cada aspecto a Dios, pidiendo Su dirección y sabiduría. Identifica al menos una decisión importante que puedas tomar esta semana basándote en la confianza en Su guía, no solo en tu propia lógica o experiencia.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=z04Q6320y3Q",
  spotifyUrl: "https://open.spotify.com/track/6s575a6j9q4y9o9r9z0g7p"
  }
},
  {
  day: 263,
  month: "septiembre",
  monthId: 9,
  title: "La Solidez de la Visión en Dios",
  verse: {
  text: "Encomienda al Señor tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la visión es el faro que guía cada decisión y esfuerzo. Sin embargo, una visión humana, por muy brillante que sea, puede ser vulnerable a las fluctuaciones del mercado, las presiones competitivas o las dudas internas. Proverbios 16: 3 nos ofrece una perspectiva divina: al encomendar nuestras obras al Señor, nuestros pensamientos y, por ende, nuestra visión, serán afirmados. Esto no significa pasividad, sino una dependencia activa en la sabiduría de Dios. Un líder cristiano entiende que su empresa no es solo un medio para generar ganancias, sino una plataforma para glorificar a Dios. Al alinear nuestra visión empresarial con los propósitos divinos, encontramos una solidez y una dirección que trascienden las circunstancias, permitiéndonos construir un legado de impacto duradero y significativo.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa tu visión empresarial. ¿Está alineada con principios que trascienden el éxito material? Dedica tiempo a la oración y la reflexión para encomendar tus planes al Señor, buscando que Él afirme tus pensamientos y te dé claridad para el próximo trimestre. Identifica una decisión clave que debas tomar y busca dirección divina antes de actuar.",
  song: {
  title: "El Mismo Cielo",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=s0r_74472gQ",
  spotifyUrl: "https://open.spotify.com/track/629qJ6z4j2Y02f4v2J01yC"
  }
},
  {
  day: 264,
  month: "septiembre",
  monthId: 9,
  title: "Excelencia en el Negocio como Ofrenda a Dios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos llama a realizar todo nuestro trabajo con excelencia, como si lo hiciéramos directamente para Dios. En el mundo de los negocios, esto significa ir más allá del mero cumplimiento o la búsqueda de ganancias. Implica un compromiso con la integridad, la calidad y el servicio que refleje nuestra fe. Cuando los empresarios y líderes operan con esta mentalidad, su trabajo se convierte en una forma de adoración, impactando no solo sus resultados financieros sino también las vidas de sus empleados, clientes y comunidades. Transforma el lugar de trabajo en una plataforma para demostrar valores cristianos y marcar una diferencia positiva y duradera. Esta perspectiva eleva los negocios de una búsqueda secular a un llamado sagrado, donde cada tarea, grande o pequeña, contribuye a un propósito mayor.",
  quote: {
  text: "El liderazgo no se trata de títulos, posiciones o diagramas de flujo. Se trata de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus prácticas empresariales actuales (por ejemplo, atención al cliente, desarrollo de productos, gestión de equipos) y busca una manera de elevarla para que refleje un compromiso de excelencia \"como para el Señor\". Implementa un cambio concreto esta semana.",
  song: {
  title: "Yo Te Extrañaré",
  artist: "Tercer Cielo",
  youtubeUrl: "https://www.youtube.com/watch?v=z8ZxGAf9g2M",
  spotifyUrl: "https://open.spotify.com/intl-es/track/0sYA14ZQtslbt7FcfXs6sQ"
  }
},
  {
  day: 265,
  month: "Septiembre",
  monthId: 9,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, no solo en la vida personal sino especialmente en el ámbito empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y propenso a la ineficiencia y el caos. En el contexto de los negocios, la visión es el faro que guía las decisiones estratégicas, inspira a los equipos y define el propósito más allá de la mera rentabilidad. Para el empresario cristiano, esta visión debe estar arraigada en principios bíblicos, buscando no solo el éxito material, sino también un impacto positivo en la sociedad y la gloria de Dios. Mantener esta visión viva y comunicarla efectivamente es crucial para evitar que el equipo \"se desenfrene\" y para asegurar que todos trabajen hacia un objetivo común y significativo.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Luego, identifica tres acciones concretas que puedes tomar para alinear mejor tus operaciones diarias con esa visión.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s16g0t110sM",
  spotifyUrl: "https://open.spotify.com/track/629Xy2j91r181050e0655s"
  }
},
  {
  day: 266,
  month: "septiembre",
  monthId: 9,
  title: "La Excelencia como Camino al Liderazgo",
  verse: {
  text: "El verdadero liderazgo empresarial se mide por la capacidad de innovar constantemente y de inspirar a otros a alcanzar la excelencia.",
  reference: "Proverbios 22: 29"
  },
  reflection: "Proverbios 22: 29 nos presenta una verdad fundamental para el mundo empresarial y el liderazgo cristiano: la diligencia y la excelencia en el trabajo abren puertas a oportunidades significativas. Ser \"solícito\" no es solo trabajar duro, sino hacerlo con habilidad, atención al detalle y un compromiso inquebrantable con la calidad. Para el empresario y líder cristiano, esto significa que nuestro esfuerzo no es solo para el beneficio personal o de la empresa, sino que es una expresión de nuestra fe y un testimonio de los valores del Reino. Cuando operamos con excelencia, no solo nos destacamos en el mercado, sino que también honramos a Dios y nos posicionamos para influir en esferas de mayor impacto, \"delante de los reyes\". Esta excelencia nos distingue y nos eleva, permitiéndonos servir con mayor propósito y eficacia.",
  quote: {
  text: "El verdadero liderazgo empresarial se mide por la capacidad de innovar constantemente y de inspirar a otros a alcanzar la excelencia.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde la calidad podría mejorarse. Desarrolla un plan de acción con pasos concretos para elevar el estándar de excelencia en esa área durante la próxima semana. Busca la retroalimentación de tu equipo o clientes para asegurar que tus esfuerzos se traduzcan en un impacto tangible y positivo.",
  song: {
  title: "La Bendición",
  artist: "Elevation Worship & Maverick City Music",
  youtubeUrl: "https://www.youtube.com/watch?v=E_t7l4d1Q40",
  spotifyUrl: "https://open.spotify.com/track/3QJj60o7wQ0rX001e30w11"
  },
  movie: {
    title: "Click (Click: Perdiendo el Control)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=KKAlTNYQLbw",
    description:
      "Un arquitecto obtiene un control remoto que le permite adelantar su vida, descubriendo demasiado tarde que se perdió los momentos más importantes, una lección sobre prioridades.",
  },
},
  {
  day: 267,
  month: "septiembre",
  monthId: 9,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la visión de lo que es posible y la disciplina para hacerlo realidad.",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "Este proverbio subraya la importancia crítica de la visión en cualquier ámbito, especialmente en el empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y propenso a desviarse de su propósito. En el contexto cristiano, la visión no solo se refiere a metas financieras o de mercado, sino también a cómo la empresa puede glorificar a Dios y servir a la comunidad. Una visión inspirada divinamente proporciona dirección, motiva al equipo y asegura que todas las acciones estén alineadas con un propósito superior. Los líderes deben comunicar esta visión constantemente, asegurándose de que cada miembro del equipo comprenda su papel en la consecución de los objetivos y el impacto trascendente de su trabajo.",
  quote: {
  text: "El liderazgo efectivo comienza con la visión de lo que es posible y la disciplina para hacerlo realidad.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar y clarificar la visión de tu empresa o proyecto. Asegúrate de que sea inspiradora, medible y comunicable. Luego, compártela con tu equipo y pídeles retroalimentación sobre cómo pueden contribuir a hacerla realidad.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=12345abcdeF",
  spotifyUrl: "https://open.spotify.com/track/67890fghijK"
  }
},
  {
  day: 268,
  month: "Septiembre",
  monthId: 9,
  title: "La Resiliencia del Alfarero: Moldeando el Carácter Empresarial",
  verse: {
  text: "Pero ahora, oh Jehová, tú eres nuestro padre; nosotros somos el barro, y tú nuestro alfarero; obra de tus manos somos todos nosotros.",
  reference: "Isaías 64: 8"
  },
  reflection: "En el mundo empresarial, la resiliencia es una cualidad indispensable. Isaías 64: 8 nos recuerda que somos como el barro en las manos del Alfarero divino. Esta imagen poderosa nos enseña que, al igual que el barro es moldeado y transformado, los líderes y empresarios cristianos deben permitir que Dios moldee su carácter y sus estrategias. Los desafíos y las presiones del mercado no son obstáculos insuperables, sino herramientas en las manos del Alfarero para refinar nuestra visión, fortalecer nuestra fe y desarrollar una mayor capacidad de adaptación. Aceptar este proceso de moldeado nos permite crecer a través de las dificultades, emergiendo con una forma más fuerte y un propósito más claro, listos para impactar el mundo con integridad y excelencia.",
  quote: {
  text: "El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
  author: "Winston Churchill"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde te sientas 'moldeado' por las circunstancias. Reflexiona sobre cómo puedes permitir que esta presión te transforme positivamente, buscando la guía divina para adaptar tus estrategias y fortalecer tu carácter. Implementa un cambio específico basado en esta reflexión.",
  song: {
  title: "Alfarero",
  artist: "Barak ft. Evan Craft",
  youtubeUrl: "https://www.youtube.com/watch?v=6irVbOHx6ho",
  spotifyUrl: "https://open.spotify.com/track/4rxHHuJwrYKk6xu45PIkFz"
  }
},
  {
  day: 269,
  month: "Septiembre",
  monthId: 9,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Es a Cristo el Señor a quien sirven.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "El versículo de Colosenses 3: 23-24 nos insta a realizar cada tarea con un corazón dedicado, como si fuera para el Señor y no para los hombres. En el ámbito empresarial, esto se traduce en un compromiso inquebrantable con la excelencia, la integridad y el servicio. Un líder cristiano no solo busca el beneficio económico, sino que ve su trabajo como una extensión de su adoración a Dios. Cada decisión, cada interacción con empleados, clientes y proveedores, debe reflejar los valores del Reino. Al operar con esta mentalidad, no solo construimos negocios exitosos, sino que también dejamos un legado de impacto que trasciende lo material, honrando a Dios en cada aspecto de nuestra labor.",
  quote: {
  text: "No encuentres la falta, encuentra el remedio.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio donde puedas elevar el estándar de excelencia esta semana. Puede ser en la calidad de un producto, el servicio al cliente, la gestión de un proyecto o la forma en que interactúas con tu equipo. Comprométete a abordarla con una actitud de servicio y dedicación, buscando no solo la mejora operativa, sino también honrar a Dios a través de tu esfuerzo. Evalúa los resultados al final de la semana y celebra los avances.",
  song: {
  title: "Tu Proposito",
  artist: "Nancy Amancio",
  youtubeUrl: "https://www.youtube.com/watch?v=HXKYHG9fi-E",
  spotifyUrl: "https://open.spotify.com/track/2Rlh1fLQ9XoVNB51rUz8qv"
  }
},
  {
  day: 270,
  month: "Septiembre",
  monthId: 9,
  title: "La Diligencia en los Negocios: Sembrando para Cosechar",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Proverbios 21: 5 nos recuerda la importancia fundamental de la diligencia y la planificación cuidadosa en el ámbito empresarial. Este versículo contrasta los resultados positivos del trabajo esmerado con las consecuencias negativas de la prisa y la falta de previsión. Para el líder cristiano, esto significa buscar la sabiduría divina en la elaboración de estrategias, ejecutar las tareas con paciencia y evitar atajos que puedan comprometer la integridad o la visión a largo plazo. El éxito verdadero, desde una perspectiva bíblica, no se mide solo por las ganancias rápidas, sino por la construcción de un legado duradero a través de una administración fiel y un esfuerzo persistente. Los empresarios y líderes son llamados a ser diligentes en su labor, confiando en que Dios bendice el trabajo de sus manos cuando se realiza con excelencia y propósito.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Identifica un área en tu negocio donde la prisa o la falta de diligencia han causado problemas. Desarrolla un plan de acción detallado para abordar este problema con paciencia y diligencia, buscando la excelencia en cada paso. Evalúa los resultados después de un período determinado y ajusta tu enfoque según sea necesario.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 271,
  month: "septiembre",
  monthId: 9,
  title: "La Disciplina de la Visión Clara",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "En el ámbito empresarial, la visión no es solo un sueño, sino un mapa estratégico que guía cada decisión y acción. Proverbios 29: 18 nos advierte sobre el caos que surge de la falta de dirección. Un líder cristiano en los negocios debe cultivar una visión clara, arraigada en principios bíblicos y discernimiento. Esta visión no solo define los objetivos financieros, sino también el impacto ético y espiritual de la empresa. Sin una visión compartida y bien comunicada, los equipos pueden perder el enfoque, la motivación disminuye y la empresa corre el riesgo de desviarse de su propósito. La disciplina de mantener la visión viva y relevante es crucial para la prosperidad y la influencia duradera.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que cada miembro de tu equipo la comprenda y la comparta. Luego, identifica tres acciones concretas que te acerquen a esa visión y comprométete a ejecutarlas.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=l_9l6L_3J3U",
  spotifyUrl: "https://open.spotify.com/track/0Y4t1l1v2x0X0X0X0X0X0X"
  }
},
  {
  day: 272,
  month: "Septiembre",
  monthId: 9,
  title: "La Estrategia Divina en los Negocios",
  verse: {
  text: "El liderazgo no es una posición, sino una acción. Es la influencia para inspirar a otros a lograr grandes cosas.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como creyentes, Proverbios 16: 3 nos invita a ir más allá de la mera planificación humana. Encomendar nuestras obras a Jehová significa someter nuestros planes, proyectos y decisiones empresariales a Su voluntad y dirección. Esto no exime de la diligencia y el trabajo arduo, sino que añade una dimensión espiritual crucial. Cuando nuestros pensamientos y acciones están alineados con los principios divinos, encontramos una sabiduría y una claridad que trascienden la lógica del mercado. Esta dependencia en Dios no es pasividad, sino una activa búsqueda de Su guía, que resulta en una mayor estabilidad y propósito en nuestros emprendimientos. La fe en la providencia divina nos permite enfrentar los desafíos con confianza, sabiendo que nuestros esfuerzos, cuando son dedicados a Él, serán afirmados y bendecidos, llevando a un legado de impacto duradero.",
  quote: {
  text: "El liderazgo no es una posición, sino una acción. Es la influencia para inspirar a otros a lograr grandes cosas.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana para revisar tus planes de negocio o proyectos actuales. Identifica al menos una área donde puedas encomendar más explícitamente tus obras a Dios, buscando Su dirección a través de la oración y la reflexión bíblica.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=wz-h691-1iQ",
  spotifyUrl: "https://open.spotify.com/track/6q0Xz9v20s2p3j1x9j0z7k"
  }
},
  {
  day: 273,
  month: "septiembre",
  monthId: 9,
  title: "La Persistencia en la Visión Divina",
  verse: {
  text: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.",
  reference: "Gálatas 6: 9"
  },
  reflection: "Este versículo de Gálatas nos insta a la perseverancia, un pilar fundamental en el liderazgo empresarial. En el camino del emprendimiento y la gestión, los desafíos son constantes y el desánimo puede acechar. Sin embargo, la promesa es clara: \"a su tiempo segaremos\". Esto implica que la visión, el esfuerzo y la dedicación invertidos en nuestro negocio, especialmente cuando se alinean con principios divinos de servicio y excelencia, no serán en vano. Un líder cristiano entiende que su trabajo es una extensión de su fe, y que la persistencia no es solo una cualidad empresarial, sino una manifestación de confianza en el plan de Dios. Mantener la visión, incluso en la adversidad, es clave para cosechar el éxito a largo plazo y dejar un legado de impacto.",
  quote: {
  text: "La única manera de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Identifica un área en tu negocio donde la persistencia ha disminuido. Desarrolla un plan de acción de tres pasos para reavivar el esfuerzo y la dedicación en esa área durante la próxima semana.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=1u4h481y6oU",
  spotifyUrl: "https://open.spotify.com/track/63y2w3l644b9y7t7e00e7d"
  },
  movie: {
    title: "Facing the Giants (Enfrentando a los Gigantes)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=x8IjFPnOFkQ",
    description:
      "Un hombre puede viajar en el tiempo y aprende que la clave de la felicidad no está en cambiar el pasado, sino en valorar cada momento presente con los seres queridos.",
  },
},
  {
  day: 274,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara y la Ejecución Diligente",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la claridad de visión es tan crucial como la diligencia en la ejecución. Proverbios 16: 3 nos recuerda que al encomendar nuestras obras al Señor, nuestros planes se establecerán. Esto no significa pasividad, sino una profunda dependencia y búsqueda de dirección divina en cada paso. Un líder cristiano entiende que su empresa no es solo un medio para generar ganancias, sino una plataforma para impactar el mundo para bien. Al alinear nuestros objetivos empresariales con los principios divinos, no solo encontramos una guía más sólida, sino que también cultivamos una resiliencia que trasciende los desafíos del mercado. La fe en la providencia de Dios nos impulsa a planificar con sabiduría y a ejecutar con excelencia, sabiendo que Él respalda nuestros esfuerzos cuando están en Su voluntad.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Identifica un proyecto clave en tu negocio o área de liderazgo. Dedica tiempo a orar y buscar la dirección de Dios sobre ese proyecto. Luego, elabora un plan de acción detallado, delegando responsabilidades y estableciendo plazos claros. Ejecuta este plan con diligencia, revisando regularmente tu progreso y ajustando según sea necesario, siempre manteniendo la perspectiva de que tus esfuerzos están encomendados a un propósito mayor.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s2-y_Q-702c",
  spotifyUrl: "https://open.spotify.com/track/5w7373f15q2w0x0x0x0x0x"
  }
},
  {
  day: 275,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que puedan impactar positivamente el mundo.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión. En el ámbito empresarial, una visión clara no es solo una declaración bonita; es el faro que guía cada decisión, cada estrategia y cada esfuerzo. Sin una visión definida, los equipos pueden perder el rumbo, los recursos se dispersan y la energía se agota en actividades sin propósito. Un líder cristiano en los negocios entiende que esta visión debe estar alineada con principios éticos y un propósito superior, trascendiendo la mera ganancia. Es la capacidad de ver más allá del presente, anticipar desafíos y oportunidades, y comunicar esa imagen futura de manera inspiradora para movilizar a todos hacia un objetivo común. Mantener la visión viva y relevante es un acto continuo de liderazgo y fe.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que puedan impactar positivamente el mundo.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Comparte esta visión con tu equipo y busca su retroalimentación para fortalecerla y asegurar que todos estén alineados con el propósito.",
  song: {
  title: "Visión",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1g4g2g7g8g8",
  spotifyUrl: "https://open.spotify.com/track/3g4g2g7g8g8"
  }
},
  {
  day: 276,
  month: "octubre",
  monthId: 10,
  title: "Planificación Divina y Éxito Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este versículo enfatiza la importancia de confiar en Dios con nuestros planes. En el ámbito empresarial, esto se traduce en buscar guía divina en la planificación estratégica, la toma de decisiones y las operaciones diarias. No se trata de una espera pasiva, sino de una colaboración activa con Dios, alineando nuestra visión y esfuerzos con Su voluntad. Cuando los empresarios y líderes encomiendan su trabajo al Señor, obtienen claridad, sabiduría y un propósito firme, elementos cruciales para superar desafíos y alcanzar un éxito sostenible. Esta asociación divina asegura que, incluso en tiempos de incertidumbre, sus fundamentos permanezcan sólidos, llevando a pensamientos afirmados y resultados prósperos que honran a Dios.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de empoderar a otros para que alcancen su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de iniciar un nuevo proyecto o tomar una decisión importante, dedica tiempo a la oración y a la reflexión, pidiendo a Dios dirección y sabiduría. Luego, documenta cómo esta guía influyó en tus acciones y resultados.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=y2s1y0_468c",
  spotifyUrl: "https://open.spotify.com/track/629X78s32938s32938s32938"
  }
},
  {
  day: 277,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier organización. Proverbios 29: 18 nos recuerda que sin una dirección clara, las personas, y por extensión las empresas, pierden el rumbo. Un líder cristiano en el ámbito empresarial no solo debe tener una visión estratégica para el crecimiento y la rentabilidad, sino también una visión arraigada en principios bíblicos. Esta visión debe ser comunicada con pasión y convicción, inspirando a los equipos a trabajar hacia un propósito común que trascienda lo meramente comercial. Mantener la ley, en este contexto, implica operar con integridad, ética y un compromiso con la excelencia que honre a Dios en cada decisión y acción empresarial. Una visión clara y piadosa es la base para un legado de impacto duradero.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. ¿Es lo suficientemente clara y comunicada? ¿Inspira a tu equipo? Ajusta y comparte la visión con renovado entusiasmo, asegurándote de que cada miembro comprenda su papel en alcanzarla.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=12345abcdeF",
  spotifyUrl: "https://open.spotify.com/track/67890fghijK"
  }
},
  {
  day: 278,
  month: "Octubre",
  monthId: 10,
  title: "Excelencia en el Trabajo como Servicio a Dios",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este versículo nos llama a una ética de trabajo superior, no motivada por el reconocimiento humano, sino por el deseo de honrar a Dios. En el ámbito empresarial, esto se traduce en buscar la excelencia en cada tarea, proyecto o interacción con clientes y colaboradores. Cuando un líder cristiano opera bajo esta premisa, su negocio no solo busca la rentabilidad, sino que también se convierte en un testimonio de fe y diligencia. La recompensa prometida no es solo espiritual, sino que a menudo se manifiesta en el éxito y la prosperidad que Dios otorga a quienes le sirven con integridad y pasión en su labor diaria.",
  quote: {
  text: "El seguimiento diligente y el cumplimiento te distinguirán de la multitud y comunicarán excelencia.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio o en tu rol de liderazgo donde puedas elevar el estándar de excelencia esta semana. Comprométete a realizar esa tarea o proyecto con una dedicación y calidad excepcionales, como si lo estuvieras haciendo directamente para Dios. Observa cómo esta mentalidad impacta tus resultados y la percepción de tu equipo.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  }
},
  {
  day: 279,
  month: "Octubre",
  monthId: 10,
  title: "La Planificación Estratégica como Acto de Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, para el líder cristiano, este proceso va más allá de la mera proyección de números y metas. Proverbios 16: 3 nos invita a encomendar nuestras obras a Dios, lo que implica un acto de fe y confianza en Su dirección. Al alinear nuestros planes con los principios divinos, no solo buscamos la eficiencia, sino también la trascendencia. La planificación se convierte en una oración en acción, donde cada decisión es un paso de obediencia. Esto no exime de la diligencia y el análisis, sino que los potencia, asegurando que nuestros pensamientos y estrategias sean afirmados por una sabiduría superior, llevando a resultados que honran a Dios y benefician a la sociedad.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o crear un plan estratégico para tu negocio o área de responsabilidad, asegurándote de que cada objetivo y acción refleje tus valores cristianos y esté encomendado a Dios en oración. Busca la guía divina en cada paso de la planificación.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong UNITED",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 280,
  month: "octubre",
  monthId: 10,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 16: 3"
  },
  reflection: "El versículo de Proverbios 16: 3 nos invita a confiar nuestros planes y esfuerzos a Dios. En el ámbito empresarial, esto no significa pasividad, sino una planificación estratégica que se alinea con principios divinos. Al encomendar nuestras obras al Señor, reconocemos que Su sabiduría es superior a la nuestra. Esto nos permite establecer metas con una perspectiva eterna, buscar la excelencia en cada tarea y tomar decisiones éticas que honren a Dios. La afirmación de nuestros pensamientos no es una garantía de éxito material instantáneo, sino la promesa de claridad, dirección y paz en medio de los desafíos. Un líder cristiano entiende que su negocio es una plataforma para el Reino, y cada plan debe reflejar ese propósito superior, buscando impactar no solo las ganancias, sino también las vidas.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y a la reflexión sobre cómo ese paso se alinea con los principios bíblicos y el propósito de Dios para tu negocio. Escribe tres objetivos clave para tu empresa que reflejen no solo el crecimiento financiero, sino también el impacto positivo en tu comunidad y en el Reino.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X5Y_e1b7Q",
  spotifyUrl: "https://open.spotify.com/track/55w3sQ13106z5mXj1f1Q1C"
  },
  movie: {
  title: "A Prueba de Fuego (Fireproof)",
  platform: "Amazon Prime Video",
  description: "Un bombero exitoso, Caleb Holt, enfrenta una crisis matrimonial. A través de un 'Desafío de Amor' de 40 días, descubre el poder del compromiso y la fe para restaurar su relación, aplicando principios de sacrificio y amor incondicional que pueden inspirar la perseverancia en cualquier desafío."
  }
},
  {
  day: 281,
  month: "Octubre",
  monthId: 10,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no como para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia a menudo se mide por la rentabilidad y el éxito terrenal. Sin embargo, para el líder cristiano, la motivación va más allá. Colosenses 3: 23-24 nos llama a realizar cada tarea con un compromiso total, no solo para nuestros empleadores o clientes, sino como un servicio directo a Dios. Esta perspectiva transforma la forma en que abordamos el trabajo, infundiendo cada decisión y esfuerzo con un propósito divino. Al operar con integridad, diligencia y una búsqueda constante de la excelencia, reflejamos el carácter de Cristo en el mercado. Reconocer que nuestra recompensa final proviene del Señor nos libera de la presión de buscar solo la aprobación humana y nos impulsa a dar lo mejor de nosotros en todo momento, sabiendo que nuestro trabajo tiene un valor eterno.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde la calidad o el esfuerzo han disminuido. Comprométete a elevar el estándar en esa área, realizando el trabajo con la misma dedicación y excelencia que lo harías si supieras que Cristo mismo es tu supervisor directo. Evalúa los resultados no solo en términos de eficiencia o ganancias, sino también en cómo esta mejora refleja tus valores cristianos y glorifica a Dios.",
  song: {
  title: "Tu Propósito",
  artist: "Nancy Amancio",
  youtubeUrl: "https://www.youtube.com/watch?v=HXKYHG9fi-E",
  spotifyUrl: "https://open.spotify.com/track/2Rlh1fLQ9XoVNB51rUz8qv"
  }
},
  {
  day: 282,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en la Gestión",
  verse: {
  text: "Un verdadero líder inspira a su equipo a alcanzar metas extraordinarias, cultivando un ambiente de crecimiento y visión compartida.",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o emprendimiento. Proverbios 29: 18 nos recuerda que sin una visión clara, las personas, y por extensión, las organizaciones, carecen de dirección y propósito. En el ámbito empresarial cristiano, la visión no solo se refiere a metas financieras o de mercado, sino también a cómo el negocio honra a Dios y sirve a la comunidad. Un líder cristiano debe buscar la dirección divina para establecer una visión que trascienda lo meramente terrenal, inspirando a su equipo a trabajar con un propósito mayor. Esta visión debe ser comunicada de manera constante y efectiva, asegurando que cada miembro del equipo comprenda su rol en la consecución de los objetivos. Una visión bien definida y compartida fomenta la unidad, la innovación y la resiliencia frente a los desafíos, permitiendo que la empresa no solo sobreviva, sino que prospere con un impacto significativo.",
  quote: {
  text: "Un verdadero líder inspira a su equipo a alcanzar metas extraordinarias, cultivando un ambiente de crecimiento y visión compartida.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Considera cómo esta visión se alinea con tus valores cristianos y cómo puedes comunicarla de manera más efectiva para motivar a tu equipo.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cK2y91w2f0j2f0j2f0j2f"
  }
},
  {
  day: 283,
  month: "octubre",
  monthId: 10,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Cada tarea, cada decisión, cada interacción en nuestro negocio puede ser un acto de adoración. Cuando trabajamos con la mentalidad de que estamos sirviendo a Cristo, nuestra motivación cambia. La excelencia se convierte en un reflejo de nuestro amor por Él, y la integridad en un testimonio de Su carácter. Esta perspectiva no solo dignifica nuestro trabajo, sino que también nos libera de la presión de buscar la aprobación de los demás, recordándonos que nuestra verdadera recompensa proviene de lo alto. Es un llamado a la pasión y al propósito en cada aspecto de nuestra labor empresarial.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus tareas diarias en el negocio. ¿Cómo puedes abordarla con una actitud de servicio a Cristo? Identifica una acción específica que puedas tomar hoy para realizar esa tarea con mayor excelencia, integridad o amor, como si la estuvieras haciendo directamente para el Señor.",
  song: {
  title: "Dios de Pactos",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d32g8_L21M",
  spotifyUrl: "https://open.spotify.com/track/6225z0t9x49e7q62Q4q22N"
  }
},
  {
  day: 284,
  month: "octubre",
  monthId: 10,
  title: "Excelencia en el Servicio",
  verse: {
  text: "El verdadero liderazgo empresarial se mide por la capacidad de inspirar a otros a alcanzar su máximo potencial, creando un impacto duradero.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia en el servicio no es solo una estrategia, sino un reflejo de nuestro propósito. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si fuera para Dios mismo. Esta perspectiva transforma la forma en que lideramos y gestionamos, elevando la calidad de nuestro trabajo y la integridad de nuestras interacciones. Cuando los líderes y sus equipos adoptan esta mentalidad, no solo buscan la rentabilidad, sino también el impacto positivo y duradero. Se fomenta una cultura de responsabilidad, innovación y un compromiso inquebrantable con la calidad, sabiendo que cada esfuerzo contribuye a un propósito mayor que el beneficio personal o corporativo. Este enfoque inspira lealtad en clientes y empleados, construyendo un legado de impacto genuino.",
  quote: {
  text: "El verdadero liderazgo empresarial se mide por la capacidad de inspirar a otros a alcanzar su máximo potencial, creando un impacto duradero.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio o equipo donde la calidad o el servicio pueden mejorarse significativamente. Desarrolla un plan de acción con pasos concretos para elevar el estándar, comunicando a tu equipo la importancia de trabajar con excelencia como si fuera para el Señor, y evalúa los resultados en las próximas dos semanas.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1-39-2z9-6Q",
  spotifyUrl: "https://open.spotify.com/track/6211z0h4475j1Q9q80Q01D"
  }
},
  {
  day: 285,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión en cualquier ámbito, y el empresarial no es la excepción. Un líder sin una visión clara es como un barco sin timón, a la deriva y sin rumbo fijo. En el contexto de los negocios, la visión no es solo un sueño, sino una declaración intencional de hacia dónde se dirige la empresa, qué impacto busca generar y cómo se diferenciará. Esta visión debe ser comunicada con pasión y convicción para inspirar a los equipos, alinear esfuerzos y superar obstáculos. Una visión bíblica, arraigada en principios de servicio y propósito, eleva el liderazgo más allá de la mera rentabilidad, buscando un impacto trascendente en la sociedad y en la vida de las personas. Es la brújula que guía cada decisión estratégica y operativa.",
  quote: {
  text: "La visión es la imagen mental de lo que queremos que sea el futuro, tan clara que nos impulsa a actuar en el presente.",
  author: "Rick Warren"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que refleje tus valores. Luego, compártela con tu equipo de manera que todos comprendan su importancia y se sientan parte de ella. Busca formas creativas de mantener esa visión viva y presente en el día a día de tu organización.",
  song: {
  title: "Ven Espíritu Ven",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=K7-MyAEcA6w",
  spotifyUrl: "https://open.spotify.com/intl-es/track/05BkWRVy0cubbSnsyzw2lu"
  }
},
  {
  day: 286,
  month: "Octubre",
  monthId: 10,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo de Colosenses 3: 23 nos invita a una perspectiva radical en el mundo empresarial: trabajar con excelencia no solo para nuestros clientes, empleados o accionistas, sino principalmente para Dios. Esta mentalidad transforma el trabajo de una mera transacción económica en un acto de adoración. Cuando un empresario cristiano opera bajo este principio, cada decisión, cada producto y cada servicio se imbuye de un estándar de calidad superior, integridad y propósito. No se trata de buscar el reconocimiento humano, sino de honrar a Aquel que nos ha dado los talentos y recursos. La excelencia se convierte en un testimonio vivo de nuestra fe, impactando positivamente nuestro entorno y reflejando los valores del Reino en el mercado. Es un llamado a la mayordomía fiel y a la búsqueda constante de la mejora, sabiendo que nuestro esfuerzo tiene un significado trascendente.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Identifica un área en tu negocio o proyecto donde puedas elevar el estándar de excelencia, no por presión externa, sino como una ofrenda de corazón a Dios. Implementa un cambio concreto esta semana que refleje este compromiso con la calidad y el propósito divino.",
  song: {
  title: "Tu Proposito",
  artist: "Nancy Amancio",
  youtubeUrl: "https://www.youtube.com/watch?v=HXKYHG9fi-E",
  spotifyUrl: "https://open.spotify.com/track/2Rlh1fLQ9XoVNB51rUz8qv"
  }
},
  {
  day: 287,
  month: "Octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que inspiren a otros.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, tanto en la vida personal como en el ámbito empresarial. Un líder sin una visión clara es como un barco sin timón, a la deriva y sin rumbo fijo. En el contexto de los negocios, la visión no es solo un sueño ambicioso, sino una declaración concisa del futuro deseado que guía cada decisión y acción. Permite a los equipos entender el propósito de su trabajo, fomenta la unidad y la motivación, y proporciona un marco para la innovación. Mantener la visión alineada con principios éticos y bíblicos asegura que el crecimiento y el éxito no solo sean rentables, sino también sostenibles y con un impacto positivo en la sociedad. La bendición mencionada en el versículo se manifiesta en la estabilidad y el progreso que una visión bien definida y moralmente fundamentada aporta a cualquier empresa.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que inspiren a otros.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Luego, comparte esta visión con tu equipo, explicando cómo cada rol contribuye a alcanzarla y cómo se alinea con tus valores fundamentales.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2L0Y2p2K8pY",
  spotifyUrl: "https://open.spotify.com/track/62X7Q6g1X5z0p5J0z5X0z5"
  },
  movie: {
  title: "Un Sueño Posible (The Blind Side)",
  platform: "Amazon Prime Video",
  description: "Basada en una historia real, esta película inspiradora muestra cómo la compasión y la visión de una familia pueden transformar la vida de un joven, destacando el poder de la creencia en el potencial de los demás y la superación de obstáculos."
  }
},
  {
  day: 288,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de controlar, sino de liberar el potencial de otros para alcanzar un propósito común.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos advierte que sin una visión clara, la gente se desorienta y actúa sin propósito. En el ámbito empresarial, esto se traduce en falta de dirección, decisiones inconsistentes y equipos desmotivados. Un líder cristiano debe cultivar una visión que no solo busque el éxito material, sino que también refleje los valores del Reino. Esta visión debe ser comunicada con pasión y convicción, inspirando a cada miembro del equipo a alinear sus esfuerzos hacia un objetivo común y trascendente. Una visión bien definida proporciona un marco para la toma de decisiones estratégicas y fomenta la innovación, asegurando que la empresa no solo sobreviva, sino que prospere con un propósito divino.",
  quote: {
  text: "El verdadero liderazgo no se trata de controlar, sino de liberar el potencial de otros para alcanzar un propósito común.",
  author: "Peter Drucker"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Luego, identifica tres acciones concretas que puedes tomar para alinear mejor tus operaciones diarias con esa visión.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=Xw0yXw0yXw0",
  spotifyUrl: "https://open.spotify.com/track/0y0y0y0y0y0y0y0y0y0y0y"
  }
},
  {
  day: 289,
  month: "Octubre",
  monthId: 10,
  title: "Liderazgo con Propósito y Excelencia Divina",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en 'hacer las cosas bien', es decir, en la eficiencia y la ejecución impecable. Sin embargo, el liderazgo cristiano nos llama a ir más allá, a 'hacer las cosas correctas' con un propósito superior. Colosenses 3: 23 nos recuerda que cada tarea, cada decisión y cada interacción en nuestro negocio debe ser realizada con la misma dedicación y excelencia que si la estuviéramos haciendo directamente para Dios. Esto implica integridad en las finanzas, justicia en el trato con los empleados, innovación que beneficia a la sociedad y una visión que trasciende la mera ganancia. Un líder con propósito divino busca impactar no solo el mercado, sino también las vidas de las personas, reflejando los valores del Reino en cada aspecto de su gestión.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una decisión clave que debas tomar esta semana en tu negocio. Antes de actuar, pregúntate: ¿Estoy haciendo esto solo por eficiencia o estoy buscando hacer lo correcto, honrando a Dios y beneficiando a mi prójimo? Busca la sabiduría divina para alinear tus acciones con un propósito más elevado.",
  song: {
  title: "La Bondad de Dios",
  artist: "Essential Worship, Blanca",
  youtubeUrl: "https://www.youtube.com/watch?v=X0Y5y7o226g",
  spotifyUrl: "https://open.spotify.com/track/5uX5a3g03y3j705g1yXy1p"
  }
},
  {
  day: 290,
  month: "octubre",
  monthId: 10,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Este pasaje nos recuerda que nuestro trabajo, ya sea en la dirección de una empresa, en la gestión de un equipo o en la ejecución de tareas diarias, debe ser realizado con una dedicación que trasciende lo meramente humano. Al trabajar \"como para el Señor\", infundimos cada acción con un propósito más elevado, buscando la excelencia no por la aprobación de los demás, sino como una ofrenda a Dios. Esta mentalidad transforma la rutina en vocación, impulsando la innovación, la integridad y un servicio excepcional que, en última instancia, beneficia a todos los involucrados y honra a nuestro Creador.",
  quote: {
  text: "El trabajo es una bendición, no una maldición. Es la forma en que Dios nos permite participar en Su creación continua.",
  author: "Rick Warren"
  },
  challenge: "Evalúa una tarea o proyecto clave en tu negocio esta semana. ¿Cómo puedes abordarlo con una mentalidad de \"hacerlo como para el Señor\"? Identifica al menos una acción concreta para elevar la calidad, la ética o el propósito de ese trabajo, y ejecútala con excelencia.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1r7j7m4y_5Y",
  spotifyUrl: "https://open.spotify.com/track/4X193L3K2f6zFf226B2j9k"
  }
},
  {
  day: 291,
  month: "Octubre",
  monthId: 10,
  title: "La Fidelidad en la Gestión de Recursos",
  verse: {
  text: "El que es fiel en lo muy poco, también en lo mucho es fiel; y el que en lo muy poco es injusto, también en lo mucho es injusto.",
  reference: "Lucas 16: 10"
  },
  reflection: "La fidelidad es un pilar fundamental en el liderazgo empresarial, especialmente en la gestión de recursos. Este versículo de Lucas nos recuerda que la manera en que manejamos lo pequeño es un reflejo directo de cómo manejaremos lo grande. En el ámbito de los negocios, esto se traduce en la administración honesta y diligente de los activos, el tiempo, el talento del equipo y las finanzas, sin importar su magnitud. Un líder fiel en las pequeñas decisiones financieras, en el cumplimiento de los plazos o en la integridad de sus tratos, construye una base sólida de confianza y credibilidad. Esta fidelidad no solo honra a Dios, sino que también atrae bendición y oportunidades de mayor responsabilidad, demostrando que la integridad es un activo invaluable que impulsa el crecimiento sostenible y el éxito a largo plazo en cualquier empresa.",
  quote: {
  text: "El verdadero liderazgo cristiano en los negocios no busca solo el éxito material, sino impactar vidas y glorificar a Dios en cada decisión y acción.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área de tu negocio donde sientas que la fidelidad o la diligencia podría mejorar. Implementa una acción concreta esta semana para demostrar mayor compromiso y responsabilidad en esa área, ya sea en la gestión de un proyecto, el seguimiento de un cliente o la administración de un recurso.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/3ngh2nS1P1GOr6qDGzwojQ"
  }
},
  {
  day: 292,
  month: "Octubre",
  monthId: 10,
  title: "La Diligencia y la Integridad en el Trabajo",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "En el ámbito empresarial, la diligencia y la integridad son pilares fundamentales para construir un legado duradero. Este versículo nos insta a presentarnos como obreros aprobados, lo que implica un compromiso con la excelencia y la honestidad en cada tarea. Para un líder cristiano, esto se traduce en gestionar su negocio con ética, transparencia y un esfuerzo constante por mejorar. No se trata solo de evitar la vergüenza, sino de honrar a Dios a través de nuestro trabajo, demostrando que somos dignos de confianza y que nuestras acciones reflejan los principios de la verdad. La diligencia en la planificación, ejecución y evaluación, combinada con una integridad inquebrantable, no solo genera respeto y credibilidad, sino que también sienta las bases para un impacto positivo y sostenible en el mercado y en la vida de las personas.",
  quote: {
  text: "Aprende a decir no a las cosas buenas, para poder decir sí a las mejores.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus responsabilidades clave en el negocio esta semana. ¿Cómo puedes aplicar mayor diligencia y un estándar más alto de integridad en su ejecución? Identifica una acción específica para mejorar y comprométete a llevarla a cabo, buscando la aprobación de Dios en tu esfuerzo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s3w4y6-0w3I",
  spotifyUrl: "https://open.spotify.com/track/4j9g2Q1Q1z1z1z1z1z1z1z"
  }
},
  {
  day: 293,
  month: "octubre",
  monthId: 10,
  title: "Sirviendo a Cristo en el Negocio",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje de Colosenses nos llama a una ética de trabajo superior, una que trasciende la mera obligación o el deseo de reconocimiento humano. Para el empresario y líder cristiano, esto significa que cada tarea, cada decisión, cada interacción en el ámbito de los negocios debe ser vista como una oportunidad para servir a Cristo. No se trata solo de la calidad del producto o servicio, sino de la integridad en las operaciones, la justicia con los empleados y la excelencia en la gestión. Cuando trabajamos con esta perspectiva, nuestro esfuerzo adquiere un propósito eterno. La recompensa no es solo terrenal, sino una herencia espiritual que viene del Señor mismo, transformando el trabajo diario en un acto de adoración y testimonio.",
  quote: {
  text: "El trabajo es una bendición, no una maldición. Es la forma en que Dios nos permite participar en Su obra creativa y redentora en el mundo.",
  author: "Tim Keller"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos en tu negocio esta semana. ¿Cómo puedes abordarlo con una mentalidad de servicio a Cristo, buscando la excelencia y la integridad en cada detalle, más allá de las expectativas humanas? Identifica una acción concreta para aplicar esta perspectiva.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=X2mQ5Xg2_6Q",
  spotifyUrl: "https://open.spotify.com/track/4j82r4j12j12j12j12j12j"
  }
},
  {
  day: 294,
  month: "Octubre",
  monthId: 10,
  title: "La Diligencia en la Obra del Señor",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "La diligencia en el trabajo es un principio bíblico fundamental que se extiende al ámbito empresarial. Como líderes y emprendedores cristianos, somos llamados a operar con excelencia, no solo para el beneficio de nuestra empresa, sino como un testimonio de nuestra fe. 2 Timoteo 2: 15 nos insta a presentarnos aprobados, lo que implica un compromiso con la calidad, la ética y la mejora continua. En el mundo de los negocios, esto se traduce en una gestión eficaz, una planificación estratégica y una ejecución impecable. Nuestra labor debe reflejar la verdad y la integridad, construyendo un legado que honre a Dios y sirva a la sociedad con propósito y pasión.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde la diligencia podría mejorarse. Desarrolla un plan de acción concreto para implementar esa mejora esta semana, buscando la excelencia en cada detalle.",
  song: {
  title: "Cuan Grande Es Dios",
  artist: "En Espíritu Y En Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=8UWXr_p8y-0",
  spotifyUrl: "https://open.spotify.com/track/7j5h2j3l8k4j4j4j4j4j4j"
  },
  movie: {
    title: "The Ultimate Gift (Un Nuevo Comienzo)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=gKVXdILAAWw",
    description:
      "Un joven mimado debe completar 12 tareas para recibir su herencia, descubriendo que los verdaderos regalos de la vida son el trabajo, la gratitud y el servicio.",
  },
},
  {
  day: 295,
  month: "octubre",
  monthId: 10,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en los resultados tangibles y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a elevar nuestra perspectiva. Como empresarios y líderes cristianos, cada tarea, cada decisión y cada interacción en nuestro negocio debe ser realizada con un corazón íntegro, como si estuviéramos sirviendo directamente a Cristo. Esta mentalidad transforma el trabajo de una mera obligación a una oportunidad de adoración y servicio. Al operar con excelencia y dedicación, no solo honramos a Dios, sino que también construimos un legado de impacto que trasciende lo material, atrayendo bendiciones y una recompensa que va más allá de lo terrenal. La motivación interna de servir al Señor nos impulsa a la innovación, la ética y la perseverancia, incluso en los desafíos más grandes.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio esta semana y comprométete a realizarlo con una excelencia y dedicación extraordinarias, recordándote que lo haces como para el Señor. Observa cómo esta perspectiva cambia tu enfoque y los resultados.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s5e12g42w50",
  spotifyUrl: "https://open.spotify.com/track/62g21762w1z34567890123"
  }
},
  {
  day: 296,
  month: "octubre",
  monthId: 10,
  title: "Planificación Divina y Éxito Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos invita a ir más allá de la mera lógica y encomendar nuestras obras al Señor. Esto no significa pasividad, sino una dependencia activa de la sabiduría divina en cada decisión. Al alinear nuestros planes con la voluntad de Dios, encontramos una claridad y una dirección que trascienden el entendimiento humano. Nuestros pensamientos se afirman, no por nuestra propia fuerza, sino por la guía del Espíritu Santo. Esta encomienda nos brinda paz en medio de la incertidumbre y nos asegura que nuestros esfuerzos, cuando están en armonía con el propósito de Dios, serán fructíferos y sostenibles a largo plazo, construyendo un legado de impacto duradero.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar tus planes de negocio o proyectos clave. Antes de tomar decisiones importantes, ora específicamente por cada uno de ellos, pidiendo a Dios que afirme tus pensamientos y te muestre el camino. Busca Su sabiduría en las Escrituras y en la consejería piadosa, y actúa con la confianza de que Él guiará tus pasos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=w92h14l4w9U",
  spotifyUrl: "https://open.spotify.com/track/62Xj222w3j2j2j2j2j2j2j"
  }
},
  {
  day: 297,
  month: "Octubre",
  monthId: 10,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no para los hombres.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, la excelencia a menudo se mide por resultados tangibles: ganancias, cuota de mercado o innovación. Sin embargo, para el líder cristiano, la excelencia adquiere una dimensión más profunda. Colosenses 3: 23 nos llama a realizar cada tarea, grande o pequeña, con un compromiso total, como si estuviéramos sirviendo directamente a Dios. Esta perspectiva transforma el trabajo de una mera obligación a una oportunidad de adoración. Al operar con esta mentalidad, no solo buscamos la calidad en nuestros productos o servicios, sino que también cultivamos un ambiente de integridad, ética y servicio que honra a Dios y beneficia a todos los involucrados. La excelencia con propósito divino se convierte en un testimonio de nuestra fe en el mercado.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus principales responsabilidades laborales o empresariales esta semana. ¿Cómo puedes abordarla con una mentalidad de servicio a Dios, buscando la excelencia no solo en el resultado, sino también en el proceso y en tu actitud? Identifica un área específica donde puedas elevar tus estándares de carácter y desempeño para reflejar mejor tu fe.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=0h745_hJ65c",
  spotifyUrl: "https://open.spotify.com/track/5h2gq01h6t6Y5J8t8z7Z0L"
  }
},
  {
  day: 298,
  month: "Octubre",
  monthId: 10,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia y el propósito son pilares fundamentales. Colosenses 3: 23-24 nos insta a realizar cada tarea con dedicación, como si estuviéramos sirviendo directamente a Dios. Esta perspectiva transforma el trabajo de una mera obligación a una oportunidad de honrar a nuestro Creador. Un líder cristiano entiende que su labor va más allá de las ganancias; busca impactar vidas, construir con integridad y dejar un legado de valor. Al adoptar esta mentalidad, cada decisión, cada proyecto y cada interacción se impregnan de un significado trascendente, elevando el estándar de lo que se considera éxito en los negocios. La recompensa no es solo terrenal, sino también eterna, motivándonos a dar lo mejor de nosotros en todo momento.",
  quote: {
  text: "Un líder es aquel que conoce el camino, recorre el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde puedas elevar el estándar de excelencia esta semana. ¿Cómo puedes aplicar el principio de trabajar como para el Señor en esa área? Implementa un cambio concreto y observa el impacto en tu equipo y en los resultados.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/track/1SNJTouyG6mRfHYk9Kp3W8"
  }
},
  {
  day: 299,
  month: "Octubre",
  monthId: 10,
  title: "Liderazgo Diligente: Un Legado de Integridad y Excelencia",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "2 Timoteo 2: 15 nos llama a la diligencia y a presentarnos aprobados. En el ámbito empresarial, esto se traduce en una búsqueda constante de la excelencia y la integridad en cada tarea. Un líder cristiano no solo busca el éxito material, sino que también se esfuerza por operar con principios éticos y morales que reflejen su fe. Ser un \"obrero que no tiene de qué avergonzarse\" implica una gestión transparente, decisiones justas y un compromiso inquebrantable con la calidad y el servicio. La \"palabra de verdad\" en el contexto de los negocios puede interpretarse como la honestidad en las comunicaciones, la fidelidad a los acuerdos y la autenticidad en las relaciones con clientes, empleados y socios. Este versículo nos impulsa a ver nuestro trabajo como una oportunidad para honrar a Dios, impactando positivamente nuestro entorno y dejando un legado de valor duradero.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde puedas aplicar mayor diligencia y transparencia esta semana. Evalúa tus procesos internos o tus comunicaciones externas y busca una oportunidad para mejorar la calidad o la honestidad, presentándote como un líder aprobado ante Dios y los hombres.",
  song: {
  title: "Al Estar Aquí",
  artist: "Marcos Witt, TAYA",
  youtubeUrl: "https://www.youtube.com/watch?v=_zhBv6JjLxQ",
  spotifyUrl: "https://open.spotify.com/track/0HFAsob0Ua78Tsjeu6LfxR"
  }
},
  {
  day: 300,
  month: "Octubre",
  monthId: 10,
  title: "La Visión Clara en el Liderazgo",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que inspiren y empoderen a otros para alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Sin una dirección clara, los esfuerzos se dispersan y la productividad disminuye. Proverbios 29: 18 nos recuerda que la falta de visión lleva al desorden. En el ámbito empresarial, esto se traduce en objetivos difusos, estrategias inconsistentes y un equipo desmotivado. Un líder cristiano debe cultivar una visión que no solo busque el éxito material, sino que también honre principios éticos y un propósito trascendente. Esta visión debe ser comunicada de manera efectiva, inspirando a cada miembro del equipo a alinear sus talentos y esfuerzos hacia un objetivo común, asegurando así un legado de impacto duradero y significativo.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que inspiren y empoderen a otros para alcanzar su máximo potencial.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y clarificar la visión de tu empresa o proyecto. Asegúrate de que sea inspiradora, medible y que cada miembro de tu equipo la comprenda y se sienta parte de ella. Luego, comunica esta visión con pasión y convicción en tu próxima reunión de equipo, invitando a la retroalimentación y al compromiso renovado.",
  song: {
  title: "Visión",
  artist: "En Espíritu y en Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=y-34p0eXj8o",
  spotifyUrl: "https://open.spotify.com/track/62X6v02Q0x9z3x0w2x9z3x"
  }
},
  {
  day: 301,
  month: "octubre",
  monthId: 10,
  title: "La Visión Clara en la Ejecución Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia vital de la visión, no solo en la vida espiritual, sino también en el ámbito empresarial. Un líder cristiano debe tener una visión clara para su empresa, un propósito que trascienda la mera ganancia. Esta visión actúa como una brújula, guiando las decisiones estratégicas y manteniendo al equipo enfocado. Sin una visión definida, la empresa puede caer en la improvisación y la falta de dirección, lo que lleva a la ineficiencia y al desenfreno en los esfuerzos. Mantener la ley, en este contexto, implica operar con principios éticos y valores cristianos, asegurando que la visión se persiga de manera justa y sostenible, construyendo un legado de impacto duradero.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Define o revisa la visión de tu empresa para el próximo trimestre. Asegúrate de que sea clara, inspiradora y esté alineada con tus valores cristianos. Comunícala eficazmente a tu equipo y establece métricas clave para medir el progreso hacia esa visión.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s2p1f1s_23U",
  spotifyUrl: "https://open.spotify.com/track/4j7z2f2qj5L0t2Q1y8x7sY"
  },
  movie: {
    title: "Groundhog Day (El Día de la Marmota)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=tSVeDx9fk60",
    description:
      "Un meteorólogo vive el mismo día repetidamente hasta que aprende a valorar cada momento y servir a otros, una poderosa lección sobre el cambio personal y la gratitud.",
  },
},
  {
  day: 302,
  month: "Octubre",
  monthId: 10,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; pero el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia de una visión clara, no solo en la vida espiritual sino también en el ámbito empresarial. Sin una dirección definida, las organizaciones pueden perder el rumbo, sus equipos se desmotivan y los recursos se dispersan. Un líder cristiano en los negocios comprende que la visión no es solo una meta ambiciosa, sino un propósito arraigado en principios divinos que guía cada decisión y estrategia. Mantener la ley, en este contexto, implica operar con integridad, ética y un compromiso con la excelencia que honre a Dios. Una visión inspiradora y bien comunicada unifica al equipo, fomenta la innovación y asegura que cada esfuerzo contribuya a un objetivo mayor, trascendiendo el mero beneficio económico para generar un impacto duradero.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Define o revisa la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Luego, identifica tres acciones concretas que puedes tomar esta semana para alinear tus operaciones diarias con esa visión.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cZg368888888888888888"
  }
},
  {
  day: 303,
  month: "Octubre",
  monthId: 10,
  title: "Excelencia en el Trabajo como Servicio a Dios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje bíblico nos invita a redefinir nuestra perspectiva sobre el trabajo. Para el empresario y líder cristiano, cada tarea, cada decisión y cada interacción comercial no es meramente una transacción terrenal, sino una oportunidad para honrar a Dios. La excelencia en el servicio, la calidad en los productos y la integridad en las relaciones deben ser el estándar, no por el reconocimiento humano, sino por la convicción de que estamos sirviendo a un propósito mayor. Al hacer nuestro trabajo con diligencia y pasión, reflejamos los valores del Reino y demostramos que nuestra fe impacta cada área de nuestra vida, incluyendo el ámbito empresarial. Esta mentalidad transforma el trabajo en una forma de adoración y servicio.",
  quote: {
  text: "La calidad significa hacer lo correcto cuando nadie está mirando.",
  author: "Henry Ford"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o de poca importancia. Comprométete a realizarlo con la máxima excelencia y atención al detalle esta semana, como si estuvieras sirviendo directamente a Dios. Observa cómo esta mentalidad cambia tu enfoque y los resultados.",
  song: {
  title: "Hazlo Otra Vez",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=b62g116_62c",
  spotifyUrl: "https://open.spotify.com/track/7j6475w6h35z704g9f39g0"
  }
},
  {
  day: 304,
  month: "octubre",
  monthId: 10,
  title: "Excelencia en el Servicio: Un Legado Duradero",
  verse: {
  text: "El liderazgo efectivo comienza con una visión clara y se nutre de la disciplina para ejecutarla con integridad y propósito.",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una meta, sino un testimonio de nuestra fe. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si estuviéramos sirviendo directamente a Dios. Esto transforma la forma en que abordamos nuestros productos, servicios y relaciones con clientes y colaboradores. Un líder cristiano entiende que su trabajo es una extensión de su adoración, buscando la calidad y la integridad en cada detalle. Esta perspectiva no solo eleva los estándares de nuestro negocio, sino que también construye un legado de impacto que trasciende lo meramente comercial, reflejando los valores del Reino en el mercado. La excelencia se convierte en un diferenciador clave y una fuente de bendición.",
  quote: {
  text: "El liderazgo efectivo comienza con una visión clara y se nutre de la disciplina para ejecutarla con integridad y propósito.",
  author: "Stephen Covey"
  },
  challenge: "Identifica un área clave en tu negocio o equipo donde la calidad o el servicio puedan mejorarse significativamente. Desarrolla un plan concreto para elevar los estándares en esa área, involucrando a tu equipo y comunicando la visión de hacerlo 'como para el Señor'. Implementa este plan durante la próxima semana y evalúa los resultados, buscando no solo la eficiencia sino también la excelencia que honra a Dios.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1b-3f2s9_oQ",
  spotifyUrl: "https://open.spotify.com/track/30671Q0854203005060708"
  }
},
  {
  day: 305,
  month: "noviembre",
  monthId: 11,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa a través de las aguas turbulentas del mercado. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto las personas como las organizaciones pueden perder el rumbo y caer en el caos. En el ámbito empresarial cristiano, la visión no solo se refiere a metas financieras o de crecimiento, sino también a un propósito superior que honra a Dios y sirve a la comunidad. Un líder con visión inspira a su equipo, alinea los esfuerzos y fomenta la disciplina necesaria para alcanzar objetivos significativos. Mantener la visión clara y comunicarla constantemente es crucial para el éxito y la cohesión del equipo.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar y articular claramente la visión de tu empresa o proyecto. Compártela con tu equipo y asegúrate de que todos comprendan cómo su trabajo contribuye a esa visión general. Si aún no tienes una visión definida, tómate el tiempo para desarrollarla, considerando tanto los objetivos empresariales como los principios cristianos.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s1b7X8gQ6_k",
  spotifyUrl: "https://open.spotify.com/track/3X0Q7w1j8X0Q7w1j8X0Q7w"
  }
},
  {
  day: 306,
  month: "Noviembre",
  monthId: 11,
  title: "La Diligencia como Fundamento del Éxito Empresarial",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "La diligencia es una virtud fundamental tanto en la vida espiritual como en el ámbito empresarial. Este versículo nos insta a ser diligentes en nuestro trabajo, buscando la aprobación de Dios a través de un esfuerzo constante y una ejecución impecable. En el mundo de los negocios, la diligencia se traduce en la atención al detalle, la perseverancia ante los desafíos y el compromiso con la excelencia. Un líder diligente no solo trabaja arduamente, sino que también se asegura de que su equipo esté bien preparado y utilice los recursos de manera efectiva. La falta de diligencia puede llevar a la mediocridad y al fracaso, mientras que un enfoque diligente construye una base sólida para el crecimiento y el impacto duradero. Al operar con integridad y dedicación, reflejamos principios divinos en nuestra labor, lo que no solo beneficia a nuestra empresa, sino que también honra a Dios.",
  quote: {
  text: "Donde hay una empresa de éxito, alguien tomó alguna vez una decisión valiente.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde la falta de diligencia podría estar impidiendo el progreso. Desarrolla un plan de acción concreto para abordar esta área con mayor dedicación y compromiso esta semana, delegando tareas si es necesario y estableciendo métricas claras para medir el avance.",
  song: {
  title: "Todo Va a Estar Bien",
  artist: "Redimi2, Evan Craft",
  youtubeUrl: "https://www.youtube.com/watch?v=UjDiKcjYKCM",
  spotifyUrl: "https://open.spotify.com/track/2LevKkvCGnAI4zPTU9M86P"
  }
},
  {
  day: 307,
  month: "noviembre",
  monthId: 11,
  title: "La Sabiduría en la Planificación Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación es fundamental, pero la sabiduría divina es el cimiento de todo éxito duradero. Proverbios 16: 3 nos invita a encomendar nuestras obras al Señor, recordándonos que nuestros planes más elaborados solo se afirman cuando están alineados con Su propósito. Esto no significa pasividad, sino una dependencia activa y una búsqueda constante de dirección. Un líder cristiano entiende que la visión y la estrategia deben ser permeadas por la oración y la fe. Al integrar la fe en la toma de decisiones, no solo buscamos resultados financieros, sino también un impacto que honre a Dios y beneficie a la sociedad. La verdadera sabiduría empresarial radica en reconocer que somos administradores de los recursos y talentos que Él nos ha confiado, y que cada paso debe ser dado con integridad y propósito eterno.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Esta semana, antes de tomar cualquier decisión importante en tu negocio, dedica tiempo a la oración y a la reflexión sobre cómo esa decisión se alinea con los principios bíblicos y el propósito de Dios para tu empresa. Busca consejo en la Palabra y en mentores sabios, y confía en que Él afirmará tus pasos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1g0w7040J3Q",
  spotifyUrl: "https://open.spotify.com/track/0h2g0f7j70Y8X6j70Y8X6j"
  }
},
  {
  day: 308,
  month: "Noviembre",
  monthId: 11,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa a través de las aguas turbulentas del mercado. Proverbios 29: 18 nos recuerda que sin una visión clara, tanto las personas como las organizaciones carecen de dirección y propósito, lo que puede llevar al caos y al fracaso. En el ámbito empresarial, una visión bien definida no solo inspira a los empleados, sino que también alinea sus esfuerzos hacia un objetivo común. Los líderes cristianos deben buscar la sabiduría divina para establecer una visión que no solo busque el éxito financiero, sino que también refleje valores éticos y un impacto positivo en la sociedad. Una visión poderosa es el motor que impulsa la innovación, la resiliencia y el crecimiento sostenible, permitiendo a la empresa navegar con propósito y alcanzar metas trascendentes.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Comparte esta visión con tu equipo y busca su retroalimentación para fortalecerla y asegurar que todos estén alineados con el propósito central de la organización. Considera cómo esta visión puede integrar principios éticos y de impacto social.",
  song: {
  title: "Visión",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cOdK2wGcsnZfWM9d0adxM"
  },
  movie: {
  title: "El Fundador",
  platform: "Netflix",
  description: "La historia de cómo Ray Kroc, un vendedor de Illinois, convirtió la innovadora idea de los hermanos McDonald en una de las cadenas de restaurantes más grandes del mundo. Una lección sobre visión, persistencia y la ética en los negocios."
  }
},
  {
  day: 309,
  month: "Noviembre",
  monthId: 11,
  title: "La Visión Clara: Fundamento del Liderazgo Efectivo",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Sin una dirección clara, los esfuerzos se dispersan y la motivación disminuye. Proverbios 29: 18 nos recuerda que la falta de visión lleva al desorden. En el ámbito empresarial, esto se traduce en objetivos difusos, estrategias inconsistentes y un equipo desorientado. Un líder cristiano debe ser un visionario, capaz de articular un propósito que trascienda lo meramente comercial, conectándolo con valores y un impacto positivo. Esta visión no solo inspira, sino que también establece los límites y las prioridades, permitiendo que el equipo trabaje con enfoque y determinación hacia metas significativas.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar o establecer la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y comunicable. Luego, compártela con tu equipo y pídeles retroalimentación para asegurar que todos la comprendan y se sientan parte de ella. Identifica al menos tres acciones concretas que tu equipo puede tomar esta semana para avanzar hacia esa visión.",
  song: {
  title: "El Alfarero",
  artist: "Evan Craft & Marcela Gandara",
  youtubeUrl: "https://www.youtube.com/watch?v=nyIgLCGsgGQ",
  spotifyUrl: "https://open.spotify.com/intl-es/track/4SweUFLjDDGzfVLEivWftx"
  }
},
  {
  day: 310,
  month: "Noviembre",
  monthId: 11,
  title: "La Diligencia como Camino a la Abundancia",
  verse: {
  text: "Los pensamientos del diligente ciertamente tienden a la abundancia; Mas todo el que se apresura alocadamente, de cierto va a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "La diligencia en el ámbito empresarial no es meramente una cuestión de esfuerzo, sino de una planificación cuidadosa y una ejecución constante. Proverbios 21: 5 nos enseña que la prosperidad no es fruto de la prisa o la impulsividad, sino de la meditación y el trabajo sostenido. Para el líder cristiano, esto implica una gestión sabia de los recursos, el tiempo y el talento, buscando siempre la excelencia como un acto de adoración. Evitar decisiones precipitadas y fomentar un ambiente de trabajo donde la calidad y la paciencia sean valoradas, son claves para construir un legado duradero y una empresa que honre a Dios. La abundancia, en este contexto, no es solo material, sino también de propósito y de impacto positivo en la sociedad.",
  quote: {
  text: "Un líder es aquel que conoce el camino, hace el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un proyecto o decisión importante en tu negocio que estés considerando. Dedica tiempo adicional esta semana a la planificación estratégica y a la consulta con mentores o expertos, en lugar de apresurarte a la ejecución. Identifica al menos tres pasos concretos que demuestren diligencia y previsión antes de avanzar.",
  song: {
  title: "Lo Harás Otra Vez (Do It Again)",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=es34Nr2JovU",
  spotifyUrl: "https://open.spotify.com/track/3vcfHBHNmN5LG8otn8j4Kg"
  }
},
  {
  day: 311,
  month: "Noviembre",
  monthId: 11,
  title: "Visión Clara y Propósito Firme",
  verse: {
  text: "Un líder empresarial exitoso inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  reference: "Proverbios 29: 18"
  },
  reflection: "En el ámbito empresarial, la visión es el faro que guía todas las decisiones y acciones. Proverbios 29: 18 nos recuerda que sin una visión clara, tanto las personas como las organizaciones carecen de dirección y propósito, lo que puede llevar al caos y al fracaso. Un líder cristiano en los negocios debe cultivar una visión que no solo busque el éxito material, sino que también honre los principios divinos. Esta visión debe ser comunicada con pasión y convicción, inspirando a los equipos a trabajar hacia un objetivo común que trascienda lo meramente comercial, impactando positivamente a la sociedad y reflejando los valores del Reino.",
  quote: {
  text: "Un líder empresarial exitoso inspira a su equipo a alcanzar metas extraordinarias, transformando desafíos en oportunidades de crecimiento.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a reevaluar la visión de tu empresa o proyecto. ¿Es lo suficientemente clara y comunicada? ¿Refleja tus valores cristianos y busca un impacto más allá de lo económico? Comparte esta visión con tu equipo y solicita retroalimentación para fortalecerla.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=X-Y9m1Y-j2M",
  spotifyUrl: "https://open.spotify.com/track/5v6z6g4g7Q8Q2Q2Q2Q2Q2Q?si=abcdefghijk"
  }
},
  {
  day: 312,
  month: "Noviembre",
  monthId: 11,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Hagan lo que hagan, háganlo de corazón, como para el Señor y no como para nadie en este mundo.",
  reference: "Colosenses 3: 23"
  },
  reflection: "Este versículo nos invita a una perspectiva transformadora en nuestro trabajo diario. Como empresarios y líderes cristianos, cada tarea, cada decisión y cada interacción en el negocio debe ser vista como una oportunidad para honrar a Dios. No se trata solo de cumplir con las expectativas humanas o alcanzar metas financieras, sino de operar con una excelencia que refleje nuestro compromiso con un propósito superior. Al hacer todo de corazón, infundimos pasión, integridad y dedicación en cada aspecto de nuestra empresa, sabiendo que nuestro verdadero empleador es el Señor. Esta mentalidad eleva el estándar de nuestro trabajo y nos impulsa a buscar la mejora continua, no por vanidad, sino por devoción.",
  quote: {
  text: "El liderazgo es influencia, nada más y nada menos.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus responsabilidades clave en el negocio esta semana. ¿Cómo puedes abordarla con una actitud de 'hacerlo para el Señor', buscando la excelencia y la integridad en cada detalle? Identifica una acción concreta para elevar el estándar de tu trabajo en esa área.",
  song: {
  title: "Mi Trabajo Es Creer",
  artist: "Marcos Yaroide",
  youtubeUrl: "https://www.youtube.com/watch?v=xW1DL_oZRxU",
  spotifyUrl: "https://open.spotify.com/track/72ZftLrMPFWcBR0wMjEh1o"
  }
},
  {
  day: 313,
  month: "noviembre",
  monthId: 11,
  title: "Liderazgo con Visión y Propósito Divino",
  verse: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia de la visión, un pilar fundamental tanto en la vida espiritual como en el ámbito empresarial. Un líder cristiano en los negocios no solo busca el éxito material, sino que opera con una visión trascendente, alineada con los propósitos de Dios. Esta visión divina proporciona dirección, inspira a los equipos y sostiene la empresa a través de los desafíos. Sin una visión clara, las organizaciones pueden perder el rumbo, sus empleados desmotivarse y sus esfuerzos carecer de un impacto duradero. Mantener la \"ley\" en este contexto implica adherirse a principios éticos y valores bíblicos, asegurando que la visión empresarial no solo sea ambiciosa, sino también justa y beneficiosa para todos los involucrados.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener seguidores, sino de crear más líderes que impacten positivamente.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a reevaluar la visión de tu negocio. ¿Está claramente definida? ¿Inspira a tu equipo? ¿Refleja principios que honran a Dios? Comunica esta visión de manera efectiva a tus colaboradores y busca formas de alinear cada decisión con ella.",
  song: {
  title: "Visión",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1g71tW0g-0Q",
  spotifyUrl: "https://open.spotify.com/track/62Xj20j8j0J9v9v9v9v9v9"
  }
},
  {
  day: 314,
  month: "Noviembre",
  monthId: 11,
  title: "La Visión Clara en la Ejecución Estratégica",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que son obedientes a la ley!",
  reference: "Proverbios 29: 18 (NVI)"
  },
  reflection: "La visión es el faro que guía a cualquier empresa hacia su destino. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto las personas como las organizaciones pueden perder el rumbo. En el ámbito empresarial, esto se traduce en la necesidad de una estrategia bien definida y comunicada. Un líder cristiano debe no solo tener una visión inspirada, sino también la capacidad de articularla de manera que motive a su equipo. La obediencia a \"la ley\" en este contexto puede interpretarse como la adhesión a principios éticos y valores fundamentales que sostienen la visión. La ejecución estratégica requiere disciplina, enfoque y la convicción de que cada paso contribuye a un propósito mayor, honrando a Dios en el proceso.",
  quote: {
  text: "La visión sin ejecución es una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o equipo. Asegúrate de que sea clara, inspiradora y que cada miembro del equipo comprenda su rol en la consecución de esa visión. Identifica un área donde la ejecución podría mejorar y traza un plan de acción concreto.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X5X5X5X5X",
  spotifyUrl: "https://open.spotify.com/track/1X5X5X5X5X5X5X5X5X5X5X"
  }
},
  {
  day: 315,
  month: "noviembre",
  monthId: 11,
  title: "La Disciplina de la Visión Clara",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o líder. Proverbios 29: 18 nos advierte que sin una visión clara, el \"pueblo se desenfrena\", lo que en el contexto empresarial se traduce en falta de dirección, objetivos difusos y equipos desmotivados. Un líder cristiano debe buscar la visión no solo en la estrategia de mercado, sino también en la dirección divina, asegurándose de que los propósitos de su negocio estén alineados con principios éticos y un impacto positivo. Mantener la visión requiere disciplina, comunicación constante y la capacidad de inspirar a otros a seguir ese camino, transformando el caos potencial en un progreso ordenado y bendecido.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar y clarificar la visión de tu empresa o proyecto. Comunícala de manera efectiva a tu equipo, asegurándote de que cada miembro comprenda su rol en la consecución de esa visión. Evalúa si tus acciones diarias están alineadas con los objetivos a largo plazo y haz los ajustes necesarios.",
  song: {
  title: "Visión",
  artist: "Generación 12",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  spotifyUrl: "https://open.spotify.com/track/4cOdK2wGtkawcYs0xKzYjE"
  },
  movie: {
  title: "El Fundador",
  platform: "Netflix",
  description: "La historia de cómo Ray Kroc, un vendedor de Illinois, convirtió la innovadora idea de comida rápida de los hermanos McDonald en una de las cadenas de restaurantes más grandes del mundo, mostrando la importancia de la visión y la perseverancia en los negocios."
  }
},
  {
  day: 316,
  month: "Noviembre",
  monthId: 11,
  title: "El Poder de Dios en la Creación de Riquezas",
  verse: {
  text: "Acuérdate de Jehová tu Dios, porque Él te da el poder para hacer las riquezas, a fin de confirmar su pacto que juró a tus padres, como en este día.",
  reference: "Deuteronomio 8: 18"
  },
  reflection: "Este versículo nos recuerda que la capacidad de generar riqueza no proviene únicamente de nuestro esfuerzo o ingenio, sino que es un don de Dios. Para el empresario y líder cristiano, esto implica una profunda humildad y gratitud. Reconocer a Dios como la fuente de nuestro poder para prosperar nos impulsa a gestionar nuestros negocios con integridad, ética y un propósito que trascienda el beneficio personal. Nos desafía a ser mayordomos fieles de los recursos y talentos que Él nos ha confiado, buscando impactar positivamente a nuestra comunidad y glorificar su nombre a través de nuestras empresas. La verdadera riqueza, entonces, se mide no solo en bienes materiales, sino en la influencia y el legado que construimos bajo su dirección.",
  quote: {
  text: "Si le hubiera preguntado a la gente qué querían, habrían dicho caballos más rápidos.",
  author: "Henry Ford"
  },
  challenge: "Identifica una decisión clave en tu negocio o emprendimiento donde puedas aplicar un principio bíblico (como la honestidad, el servicio o la generosidad) en lugar de solo buscar el beneficio económico inmediato. Reflexiona sobre cómo esta decisión podría honrar a Dios y generar un impacto positivo a largo plazo.",
  song: {
  title: "Estoy convencido",
  artist: "Averly Morillo",
  youtubeUrl: "https://www.youtube.com/watch?v=6RZwH5xjn7w",
  spotifyUrl: "https://open.spotify.com/track/3tibAhUL1rTJjnqipgRwgl"
  }
},
  {
  day: 317,
  month: "noviembre",
  monthId: 11,
  title: "Excelencia con Propósito",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, la búsqueda de la excelencia es constante. Sin embargo, como líderes cristianos, nuestra motivación trasciende el simple éxito terrenal. Colosenses nos recuerda que nuestro trabajo es una forma de adoración y servicio a Dios. Cada tarea, desde la planificación estratégica hasta la atención al cliente, debe realizarse con la máxima diligencia y de todo corazón, no para obtener el aplauso de los hombres, sino como una ofrenda al Señor. Esta perspectiva transforma nuestra labor diaria en un acto de fe y propósito. Cuando entendemos que nuestro verdadero jefe es Cristo, la integridad, la calidad y el servicio se convierten en prioridades innegociables, sabiendo que la recompensa más grande y duradera proviene de Él.",
  quote: {
  text: "La eficiencia es hacer las cosas bien; la eficacia es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Esta semana, identifica un área de tu negocio que no esté operando con la excelencia que te gustaría. Reúne a tu equipo y, juntos, establezcan un plan de acción para mejorar ese proceso, enfocándose en hacerlo \"como para el Señor\".",
  song: {
  title: "Que se abra el cielo",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=iP3-tV5yM-c",
  spotifyUrl: "https://open.spotify.com/track/3jkh2t2V1a3yoo1pEehsE1"
  }
},
  {
  day: 318,
  month: "Noviembre",
  monthId: 11,
  title: "La Sabiduría Divina en la Planificación Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación estratégica es fundamental para el éxito. Sin embargo, como creyentes, somos llamados a ir más allá de la mera lógica y encomendar nuestras obras al Señor, como nos insta Proverbios 16: 3. Esto no significa pasividad, sino una profunda dependencia y búsqueda de la dirección divina en cada decisión. Al alinear nuestros planes y objetivos con la voluntad de Dios, no solo obtenemos claridad y propósito, sino que también experimentamos una estabilidad que trasciende las fluctuaciones del mercado. Un líder cristiano entiende que el verdadero éxito no se mide solo por las ganancias, sino por la fidelidad a los principios divinos y el impacto positivo en la sociedad. Al confiar en Dios, nuestros pensamientos y estrategias se fortalecen, permitiéndonos construir un legado duradero y significativo.",
  quote: {
  text: "El verdadero liderazgo es la capacidad de influir en los demás para que sigan un propósito más grande que ellos mismos.",
  author: "John C. Maxwell"
  },
  challenge: "Antes de tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración y busca la dirección de Dios. Escribe tus planes y luego preséntalos ante Él, pidiendo que afirme tus pensamientos y te guíe en el camino correcto.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X5g4l-11Q",
  spotifyUrl: "https://open.spotify.com/track/622h0y5700s5f80z6t012m"
  }
},
  {
  day: 319,
  month: "noviembre",
  monthId: 11,
  title: "La Visión Afirmada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que la verdadera solidez de nuestros planes proviene de encomendarlos a Dios. Esto no significa pasividad, sino una dependencia activa en Su sabiduría y dirección. Al alinear nuestras metas y proyectos con los principios divinos, nuestros pensamientos y visiones empresariales adquieren una base firme. La fe en Dios no anula la necesidad de un trabajo diligente, sino que lo potencia, transformando la incertidumbre en confianza y los desafíos en oportunidades para ver Su mano obrar en nuestros negocios. Es un llamado a integrar nuestra fe en cada decisión estratégica y operativa.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un proyecto o decisión importante en tu negocio esta semana. Antes de avanzar, dedica tiempo a la oración, encomendando ese plan a Dios y buscando Su dirección. Luego, actúa con diligencia, confiando en que Él afirmará tus pasos.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t4-X8fQ-Q",
  spotifyUrl: "https://open.spotify.com/track/30q416w3y99t6g1g5f8p7s"
  }
},
  {
  day: 320,
  month: "Noviembre",
  monthId: 11,
  title: "La Acción Transforma el Conocimiento en Impacto",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el mundo empresarial, la acumulación de conocimiento es valiosa, pero su verdadero poder reside en la acción. Colosenses 3: 23-24 nos insta a trabajar con diligencia y con un propósito superior, como si estuviéramos sirviendo directamente a Dios. Este principio es fundamental para los líderes y emprendedores cristianos. No basta con tener ideas brillantes o estrategias bien formuladas; es imperativo llevarlas a la práctica con excelencia y dedicación. Cada tarea, por pequeña que parezca, se convierte en una oportunidad para manifestar nuestra fe y compromiso. Al actuar con esta mentalidad, no solo buscamos el éxito terrenal, sino que también honramos a Dios y construimos un legado de impacto duradero, sabiendo que nuestra recompensa final proviene de Él.",
  quote: {
  text: "El conocimiento es inútil para los ejecutivos hasta que se ha traducido en hechos.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde has acumulado conocimiento o ideas pero no has tomado acción. Desarrolla un plan concreto con pasos definidos para implementar ese conocimiento en la próxima semana y observa cómo se transforma en resultados tangibles.",
  song: {
  title: "Hazlo Otra Vez",
  artist: "Elevation Worship",
  youtubeUrl: "https://www.youtube.com/watch?v=0B_lnQIITxU",
  spotifyUrl: "https://open.spotify.com/track/713YdK2xJzJ1b702yP12x1"
  }
},
  {
  day: 321,
  month: "Noviembre",
  monthId: 11,
  title: "Moldeados para el Propósito Divino en los Negocios",
  verse: {
  text: "Pero esforzaos vosotros, y no desfallezcan vuestras manos, pues hay recompensa para vuestra obra.",
  reference: "2 Crónicas 15: 7"
  },
  reflection: "En el camino del emprendimiento y el liderazgo cristiano, a menudo enfrentamos desafíos que pueden desanimarnos. Sin embargo, 2 Crónicas 15: 7 nos llama a la perseverancia y al esfuerzo continuo, recordándonos que nuestra labor no es en vano. Como empresarios, somos llamados a ser diligentes y a no desfallecer, confiando en que Dios recompensa el trabajo hecho con integridad y propósito. Cada esfuerzo, cada decisión y cada hora invertida en nuestro negocio, cuando se alinea con los principios divinos, contribuye a un legado que trasciende lo material. Mantener esta perspectiva nos impulsa a superar obstáculos y a ver cada proyecto como una oportunidad para honrar a Dios y servir a nuestro prójimo con excelencia.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área en tu negocio donde te has sentido desanimado. Comprométete a aplicar un esfuerzo renovado esta semana, buscando la guía divina para encontrar soluciones innovadoras y perseverar con fe.",
  song: {
  title: "El Alfarero",
  artist: "Alex Campos ft. Verónica Leal",
  youtubeUrl: "https://www.youtube.com/watch?v=nyIgLCGsgGQ",
  spotifyUrl: "https://open.spotify.com/track/3KIhG4I4W0qz7dbN78uz9i"
  }
},
  {
  day: 322,
  month: "noviembre",
  monthId: 11,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este versículo subraya la importancia de confiar nuestros planes y esfuerzos a Dios. Para los empresarios y líderes cristianos, esto significa buscar la guía divina en la planificación estratégica, la toma de decisiones y las operaciones diarias. No se trata de esperar pasivamente, sino de trabajar activamente mientras alineamos nuestra visión con la voluntad de Dios. Cuando encomendamos nuestras empresas a Él, nuestros pensamientos ganan claridad y nuestros caminos se afirman, lo que lleva a un impacto y éxito sostenidos que trascienden las métricas mundanas. Este enfoque fomenta la resiliencia, la integridad y un sentido de propósito más allá de las ganancias, asegurando que nuestro legado se construya sobre cimientos sólidos y eternos.",
  quote: {
  text: "La humildad no es pensar menos de ti mismo, es pensar menos en ti mismo.",
  author: "C.S. Lewis"
  },
  challenge: "Antes de iniciar un nuevo proyecto o tomar una decisión importante esta semana, dedica tiempo a la oración y a la reflexión, pidiendo a Dios que guíe tus pasos y afirme tus pensamientos. Documenta cómo esta práctica influye en tu claridad y en los resultados.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=0_20j_0j_0j",
  spotifyUrl: "https://open.spotify.com/track/0_20j_0j_0j"
  },
  movie: {
    title: "Dead Poets Society (La Sociedad de los Poetas Muertos)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=ye5zXu5QfHs",
    description:
      "Un profesor inspirador enseña a sus estudiantes a pensar por sí mismos y aprovechar el día, demostrando que el verdadero legado educativo transforma el pensamiento.",
  },
},
  {
  day: 323,
  month: "Noviembre",
  monthId: 11,
  title: "La Visión Inquebrantable",
  verse: {
  text: "Todo lo puedo en Cristo que me fortalece.",
  reference: "Filipenses 4: 13"
  },
  reflection: "En el camino del emprendimiento y el liderazgo, los obstáculos y los planes que no resultan como esperamos son inevitables. Sin embargo, como nos recuerda Filipenses 4: 13, nuestra fortaleza no reside en nuestras propias capacidades, sino en Cristo que nos capacita. Esta verdad es fundamental para el empresario cristiano. No se trata de evitar el fracaso, sino de entender que cada revés puede ser una oportunidad para refinar nuestra visión y fortalecer nuestra fe. La perseverancia, anclada en la confianza divina, nos permite ver más allá de las dificultades momentáneas y mantener el enfoque en el propósito superior de nuestro negocio. Es en esos momentos de aparente debilidad donde la fortaleza de Dios se manifiesta plenamente, impulsándonos a seguir adelante con una visión inquebrantable.",
  quote: {
  text: "Los planes fallidos no deben interpretarse como una visión fallida. Las visiones no cambian, sólo se refinan. Los planes raramente permanecen.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un plan o proyecto en tu negocio que no haya salido como esperabas. En lugar de verlo como un fracaso, analízalo a la luz de tu visión original. ¿Cómo puedes refinar ese plan o estrategia, manteniendo la visión, y apoyándote en la fortaleza que viene de tu fe? Dedica tiempo a orar por sabiduría y dirección en este proceso de reevaluación y ajuste.",
  song: {
  title: "Perseverar",
  artist: "Unai Quirós",
  youtubeUrl: "https://www.youtube.com/watch?v=VOHShzo35aY",
  spotifyUrl: "https://open.spotify.com/album/2yApet..."
  }
},
  {
  day: 324,
  month: "Noviembre",
  monthId: 11,
  title: "La Visión Clara en la Ejecución Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia de una visión clara, no solo en la vida espiritual, sino también en el ámbito empresarial. Para el líder cristiano, la visión no es meramente una meta estratégica, sino un propósito alineado con los principios divinos. Sin una dirección definida y comunicada, los equipos pueden perder el enfoque, la motivación y, en última instancia, la productividad. Una visión inspiradora actúa como un faro, guiando las decisiones, fomentando la innovación y uniendo a los colaboradores hacia un objetivo común. Mantener esta visión viva y relevante, mientras se adhieren a la ética y la integridad, es fundamental para construir un legado de impacto duradero y significativo en el mercado.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Identifica una iniciativa clave en tu negocio que carezca de una visión clara. Dedica tiempo a definirla con precisión, comunicarla a tu equipo y establecer los primeros pasos concretos para su ejecución, asegurándote de que cada acción contribuya a ese propósito mayor.",
  song: {
  title: "El Gran Yo Soy",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=11z2-3w395A",
  spotifyUrl: "https://open.spotify.com/track/6290w3z3g0z4z0z4z0z4z0"
  }
},
  {
  day: 325,
  month: "noviembre",
  monthId: 11,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje bíblico nos invita a redefinir nuestra perspectiva sobre el trabajo. Para el empresario y líder cristiano, cada tarea, cada decisión y cada interacción no es simplemente una transacción comercial, sino una oportunidad para servir a un propósito mayor. Cuando hacemos nuestro trabajo \"de corazón, como para el Señor\", nuestra motivación trasciende el beneficio personal o el reconocimiento humano. Esto nos impulsa a buscar la excelencia, la integridad y la innovación, no por obligación, sino por devoción. Reconocer que nuestra recompensa final viene del Señor nos libera de la presión de buscar la aprobación constante de los demás y nos enfoca en construir un legado que honre a Dios y beneficie a la sociedad. Es un llamado a la mayordomía fiel de los talentos y recursos que se nos han confiado.",
  quote: {
  text: "El verdadero liderazgo no se trata de tener el control, sino de servir a los demás.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio o liderazgo donde la excelencia ha sido comprometida por la prisa o la falta de enfoque. Dedica tiempo esta semana a reevaluar y aplicar el principio de \"hacerlo de corazón como para el Señor\" en esa área, buscando mejorar la calidad y el impacto, no solo por resultados, sino como un acto de servicio.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1L3g_1_y0yU",
  spotifyUrl: "https://open.spotify.com/track/6X0t1v0q9e5z5g2q2f0f0f"
  }
},
  {
  day: 326,
  month: "noviembre",
  monthId: 11,
  title: "Afirmando tus Proyectos en Dios",
  verse: {
  text: "El liderazgo efectivo comienza con la visión clara, la disciplina para ejecutar y la integridad para inspirar a otros hacia un propósito común.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación y la estrategia son fundamentales. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos recuerda que hay un paso aún más crucial: encomendar nuestras obras al Señor. Esto no significa simplemente orar por nuestros planes, sino someterlos a Su voluntad y buscar Su dirección en cada decisión. Cuando nuestros proyectos y pensamientos están alineados con los propósitos de Dios, Él promete afirmarlos. Esta afirmación no siempre se traduce en éxito material inmediato, sino en la paz, la sabiduría y la integridad que guían nuestro camino. Confiar en Dios en el ámbito de los negocios nos permite operar con una perspectiva eterna, construyendo un legado que trasciende las ganancias y las pérdidas, enfocado en impactar vidas y glorificar Su nombre.",
  quote: {
  text: "El liderazgo efectivo comienza con la visión clara, la disciplina para ejecutar y la integridad para inspirar a otros hacia un propósito común.",
  author: "Stephen Covey"
  },
  challenge: "Antes de iniciar cualquier proyecto o tomar una decisión importante en tu negocio esta semana, dedica tiempo a la oración y a la reflexión, pidiendo a Dios que te muestre si tus planes están alineados con Su voluntad. Escribe tus objetivos y, junto a cada uno, anota cómo puedes encomendarlos específicamente a Él, buscando Su afirmación y dirección.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1z6X_o-hXgY",
  spotifyUrl: "https://open.spotify.com/track/0h2t3X8X3z3v2f4h5g7g8G"
  }
},
  {
  day: 327,
  month: "Noviembre",
  monthId: 11,
  title: "La Sabiduría de la Dirección y el Consejo",
  verse: {
  text: "El liderazgo no es acerca de títulos, posiciones o diagramas de flujo. Es acerca de una vida que influye en otra.",
  reference: "Proverbios 11: 14"
  },
  reflection: "En el ámbito empresarial, la dirección clara y el consejo sabio son pilares fundamentales para el éxito y la sostenibilidad. Proverbios 11: 14 nos recuerda que la falta de una guía estratégica puede llevar a la caída de una empresa, mientras que la abundancia de consejeros prudentes ofrece seguridad y estabilidad. Un líder cristiano no solo busca su propia sabiduría, sino que valora la perspectiva de otros, reconociendo que la humildad para escuchar y aprender es una fortaleza. Esto implica rodearse de un equipo diverso y competente, así como buscar mentores y asesores que aporten diferentes puntos de vista y experiencias. La toma de decisiones informadas, basadas en múltiples fuentes de conocimiento y discernimiento, minimiza riesgos y maximiza oportunidades, asegurando un camino más firme hacia los objetivos empresariales.",
  quote: {
  text: "El liderazgo no es acerca de títulos, posiciones o diagramas de flujo. Es acerca de una vida que influye en otra.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica un área clave en tu negocio donde necesites una dirección más clara o un consejo experto. Busca activamente a dos o tres personas de confianza (mentores, colegas, asesores) y pídeles su perspectiva honesta y sabia sobre cómo abordar ese desafío o mejorar esa área. Escucha atentamente sus aportaciones y considera cómo puedes integrar sus consejos en tu estrategia.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=X0h13b2_970",
  spotifyUrl: "https://open.spotify.com/track/301g72y272186y0g945892"
  }
},
  {
  day: 328,
  month: "Diciembre",
  monthId: 12,
  title: "Trabajo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: trabajar con un propósito divino. Cada tarea, cada decisión, cada interacción en nuestro negocio puede ser una ofrenda a Dios. Cuando realizamos nuestro trabajo con excelencia y dedicación, no solo impactamos positivamente a nuestros clientes y colaboradores, sino que también honramos a Aquel que nos ha dado las habilidades y oportunidades. Esta mentalidad transforma el trabajo de una mera obligación a una vocación sagrada, llena de significado y trascendencia.",
  quote: {
  text: "Si Dios está satisfecho con el trabajo, el trabajo puede estar satisfecho consigo mismo.",
  author: "C.S. Lewis"
  },
  challenge: "Identifica una tarea clave en tu negocio esta semana y realízala con la intención consciente de honrar a Dios a través de tu esfuerzo y excelencia. Observa cómo cambia tu perspectiva y la calidad de tu trabajo.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/6lMk5sY36yHg5vY2Q29lJd"
  }
},
  {
  day: 329,
  month: "Noviembre",
  monthId: 11,
  title: "Excelencia en el Trabajo: Un Llamado a la Productividad con Propósito",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una meta, sino un reflejo de nuestro compromiso y propósito. Colosenses 3: 23-24 nos insta a realizar cada tarea con dedicación, como si fuera directamente para Dios. Esto transforma la perspectiva del trabajo, elevándolo de una mera obligación a una oportunidad de servicio. Para el líder cristiano, esto significa ir más allá de la rentabilidad, buscando la calidad, la integridad y el impacto positivo en cada decisión y producto. Reconocer que nuestra labor es para el Señor nos impulsa a mantener altos estándares, a innovar con ética y a liderar con un sentido de mayordomía, sabiendo que la verdadera recompensa trasciende lo material y se encuentra en el propósito divino.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un proceso clave en tu negocio o equipo. Identifica al menos dos áreas donde puedes aplicar el principio de 'hacerlo de corazón como para el Señor', buscando no solo la eficiencia, sino también la excelencia y el impacto positivo. Implementa los cambios y mide los resultados en la próxima semana.",
  song: {
  title: "El Mismo Cielo",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=1t5z-h9w8-k",
  spotifyUrl: "https://open.spotify.com/track/5948b8y2s81f621y7x7j7z"
  },
  movie: {
    title: "Finding Forrester (Descubriendo a Forrester)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=0pW3OMu410U",
    description:
      "Un escritor recluso mentoriza a un joven talentoso, demostrando que el legado más valioso es invertir en la próxima generación y compartir sabiduría.",
  },
},
  {
  day: 330,
  month: "Noviembre",
  monthId: 11,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Pon en manos del Señor todas tus obras y tus proyectos se cumplirán.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el mundo empresarial, la planificación y la ejecución son fundamentales. Sin embargo, como líderes cristianos, nuestra confianza no reside únicamente en nuestras habilidades y estrategias. Proverbios 16: 3 nos recuerda que debemos encomendar nuestros planes y proyectos a Dios. Esto no significa pasividad, sino una asociación activa con el Creador. Al alinear nuestros objetivos comerciales con los principios divinos de integridad, servicio y mayordomía, invitamos a Dios a ser el socio principal en nuestras empresas. Cuando nuestros planes están en Sus manos, no solo buscamos el éxito terrenal, sino también un impacto eterno. Dejemos que cada decisión y cada proyecto sea una ofrenda a Dios, confiando en que Él guiará nuestros pasos y asegurará que nuestros esfuerzos den frutos que le honren.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Esta semana, antes de iniciar un nuevo proyecto o tomar una decisión importante, dedica un tiempo a orar específicamente sobre ello. Pide a Dios que alinee tus planes con Su voluntad y te dé sabiduría para ejecutarlo con excelencia y para Su gloria.",
  song: {
  title: "Sumérgeme",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=gLjjcMTEg40",
  spotifyUrl: "https://open.spotify.com/track/700a2MIZ4b6yQPa1K54aDf"
  }
},
  {
  day: 331,
  month: "noviembre",
  monthId: 11,
  title: "La Visión Estratégica y el Consejo Sabio",
  verse: {
  text: "Cuando falta el consejo, fracasan los planes; cuando abunda el consejo, prosperan.",
  reference: "Proverbios 15: 22"
  },
  reflection: "En el dinámico mundo empresarial, la toma de decisiones es una constante. Proverbios 15: 22 nos recuerda la vital importancia del consejo en la planificación y ejecución de nuestros proyectos. Un líder cristiano no solo busca la guía divina, sino que también valora la sabiduría colectiva. Rodearse de asesores competentes, mentores experimentados y un equipo diverso de pensadores es crucial para anticipar desafíos, identificar oportunidades y mitigar riesgos. La humildad para reconocer que no tenemos todas las respuestas y la disposición para escuchar diferentes perspectivas son sellos distintivos de un liderazgo efectivo. Al integrar el consejo sabio en nuestra estrategia, no solo fortalecemos nuestros planes, sino que también honramos a Dios al buscar la excelencia en todo lo que emprendemos, creando un futuro próspero y alineado con Su propósito.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área clave en tu negocio que requiera una decisión importante. Busca el consejo de al menos dos personas con experiencia relevante en esa área. Escucha activamente sus perspectivas y considera cómo sus aportaciones pueden fortalecer tu plan de acción. Documenta los puntos clave de su consejo y cómo los integrarás en tu estrategia para crear el futuro deseado.",
  song: {
  title: "No Hay Lugar Más Alto",
  artist: "Miel San Marcos ft. Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=wb99ILqk2dc",
  spotifyUrl: "https://open.spotify.com/intl-es/track/2gssWCnDOyxRxNfIw1eYLH"
  }
},
  {
  day: 332,
  month: "Noviembre",
  monthId: 11,
  title: "Liderazgo con Integridad y Propósito",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "En el ámbito empresarial, la integridad y la diligencia son pilares fundamentales para un liderazgo efectivo. 2 Timoteo 2: 15 nos insta a presentarnos como obreros aprobados, lo que implica un compromiso con la excelencia y la verdad en todas nuestras acciones. Un líder cristiano en los negocios no solo busca el éxito material, sino que también se esfuerza por edificar un legado de impacto que honre a Dios. Esto se traduce en tomar decisiones éticas, tratar a los empleados con justicia y servir a los clientes con honestidad. La palabra de verdad, en este contexto, no solo se refiere a la Biblia, sino también a la transparencia y la autenticidad en la comunicación y las operaciones comerciales. Al alinear nuestros principios empresariales con los valores cristianos, construimos una base sólida para un crecimiento sostenible y una influencia positiva en el mercado.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una situación en tu negocio donde puedas aplicar el principio de 'usar bien la palabra de verdad'. ¿Hay alguna comunicación interna o externa que pueda ser más transparente o auténtica? Implementa un cambio concreto para reflejar mayor integridad en esa área.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=4dB5PIdHoVY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/5zh9x8OxWAySBxWhvTDBW2"
  }
},
  {
  day: 333,
  month: "Noviembre",
  monthId: 11,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no como para los hombres",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el mundo empresarial, a menudo nos enfocamos en los resultados, las ganancias y el reconocimiento. Sin embargo, Colosenses 3: 23 nos invita a una perspectiva más elevada: hacer todo con excelencia, como si fuera directamente para Dios. Esto transforma nuestra visión del trabajo, elevándolo de una mera tarea a una vocación sagrada. Un líder cristiano entiende que cada esfuerzo, cada decisión y cada interacción en el negocio es una oportunidad para honrar a Dios. Esta mentalidad no solo mejora la calidad de nuestro trabajo, sino que también infunde un sentido de propósito y significado que trasciende las fluctuaciones del mercado. Al servir a nuestros clientes y colaboradores con un corazón íntegro, reflejamos los valores del Reino y construimos un legado de impacto duradero.",
  quote: {
  text: "El propósito de un negocio es crear y mantener un cliente.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una tarea o proyecto en tu negocio que consideres rutinario o poco inspirador. Reflexiona sobre cómo puedes abordarlo con una actitud renovada, buscando la excelencia y sirviendo a tus clientes o equipo como si estuvieras sirviendo directamente a Dios. Implementa al menos un cambio concreto en tu enfoque o proceso esta semana.",
  song: {
  title: "Poderoso Dios",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=HQ1q53S3gvc",
  spotifyUrl: "https://open.spotify.com/intl-es/track/7uH1rEIxTHMDs2PcXj08Az"
  }
},
  {
  day: 334,
  month: "noviembre",
  monthId: 11,
  title: "La Excelencia como Servicio a Dios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24 (RVR60)"
  },
  reflection: "Este versículo llama a los empresarios y líderes cristianos a un estándar más alto de trabajo. Nuestros esfuerzos en los negocios no son meramente para el lucro o el reconocimiento humano, sino un acto de adoración y servicio a Dios. Cuando abordamos nuestras tareas con un corazón diligente y una búsqueda de excelencia, reflejamos el carácter de Cristo en el mercado. Esta perspectiva transforma la rutina diaria en una oportunidad para glorificar a Dios, impactando no solo nuestros resultados financieros, sino también la cultura de nuestra empresa y la vida de nuestros empleados y clientes. La recompensa no es solo terrenal, sino eterna, motivándonos a dar lo mejor en cada proyecto y decisión.",
  quote: {
  text: "La única forma de hacer un gran trabajo es amar lo que haces.",
  author: "Steve Jobs"
  },
  challenge: "Evalúa un área de tu negocio o proyecto donde la calidad o el esfuerzo se han visto comprometidos. Comprométete a elevar el estándar de excelencia en esa área esta semana, recordándote que tu trabajo es para el Señor.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=2r152X3799k",
  spotifyUrl: "https://open.spotify.com/track/62g1g17X113f3050j32y7C"
  }
},
  {
  day: 335,
  month: "diciembre",
  monthId: 12,
  title: "Conocimiento Divino, Fortaleza Empresarial",
  verse: {
  text: "... pero el pueblo que conoce a su Dios será fuerte, y logrará hazañas.",
  reference: "Daniel 11: 32"
  },
  reflection: "En el mundo empresarial, la fortaleza no solo se mide por los recursos o la estrategia, sino por la profundidad del carácter y la visión. Daniel 11: 32 nos recuerda que aquellos que conocen a su Dios serán fuertes y capaces de lograr grandes hazañas. Este conocimiento no es meramente intelectual, sino una relación viva que infunde sabiduría, discernimiento y resiliencia. Para el líder cristiano, esto significa operar con una perspectiva eterna, tomando decisiones que honran a Dios y sirven a los demás. La verdadera fortaleza en los negocios proviene de una fuente divina, permitiéndonos enfrentar desafíos con fe y transformar obstáculos en oportunidades, dejando un legado de impacto que trasciende lo material.",
  quote: {
  text: "El secreto para una vida exitosa es encontrar nuestro propósito y luego hacerlo.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio donde necesites mayor fortaleza o una hazaña por lograr. Dedica tiempo a buscar la dirección de Dios a través de la oración y la lectura de Su Palabra, confiando en que Su conocimiento te equipará para superar cualquier desafío y alcanzar tus metas con propósito y excelencia.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1SNJTouyG6mRfHYk9Kp3W8"
  }
},
  {
  day: 336,
  month: "Diciembre",
  monthId: 12,
  title: "La Planificación Divina en la Estrategia Empresarial",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este proverbio nos invita a integrar nuestra fe en cada aspecto de nuestra empresa, especialmente en la planificación. Encomendar nuestras obras a Dios no significa pasividad, sino una dependencia activa y una búsqueda de su dirección. Para el empresario cristiano, esto implica orar por sabiduría en la toma de decisiones, alinear los objetivos de negocio con principios éticos y bíblicos, y confiar en que, al hacerlo, nuestros planes serán firmes y prosperarán. Es un recordatorio de que el éxito duradero no solo se basa en la astucia humana, sino en la bendición y el propósito divino que guía cada paso estratégico.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Antes de iniciar cualquier proyecto o estrategia importante esta semana, dedica tiempo a la oración y a la reflexión sobre cómo tus planes se alinean con los principios bíblicos. Presenta tus ideas a Dios y busca su guía, luego actúa con diligencia y fe, confiando en que Él afirmará tus pensamientos y esfuerzos.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=wX02_2Y7k0k",
  spotifyUrl: "https://open.spotify.com/track/4jQ08849j2503201300000"
  },
  movie: {
  title: "Cuarto de Guerra (War Room)",
  platform: "Amazon Prime Video",
  description: "Una pareja en crisis matrimonial descubre el poder transformador de la oración estratégica en un 'cuarto de guerra' dedicado a la intercesión, impactando no solo su relación sino también sus vidas profesionales y espirituales."
  }
},
  {
  day: 337,
  month: "Diciembre",
  monthId: 12,
  title: "Diligencia y Liderazgo Correcto",
  verse: {
  text: "La mano negligente empobrece; Mas la mano de los diligentes enriquece.",
  reference: "Proverbios 10: 4"
  },
  reflection: "Proverbios 10: 4 nos recuerda la importancia fundamental de la diligencia en todos los aspectos de la vida, incluyendo el ámbito empresarial. La negligencia conduce a la escasez, mientras que la diligencia abre puertas a la prosperidad. Esta verdad bíblica se alinea perfectamente con la visión de liderazgo de Peter Drucker, quien afirmó que \"la gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.\" Como líderes cristianos en el mundo de los negocios, no solo estamos llamados a ser eficientes y productivos (hacer las cosas bien), sino también a operar con integridad, ética y propósito divino (hacer las cosas correctas). La verdadera riqueza no es solo material, sino también el legado de impacto que construimos a través de un liderazgo diligente y justo, honrando a Dios en cada decisión y acción empresarial.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una de tus prácticas empresariales actuales. ¿Estás haciendo las cosas bien (eficientemente) y también las cosas correctas (éticamente y con propósito)? Identifica un área donde puedas aplicar mayor diligencia y alinear tus acciones con principios de liderazgo cristiano para enriquecer no solo tu negocio, sino también a quienes te rodean.",
  song: {
  title: "Diligencia",
  artist: "Ander Bock",
  youtubeUrl: "https://www.youtube.com/watch?v=MEEpXPayVOk",
  spotifyUrl: "https://open.spotify.com/track/5ymwKaatrZsJIOdmkkBa68"
  }
},
  {
  day: 338,
  month: "diciembre",
  monthId: 12,
  title: "Sirviendo a Cristo en el Negocio",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Colosenses 3: 23-24 nos llama a una ética de trabajo superior, donde cada tarea, por mundana que parezca, se convierte en un acto de adoración. Para el empresario y líder cristiano, esto significa ir más allá de la mera rentabilidad o el reconocimiento humano. Implica infundir cada decisión, cada producto, cada servicio y cada interacción con la excelencia y la integridad que reflejan el carácter de Cristo. Cuando trabajamos de corazón para el Señor, nuestra motivación cambia, y con ella, la calidad de nuestro esfuerzo y el impacto de nuestro legado. Reconocemos que nuestro negocio es una plataforma para Su gloria, y que la verdadera recompensa proviene de Él, no solo de los resultados tangibles. Esta perspectiva transforma el trabajo de una obligación a una oportunidad de servicio y testimonio.",
  quote: {
  text: "El trabajo es una bendición, no una maldición. Es la forma en que Dios nos permite participar en Su obra creativa y redentora en el mundo.",
  author: "Tim Keller"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos actuales en tu negocio. ¿Cómo puedes abordarlo con una mentalidad de 'hacerlo de corazón, como para el Señor'? Identifica al menos una acción concreta que puedas tomar esta semana para elevar la calidad, la ética o el propósito de ese trabajo, reflejando tu servicio a Cristo.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=wz6s90435sI",
  spotifyUrl: "https://open.spotify.com/track/62j1z2z11m4j11k22j2j2j"
  }
},
  {
  day: 339,
  month: "diciembre",
  monthId: 12,
  title: "La Excelencia como Testimonio Empresarial",
  verse: {
  text: "Cuando hagan cualquier trabajo, háganlo de todo corazón, como si estuvieran trabajando para el Señor y no para los seres humanos, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia no es solo una meta, sino un testimonio de nuestra fe. Colosenses 3: 23-24 nos insta a realizar cada tarea con dedicación plena, como si nuestro esfuerzo fuera directamente para el Señor. Esto transforma la perspectiva del trabajo, elevándolo de una simple obligación a un acto de adoración. Para el empresario cristiano, esto significa ir más allá de las expectativas, no por reconocimiento humano, sino por honrar a Dios. Implica integridad en las transacciones, calidad en los productos o servicios, y un trato justo y digno hacia empleados y clientes. Reconocer que nuestro trabajo es para Cristo nos impulsa a buscar la mejora continua, a innovar con propósito y a liderar con un corazón de servicio, sabiendo que nuestra verdadera recompensa proviene de Él, construyendo un legado que trasciende lo material.",
  quote: {
  text: "Siempre hay una mejor manera de hacer las cosas. Encuéntrala.",
  author: "Thomas Edison"
  },
  challenge: "Evalúa un proceso clave en tu negocio o área de trabajo. Identifica al menos una oportunidad para aplicar el principio de excelencia, buscando mejorar la calidad o el servicio como si lo hicieras directamente para Dios. Implementa esa mejora esta semana.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1SNJTouyG6mRfHYk9Kp3W8"
  }
},
  {
  day: 340,
  month: "Diciembre",
  monthId: 12,
  title: "Trabajando con Excelencia para el Señor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "El versículo de Colosenses 3: 23 nos llama a una ética de trabajo superior, no solo en nuestras tareas diarias sino especialmente en el ámbito empresarial. Como empresarios y líderes cristianos, nuestra labor no es meramente una transacción comercial, sino una oportunidad para glorificar a Dios. Cada decisión, cada producto, cada servicio y cada interacción con empleados y clientes debe ser ejecutada con excelencia, como si fuera directamente para el Señor. Esto implica integridad inquebrantable, dedicación plena y una búsqueda constante de la mejora. Al operar con esta mentalidad, no solo construimos negocios exitosos, sino que también edificamos un legado de impacto que trasciende lo material, reflejando los valores del Reino en el mercado.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área clave de tu negocio (servicio al cliente, desarrollo de producto, gestión de equipo) y define tres acciones concretas para elevar su estándar de excelencia, haciéndolo como si fuera para el Señor. Implementa estas acciones esta semana.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=1d_Y317r74M",
  spotifyUrl: "https://open.spotify.com/track/4jQ05s5j3s11e1f70x5e0M"
  }
},
  {
  day: 341,
  month: "Diciembre",
  monthId: 12,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que son obedientes a la ley!",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa o equipo. Sin una dirección clara, los esfuerzos se dispersan y el progreso se estanca. Proverbios 29: 18 nos recuerda que la falta de visión lleva al extravío, una verdad tan aplicable en el ámbito espiritual como en el empresarial. Un líder cristiano debe cultivar una visión no solo para el crecimiento financiero, sino también para el impacto ético y el propósito trascendente de su organización. Esta visión debe ser comunicada con pasión y claridad, inspirando a los colaboradores a alinear sus talentos y energías hacia un objetivo común. La obediencia a principios divinos en la formulación y ejecución de esta visión asegura una base sólida y un camino bendecido, evitando el caos y fomentando la prosperidad sostenible.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o equipo. Asegúrate de que sea clara, inspiradora y que refleje los valores cristianos. Luego, comunícala de manera efectiva a todos tus colaboradores, buscando su compromiso y alineación con este propósito.",
  song: {
  title: "La Visión",
  artist: "En Espíritu y en Verdad",
  youtubeUrl: "https://www.youtube.com/watch?v=2v-1z3X6Y-c",
  spotifyUrl: "https://open.spotify.com/track/62260v12Q5t2k9x8Y5y5Xw"
  }
},
  {
  day: 342,
  month: "Diciembre",
  monthId: 12,
  title: "Excelencia en el Servicio",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia a menudo se mide por la rentabilidad y el reconocimiento. Sin embargo, para el líder cristiano, Colosenses 3: 23-24 eleva esta perspectiva. Nos llama a realizar cada tarea, cada proyecto, cada interacción con una dedicación que trasciende lo meramente humano, viéndolo como un servicio directo a Cristo. Esta mentalidad transforma el trabajo de una obligación a una oportunidad de adoración. Al operar con un propósito divino, nuestra motivación se purifica, nuestra ética laboral se fortalece y nuestra búsqueda de la excelencia se convierte en un testimonio. No buscamos la aprobación de los hombres, sino la de Dios, sabiendo que Él es la fuente de nuestra verdadera recompensa y herencia. Esta perspectiva no solo mejora la calidad de nuestro trabajo, sino que también impacta positivamente a nuestros equipos y clientes.",
  quote: {
  text: "La excelencia es hacer un trabajo común de una manera poco común.",
  author: "Booker T. Washington"
  },
  challenge: "Evalúa un área clave de tu negocio o equipo donde la calidad o el servicio podrían mejorar. Desarrolla un plan de acción específico para elevar el estándar, enfocándote en cómo este cambio reflejará un servicio más dedicado a Dios. Comparte este plan con tu equipo y busca su compromiso para implementarlo con una mentalidad de excelencia.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s711x7gQ_0o",
  spotifyUrl: "https://open.spotify.com/track/622h70X72322t929729297"
  }
},
  {
  day: 343,
  month: "diciembre",
  monthId: 12,
  title: "La Visión Clara en la Ejecución Estratégica",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "Este proverbio resalta la importancia fundamental de la visión, no solo en la vida personal sino crucialmente en el ámbito empresarial. Un líder sin una visión clara para su organización es como un capitán sin brújula; la tripulación (empleados) y la nave (empresa) carecerán de dirección y propósito, llevando al \"desenfreno\" o la desorganización. En el contexto empresarial cristiano, la visión debe estar arraigada en principios bíblicos, buscando no solo el éxito financiero sino también el impacto positivo en la sociedad y la glorificación de Dios. La \"ley\" aquí puede interpretarse como los valores y la estrategia bien definida que guían cada acción, asegurando que la empresa avance con propósito y disciplina hacia sus metas, evitando la dispersión de esfuerzos y recursos.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. Evalúa si es lo suficientemente clara y si cada miembro de tu equipo la comprende y se siente parte de ella. Si es necesario, comunica o redefine la visión para asegurar que todos estén alineados y trabajando hacia un objetivo común con pasión y propósito.",
  song: {
  title: "Visión",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=s3_z3_z3_z3",
  spotifyUrl: "https://open.spotify.com/track/s3_z3_z3_z3"
  },
  movie: {
  title: "War Room",
  platform: "Amazon Prime Video",
  description: "Una pareja lucha con su matrimonio y carrera, hasta que la esposa descubre el poder de la oración estratégica para transformar su vida y su hogar. Una película inspiradora sobre la fe y la perseverancia."
  }
},
  {
  day: 344,
  month: "diciembre",
  monthId: 12,
  title: "Excelencia en el Trabajo para el Señor",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje de Colosenses nos invita a redefinir nuestra perspectiva sobre el trabajo. En el ámbito empresarial, a menudo nos enfocamos en resultados, ganancias o el reconocimiento humano. Sin embargo, la Escritura nos llama a una motivación más elevada: trabajar con un corazón íntegro, como si cada tarea fuera directamente para Dios. Esto implica no solo hacer un buen trabajo, sino buscar la excelencia en cada detalle, en cada interacción y en cada decisión. Cuando un empresario o líder cristiano adopta esta mentalidad, su ética laboral se transforma, impactando positivamente a sus empleados, clientes y socios. La recompensa no es solo terrenal, sino una herencia eterna que proviene de servir a Cristo a través de nuestro quehacer diario. Es un llamado a la mayordomía fiel de los talentos y recursos que Dios nos ha confiado.",
  quote: {
  text: "La primera prioridad para el desarrollo de uno mismo es esforzarse por la excelencia.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde la calidad o el esfuerzo han disminuido. Desarrolla un plan concreto para elevar el estándar de excelencia en esa área, recordándote que tu trabajo es una ofrenda a Dios.",
  song: {
  title: "Tal Como Soy",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=BJMyJmvTOY4",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6GpNNQ1xc2zvLXUKuctnN8"
  }
},
  {
  day: 345,
  month: "diciembre",
  monthId: 12,
  title: "La Visión Afirmada por la Fe",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la visión es el motor que impulsa el progreso. Sin embargo, una visión, por brillante que sea, puede tambalearse ante los desafíos y la incertidumbre. Proverbios 16: 3 nos ofrece una verdad fundamental para el líder cristiano: al encomendar nuestras obras al Señor, nuestros pensamientos y, por ende, nuestra visión, serán afirmados. Esto no significa pasividad, sino una dependencia activa en la sabiduría divina. Un empresario que confía su visión a Dios no solo busca su bendición, sino también su dirección, permitiendo que los principios bíblicos moldeen sus estrategias y decisiones. Esta fe robustece la convicción, proporciona claridad en momentos de duda y asegura que los objetivos empresariales estén alineados con un propósito mayor, trascendiendo el mero éxito material para generar un impacto eterno.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una decisión estratégica clave en tu negocio o proyecto actual. Antes de ejecutarla, dedica tiempo a la oración, encomendando esa decisión a Dios y pidiendo su dirección. Luego, evalúa si tu plan se alinea con principios de integridad, servicio y propósito, y ajusta según sea necesario.",
  song: {
  title: "Alfarero",
  artist: "Barak",
  youtubeUrl: "https://www.youtube.com/watch?v=0v64606173I",
  spotifyUrl: "https://open.spotify.com/track/6225h66g5t68s4x1t00z6j"
  }
},
  {
  day: 346,
  month: "diciembre",
  monthId: 12,
  title: "La Visión Clara en la Ejecución Estratégica",
  verse: {
  text: "La inversión más importante que puedes hacer es en ti mismo. Desarrolla tus habilidades y conocimientos para liderar con sabiduría.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa, especialmente en el ámbito del liderazgo cristiano. Proverbios 29: 18 nos recuerda que sin una dirección clara, tanto individuos como organizaciones pueden perder el rumbo. En el mundo empresarial, esto se traduce en estrategias ineficaces, recursos malgastados y una falta de propósito que desmotiva al equipo. Un líder cristiano debe no solo tener una visión inspirada por Dios, sino también la capacidad de comunicarla y ejecutarla con diligencia. La \"ley\" en este contexto puede interpretarse como los principios divinos y las mejores prácticas empresariales que, al ser guardados, aseguran la prosperidad y el impacto duradero. Una visión bien definida y una ejecución disciplinada son cruciales para el éxito y la trascendencia.",
  quote: {
  text: "La inversión más importante que puedes hacer es en ti mismo. Desarrolla tus habilidades y conocimientos para liderar con sabiduría.",
  author: "Warren Buffett"
  },
  challenge: "Dedica tiempo esta semana a revisar la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que cada miembro de tu equipo la comprenda. Luego, identifica tres acciones estratégicas clave que se alineen directamente con esa visión y comienza a implementarlas con disciplina, evaluando el progreso semanalmente.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s_t2330a5wU",
  spotifyUrl: "https://open.spotify.com/track/303s3e2j7204sJ60s71l5X"
  }
},
  {
  day: 347,
  month: "Diciembre",
  monthId: 12,
  title: "La Integridad como Fundamento del Éxito Duradero",
  verse: {
  text: "El que camina en integridad anda seguro, pero el que pervierte sus caminos será descubierto.",
  reference: "Proverbios 10: 9 (NVI)"
  },
  reflection: "En el mundo empresarial, la integridad es mucho más que la ausencia de engaño; es la coherencia entre nuestros valores, palabras y acciones. Proverbios 10: 9 nos asegura que la integridad es el camino hacia la seguridad y la estabilidad. Un líder cristiano que opera con integridad construye una reputación sólida, fomenta la confianza entre sus empleados, clientes y socios, y establece un legado duradero. Las decisiones tomadas con honestidad y transparencia, aunque a veces parezcan más difíciles a corto plazo, son las que sostienen el negocio a través de las adversidades y lo posicionan para un crecimiento sostenible. La falta de integridad, por otro lado, siempre termina por salir a la luz, minando la confianza y destruyendo lo que se ha construido. Por lo tanto, la integridad no es solo una virtud moral, sino una estrategia empresarial esencial para el éxito a largo plazo.",
  quote: {
  text: "La integridad es hacer lo correcto, incluso cuando nadie está mirando.",
  author: "C.S. Lewis"
  },
  challenge: "Evalúa una decisión reciente en tu negocio o equipo. ¿Fue tomada con total integridad y transparencia? Identifica un área donde puedas fortalecer la integridad en tus operaciones o interacciones diarias y comprométete a implementarla esta semana. Comunica este compromiso a tu equipo si es apropiado.",
  song: {
  title: "Integridad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=0hY1j6m6Q-0",
  spotifyUrl: "https://open.spotify.com/track/53l5e197h221g8e27h8f9p"
  }
},
  {
  day: 348,
  month: "Diciembre",
  monthId: 12,
  title: "Encomienda tus planes, afirma tu propósito",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "En el dinámico mundo empresarial, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, Proverbios 16: 3 nos invita a ir más allá de la mera estrategia humana. Encomendar nuestras obras a Dios significa someter nuestros planes, proyectos y decisiones a Su voluntad y dirección. No se trata de pasividad, sino de una colaboración activa donde nuestra diligencia se une a la sabiduría divina. Al hacerlo, nuestros pensamientos, que a menudo pueden ser inciertos o abrumadores, encuentran firmeza y claridad. Esta confianza en Dios nos permite operar con una paz que trasciende las circunstancias, sabiendo que Él es quien afirma nuestro camino y nos guía hacia un propósito mayor en nuestros negocios.",
  quote: {
  text: "La gente no compra lo que haces; ellos compran por qué lo haces.",
  author: "Simon Sinek"
  },
  challenge: "Identifica un proyecto o decisión importante en tu negocio esta semana. Antes de avanzar, dedica tiempo a la oración, encomendando ese plan a Dios. Pide Su dirección y sabiduría, y confía en que Él afirmará tus pasos, alineando tus acciones con Su propósito divino para tu empresa.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=yYg07l47X20",
  spotifyUrl: "https://open.spotify.com/track/6U2Nf6s0e5t0y4s5X0w8hB"
  }
},
  {
  day: 349,
  month: "diciembre",
  monthId: 12,
  title: "La Visión Clara y la Ejecución Diligente",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; pero el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "En el ámbito empresarial, la visión es el faro que guía a la organización. Proverbios 29: 18 nos recuerda que sin una dirección clara, el progreso se estanca y el equipo puede perder el rumbo. Un líder cristiano en los negocios no solo debe tener una visión inspirada por Dios, sino también la diligencia para ejecutarla. La ejecución es donde la visión cobra vida. No basta con soñar; es imperativo traducir esos sueños en planes de acción concretos, asignando recursos y responsabilidades. La bienaventuranza prometida a quienes guardan la ley se extiende a aquellos que, con integridad y sabiduría, implementan su visión, asegurando que cada paso esté alineado con principios éticos y objetivos estratégicos.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Thomas Edison"
  },
  challenge: "Evalúa la visión de tu empresa o proyecto. ¿Es clara y comunicada eficazmente? Luego, identifica un área clave donde la ejecución ha sido débil y desarrolla un plan de acción concreto para mejorarla esta semana, asignando responsabilidades y plazos claros.",
  song: {
  title: "La Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=0_e0_s0_s0s",
  spotifyUrl: "https://open.spotify.com/track/0_e0_s0_s0s"
  }
},
  {
  day: 350,
  month: "Diciembre",
  monthId: 12,
  title: "Excelencia con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Es a Cristo a quien sirven.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial y de liderazgo, la excelencia a menudo se persigue por reconocimiento o ganancia personal. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con un corazón íntegro, como si cada tarea fuera directamente para el Señor. Esta mentalidad transforma el trabajo de una mera obligación a un acto de adoración. Cuando los empresarios y líderes cristianos adoptan esta visión, no solo buscan la rentabilidad, sino que también se esfuerzan por la calidad, la ética y el servicio, sabiendo que su verdadera recompensa proviene de Dios. Esta aproximación infunde propósito divino en cada decisión y acción, elevando el estándar de cómo se hacen los negocios y se ejerce el liderazgo.",
  quote: {
  text: "Calidad significa hacer lo correcto cuando nadie está mirando.",
  author: "Henry Ford"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde la calidad o la ética podrían mejorarse. Comprométete a implementar un cambio significativo esta semana, haciéndolo con la misma diligencia y excelencia como si estuvieras sirviendo directamente a Dios, sin buscar reconocimiento humano.",
  song: {
  title: "Abre los Cielos",
  artist: "Ingrid Rosario",
  youtubeUrl: "https://www.youtube.com/watch?v=1eKe37QNYxk",
  spotifyUrl: "https://open.spotify.com/track/5AHfeUqfyeyHpArRUSOHzh"
  },
  movie: {
  title: "El Fundador",
  platform: "Netflix",
  description: "La historia de Ray Kroc, un vendedor que transformó McDonald's en una de las cadenas de restaurantes más grandes del mundo. Muestra la visión, perseverancia y ética de trabajo en el mundo empresarial."
  }
},
  {
  day: 351,
  month: "Diciembre",
  monthId: 12,
  title: "Confianza y Carácter en la Dirección Empresarial",
  verse: {
  text: "Fíate de Jehová de todo tu corazón, Y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus sendas.",
  reference: "Proverbios 3: 5-6"
  },
  reflection: "En el dinámico mundo empresarial, la tentación de confiar únicamente en nuestra astucia y experiencia es constante. Sin embargo, Proverbios 3: 5-6 nos invita a un principio fundamental: depositar nuestra confianza plena en Dios. Esto no significa pasividad, sino reconocer que la verdadera sabiduría y dirección provienen de Él. Un líder cristiano entiende que su carácter es el cimiento de su éxito duradero. La integridad, la honestidad y la humildad, forjadas en la dependencia de Dios, son activos invaluables que construyen credibilidad y fomentan un ambiente de confianza. Al reconocer a Dios en cada decisión, Él no solo guía nuestros pasos, sino que también moldea nuestro carácter para liderar con propósito y visión divina, trascendiendo las limitaciones de la prudencia humana y abriendo caminos inesperados de bendición y crecimiento.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Esta semana, identifica una decisión importante en tu negocio donde te sientas tentado a confiar solo en tu intelecto. Antes de actuar, dedica tiempo a la oración y busca la dirección de Dios a través de Su Palabra. Evalúa cómo esta dependencia influye en tu perspectiva y en las acciones que tomas, y observa los resultados. Además, reflexiona sobre un área de tu carácter que necesite ser fortalecida para alinearla más con los principios bíblicos y busca intencionalmente crecer en ella.",
  song: {
  title: "Cuan Grande Es Él",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=1d1g0z0X74c",
  spotifyUrl: "https://open.spotify.com/track/4j7z2f4g0k8p0q9y5x7x7j"
  }
},
  {
  day: 352,
  month: "diciembre",
  monthId: 12,
  title: "La Visión Clara en la Gestión Empresarial",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a cualquier empresa a través de las aguas turbulentas del mercado. Proverbios 29: 18 nos advierte que sin una visión clara, hay desorden y falta de dirección. Para el empresario cristiano, esto significa más que solo establecer metas financieras; implica discernir el propósito divino para su negocio. Una visión inspirada por Dios no solo busca la rentabilidad, sino también el impacto positivo en la sociedad y la glorificación de Su nombre. Esta visión debe ser comunicada constantemente, arraigada en los valores de la empresa y servir como el motor para la innovación y la resiliencia. Un líder con visión clara inspira a su equipo, fomenta la unidad y asegura que cada esfuerzo contribuya a un objetivo mayor, evitando la dispersión de recursos y el desenfreno organizacional.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial.",
  author: "Stephen Covey"
  },
  challenge: "Dedica tiempo esta semana a revisar o definir la visión de tu empresa o proyecto. Asegúrate de que sea clara, inspiradora y que todos en tu equipo la comprendan y la compartan. Evalúa si tus acciones diarias están alineadas con esa visión.",
  song: {
  title: "Visión",
  artist: "Miel San Marcos",
  youtubeUrl: "https://www.youtube.com/watch?v=1p3o-0y9_8Y",
  spotifyUrl: "https://open.spotify.com/track/6g0x7q3o8g3l7p2q5m0j0c"
  }
},
  {
  day: 353,
  month: "Diciembre",
  monthId: 12,
  title: "La Influencia del Carácter en el Liderazgo",
  verse: {
  text: "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
  reference: "2 Timoteo 2: 15"
  },
  reflection: "El liderazgo no se trata solo de habilidades o estrategias, sino fundamentalmente del carácter. Un líder con integridad y principios sólidos inspira confianza y lealtad, elementos cruciales para cualquier empresa exitosa. Así como un obrero se esfuerza por ser aprobado, un líder cristiano en el ámbito empresarial debe cultivar un carácter que refleje los valores del Reino. Esto implica honestidad en las transacciones, ética en las decisiones y compasión en el trato con los empleados. Un carácter firme es el cimiento sobre el cual se construye un legado de impacto duradero, trascendiendo los éxitos temporales y dejando una huella positiva en la sociedad y en las vidas de quienes le rodean.",
  quote: {
  text: "Tu éxito para donde para tu carácter. Nunca puedes crecer sobre las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una decisión reciente en tu negocio o liderazgo. ¿Reflejó tu carácter los principios de integridad y ética cristiana? Identifica un área donde puedas fortalecer tu carácter y comprométete a tomar una acción concreta esta semana para mejorarla, buscando la guía divina en el proceso.",
  song: {
  title: "Cristo Yo Te Amo",
  artist: "Vino Nuevo",
  youtubeUrl: "https://www.youtube.com/watch?v=LYho-yU5nkY",
  spotifyUrl: "https://open.spotify.com/track/2i3omjTIX5Q16rKnF6fGlL"
  }
},
  {
  day: 354,
  month: "Diciembre",
  monthId: 12,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no como para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "La excelencia en el trabajo es un reflejo de nuestra devoción a Dios. En el ámbito empresarial, esto significa ir más allá de la búsqueda de ganancias o la satisfacción de los accionistas. Cada tarea, decisión y relación comercial debe ser ejecutada con integridad y un compromiso profundo, como si estuviéramos sirviendo directamente a Dios. Este enfoque combate la mediocridad y la adicción al trabajo, transformando nuestra labor en una ofrenda. Al administrar los recursos y talentos que Dios nos ha dado, nuestro negocio se convierte en un testimonio de Su carácter, impactando positivamente a empleados, clientes y la comunidad.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un área en tu negocio donde la mediocridad o la adicción al trabajo puedan estar presentes. Desarrolla un plan de acción para transformar esa área, enfocándote en realizar el trabajo \"como para el Señor\", buscando la excelencia y el equilibrio.",
  song: {
  title: "Mi Universo",
  artist: "Jesús Adrián Romero",
  youtubeUrl: "https://www.youtube.com/watch?v=3tSz1I1XogE",
  spotifyUrl: "https://open.spotify.com/track/68B7xUe42YHo2sf0ZdlG6x"
  }
},
  {
  day: 355,
  month: "diciembre",
  monthId: 12,
  title: "La Persistencia en la Visión Divina",
  verse: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial en cada esfuerzo.",
  reference: "Gálatas 6: 9"
  },
  reflection: "En el camino del emprendimiento y el liderazgo cristiano, la persistencia es una virtud cardinal. Gálatas 6: 9 nos recuerda que la recompensa llega a aquellos que no se rinden. En el ámbito empresarial, esto se traduce en mantener la fe en nuestra visión, incluso cuando los desafíos parecen insuperables. Cada obstáculo es una oportunidad para fortalecer nuestra resiliencia y refinar nuestras estrategias. La perseverancia, anclada en la fe, nos permite ver más allá de las dificultades momentáneas y confiar en que Dios tiene un propósito para nuestro esfuerzo. No se trata de una persistencia ciega, sino de una determinación guiada por principios divinos y una visión clara del impacto que deseamos generar.",
  quote: {
  text: "El liderazgo efectivo comienza con la autodisciplina y la visión clara, inspirando a otros a alcanzar su máximo potencial en cada esfuerzo.",
  author: "Stephen Covey"
  },
  challenge: "Identifica un área en tu negocio o liderazgo donde te sientas tentado a desanimarte. Desarrolla un plan de acción con tres pasos concretos para reavivar tu persistencia y seguir adelante, confiando en que tu esfuerzo dará fruto a su debido tiempo.",
  song: {
  title: "La Bendición (The Blessing)",
  artist: "Elevation Worship & Maverick City Music",
  youtubeUrl: "https://www.youtube.com/watch?v=E_x_o02jX2Q",
  spotifyUrl: "https://open.spotify.com/track/2SPxVb7b02x2a5gXyXj0YQ"
  }
},
  {
  day: 356,
  month: "diciembre",
  monthId: 12,
  title: "Trabajo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje nos llama a una ética de trabajo superior, donde cada tarea, por mundana que parezca, se convierte en un acto de adoración. Para el empresario y líder cristiano, esto significa ir más allá de la mera rentabilidad o el reconocimiento humano. Implica infundir excelencia, integridad y un espíritu de servicio en cada decisión, producto y relación comercial. Cuando trabajamos con un corazón entregado al Señor, nuestra motivación cambia, y con ella, la calidad de nuestro liderazgo y el impacto de nuestra empresa. La recompensa no es solo terrenal, sino una herencia eterna, recordándonos que nuestro verdadero empleador es Cristo.",
  quote: {
  text: "El liderazgo cristiano en los negocios no se trata de acumular riqueza, sino de servir con integridad y añadir valor a la vida de los demás, dejando un legado de impacto duradero.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa una de tus principales responsabilidades o proyectos en tu negocio esta semana. ¿Cómo puedes abordarlo con una mentalidad de 'hacerlo para el Señor', buscando la excelencia y el servicio más allá de las expectativas habituales? Identifica una acción concreta para elevar la calidad o el impacto de ese trabajo.",
  song: {
  title: "Haz lo que quieras",
  artist: "Christine D'Clario",
  youtubeUrl: "https://www.youtube.com/watch?v=71_l9y52a-0",
  spotifyUrl: "https://open.spotify.com/track/4j9X0h339vj2v8q4t0z1gP"
  }
},
  {
  day: 357,
  month: "Diciembre",
  monthId: 12,
  title: "La Visión que Inspira y Transforma",
  verse: {
  text: "Donde no hay visión, el pueblo se extravía; ¡dichosos los que son obedientes a la ley!",
  reference: "Proverbios 29: 18"
  },
  reflection: "Proverbios 29: 18 nos recuerda la importancia fundamental de la visión, tanto en la vida personal como en el ámbito empresarial. Sin una dirección clara, las organizaciones pueden perder el rumbo, sus equipos pueden desmotivarse y sus esfuerzos pueden dispersarse. Una visión inspiradora actúa como un faro, guiando las decisiones estratégicas y unificando a los colaboradores hacia un propósito común. En el liderazgo cristiano, esta visión no solo busca el éxito material, sino también un impacto trascendente, alineando los objetivos del negocio con los principios y valores del Reino. Es la fuerza que impulsa la innovación, la resiliencia ante los desafíos y la capacidad de dejar un legado duradero que va más allá de las ganancias.",
  quote: {
  text: "Un líder es aquel que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Dedica tiempo esta semana a reevaluar la visión de tu empresa o proyecto. ¿Es clara, inspiradora y comunicada eficazmente a todo tu equipo? Si no es así, trabaja en definirla o refinarla, asegurándote de que refleje no solo tus metas de negocio, sino también un propósito mayor que inspire y motive a todos los involucrados. Comparte esta visión con al menos tres miembros clave de tu equipo y solicita su retroalimentación para fortalecerla.",
  song: {
  title: "Tú Estás Aquí",
  artist: "Jesús Adrián Romero feat. Marcela Gándara",
  youtubeUrl: "https://www.youtube.com/watch?v=-ALOwx-RHm4",
  spotifyUrl: "https://open.spotify.com/track/3ypD0vvw5bU800zwgkYbE9"
  },
  movie: {
    title: "Gifted Hands (Manos Milagrosas)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=0fknHbfg6Kw",
    description:
      "La historia real del Dr. Ben Carson, quien pasó de ser un estudiante con problemas a convertirse en un neurocirujano pionero, demostrando que la fe y la excelencia transforman vidas.",
  },
},
  {
  day: 358,
  month: "Diciembre",
  monthId: 12,
  title: "Planificación con Propósito Divino",
  verse: {
  text: "Encomienda a Jehová tus obras, Y tus pensamientos serán afirmados.",
  reference: "Proverbios 16: 3"
  },
  reflection: "Este versículo de Proverbios nos anima a encomendar nuestros planes y esfuerzos a Dios, asegurándonos que nuestros pensamientos serán afirmados. En el exigente mundo del emprendimiento y los negocios, la planificación estratégica es fundamental. Sin embargo, como líderes cristianos, nuestra planificación no debe basarse únicamente en la lógica o las tendencias del mercado. Al encomendar nuestras obras al Señor, invitamos Su sabiduría y dirección en cada decisión. Esto no exime de la diligencia y el trabajo arduo, sino que añade una dimensión espiritual que alinea nuestros objetivos empresariales con un propósito mayor. La fe en que Dios afirmará nuestros pensamientos nos da la confianza para avanzar, incluso frente a la incertidumbre, sabiendo que nuestros esfuerzos están respaldados por Su voluntad.",
  quote: {
  text: "La mejor manera de predecir el futuro es crearlo.",
  author: "Peter Drucker"
  },
  challenge: "Identifica un proyecto clave o una decisión estratégica en tu negocio para la próxima semana. Antes de sumergirte en la ejecución, dedica tiempo a la oración, encomendando este proyecto a Dios y pidiendo Su guía para que tus planes se alineen con Su propósito.",
  song: {
  title: "Dios de lo Imposible",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=s1X5Yg0yJ-o",
  spotifyUrl: "https://open.spotify.com/track/6290w235s62y6X20X71z5L"
  }
},
  {
  day: 359,
  month: "Diciembre",
  monthId: 12,
  title: "Liderazgo con Visión y Propósito Divino",
  verse: {
  text: "Donde no hay visión, el pueblo perece; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el faro que guía a todo líder y empresario. Proverbios nos recuerda que sin una visión clara, cualquier empresa está destinada a la confusión y al fracaso. En el contexto del liderazgo cristiano, esta visión no es meramente estratégica, sino que está arraigada en el propósito divino. Un líder con visión entiende que su negocio es una plataforma para impactar el mundo, no solo para generar ganancias. Esta perspectiva eleva el trabajo de lo mundano a lo trascendente, inspirando a equipos y clientes a ser parte de algo más grande. La visión infunde resiliencia, permitiendo superar obstáculos y mantener el rumbo en tiempos de incertidumbre, siempre buscando honrar a Dios en cada decisión.",
  quote: {
  text: "El verdadero liderazgo cristiano en los negocios se manifiesta al servir con integridad, inspirando a otros a alcanzar su máximo potencial mientras honramos a Dios en cada decisión.",
  author: "John C. Maxwell"
  },
  challenge: "Define o reafirma la visión de tu negocio o proyecto. Asegúrate de que esta visión no solo busque el éxito material, sino que también refleje un propósito más elevado y un impacto positivo en tu comunidad y en el Reino de Dios. Comunica esta visión a tu equipo de manera inspiradora para que todos se sientan parte de un objetivo trascendente.",
  song: {
  title: "Los Negocios del Rey",
  artist: "Jesus Mencia",
  youtubeUrl: "https://www.youtube.com/watch?v=HEZs12MDUMM",
  spotifyUrl: "https://open.spotify.com/intl-es/track/1bSEOEmZAraY33FySE6plo"
  }
},
  {
  day: 360,
  month: "Diciembre",
  monthId: 12,
  title: "Diligencia y Visión Estratégica en los Negocios",
  verse: {
  text: "Los planes del diligente ciertamente tienden a la abundancia, pero todo el que se apresura alocadamente, de cierto llega a la pobreza.",
  reference: "Proverbios 21: 5"
  },
  reflection: "Este proverbio resalta la importancia de la planificación cuidadosa y la diligencia en el ámbito empresarial. En el liderazgo cristiano, la visión no es solo una meta, sino un camino trazado con sabiduría y paciencia. Un empresario o líder que actúa con precipitación, sin una estrategia bien definida y sin la debida diligencia en la ejecución, corre el riesgo de ver sus esfuerzos desvanecerse. La abundancia no es fruto de la suerte, sino de un trabajo constante, meditado y alineado con principios divinos. La gestión eficaz implica no solo tener grandes ideas, sino también la disciplina para llevarlas a cabo paso a paso, confiando en la guía de Dios para cada decisión y proceso. La verdadera prosperidad se construye sobre cimientos sólidos de esfuerzo y previsión.",
  quote: {
  text: "La gestión es hacer las cosas bien; el liderazgo es hacer las cosas correctas.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa tus planes de negocio actuales. ¿Estás siendo diligente en cada etapa de la planificación y ejecución? Identifica un área donde la precipitación podría estar afectando tus resultados y desarrolla un plan de acción para abordarla con mayor paciencia y estrategia, buscando la dirección divina en cada paso.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 361,
  month: "Diciembre",
  monthId: 12,
  title: "La Sinergia del Propósito Compartido",
  verse: {
  text: "Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, aunque son muchos, son un solo cuerpo, así también Cristo.",
  reference: "1 Corintios 12: 12"
  },
  reflection: "En el ámbito empresarial, la diversidad de talentos y roles es una fortaleza inmensurable, similar a cómo los diferentes miembros de un cuerpo trabajan en armonía. Cada individuo en un equipo aporta habilidades únicas, perspectivas distintas y experiencias valiosas. Un líder cristiano comprende que su rol no es solo dirigir, sino también fomentar un ambiente donde cada miembro se sienta valorado y su contribución sea esencial para el éxito colectivo. La verdadera sinergia emerge cuando se reconoce que el propósito compartido es mayor que la suma de los esfuerzos individuales, impulsando la innovación y la resiliencia en el camino hacia la visión de la empresa. Es en esta unidad donde se manifiesta la fortaleza y la capacidad de superar desafíos, reflejando principios divinos de colaboración y apoyo mutuo.",
  quote: {
  text: "La verdadera medida del éxito de un líder, no es lograr que la gente trabaje duro. Consiste en hacer que la gente trabaje duro en conjunto.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio que requiera la colaboración de múltiples miembros del equipo. Diseña una estrategia para fomentar una mayor sinergia, asignando roles claros, promoviendo la comunicación abierta y celebrando los logros colectivos para fortalecer el sentido de propósito compartido.",
  song: {
  title: "Océanos (Donde Mis Pies Pueden Fallar)",
  artist: "Hillsong en Español",
  youtubeUrl: "https://www.youtube.com/watch?v=2BJ0OA0nXPY",
  spotifyUrl: "https://open.spotify.com/intl-es/track/6nK1x5xWT3x1N1gzhSB7gw"
  }
},
  {
  day: 362,
  month: "Diciembre",
  monthId: 12,
  title: "Liderazgo con Propósito y Excelencia",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no como para nadie en este mundo",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la distinción entre 'hacer las cosas correctamente' y 'hacer lo correcto' es fundamental. La gestión se enfoca en la eficiencia y la ejecución de tareas, mientras que el liderazgo, especialmente el cristiano, se centra en la visión, los valores y el propósito. Colosenses 3: 23 nos insta a realizar cada labor con un corazón íntegro, como si fuera directamente para Dios. Esto transforma la perspectiva del trabajo, elevándolo de una mera transacción a un acto de adoración. Un líder cristiano no solo busca la rentabilidad, sino que también se esfuerza por la justicia, la ética y el impacto positivo en su comunidad y empleados, entendiendo que cada decisión y acción debe reflejar los principios divinos. Al alinear nuestras acciones empresariales con un propósito superior, no solo alcanzamos el éxito terrenal, sino que también construimos un legado de impacto eterno.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Identifica una decisión clave que debas tomar en tu negocio esta semana. Antes de actuar, reflexiona si estás priorizando 'hacer las cosas correctamente' (eficiencia) o 'hacer lo correcto' (propósito y valores). Asegúrate de que tu decisión refleje los principios de integridad y servicio, como si estuvieras rindiendo cuentas directamente a Dios.",
  song: {
  title: "Dios Incomparable",
  artist: "Marco Barrientos",
  youtubeUrl: "https://www.youtube.com/watch?v=y3_j7e0y30Q",
  spotifyUrl: "https://open.spotify.com/track/4j9Xy5w3y7q3j8X5k8X5k8"
  }
},
  {
  day: 363,
  month: "Diciembre",
  monthId: 12,
  title: "La Visión que Impulsa el Legado",
  verse: {
  text: "Donde no hay visión, el pueblo se desenfrena; mas el que guarda la ley es bienaventurado.",
  reference: "Proverbios 29: 18"
  },
  reflection: "La visión es el motor que impulsa cualquier empresa o proyecto. En el ámbito empresarial cristiano, una visión clara, arraigada en principios bíblicos, no solo guía las decisiones estratégicas, sino que también inspira y unifica al equipo. Proverbios 29: 18 nos recuerda que sin una dirección clara, el esfuerzo se dispersa y los resultados son limitados. Un líder con visión define el propósito, establece metas ambiciosas y comunica el camino a seguir, transformando el potencial en impacto duradero. Esta visión debe ser lo suficientemente grande como para requerir la intervención divina y lo suficientemente clara como para que todos la entiendan y la hagan suya.",
  quote: {
  text: "La visión sin ejecución es solo una alucinación.",
  author: "Henry Ford"
  },
  challenge: "Dedica tiempo a revisar y clarificar la visión de tu empresa o proyecto. ¿Es lo suficientemente inspiradora y clara para tu equipo? Comunícala de nuevo con pasión y busca formas innovadoras de mantenerla viva en el día a día de tu organización.",
  song: {
  title: "Un Siervo Para Tu Gloria",
  artist: "Gracia Soberana Música",
  youtubeUrl: "https://www.youtube.com/watch?v=_MsvCwPC2TE",
  spotifyUrl: "https://open.spotify.com/track/0DkH6VpYzmjxivyLBLL7Jf"
  }
},
  {
  day: 364,
  month: "Diciembre",
  monthId: 12,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís.",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "Este pasaje bíblico nos llama a una excelencia radical en todo lo que hacemos, especialmente en el ámbito empresarial. Para el líder cristiano, cada tarea, cada decisión y cada interacción no es meramente una transacción comercial, sino un acto de servicio a Dios. Al operar con esta mentalidad, la motivación trasciende el beneficio personal o el reconocimiento humano, enfocándose en honrar a Aquel que nos ha dado los talentos y las oportunidades. La recompensa, entonces, no es solo terrenal, sino una herencia eterna. Esto eleva el estándar de nuestro trabajo, inspirándonos a buscar la integridad, la innovación y la generosidad en cada aspecto de nuestro negocio, sabiendo que nuestro verdadero empleador es Cristo.",
  quote: {
  text: "La gestión es hacer las cosas correctamente; el liderazgo es hacer lo correcto.",
  author: "Peter Drucker"
  },
  challenge: "Evalúa una decisión clave que debas tomar en tu negocio esta semana. Antes de actuar, tómate un tiempo para orar y reflexionar: ¿Cómo se alinea esta decisión con los principios de Dios? ¿Estoy buscando hacer lo correcto, no solo lo que es eficiente o rentable? Comprométete a tomar la decisión que honre a Dios, independientemente de las presiones externas, y observa cómo Su favor se manifiesta en tu camino.",
  song: {
  title: "Estoy convencido",
  artist: "Averly Morillo",
  youtubeUrl: "https://www.youtube.com/watch?v=6RZwH5xjn7w",
  spotifyUrl: "https://open.spotify.com/track/3tibAhUL1rTJjnqipgRwgl"
  },
  movie: {
    title: "War Room (Cuarto de Guerra)",
    platform: "Netflix",
    youtubeUrl: "https://www.youtube.com/watch?v=mIl-XY9t_Lw",
    description:
      "Una mujer aprende el poder de la oración para transformar su matrimonio y su vida, demostrando que el liderazgo espiritual es el fundamento de todo éxito verdadero.",
  },
},
  {
  day: 365,
  month: "Diciembre",
  monthId: 12,
  title: "La Excelencia en el Trabajo como Legado",
  verse: {
  text: "Todo lo que hagan, háganlo de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor.",
  reference: "Colosenses 3: 23-24 (NVI)"
  },
  reflection: "La excelencia en el trabajo no es solo una estrategia empresarial, sino un principio bíblico fundamental. Colosenses 3: 23-24 nos insta a realizar cada tarea con dedicación, como si fuera directamente para Dios. Para el empresario y líder cristiano, esto significa que cada decisión, cada producto y cada interacción debe reflejar un compromiso con la calidad y la integridad que honre a Cristo. Este enfoque transforma el lugar de trabajo en un espacio de adoración y servicio, donde la ética y la pasión se unen para crear un impacto duradero. Al operar con esta mentalidad, no solo construimos negocios exitosos, sino que también forjamos un legado de impacto que trasciende lo material, dejando una huella de fe y excelencia para las generaciones futuras.",
  quote: {
  text: "Un líder es alguien que conoce el camino, anda el camino y muestra el camino.",
  author: "John C. Maxwell"
  },
  challenge: "Evalúa un área clave de tu negocio o liderazgo donde la excelencia ha sido comprometida por la prisa o la complacencia. Diseña un plan de acción concreto para elevar el estándar de calidad y dedicación en esa área, implementándolo en la primera semana del nuevo año. Comprométete a hacer todo como para el Señor.",
  song: {
  title: "Tu Fidelidad",
  artist: "Marcos Witt",
  youtubeUrl: "https://www.youtube.com/watch?v=s1t4z29h_eE",
  spotifyUrl: "https://open.spotify.com/track/4j9h6tX1e5x2t8o7s5f3pY"
  }
},

  {
  day: 99,
  month: "Enero",
  monthId: 1,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Colosenses 3: 23-24",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia y la dedicación a menudo se miden por los resultados y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con un propósito divino. Imagina un líder que no solo busca el éxito financiero, sino que ve cada tarea, cada decisión y cada interacción como una oportunidad para honrar a Dios. Este enfoque transforma la cultura organizacional, fomentando la integridad, la ética y un servicio genuino. Cuando los empleados perciben que su trabajo contribuye a un propósito mayor, su motivación y compromiso se elevan. Un líder cristiano en los negocios entiende que su verdadera recompensa no proviene de los elogios temporales, sino de la aprobación de Aquel a quien sirve. Esto no significa ignorar las métricas de negocio, sino integrarlas en un marco de valores trascendentes, donde la diligencia y la calidad son expresiones de fe. Así, el liderazgo empresarial se convierte en un legado de impacto que va más allá de las ganancias, construyendo algo duradero y significativo.",
  quote: {
  text: "La medida de un líder no es el número de personas que le sirven, sino el número de personas a las que sirve.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio esta semana y aborda cada aspecto con la mentalidad de que lo estás haciendo directamente para Dios, buscando la excelencia y el servicio por encima de todo.",
  song: {
  title: "10,000 Reasons (Bless the Lord)",
  artist: "Matt Redman",
  youtubeUrl: "https://www.youtube.com/watch?v=XtwIT8JjddM",
  spotifyUrl: "https://open.spotify.com/track/16e4Q3plJrKkncoLKR1CQ1"
  }
},
  {
  day: 118,
  month: "Enero",
  monthId: 1,
  title: "Carácter y Liderazgo en los Negocios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la integridad y la excelencia en el trabajo no solo benefician a la empresa y a sus clientes, sino que también reflejan un compromiso más profundo. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si estuviéramos sirviendo directamente a Dios. Este principio transforma la ética laboral, elevando la calidad del servicio y la toma de decisiones. Un líder que opera bajo esta convicción inspira confianza, fomenta un ambiente de responsabilidad y promueve una cultura organizacional donde la honestidad y el esfuerzo son valores centrales. Reconocer que nuestro trabajo tiene un propósito trascendente nos motiva a superar los desafíos con una perspectiva renovada, buscando siempre la excelencia y el impacto positivo en todos los aspectos de nuestro negocio, sabiendo que nuestro verdadero empleador es el Creador.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una área en tu negocio donde puedas elevar el estándar de excelencia y honestidad, implementando una acción concreta esta semana que refleje un compromiso de trabajar como para el Señor.",
  song: {
  title: "Nunca Me has Dejado Solo",
  artist: "Samuel Hernández",
  youtubeUrl: "https://www.youtube.com/watch?v=MxQb6sKcG5U",
  spotifyUrl: "https://open.spotify.com/track/7qi1CrY5wuIpF8WpOOKZPC"
  }
},

  {
  day: 99,
  month: "Enero",
  monthId: 1,
  title: "Liderazgo con Propósito Divino",
  verse: {
  text: "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Colosenses 3: 23-24",
  reference: "Colosenses 3: 23-24"
  },
  reflection: "En el ámbito empresarial, la excelencia y la dedicación a menudo se miden por los resultados y el reconocimiento humano. Sin embargo, Colosenses 3: 23-24 nos invita a una perspectiva más elevada: trabajar con un propósito divino. Imagina un líder que no solo busca el éxito financiero, sino que ve cada tarea, cada decisión y cada interacción como una oportunidad para honrar a Dios. Este enfoque transforma la cultura organizacional, fomentando la integridad, la ética y un servicio genuino. Cuando los empleados perciben que su trabajo contribuye a un propósito mayor, su motivación y compromiso se elevan. Un líder cristiano en los negocios entiende que su verdadera recompensa no proviene de los elogios temporales, sino de la aprobación de Aquel a quien sirve. Esto no significa ignorar las métricas de negocio, sino integrarlas en un marco de valores trascendentes, donde la diligencia y la calidad son expresiones de fe. Así, el liderazgo empresarial se convierte en un legado de impacto que va más allá de las ganancias, construyendo algo duradero y significativo.",
  quote: {
  text: "La medida de un líder no es el número de personas que le sirven, sino el número de personas a las que sirve.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una tarea o proyecto clave en tu negocio esta semana y aborda cada aspecto con la mentalidad de que lo estás haciendo directamente para Dios, buscando la excelencia y el servicio por encima de todo.",
  song: {
  title: "10,000 Reasons (Bless the Lord)",
  artist: "Matt Redman",
  youtubeUrl: "https://www.youtube.com/watch?v=XtwIT8JjddM",
  spotifyUrl: "https://open.spotify.com/track/16e4Q3plJrKkncoLKR1CQ1"
  }
},
  {
  day: 118,
  month: "Enero",
  monthId: 1,
  title: "Carácter y Liderazgo en los Negocios",
  verse: {
  text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres;",
  reference: "Colosenses 3: 23"
  },
  reflection: "En el ámbito empresarial, la integridad y la excelencia en el trabajo no solo benefician a la empresa y a sus clientes, sino que también reflejan un compromiso más profundo. Colosenses 3: 23 nos insta a realizar cada tarea con dedicación plena, como si estuviéramos sirviendo directamente a Dios. Este principio transforma la ética laboral, elevando la calidad del servicio y la toma de decisiones. Un líder que opera bajo esta convicción inspira confianza, fomenta un ambiente de responsabilidad y promueve una cultura organizacional donde la honestidad y el esfuerzo son valores centrales. Reconocer que nuestro trabajo tiene un propósito trascendente nos motiva a superar los desafíos con una perspectiva renovada, buscando siempre la excelencia y el impacto positivo en todos los aspectos de nuestro negocio, sabiendo que nuestro verdadero empleador es el Creador.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Identifica una área en tu negocio donde puedas elevar el estándar de excelencia y honestidad, implementando una acción concreta esta semana que refleje un compromiso de trabajar como para el Señor.",
  song: {
  title: "Nunca Me has Dejado Solo",
  artist: "Samuel Hernández",
  youtubeUrl: "https://www.youtube.com/watch?v=MxQb6sKcG5U",
  spotifyUrl: "https://open.spotify.com/track/7qi1CrY5wuIpF8WpOOKZPC"
  }
},

  {
  day: 32,
  month: "Febrero",
  monthId: 2,
  title: "Liderazgo de Servicio y Carácter",
  verse: {
  text: "Entonces Jesús, llamándolos, dijo: Sabéis que los gobernantes de las naciones se enseñorean de ellas, y los que son grandes ejercen sobre ellas potestad. Mas entre vosotros no será así, sino que el que quiera hacerse grande entre vosotros será vuestro servidor, y el que quiera ser el primero entre vosotros será vuestro siervo; como el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
  reference: "Mateo 20: 25-28"
  },
  reflection: "En el ámbito del liderazgo empresarial cristiano, la verdadera grandeza no se mide por el poder o la posición, sino por la capacidad de servir. Mateo 20: 25-28 nos recuerda que el modelo de liderazgo de Jesús es radicalmente diferente al del mundo: es un liderazgo de servicio humilde. Un líder cristiano en los negocios entiende que su influencia y éxito están intrínsecamente ligados a su carácter y a cómo impacta positivamente a quienes le rodean. La integridad, la humildad y la disposición a servir son los pilares que construyen un legado duradero y significativo. Desarrollar un carácter sólido es fundamental para superar las limitaciones y guiar con sabiduría, reflejando los valores del Reino en cada decisión y acción empresarial. Este enfoque no solo transforma la empresa, sino también las vidas de los colaboradores y la comunidad.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Reflexiona sobre una situación en tu liderazgo empresarial donde puedas aplicar el principio del servicio humilde. ¿Cómo puedes priorizar las necesidades de tu equipo o clientes por encima de tus propios intereses para generar un impacto más profundo y duradero?",
  song: {
  title: "Doy Gracias Hoy",
  artist: "Grupo Impacto Oficial",
  youtubeUrl: "https://www.youtube.com/watch?v=q2F_QsZ2LmY",
  spotifyUrl: "https://open.spotify.com/track/4iU3lEgOmuGZP18oLFY1Ah"
  }
},

  {
  day: 32,
  month: "Febrero",
  monthId: 2,
  title: "Liderazgo de Servicio y Carácter",
  verse: {
  text: "Entonces Jesús, llamándolos, dijo: Sabéis que los gobernantes de las naciones se enseñorean de ellas, y los que son grandes ejercen sobre ellas potestad. Mas entre vosotros no será así, sino que el que quiera hacerse grande entre vosotros será vuestro servidor, y el que quiera ser el primero entre vosotros será vuestro siervo; como el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
  reference: "Mateo 20: 25-28"
  },
  reflection: "En el ámbito del liderazgo empresarial cristiano, la verdadera grandeza no se mide por el poder o la posición, sino por la capacidad de servir. Mateo 20: 25-28 nos recuerda que el modelo de liderazgo de Jesús es radicalmente diferente al del mundo: es un liderazgo de servicio humilde. Un líder cristiano en los negocios entiende que su influencia y éxito están intrínsecamente ligados a su carácter y a cómo impacta positivamente a quienes le rodean. La integridad, la humildad y la disposición a servir son los pilares que construyen un legado duradero y significativo. Desarrollar un carácter sólido es fundamental para superar las limitaciones y guiar con sabiduría, reflejando los valores del Reino en cada decisión y acción empresarial. Este enfoque no solo transforma la empresa, sino también las vidas de los colaboradores y la comunidad.",
  quote: {
  text: "Tu éxito está limitado por tu carácter. Nunca puedes crecer por encima de las limitaciones de tu carácter.",
  author: "John C. Maxwell"
  },
  challenge: "Reflexiona sobre una situación en tu liderazgo empresarial donde puedas aplicar el principio del servicio humilde. ¿Cómo puedes priorizar las necesidades de tu equipo o clientes por encima de tus propios intereses para generar un impacto más profundo y duradero?",
  song: {
  title: "Doy Gracias Hoy",
  artist: "Grupo Impacto Oficial",
  youtubeUrl: "https://www.youtube.com/watch?v=q2F_QsZ2LmY",
  spotifyUrl: "https://open.spotify.com/track/4iU3lEgOmuGZP18oLFY1Ah"
  }
},
];