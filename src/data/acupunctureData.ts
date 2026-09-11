import { AcupunctureTopic, SpecialistGuideData } from '../types';

export const MANDATORY_DISCLAIMER =
  'Esta aplicación es solo informativa y no reemplaza la consulta con un profesional de la salud. Consulta siempre a tu médico antes de iniciar cualquier tratamiento.';

export const TOPICS_DATA: AcupunctureTopic[] = [
  {
    id: 'dolor-cuello-espalda',
    chapterNumber: 2,
    title: 'Dolor de cuello, hombros y espalda',
    shortDescription: 'Alivia la tensión muscular por posturas prolongadas, estrés y fatiga.',
    iconName: 'Activity',
    summary:
      'La acupuntura alivia contracturas y rigidez en el cuello, hombros y espalda baja restableciendo la circulación sanguínea local y desbloqueando los canales meridianos.',
    recommendedSessions: 'De 6 a 12 sesiones según el nivel de tensión acumulada.',
    keyHighlights: [
      'Punto "Fuchi" (Fengchi) en la base del cráneo para liberar el cuello.',
      'Estimulación de la zona del trapecio y entre omóplatos para hombros.',
      'Tratamiento lumbar y del nervio ciático sin intervenir directamente en zonas inflamadas.',
    ],
    sections: [
      {
        subtitle: 'El origen del dolor en la vida cotidiana',
        paragraphs: [
          'La mayoría de las molestias en el cuello y los hombros son provocadas por la tensión y la rigidez muscular constante.',
          'Estas condiciones afectan sobre todo a personas que trabajan muchas horas sentadas frente a un escritorio o una computadora, combinando una postura fija con la fatiga ocular, el cansancio acumulado y el estrés diario.',
        ],
      },
      {
        subtitle: 'Cómo actúa la acupuntura en el cuello y los hombros',
        paragraphs: [
          'Para evaluar tu condición de manera integral, el especialista suele comenzar tomando el pulso para determinar el equilibrio y porcentaje funcional de los doce meridianos principales.',
          'Para el cuello, el terapeuta localiza puntos estratégicos cercanos al foco del malestar. Uno de los puntos clave es el punto "Fuchi" (ubicado en la parte alta de la nuca, justo debajo de la línea del cabello), el cual influye directamente sobre la musculatura cervical.',
          'En los hombros, el tratamiento se concentra en el músculo grande entre el cuello y la articulación del hombro, así como en las fibras entre los omóplatos. Las finas agujas estimulan el área para desvanecer la rigidez, reactivar la circulación tisular y provocar una respuesta profunda de relajación.',
        ],
      },
      {
        subtitle: 'Tratamiento del dolor lumbar y nervio ciático',
        paragraphs: [
          'En el caso de los dolores de espalda baja, el acupunturista aborda la tensión en la columna lumbar y el nervio ciático.',
          'Es importante destacar que las agujas no siempre se colocan en el punto exacto donde sientes el dolor. Con frecuencia se distribuyen en puntos periféricos o alrededor de la zona afectada para normalizar el flujo de sangre y liberar la contracción sin agredir los tejidos sensibilizados.',
        ],
      },
    ],
  },
  {
    id: 'ansiedad-animo',
    chapterNumber: 3,
    title: 'Ansiedad y estado de ánimo',
    shortDescription: 'Regula tus emociones, disipa el estrés y equilibra tu energía vital.',
    iconName: 'Brain',
    summary:
      'Mediante un enfoque holístico, la acupuntura armoniza cuerpo y mente, estimulando puntos en la espalda, extremidades y orejas para reducir la angustia y el desánimo.',
    recommendedSessions: 'Sesiones semanales de 45 a 60 minutos durante varias semanas.',
    keyHighlights: [
      'Puntos en pulmón (tristeza), corazón (falta de alegría), hígado (frustración) y riñón (miedo).',
      'Puntos en extremidades y cabeza para asentar el espíritu (Shen).',
      'Puntos auriculares para regular el equilibrio cerebral y generar bienestar.',
    ],
    sections: [
      {
        subtitle: 'El impacto emocional en el cuerpo',
        paragraphs: [
          'Hacer frente a la ansiedad y al desánimo se ha convertido en una necesidad habitual para muchas personas hoy en día, ya sea que lo experimentes tú directamente o alguien cercano a tu entorno.',
          'La acupuntura ofrece una alternativa holística respetuosa que no se limita a callar los síntomas, sino que aborda la conexión inseparable entre el cuerpo físico, la mente y el plano emocional.',
        ],
      },
      {
        subtitle: 'La estructura de una sesión terapéutica',
        paragraphs: [
          'Una sesión típica dura entre 45 minutos y una hora. Comienza con una conversación sobre tu estado de ánimo actual, seguida de una lectura diagnóstica de la lengua y el pulso.',
          'Durante los primeros minutos se colocan agujas en puntos precisos de la espalda vinculados a órganos específicos: la zona del pulmón para mitigar la tristeza y el duelo; el área del corazón para tratar la pérdida de entusiasmo y alegría; puntos del hígado para la irritabilidad y el decaimiento; y puntos del riñón para disipar el miedo y la sensación de alarma.',
        ],
      },
      {
        subtitle: 'Asentar el espíritu y recuperar la calma',
        paragraphs: [
          'Posteriormente, te recuestas boca arriba para trabajar puntos en los antebrazos, piernas, abdomen y cabeza, orientados a serenar la mente y restablecer la vitalidad.',
          'En ocasiones se aplican agujas en áreas de la oreja para promover la homeostasis cerebral. Quienes concluyen sus sesiones con frecuencia describen sentirse más ligeros, con el ánimo renovado y una sensación profunda de paz.',
        ],
      },
    ],
  },
  {
    id: 'problemas-dormir',
    chapterNumber: 4,
    title: 'Problemas para dormir',
    shortDescription: 'Supera el insomnio restableciendo los ciclos naturales de descanso.',
    iconName: 'Moon',
    summary:
      'La acupuntura equilibra las hormonas del estrés, relaja el sistema nervioso y desbloquea las vías respiratorias para facilitar un sueño profundo y reparador.',
    recommendedSessions: 'De 4 a 8 sesiones regulares con ajustes en la rutina nocturna.',
    keyHighlights: [
      'Disminución natural del cortisol y modulación de hormonas de tensión.',
      'Mejora de la capacidad respiratoria y despeje de vías aéreas.',
      'Beneficios complementarios en la digestión que favorecen el descanso nocturno.',
    ],
    sections: [
      {
        subtitle: 'La dificultad de desconectar al final del día',
        paragraphs: [
          'Con el ritmo acelerado y las constantes exigencias modernas, a menudo resulta muy difícil relajarse lo suficiente para conseguir un descanso nocturno verdaderamente reparador.',
          'Cuando al fin el cuerpo logra calmarse, ya es momento de empezar una nueva jornada. Recurrir a medicamentos puede generar dependencia o efectos secundarios no deseados a largo plazo, por lo que la acupuntura representa una valiosa alternativa natural.',
        ],
      },
      {
        subtitle: 'Armonización de los 14 canales energéticos',
        paragraphs: [
          'La energía vital se desplaza a través de 14 canales principales llamados meridianos. Cuando estos flujos se ven alterados por patrones de sueño irregulares, se crea un ciclo de tensión y falta de descanso en el organismo.',
          'Al insertar finas agujas en puntos seleccionados, el terapeuta induce un estado de relajación física y mental que disminuye los niveles de estrés causados por el insomnio. Esta estimulación regula las hormonas asociadas a la tensión y devuelve el equilibrio al sistema nervioso autónomo.',
        ],
      },
      {
        subtitle: 'Beneficios respiratorios y digestivos asociados',
        paragraphs: [
          'La acupuntura también aborda factores subyacentes como la congestión de vías respiratorias o la mala coordinación de los músculos de la respiración durante la noche.',
          'Al despejar estos canales y fomentar una mayor oxigenación, se facilita una respiración más profunda. Asimismo, promueve una mejor función digestiva, permitiendo que tu cuerpo descanse sin sobrecargas durante la noche.',
        ],
      },
    ],
  },
  {
    id: 'artritis',
    chapterNumber: 5,
    title: 'Artritis',
    shortDescription: 'Disminuye el dolor articular, la rigidez y la inflamación de forma natural.',
    iconName: 'ShieldAlert',
    summary:
      'A través de puntos distales cerca de las articulaciones, la técnica calma el dolor articular, alivia la rigidez y apoya la movilidad sin agredir zonas sensibles.',
    recommendedSessions: 'Ciclos de 8 a 15 sesiones según la intensidad del cuadro.',
    keyHighlights: [
      'Uso de puntos distales para no punzar directamente articulaciones hipersensibles.',
      'Aplicación de 2 a 20 agujas finas durante aproximadamente 20 minutos.',
      'Posible sensación transitoria de pesadez o ligero empeoramiento inicial que luego cede.',
    ],
    sections: [
      {
        subtitle: 'Un abordaje natural para el dolor articular',
        paragraphs: [
          'La artritis puede tratarse mediante diversos métodos; algunos optan por fármacos convencionales, mientras que otros prefieren una perspectiva holística que apoye al cuerpo sin saturarlo de sustancias químicas.',
          'La acupuntura cuenta con un largo historial aliviando el dolor, la rigidez e incluso la pérdida progresiva de movilidad causada por esta afección.',
        ],
      },
      {
        subtitle: 'El uso de puntos distales',
        paragraphs: [
          'Dado que las articulaciones afectadas suelen estar inflamadas y muy sensibles al tacto, el especialista suele colocar las agujas en puntos cercanos pero no exactamente sobre el foco más adolorido. A estos se les conoce como puntos distales.',
          'En cada sesión se emplean entre 2 y 20 agujas muy delgadas, las cuales permanecen colocadas durante unos 20 minutos para desbloquear la circulación y propiciar la desinflamación.',
        ],
      },
      {
        subtitle: 'Qué esperar durante y después del tratamiento',
        paragraphs: [
          'Al retirar las agujas, algunas personas perciben una ligera sensación de tirantez; esto suele asociarse a la liberación de las tensiones y bloqueos retenidos en el tejido.',
          'Es importante que sepas que, en ocasiones, tras la primera o segunda sesión se puede experimentar un leve mareo pasajero o un aumento transitorio de la sensibilidad mientras el cuerpo activa sus propios mecanismos de autorregulación. Tras este período inicial de adaptación, los resultados favorables comienzan a manifestarse.',
        ],
      },
    ],
  },
  {
    id: 'dejar-habito-adiccion',
    chapterNumber: 6,
    title: 'Dejar un hábito o adicción',
    shortDescription: 'Controla la ansiedad por nicotina, comida o sustancias mediante auriculoterapia.',
    iconName: 'Flame',
    summary:
      'Estimula la producción de endorfinas naturales para mitigar el síndrome de abstinencia, calmar la mente y fortalecer los órganos más exigidos por la dependencia.',
    recommendedSessions: 'De 2 a 6 sesiones para nicotina; 3 a 4 meses de acompañamiento para hábitos complejos.',
    keyHighlights: [
      'Elevación de endorfinas: analgésicos y ansiolíticos naturales del cuerpo.',
      'Auriculoterapia: 3 a 5 puntos en el pabellón de la oreja durante 45 minutos.',
      'Fortalecimiento de pulmones, hígado y riñones.',
    ],
    sections: [
      {
        subtitle: 'El desafío de romper dependencias',
        paragraphs: [
          'Superar cualquier hábito nocivo o adicción es un reto exigente, en particular cuando involucra sustancias controladas, consumo excesivo de alimentos o tabaquismo prolongado.',
          'La acupuntura ha ganado un amplio reconocimiento como herramienta de apoyo, ayudando tanto en dependencias severas como en conductas compulsivas cotidianas.',
        ],
      },
      {
        subtitle: 'Mecanismo biológico: las endorfinas',
        paragraphs: [
          'El tratamiento estimula el sistema nervioso para elevar los niveles de endorfinas, los analgésicos y reguladores de bienestar naturales de tu propio organismo. Al aumentar estas sustancias, el cuerpo enfrenta con mayor entereza la ansiedad por consumir.',
          'Una de las técnicas más utilizadas es la auriculoterapia (acupuntura en la oreja). Se insertan entre 3 y 5 agujas en puntos específicos del cartílago auricular durante unos 45 minutos, lo que induce un estado mental sereno y controlado.',
        ],
      },
      {
        subtitle: 'Frecuencia y desintoxicación de órganos',
        paragraphs: [
          'Varios de los puntos seleccionados tienen como objetivo robustecer y limpiar los órganos más comprometidos: el hígado, los riñones y los pulmones.',
          'En el caso de la nicotina, suele considerarse una dependencia que responde con rapidez: a partir de la segunda o tercera sesión muchas personas sienten una disminución marcada en sus deseos de fumar, alcanzando la cesación hacia la quinta o sexta sesión, además de notar mejor sueño y mayor tranquilidad.',
        ],
      },
    ],
  },
  {
    id: 'lesiones-musculares',
    chapterNumber: 7,
    title: 'Lesiones musculares',
    shortDescription: 'Acelera la recuperación de contracturas, tendinitis, esguinces y sobrecargas.',
    iconName: 'Zap',
    summary:
      'A través de los canales musculares y estímulos suaves, reactiva el flujo de sangre y Qi para regenerar tendones, articulaciones y tejidos dañados por el deporte o accidentes.',
    recommendedSessions: 'Entre 3 y 8 sesiones según la gravedad de la lesión.',
    keyHighlights: [
      'Trabaja sobre los 12 canales musculares en extremidades y articulaciones.',
      'Puede emplear electroacupuntura con impulsos suaves de 20 minutos.',
      'Alivio perceptible a menudo desde la primera intervención.',
    ],
    sections: [
      {
        subtitle: 'Lesiones deportivas y de la vida diaria',
        paragraphs: [
          'Las lesiones musculares son muy frecuentes hoy en día. Aunque muchas ocurren practicando deportes (fútbol, tenis, golf, atletismo), también suceden por tropiezos, malas posturas o movimientos bruscos cotidianos (latigazo cervical, tortícolis, síndrome del túnel carpiano).',
          'Optar únicamente por analgésicos orales suele mitigar el dolor de forma temporal, pero no siempre resuelve la contractura profunda ni estimula la nutrición del tejido lastimado.',
        ],
      },
      {
        subtitle: 'El trabajo sobre los canales musculares',
        paragraphs: [
          'A diferencia de los tratamientos enfocados en órganos internos, en las lesiones musculares se priorizan los 12 canales específicos del sistema locomotor. Los puntos suelen ubicarse en tobillos, rodillas, codos y muñecas.',
          'Las agujas pueden insertarse de forma perpendicular u horizontal según la zona. En muchos casos se aplica electroacupuntura: pequeñas corrientes con microvibraciones durante unos 20 minutos que desbloquean el flujo sanguíneo y descontracturan fibras agarrotadas.',
        ],
      },
      {
        subtitle: 'Recuperación y convivencia con la medicina médica',
        paragraphs: [
          'Al desbloquear el estancamiento de Qi y sangre, los tejidos dañados reciben oxígeno y nutrientes vitales para cicatrizar y desinflamar.',
          'Desde la primera sesión, muchas personas comprueban que el dolor se vuelve notablemente más tolerable. Es crucial recordar que la acupuntura funciona de manera óptima como terapia complementaria y nunca debe reemplazar indicaciones de traumatología o fisioterapia sin acuerdo de tu médico.',
        ],
      },
    ],
  },
  {
    id: 'control-peso',
    chapterNumber: 8,
    title: 'Control de peso',
    shortDescription: 'Regula el apetito, el metabolismo y la ansiedad por comer en exceso.',
    iconName: 'Scale',
    summary:
      'Al intervenir en los sistemas nervioso, endocrino y digestivo, tonifica las paredes estomacales, ayuda a regular el apetito y disminuye los atracones por estrés.',
    recommendedSessions: 'De 8 a 12 sesiones combinadas con hábitos alimentarios saludables.',
    keyHighlights: [
      'Tonificación del músculo liso estomacal para brindar mayor saciedad.',
      'Regulación del apetito emocional desencadenado por el estrés.',
      'Opciones de acupuntura manual, electroacupuntura y acupuntura auricular.',
    ],
    sections: [
      {
        subtitle: 'Los desafíos alimentarios actuales',
        paragraphs: [
          'Llevar una dieta equilibrada es difícil cuando los tiempos son ajustados. Es común terminar comiendo cualquier alimento rápido o procesado solo para calmar el hambre inmediata, lo cual predispone al sobrepeso.',
          'Además, la comida suele convertirse en una vía de escape para aliviar la ansiedad, transformando el estrés laboral o personal en atracones no planificados.',
        ],
      },
      {
        subtitle: 'Mecanismos de acción en el metabolismo',
        paragraphs: [
          'La acupuntura puede aplicarse de manera manual, con electroacupuntura, acupresión o mediante puntos auriculares. Su efecto se produce al ajustar el funcionamiento combinado del sistema nervioso, endocrino y digestivo.',
          'En términos técnicos, ayuda a modular la motilidad intestinal, dinamizar el metabolismo y reducir los factores emocionales que impulsan a comer compulsivamente. Al mismo tiempo, incrementa el tono del músculo liso del estómago, facilitando una sensación de saciedad más rápida y duradera.',
        ],
      },
      {
        subtitle: 'Una herramienta de apoyo consciente',
        paragraphs: [
          'El estímulo continuo de la energía vital colabora para que tu cuerpo procese mejor los nutrientes y controle los picos de ansiedad.',
          'Debes tener presente que la acupuntura no es una solución mágica e inmediata por sí sola: constituye un facilitador para que adoptar hábitos alimentarios conscientes y actividad física resulte mucho más llevadero y sostenible en el tiempo.',
        ],
      },
    ],
  },
  {
    id: 'fatiga-cronica-fibromialgia',
    chapterNumber: 9,
    title: 'Fatiga crónica y fibromialgia',
    shortDescription: 'Modula la matriz del dolor cerebral y combate el cansancio extremo persistente.',
    iconName: 'Sparkles',
    summary:
      'Eleva el umbral de tolerancia al dolor, modula las señales en la médula y el cerebro, y revitaliza los canales energéticos para salir del ciclo de agotamiento continuo.',
    recommendedSessions: 'Sesiones continuas a mediano plazo (10 a 20 sesiones) para consolidar mejoras.',
    keyHighlights: [
      'Estimulación que promueve la desactivación de la matriz del dolor cerebral.',
      'Aumento del umbral de tolerancia para sobrellevar la hipersensibilidad.',
      'Restablecimiento constante de la energía Qi para combatir el letargo crónico.',
    ],
    sections: [
      {
        subtitle: 'El peso invisible del agotamiento constante',
        paragraphs: [
          'El síndrome de fatiga crónica y la fibromialgia son condiciones complejas que a menudo no encuentran una respuesta total en la medicación tradicional.',
          'Ambas afecciones suelen manifestarse con un umbral de dolor anormalmente bajo, donde cualquier estímulo cotidiano puede desencadenar molestias intensas y un cansancio que no mejora tras dormir.',
        ],
      },
      {
        subtitle: 'Cómo actúa la acupuntura en el sistema nervioso',
        paragraphs: [
          'La inserción cuidadosa de las agujas genera cambios en el sistema nervioso central al estimular fibras nerviosas que envían señales directamente a la médula espinal y al cerebro.',
          'Como respuesta, el cuerpo libera neurotransmisores y sustancias que bloquean o atenúan el mensaje de dolor. Investigaciones señalan que este tratamiento ayuda a calmar la hiperactividad de la denominada "matriz del dolor" en el cerebro, permitiendo a la persona elevar su tolerancia y experimentar alivio prolongado.',
        ],
      },
      {
        subtitle: 'Restablecer el Qi para recuperar vitalidad',
        paragraphs: [
          'Desde la medicina tradicional china, estas condiciones reflejan un agotamiento y estancamiento severo de la energía vital (Qi o Chi) a lo largo de los meridianos.',
          'Al desbloquear y mantener un flujo continuo y equilibrado de Qi hacia los órganos principales, el organismo recupera paulatinamente su capacidad de generar energía y reducir los brotes de dolor generalizado.',
        ],
      },
    ],
  },
];

export const SPECIALIST_GUIDE: SpecialistGuideData = {
  title: 'Cómo elegir un buen especialista',
  subtitle: 'Pautas de seguridad, credenciales y preguntas clave antes de iniciar tu tratamiento',
  summary:
    'Elegir un profesional capacitado y con estrictas medidas de bioseguridad es fundamental para garantizar una experiencia segura, higiénica y eficaz.',
  whatYouMustKnow: [
    {
      subtitle: 'La importancia de verificar antecedentes y trayectoria',
      paragraphs: [
        'Encontrar personas que practiquen terapias alternativas puede ser desafiante. Debido al creciente interés en la salud natural, existe la tendencia de que personas con escasos conocimientos abran negocios o consultorios sin el debido respaldo.',
        'Si no actúas con cautela, corres el riesgo de recibir un servicio deficiente o, peor aún, de sufrir consecuencias perjudiciales para tu salud.',
        'Tómate el tiempo de averiguar los estudios, certificaciones oficiales y experiencia clínica del terapeuta. Si es posible, conversa con pacientes previos o investiga opiniones de personas que hayan completado tratamientos en esa misma clínica.',
      ],
    },
    {
      subtitle: 'El estado de las agujas y las medidas de higiene',
      paragraphs: [
        'Las herramientas del acupunturista consisten en agujas sumamente finas. El estado y manipulación de estas agujas es de máxima prioridad.',
        'En cada sesión, el profesional debe utilizar agujas nuevas, descartables y extraídas de paquetes herméticamente sellados en tu presencia. El uso de material no esterilizado puede acarrear infecciones graves.',
        'Antes de insertar cada aguja, la piel de la zona a tratar debe desinfectarse minuciosamente con alcohol u otro antiséptico adecuado.',
      ],
    },
    {
      subtitle: 'Prevenir errores y procedimientos inadecuados',
      paragraphs: [
        'Aunque es muy poco común cuando se acude a un profesional certificado, una mala praxis puede derivar en punciones inadecuadas de órganos cercanos o en hematomas notorios por falta de delicadeza técnica.',
        'Dado que los puntos se ubican en zonas precisas del cuerpo, un terapeuta experimentado sabe exactamente a qué profundidad y en qué ángulo intervenir para cuidar tu integridad.',
        'Una de las mejores formas de elegir con tranquilidad es solicitar una recomendación a tu médico de cabecera o a un centro de salud de confianza.',
      ],
    },
  ],
  safetyChecklist: [
    {
      title: 'Agujas 100% desechables y selladas',
      description:
        'Asegúrate de que el especialista abra un paquete estéril nuevo frente a ti para cada aguja y que las deseche en un contenedor rígido para residuos biológicos.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Desinfección previa de la piel',
      description:
        'Cada punto donde se coloque una aguja debe ser limpiado previamente con una torunda de algodón con alcohol o desinfectante médico.',
      icon: 'Sparkles',
    },
    {
      title: 'Credenciales y registro profesional',
      description:
        'Verifica que cuente con títulos de instituciones reconocidas en acupuntura o medicina tradicional china y licencias sanitarias válidas en tu localidad.',
      icon: 'GraduationCap',
    },
    {
      title: 'Higiene del consultorio y camilla',
      description:
        'El espacio debe verse impecable, con sábanas protectoras descartables y lavado de manos o guantes antes del procedimiento.',
      icon: 'Building2',
    },
  ],
  questionsToAsk: [
    '¿Qué formación académica y cuántos años de experiencia clínica tiene en acupuntura?',
    '¿Todas las agujas utilizadas son descartables y de un solo uso?',
    '¿Tiene experiencia tratando específicamente mi dolencia o síntoma?',
    '¿Cuántas sesiones estima que necesitaré antes de evaluar los primeros resultados?',
    '¿Existe alguna contraindicación con los medicamentos o condiciones que tengo actualmente?',
  ],
};

export const ABOUT_ACUPUNCTURE_INTRO = {
  title: 'El arte y la ciencia de la acupuntura',
  intro:
    'La medicina tradicional china explica que a través de nuestro cuerpo fluyen canales de energía vital denominados meridianos. Estos actúan como ríos que irrigan y nutren los órganos y tejidos. Cuando se genera un bloqueo en ese flujo, aparecen molestias, dolor y desequilibrio.',
  howItWorks:
    'Al estimular puntos estratégicos mediante finas agujas indoloras, se disuelven las obstrucciones, permitiendo que los sistemas internos recuperen su armonía natural en digestión, energía y bienestar general.',
};
