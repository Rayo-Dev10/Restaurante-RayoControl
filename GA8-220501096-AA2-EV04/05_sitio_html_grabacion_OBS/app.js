const assets = {
  1: { title: 'Datos', width: 848, height: 1264 },
  2: { title: 'Red inteligente', width: 1024, height: 1024 },
  3: { title: 'Chef con tecnologia', width: 1440, height: 736 },
  4: { title: 'Robot de servicio', width: 736, height: 1440 },
  5: { title: 'Interaccion por voz', width: 1296, height: 816 },
  6: { title: 'Etica en IA', width: 816, height: 1296 },
  7: { title: 'Antecedentes y evolucion', width: 1264, height: 848 },
  8: { title: 'IA basada en reglas', width: 848, height: 1264 },
  9: { title: 'Recomendacion inteligente', width: 1024, height: 1024 },
  10: { title: 'Inventario', width: 1440, height: 736 },
  11: { title: 'Mapa y geolocalizacion', width: 736, height: 1440 },
  12: { title: 'Vision por computador', width: 1296, height: 816 },
  13: { title: 'Analitica', width: 816, height: 1296 },
  14: { title: 'Seguridad y privacidad', width: 1264, height: 848 },
  15: { title: 'Cliente', width: 848, height: 1264 },
  16: { title: 'Infraestructura en la nube', width: 1024, height: 1024 },
  17: { title: 'Speech to text', width: 1440, height: 736 },
  18: { title: 'Modelo de aprendizaje', width: 736, height: 1440 },
  19: { title: 'Sesgo', width: 1296, height: 816 },
  20: { title: 'Futuro', width: 816, height: 1296 },
  21: { title: 'Restaurante-RayoControl', width: 1264, height: 848 },
  22: { title: 'Capas neuronales', width: 848, height: 1264 },
  23: { title: 'Decision apoyada por datos', width: 1024, height: 1024 },
  24: { title: 'Prediccion de demanda', width: 1440, height: 736 },
  25: { title: 'Dashboard administrativo', width: 736, height: 1440 },
  26: { title: 'Aplicacion movil', width: 816, height: 1296 },
  27: { title: 'Flujo de trabajo', width: 816, height: 1296 },
  28: { title: 'Base de datos', width: 1408, height: 768 },
  29: { title: 'Supervision humana', width: 816, height: 1296 },
  30: { title: 'Cierre visual', width: 1408, height: 768 },
};

const palettes = [
  ['#061425', '#00e5ff', '#ff3366', '#ffd166'],
  ['#18002f', '#8a2be2', '#00f5d4', '#faff00'],
  ['#082032', '#2ec4b6', '#ff9f1c', '#e71d36'],
  ['#250902', '#ff5400', '#ffbd00', '#7ae582'],
  ['#061a40', '#4361ee', '#4cc9f0', '#f72585'],
  ['#102a13', '#57cc99', '#c7f9cc', '#ff7b00'],
  ['#1b1035', '#7209b7', '#f72585', '#4cc9f0'],
  ['#111827', '#22c55e', '#38bdf8', '#f97316'],
  ['#330036', '#ff0054', '#ffbd00', '#00f5d4'],
  ['#031926', '#00a896', '#02c39a', '#f0f3bd'],
  ['#1a132f', '#ff4d6d', '#845ec2', '#00f5d4'],
];

const transitions = [
  'transition-ribbon',
  'transition-prism',
  'transition-iris',
  'transition-fold',
  'transition-glitch',
  'transition-orbit',
  'transition-blinds',
  'transition-wave',
  'transition-tunnel',
  'transition-card',
  'transition-comet',
  'transition-liquid',
];

const masks = [
  'polygon(5% 0, 100% 8%, 92% 100%, 0 90%)',
  'polygon(0 12%, 88% 0, 100% 78%, 18% 100%)',
  'polygon(16% 0, 100% 0, 84% 100%, 0 100%)',
  'polygon(0 0, 100% 10%, 96% 88%, 38% 100%, 0 82%)',
  'polygon(50% 0, 100% 28%, 85% 100%, 15% 100%, 0 28%)',
  'ellipse(48% 43% at 50% 50%)',
  'circle(48% at 52% 48%)',
  'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 16% 50%)',
  'polygon(12% 0, 100% 0, 100% 88%, 0 100%, 0 18%)',
  'polygon(0 20%, 62% 0, 100% 24%, 88% 100%, 18% 88%)',
  'polygon(28% 0, 100% 18%, 76% 100%, 0 80%, 12% 22%)',
  'polygon(0 8%, 100% 0, 84% 84%, 42% 100%, 8% 72%)',
];

const laminas = [
  {
    number: 1,
    title: 'Apertura',
    kicker: 'Machine Learning',
    scenes: [
      {
        title: 'Cordial saludo',
        subtitle: 'Presentacion del tema',
        body: [
          'Mi nombre es Rayo Palatianos.',
          'Hablare sobre Machine Learning o aprendizaje automatico.',
        ],
        cue: 'Una tecnologia influyente dentro de la inteligencia artificial actual.',
        images: [21],
        duration: 7,
      },
      {
        title: 'Ruta de la exposicion',
        subtitle: 'Que veremos durante el video',
        body: [
          'Que es y para que sirve.',
          'Como ha evolucionado y cuales son sus enfoques.',
          'Productos reales, retos eticos y aplicacion al proyecto.',
        ],
        cue: 'Esta escena abre el mapa completo de la narracion.',
        images: [1, 2],
        duration: 9,
      },
      {
        title: 'Conexion con el proyecto',
        subtitle: 'Restaurante-RayoControl',
        body: [
          'Al final veremos como ML podria apoyar la administracion.',
          'La meta es mejorar la toma de decisiones en un restaurante.',
        ],
        cue: 'La idea central: convertir registros en informacion util.',
        images: [30, 3],
        duration: 8,
      },
    ],
  },
  {
    number: 2,
    title: 'Que es Machine Learning?',
    kicker: 'Concepto central',
    scenes: [
      {
        title: 'Aprender a partir de datos',
        subtitle: 'Una rama de la inteligencia artificial',
        body: [
          'Un sistema aprende usando ejemplos.',
          'No se programa cada respuesta una por una.',
        ],
        cue: 'La maquina identifica relaciones y regularidades.',
        images: [18, 1],
        duration: 8,
      },
      {
        title: 'Datos, patrones, predicciones',
        subtitle: 'La formula esencial',
        body: [
          'Datos: la informacion de entrada.',
          'Patrones: relaciones que el modelo descubre.',
          'Predicciones: respuestas utiles para actuar.',
        ],
        cue: 'Esta escena debe sentirse muy didactica y marcada.',
        images: [2, 23],
        duration: 8,
      },
      {
        title: 'Que puede hacer?',
        subtitle: 'Clasificar, recomendar, detectar o anticipar',
        body: [
          'Puede ordenar informacion en categorias.',
          'Puede recomendar opciones y detectar comportamientos.',
        ],
        cue: 'Despues del entrenamiento, el sistema aplica lo aprendido.',
        images: [13, 12],
        duration: 8,
      },
      {
        title: 'Ejemplo en restaurante',
        subtitle: 'Ventas que anticipan demanda',
        body: [
          'Con meses de ventas, el modelo puede estimar platos populares.',
          'Tambien puede relacionar dias, horarios y temporadas.',
        ],
        cue: 'El ejemplo aterriza el concepto en Restaurante-RayoControl.',
        images: [24, 10],
        duration: 9,
      },
    ],
  },
  {
    number: 3,
    title: 'Objetivos del Machine Learning',
    kicker: 'Proposito',
    scenes: [
      {
        title: 'Cuatro objetivos',
        subtitle: 'Automatizar, descubrir, predecir y mejorar',
        body: [
          'Automatizar decisiones repetitivas.',
          'Descubrir patrones no evidentes.',
          'Predecir comportamientos futuros.',
        ],
        cue: 'Presenta las cuatro ideas con energia practica.',
        images: [27, 9],
        duration: 8,
      },
      {
        title: 'Usos en la practica',
        subtitle: 'De recomendaciones a alertas',
        body: [
          'Recomendar productos.',
          'Anticipar demanda.',
          'Detectar anomalias o personalizar la atencion.',
        ],
        cue: 'Muestra que ML sirve para decisiones concretas.',
        images: [13, 23],
        duration: 8,
      },
      {
        title: 'Impacto en restaurante',
        subtitle: 'Menos desperdicio, mejores compras',
        body: [
          'Mejor rotacion de inventario.',
          'Compras mas informadas.',
          'Atencion mas ajustada a la demanda real.',
        ],
        cue: 'Aqui el beneficio debe sonar tangible.',
        images: [10, 15],
        duration: 8,
      },
    ],
  },
  {
    number: 4,
    title: 'Antecedentes',
    kicker: 'Evolucion',
    scenes: [
      {
        title: 'No aparecio de repente',
        subtitle: 'Viene de varias areas del conocimiento',
        body: [
          'Estadistica, logica matematica e informatica.',
          'Tambien se apoya en la inteligencia artificial.',
        ],
        cue: 'Tono narrativo, como una breve historia tecnologica.',
        images: [7, 28],
        duration: 8,
      },
      {
        title: 'Antes: reglas fijas',
        subtitle: 'La maquina solo ejecutaba instrucciones',
        body: [
          'Una persona definia las reglas.',
          'El sistema respondia de manera controlada.',
        ],
        cue: 'Este contraste prepara la idea de aprendizaje.',
        images: [8, 27],
        duration: 8,
      },
      {
        title: 'Despues: datos y computo',
        subtitle: 'La maquina tambien aprende de la experiencia',
        body: [
          'Mas datos disponibles.',
          'Mayor poder de computo.',
          'Nuevas aplicaciones predictivas.',
        ],
        cue: 'Cierra la evolucion conectando con aplicaciones actuales.',
        images: [16, 20],
        duration: 8,
      },
    ],
  },
  {
    number: 5,
    title: 'IA, Machine Learning y Deep Learning',
    kicker: 'Relacion conceptual',
    scenes: [
      {
        title: 'Inteligencia Artificial',
        subtitle: 'El concepto mas amplio',
        body: [
          'Busca que una maquina realice tareas asociadas a capacidades humanas.',
          'Razonar, decidir, reconocer patrones o resolver problemas.',
        ],
        cue: 'Aclarar el marco general antes de entrar a ML.',
        images: [2, 12],
        duration: 8,
      },
      {
        title: 'Machine Learning',
        subtitle: 'Una parte de la IA',
        body: [
          'Se centra en aprender a partir de datos.',
          'Permite generar respuestas sin reglas escritas una por una.',
        ],
        cue: 'Ubica ML dentro del universo de la IA.',
        images: [18, 22],
        duration: 8,
      },
      {
        title: 'Deep Learning',
        subtitle: 'Una especializacion dentro del aprendizaje automatico',
        body: [
          'Trabaja con redes neuronales de varias capas.',
          'Los terminos estan conectados, pero no son equivalentes.',
        ],
        cue: 'Cierra con la relacion: IA contiene ML y ML puede contener Deep Learning.',
        images: [16, 23],
        duration: 8,
      },
    ],
  },
  {
    number: 6,
    title: 'IA orientada a reglas',
    kicker: 'Primer enfoque',
    scenes: [
      {
        title: 'Si ocurre esto...',
        subtitle: 'Entonces responde aquello',
        body: [
          'Una persona diseña instrucciones explicitas.',
          'El sistema aplica condiciones predefinidas.',
        ],
        cue: 'Enfatiza la logica si-entonces.',
        images: [8],
        duration: 7,
      },
      {
        title: 'Ejemplos de negocio',
        subtitle: 'Reglas claras dentro del restaurante',
        body: [
          'Si un producto esta agotado, no se permite seleccionarlo.',
          'Si el inventario baja de un umbral, se genera una alerta.',
        ],
        cue: 'Aterriza el enfoque en operaciones concretas.',
        images: [10, 25],
        duration: 8,
      },
      {
        title: 'Fortaleza y limite',
        subtitle: 'Precisa, pero no aprende sola',
        body: [
          'Funciona bien con condiciones claras.',
          'Su limite aparece cuando cambian los patrones.',
        ],
        cue: 'La transicion natural es hacia modelos que aprenden.',
        images: [27, 14],
        duration: 8,
      },
    ],
  },
  {
    number: 7,
    title: 'IA orientada a conexiones neuronales',
    kicker: 'Segundo enfoque',
    scenes: [
      {
        title: 'Conexiones internas',
        subtitle: 'Modelos inspirados en redes de neuronas',
        body: [
          'No significa que la maquina piense como una persona.',
          'Procesa informacion mediante conexiones ajustables.',
        ],
        cue: 'Explicar sin exagerar la analogia neuronal.',
        images: [22, 18],
        duration: 8,
      },
      {
        title: 'Entrada, procesamiento, salida',
        subtitle: 'La logica general del modelo',
        body: [
          'Se ingresan datos.',
          'El modelo encuentra relaciones internas.',
          'Luego produce una clasificacion, recomendacion o prediccion.',
        ],
        cue: 'Esta escena puede tener golpes de voz en las tres palabras clave.',
        images: [1, 2],
        duration: 8,
      },
      {
        title: 'Patrones de ventas',
        subtitle: 'Aprender de productos, horarios y demanda',
        body: [
          'Puede detectar productos que suelen venderse juntos.',
          'Tambien puede anticipar momentos de mayor demanda.',
        ],
        cue: 'Conectar redes neuronales con utilidad real.',
        images: [24, 13],
        duration: 8,
      },
    ],
  },
  {
    number: 8,
    title: 'Productos con IA',
    kicker: 'Ejemplos reales',
    scenes: [
      {
        title: 'La IA ya convive con nosotros',
        subtitle: 'No es una idea lejana',
        body: [
          'Muchos productos cotidianos ya usan inteligencia artificial.',
          'A veces la usamos sin notarlo.',
        ],
        cue: 'Subir un poco la energia.',
        images: [5, 17],
        duration: 7,
      },
      {
        title: 'Voz y recomendaciones',
        subtitle: 'Acciones, contenido y personalizacion',
        body: [
          'Asistentes de voz transforman audio en acciones.',
          'Plataformas recomiendan musica, peliculas o videos.',
        ],
        cue: 'Usar ejemplos familiares para hacer cercano el tema.',
        images: [9, 15],
        duration: 8,
      },
      {
        title: 'Mapas, filtros y reconocimiento',
        subtitle: 'Automatizacion en servicios diarios',
        body: [
          'Los sistemas de navegacion calculan rutas.',
          'Los filtros de correo detectan mensajes sospechosos.',
        ],
        cue: 'Mantener ritmo vivo, sin alargar.',
        images: [11, 12],
        duration: 8,
      },
      {
        title: 'En restaurantes',
        subtitle: 'Pedidos, reseñas y decisiones de compra',
        body: [
          'Recomendacion de platos.',
          'Toma de pedidos por voz.',
          'Analisis de reseñas y apoyo a compras.',
        ],
        cue: 'Cerrar mostrando que la IA ya puede tocar el contexto del proyecto.',
        images: [4, 26],
        duration: 9,
      },
    ],
  },
  {
    number: 9,
    title: 'Consecuencias eticas y sociales',
    kicker: 'Responsabilidad',
    scenes: [
      {
        title: 'Beneficios y retos',
        subtitle: 'El valor tecnologico exige cuidado',
        body: [
          'Machine Learning ofrece beneficios muy valiosos.',
          'Tambien plantea retos sociales, eticos y filosoficos.',
        ],
        cue: 'Bajar la energia y marcar un tono mas serio.',
        images: [6, 19],
        duration: 8,
      },
      {
        title: 'Sesgo',
        subtitle: 'Los datos tambien pueden ser injustos',
        body: [
          'Si los datos son incompletos o desbalanceados, el resultado puede ser injusto.',
          'El modelo hereda problemas de su informacion de entrenamiento.',
        ],
        cue: 'Hacer una pausa clara antes de la idea de injusticia.',
        images: [19, 14],
        duration: 9,
      },
      {
        title: 'Transparencia y privacidad',
        subtitle: 'Entender decisiones y cuidar datos',
        body: [
          'Una persona puede recibir una recomendacion sin saber por que.',
          'El uso de grandes volumenes de datos exige privacidad.',
        ],
        cue: 'Esta escena debe sonar prudente, no alarmista.',
        images: [14, 29],
        duration: 9,
      },
      {
        title: 'Que deberia hacer una maquina?',
        subtitle: 'Limites y supervision humana',
        body: [
          'La pregunta no es solo que puede hacer.',
          'Tambien importa bajo que limites y con que supervision.',
        ],
        cue: 'Cerrar con criterio tecnico, etico y responsabilidad social.',
        images: [29, 6],
        duration: 9,
      },
    ],
  },
  {
    number: 10,
    title: 'Aplicacion a Restaurante-RayoControl',
    kicker: 'Proyecto',
    scenes: [
      {
        title: 'Una evolucion interesante',
        subtitle: 'Del registro operativo al apoyo inteligente',
        body: [
          'Machine Learning podria ampliar el valor del proyecto.',
          'El sistema no solo guardaria datos: ayudaria a decidir.',
        ],
        cue: 'Volver a un tono seguro y practico.',
        images: [21, 24],
        duration: 8,
      },
      {
        title: 'Operacion e inventario',
        subtitle: 'Demanda, rotacion y horarios de venta',
        body: [
          'Prever demanda de platos.',
          'Identificar productos de alta o baja rotacion.',
          'Analizar horarios de mayor venta.',
        ],
        cue: 'Subir energia en los beneficios concretos.',
        images: [10, 25],
        duration: 9,
      },
      {
        title: 'Reportes mas inteligentes',
        subtitle: 'Menus, consumo y administracion',
        body: [
          'Recomendar menus.',
          'Identificar habitos de consumo.',
          'Generar reportes utiles para administrar mejor.',
        ],
        cue: 'La clave: informacion util, no datos guardados por guardar.',
        images: [13, 26],
        duration: 9,
      },
    ],
  },
  {
    number: 11,
    title: 'Cierre',
    kicker: 'Conclusion',
    scenes: [
      {
        title: 'Aprender para decidir',
        subtitle: 'Patrones, predicciones y apoyo a decisiones',
        body: [
          'Machine Learning permite aprender a partir de datos.',
          'Ayuda a reconocer patrones y predecir comportamientos.',
        ],
        cue: 'Recoger el concepto completo en una idea firme.',
        images: [20, 30],
        duration: 8,
      },
      {
        title: 'Responsabilidad',
        subtitle: 'Etica, supervision y cuidado de la informacion',
        body: [
          'Su uso debe estar acompañado de responsabilidad etica.',
          'Tambien necesita supervision humana y cuidado de datos.',
        ],
        cue: 'No cerrar solo con tecnologia: cerrar tambien con criterio.',
        images: [14, 29],
        duration: 8,
      },
      {
        title: 'Muchas gracias',
        subtitle: 'De una gestion operativa a una gestion con analisis',
        body: [
          'Aplicado a Restaurante-RayoControl, ML abre una evolucion futura.',
          'Los datos pueden convertirse en una ventaja para actuar mejor.',
        ],
        cue: 'Cierre lento, firme y limpio.',
        images: [30],
        duration: 7,
      },
    ],
  },
];

const scenes = laminas.flatMap((lamina, laminaIndex) => {
  const [c1, c2, c3, c4] = palettes[laminaIndex % palettes.length];

  return lamina.scenes.map((scene, sceneIndex) => {
    const globalIndex = laminas
      .slice(0, laminaIndex)
      .reduce((sum, item) => sum + item.scenes.length, 0) + sceneIndex;
    const seed = (globalIndex + 1) * 31;

    return {
      ...scene,
      id: `l${lamina.number}-e${sceneIndex + 1}`,
      audioKey: `l${lamina.number}-e${sceneIndex + 1}`,
      laminaNumber: lamina.number,
      laminaTitle: lamina.title,
      laminaKicker: lamina.kicker,
      sceneNumber: sceneIndex + 1,
      scenesInLamina: lamina.scenes.length,
      globalNumber: globalIndex + 1,
      colors: [c1, c2, c3, c4],
      transition: transitions[globalIndex % transitions.length],
      mask: masks[globalIndex % masks.length],
      angle: `${(seed + 23) % 360}deg`,
      travelX: `${((globalIndex % 2 === 0 ? 1 : -1) * (36 + (globalIndex % 5) * 8)).toFixed(0)}px`,
      travelY: `${(((globalIndex % 3) - 1) * 22).toFixed(0)}px`,
      floatX: `${(((globalIndex % 5) - 2) * 3).toFixed(0)}px`,
      floatY: `${(-5 - (globalIndex % 4) * 2).toFixed(0)}px`,
      tilt: `${((globalIndex % 7) - 3) * 0.18}deg`,
    };
  });
});

let index = 0;
let autoplay = false;
let runToken = 0;
let renderToken = 0;
let mediaRecorder = null;
let recordingScene = null;
let chunks = [];
let audioContext = null;
let analyser = null;
let meterAnimation = null;
let streamRef = null;
let autoplayPaused = false;
let activeAudio = null;
let activeAudioUrl = null;
let activePlaybackResolve = null;
let activeDelay = null;
let uploadTargetIndex = null;
let sampleAudio = null;
let sampleAudioUrl = null;
let autoplayJumpIndex = null;

const audioCache = new Map();
const slideEl = document.getElementById('slide');
const hud = document.getElementById('hud');
const help = document.getElementById('help');
const audioPanel = document.getElementById('audio-panel');
const audioList = document.getElementById('audio-list');
const recorderBox = document.getElementById('recorder');
const recStatus = document.getElementById('rec-status');
const recTitle = document.getElementById('rec-title');
const meter = document.getElementById('meter');
const audioFileInput = document.getElementById('audio-file');
const mctx = meter.getContext('2d');

function imgPath(name) {
  return `../04_recursos_visuales/imagenes_nano_banana/${name}.png`;
}

function fallbackPath(name) {
  return `../04_recursos_visuales/imagenes_nano_banana/${name}.png`;
}

function esc(value) {
  return String(value).replace(/[&<>'"]/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[c]));
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getAsset(name) {
  return assets[name] || { title: `Imagen ${name}`, width: 1024, height: 1024 };
}

function cssVars(scene) {
  const [c1, c2, c3, c4] = scene.colors;

  return [
    `--c1:${c1}`,
    `--c2:${c2}`,
    `--c3:${c3}`,
    `--c4:${c4}`,
    `--transition-angle:${scene.angle}`,
    `--travel-x:${scene.travelX}`,
    `--travel-y:${scene.travelY}`,
    `--float-x:${scene.floatX}`,
    `--float-y:${scene.floatY}`,
    `--tilt:${scene.tilt}`,
    `--mask:${scene.mask}`,
  ].join(';');
}

function imageMarkup(name, pos, scene) {
  const asset = getAsset(name);
  const ratio = asset.width / asset.height;
  const shape = ratio > 1.55 ? 'wide' : ratio < 0.75 ? 'tall' : 'square';
  const delay = (0.14 * pos + 0.03 * (scene.globalNumber % 3)).toFixed(2);

  return `
    <figure
      class="visual-card visual-${pos} ${shape}"
      style="--image-w:${asset.width}px;--image-h:${asset.height}px;--image-ratio:${ratio};--delay:${delay}s"
      aria-label="${esc(asset.title)}"
    >
      <span class="image-aura"></span>
      <img
        class="slide-image"
        src="${imgPath(name)}"
        width="${asset.width}"
        height="${asset.height}"
        onerror="this.style.opacity='0.18';"
        alt="${esc(asset.title)}"
      />
    </figure>
  `;
}

function renderScene(targetIndex = index, animate = true) {
  const scene = scenes[targetIndex];
  if (!scene) return;

  const token = ++renderToken;
  const mediaCount = Math.min(scene.images.length, 2);
  slideEl.className = `slide scene-layout media-count-${mediaCount} ${scene.transition}${animate ? ' is-entering' : ''}`;
  slideEl.style.cssText = cssVars(scene);
  slideEl.innerHTML = `
    <div class="transition-layer" aria-hidden="true"></div>
    <div class="light-field light-field-a" aria-hidden="true"></div>
    <div class="light-field light-field-b" aria-hidden="true"></div>
    <section class="content-panel">
      <div class="scene-meta">
        <span>${esc(scene.laminaKicker)}</span>
        <strong>Lamina ${pad(scene.laminaNumber)} · Escena ${scene.sceneNumber}/${scene.scenesInLamina}</strong>
      </div>
      <p class="lamina-title">${esc(scene.laminaTitle)}</p>
      <h1>${esc(scene.title)}</h1>
      <p class="subtitle">${esc(scene.subtitle)}</p>
      <div class="bullets">
        ${scene.body.map((item) => `<p>${esc(item)}</p>`).join('')}
      </div>
      <p class="speaker-note">${esc(scene.cue)}</p>
    </section>
    <section class="media-panel" aria-label="Imagenes de apoyo">
      ${scene.images.slice(0, 2).map((name, i) => imageMarkup(name, i + 1, scene)).join('')}
    </section>
  `;

  index = targetIndex;
  updateHud();
  preloadAround(targetIndex);

  if (animate) {
    window.setTimeout(() => {
      if (token === renderToken) slideEl.classList.remove('is-entering');
    }, 1250);
  }
}

function preloadAround(targetIndex) {
  [targetIndex - 1, targetIndex, targetIndex + 1]
    .filter((i) => i >= 0 && i < scenes.length)
    .flatMap((i) => scenes[i].images)
    .forEach((image) => {
      const preload = new Image();
      preload.src = imgPath(image);
    });
}

function updateHud() {
  const scene = scenes[index];
  const state = autoplay ? (autoplayPaused ? ' · pausado' : ' · reproduccion automatica') : '';
  hud.textContent = `${index + 1}/${scenes.length} · Lamina ${scene.laminaNumber}.${scene.sceneNumber} · ${scene.title}${state}`;
}

function sceneLabel(scene) {
  return `L${scene.laminaNumber}.${scene.sceneNumber}`;
}

function stopSampleAudio() {
  if (sampleAudio) {
    sampleAudio.pause();
    sampleAudio.removeAttribute('src');
  }

  if (sampleAudioUrl) URL.revokeObjectURL(sampleAudioUrl);
  sampleAudio = null;
  sampleAudioUrl = null;
}

function stopActiveAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.removeAttribute('src');
  }

  if (activePlaybackResolve) activePlaybackResolve();
}

function cancelActiveDelay() {
  if (!activeDelay) return;
  activeDelay.cancel();
}

function pauseActiveDelay() {
  if (!activeDelay || !activeDelay.timeoutId) return;

  clearTimeout(activeDelay.timeoutId);
  activeDelay.remaining = Math.max(0, activeDelay.remaining - (performance.now() - activeDelay.startedAt));
  activeDelay.timeoutId = null;
}

function resumeActiveDelay() {
  if (activeDelay && !activeDelay.timeoutId) activeDelay.start();
}

function setAutoplayPaused(paused) {
  if (!autoplay || autoplayPaused === paused) return;

  autoplayPaused = paused;

  if (autoplayPaused) {
    if (activeAudio && !activeAudio.paused) activeAudio.pause();
    pauseActiveDelay();
  } else {
    if (activeAudio && activeAudio.paused) activeAudio.play().catch(stopActiveAudio);
    resumeActiveDelay();
  }

  updateHud();
}

function initialIndexFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slideParam = params.get('slide');
  const sceneParam = params.get('scene');
  const stepParam = params.get('step');
  const hash = window.location.hash.replace('#', '');

  if (slideParam && sceneParam) {
    const slideNumber = Number.parseInt(slideParam, 10);
    const sceneNumber = Number.parseInt(sceneParam, 10);
    const found = scenes.findIndex((scene) => scene.laminaNumber === slideNumber && scene.sceneNumber === sceneNumber);
    if (found >= 0) return found;
  }

  const directValue = stepParam || (!slideParam ? sceneParam : null) || hash;
  const requested = Number.parseInt(directValue, 10);

  if (Number.isInteger(requested) && requested >= 1 && requested <= scenes.length) {
    return requested - 1;
  }

  if (slideParam) {
    const slideNumber = Number.parseInt(slideParam, 10);
    const found = scenes.findIndex((scene) => scene.laminaNumber === slideNumber);
    if (found >= 0) return found;
  }

  return 0;
}

function next() {
  if (index < scenes.length - 1) {
    const targetIndex = index + 1;
    renderScene(targetIndex, true);
    handleAutoplaySceneChange(targetIndex);
  }
}

function prev() {
  if (index > 0) {
    const targetIndex = index - 1;
    renderScene(targetIndex, true);
    handleAutoplaySceneChange(targetIndex);
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('ev04-audios-escenas-v1', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('clips');
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveAudio(sceneKey, blob) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction('clips', 'readwrite');
    tx.objectStore('clips').put(blob, sceneKey);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function deleteAudio(sceneKey) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction('clips', 'readwrite');
    tx.objectStore('clips').delete(sceneKey);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function loadAudio(sceneKey) {
  if (audioCache.has(sceneKey)) return audioCache.get(sceneKey);

  const db = await openDB();

  return new Promise((resolve) => {
    const tx = db.transaction('clips', 'readonly');
    const req = tx.objectStore('clips').get(sceneKey);
    req.onsuccess = () => {
      const blob = req.result || null;
      audioCache.set(sceneKey, blob);
      resolve(blob);
    };
    req.onerror = () => resolve(null);
  });
}

function drawMeter() {
  if (!analyser) return;

  const data = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(data);
  mctx.clearRect(0, 0, meter.width, meter.height);

  const bars = 32;
  const w = meter.width / bars;

  for (let i = 0; i < bars; i++) {
    const v = data[Math.floor((i * data.length) / bars)] / 255;
    const h = v * meter.height;
    mctx.fillStyle = `rgba(255,255,255,${0.35 + v * 0.65})`;
    mctx.fillRect(i * w, meter.height - h, w - 2, h);
  }

  meterAnimation = requestAnimationFrame(drawMeter);
}

async function toggleRecord() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    return;
  }

  try {
    recordingScene = scenes[index];
    chunks = [];
    streamRef = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;

    const source = audioContext.createMediaStreamSource(streamRef);
    source.connect(analyser);

    mediaRecorder = new MediaRecorder(streamRef);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const target = recordingScene;
      await saveAudio(target.audioKey, blob);
      audioCache.set(target.audioKey, blob);
      cleanupRecording();
      recStatus.textContent = `Guardado en lamina ${target.laminaNumber}, escena ${target.sceneNumber}`;
      setTimeout(() => recorderBox.classList.remove('active'), 1800);
      if (!audioPanel.classList.contains('hidden')) renderAudioPanel();
    };

    mediaRecorder.start();
    recorderBox.classList.add('active');
    meter.hidden = false;
    recTitle.textContent = `Grabando ${sceneLabel(recordingScene)}`;
    recStatus.textContent = 'Microfono activo';
    drawMeter();
  } catch (err) {
    alert('No se pudo activar el microfono. Revisa permisos del navegador.');
  }
}

function cleanupRecording() {
  if (meterAnimation) cancelAnimationFrame(meterAnimation);
  if (streamRef) streamRef.getTracks().forEach((t) => t.stop());
  if (audioContext) audioContext.close();

  mediaRecorder = null;
  analyser = null;
  audioContext = null;
  streamRef = null;
  meterAnimation = null;
}

async function handleAutoplaySceneChange(targetIndex) {
  if (!autoplay) return;

  const token = runToken;
  const scene = scenes[targetIndex];
  const blob = scene ? await loadAudio(scene.audioKey) : null;

  if (!autoplay || token !== runToken || index !== targetIndex || !blob) return;

  autoplayJumpIndex = targetIndex;
  stopActiveAudio();
  cancelActiveDelay();
}

async function playAudioFor(sceneIndex, token) {
  const scene = scenes[sceneIndex];
  const blob = await loadAudio(scene.audioKey);
  if (token !== runToken) return;

  if (!blob) {
    await pauseableWait(scene.duration * 1000, token);
    return;
  }

  stopActiveAudio();

  return new Promise((resolve) => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    const finish = () => {
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
      URL.revokeObjectURL(url);
      if (activeAudio === audio) activeAudio = null;
      if (activeAudioUrl === url) activeAudioUrl = null;
      if (activePlaybackResolve === finish) activePlaybackResolve = null;
      resolve();
    };

    activeAudio = audio;
    activeAudioUrl = url;
    activePlaybackResolve = finish;
    audio.onended = finish;
    audio.onerror = finish;
    if (!autoplayPaused) audio.play().catch(finish);
  });
}

function isSupportedAudioFile(file) {
  const name = file.name.toLowerCase();
  return name.endsWith('.mp3') || name.endsWith('.mp4') || file.type === 'audio/mpeg' || file.type === 'audio/mp4' || file.type === 'video/mp4';
}

function requestAudioUpload(targetIndex = index) {
  uploadTargetIndex = targetIndex;

  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    return;
  }

  audioFileInput.value = '';
  audioFileInput.click();
}

async function handleAudioFileSelected(event) {
  const [file] = event.target.files;
  if (!file) return;

  if (!isSupportedAudioFile(file)) {
    uploadTargetIndex = null;
    alert('Selecciona un archivo de audio en formato MP3 o MP4.');
    return;
  }

  const target = scenes[uploadTargetIndex ?? index];
  uploadTargetIndex = null;
  const blob = new Blob([file], { type: file.type || (file.name.toLowerCase().endsWith('.mp3') ? 'audio/mpeg' : 'audio/mp4') });
  await saveAudio(target.audioKey, blob);
  audioCache.set(target.audioKey, blob);

  meter.hidden = true;
  recorderBox.classList.add('active');
  recTitle.textContent = `Audio importado ${sceneLabel(target)}`;
  recStatus.textContent = file.name;
  setTimeout(() => recorderBox.classList.remove('active'), 2200);
  if (!audioPanel.classList.contains('hidden')) renderAudioPanel();
}

async function renderAudioPanel() {
  audioList.innerHTML = '<p class="audio-loading">Revisando audios...</p>';

  const rows = await Promise.all(scenes.map(async (scene, sceneIndex) => ({
    scene,
    sceneIndex,
    hasAudio: Boolean(await loadAudio(scene.audioKey)),
  })));

  let currentLamina = null;
  const markup = [];

  rows.forEach(({ scene, sceneIndex, hasAudio }) => {
    if (currentLamina !== scene.laminaNumber) {
      currentLamina = scene.laminaNumber;
      markup.push(`
        <h3 class="audio-lamina">Lamina ${pad(scene.laminaNumber)} · ${esc(scene.laminaTitle)}</h3>
      `);
    }

    markup.push(`
      <article class="audio-row">
        <div>
          <strong>${sceneLabel(scene)}</strong>
          <span>${esc(scene.title)}</span>
        </div>
        <span class="audio-status ${hasAudio ? 'ready' : 'missing'}">${hasAudio ? 'Disponible' : 'Sin audio'}</span>
        <button type="button" data-action="play-sample" data-scene="${sceneIndex}" ${hasAudio ? '' : 'disabled'}>Play</button>
        <button type="button" data-action="replace-audio" data-scene="${sceneIndex}">Reemplazar</button>
        <button type="button" data-action="delete-audio" data-scene="${sceneIndex}" ${hasAudio ? '' : 'disabled'}>Eliminar</button>
      </article>
    `);
  });

  audioList.innerHTML = markup.join('');
}

async function toggleAudioPanel() {
  const isHidden = audioPanel.classList.contains('hidden');
  audioPanel.classList.toggle('hidden', !isHidden);
  if (isHidden) await renderAudioPanel();
  else stopSampleAudio();
}

async function playAudioSample(sceneIndex) {
  stopSampleAudio();

  const blob = await loadAudio(scenes[sceneIndex].audioKey);
  if (!blob) return;

  sampleAudioUrl = URL.createObjectURL(blob);
  sampleAudio = new Audio(sampleAudioUrl);
  sampleAudio.onended = stopSampleAudio;
  sampleAudio.onerror = stopSampleAudio;
  sampleAudio.play().catch(stopSampleAudio);
}

async function removeSceneAudio(sceneIndex) {
  const scene = scenes[sceneIndex];
  if (!scene) return;

  stopSampleAudio();
  await deleteAudio(scene.audioKey);
  audioCache.delete(scene.audioKey);
  await renderAudioPanel();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function pauseableWait(ms, token) {
  return new Promise((resolve) => {
    let done = false;

    const delay = {
      remaining: ms,
      startedAt: 0,
      timeoutId: null,
      start() {
        if (done) return;
        if (!autoplay || token !== runToken || this.remaining <= 0) {
          this.cancel();
          return;
        }

        if (autoplayPaused) return;

        this.startedAt = performance.now();
        this.timeoutId = setTimeout(() => this.cancel(), this.remaining);
      },
      cancel() {
        if (done) return;
        done = true;
        if (this.timeoutId) clearTimeout(this.timeoutId);
        if (activeDelay === this) activeDelay = null;
        resolve();
      },
    };

    activeDelay = delay;
    delay.start();
  });
}

async function playCurrentAudio() {
  await playAudioFor(index, runToken);
}

async function playAll() {
  if (mediaRecorder && mediaRecorder.state === 'recording') return;

  runToken++;
  const token = runToken;
  autoplay = true;
  autoplayPaused = false;
  autoplayJumpIndex = null;
  renderScene(0, false);
  await pauseableWait(450, token);

  let i = 0;
  while (i < scenes.length) {
    if (!autoplay || token !== runToken) break;

    const sceneAtStart = i;
    renderScene(i, i !== index);
    await playAudioFor(i, token);

    if (!autoplay || token !== runToken) break;

    if (Number.isInteger(autoplayJumpIndex)) {
      i = autoplayJumpIndex;
      autoplayJumpIndex = null;
      continue;
    }

    await pauseableWait(500, token);

    if (!autoplay || token !== runToken) break;

    if (Number.isInteger(autoplayJumpIndex)) {
      i = autoplayJumpIndex;
      autoplayJumpIndex = null;
      continue;
    }

    i = index !== sceneAtStart ? index + 1 : i + 1;
  }

  if (token === runToken) {
    autoplay = false;
    autoplayPaused = false;
    autoplayJumpIndex = null;
    stopActiveAudio();
    cancelActiveDelay();
    updateHud();
  }
}

function stopAutoplay() {
  autoplay = false;
  autoplayPaused = false;
  autoplayJumpIndex = null;
  runToken++;
  stopActiveAudio();
  cancelActiveDelay();
  updateHud();
}

async function enterFullscreen() {
  if (document.fullscreenElement || !document.documentElement.requestFullscreen) return;

  try {
    await document.documentElement.requestFullscreen();
  } catch (err) {
    // La reproduccion debe poder iniciar aunque el navegador rechace pantalla completa.
  }
}

async function exitFullscreen() {
  if (!document.fullscreenElement || !document.exitFullscreen) return;

  try {
    await document.exitFullscreen();
  } catch (err) {
    // Escape puede ser gestionado tambien por el navegador.
  }
}

async function startAutoplay() {
  await enterFullscreen();
  playAll();
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (key === 'enter') {
    e.preventDefault();
    startAutoplay();
    return;
  }

  if (key === 'escape') {
    e.preventDefault();
    stopAutoplay();
    exitFullscreen();
    return;
  }

  if (key === 'p') {
    e.preventDefault();
    setAutoplayPaused(!autoplayPaused);
    return;
  }

  if (key === 's') {
    e.preventDefault();
    stopAutoplay();
    return;
  }

  if (key === 'w') {
    e.preventDefault();
    toggleAudioPanel();
    return;
  }

  if (key === 'f') {
    e.preventDefault();
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
    return;
  }

  if (key === 'h') {
    e.preventDefault();
    help.classList.toggle('hidden');
    return;
  }

  if (key === 'g') {
    e.preventDefault();
    if (e.shiftKey) toggleRecord();
    else requestAudioUpload();
    return;
  }

  if (key === 'a') {
    e.preventDefault();
    playCurrentAudio();
    return;
  }

  if (key === 'arrowright' || key === ' ') {
    e.preventDefault();
    next();
    return;
  }

  if (key === 'arrowleft') {
    e.preventDefault();
    prev();
  }
});

audioFileInput.addEventListener('change', handleAudioFileSelected);
audioPanel.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const action = button.dataset.action;
  const sceneIndex = Number.parseInt(button.dataset.scene, 10);

  if (action === 'close-panel') {
    audioPanel.classList.add('hidden');
    stopSampleAudio();
    return;
  }

  if (action === 'play-sample' && Number.isInteger(sceneIndex)) {
    playAudioSample(sceneIndex);
    return;
  }

  if (action === 'replace-audio' && Number.isInteger(sceneIndex)) {
    requestAudioUpload(sceneIndex);
    return;
  }

  if (action === 'delete-audio' && Number.isInteger(sceneIndex)) {
    removeSceneAudio(sceneIndex);
  }
});

renderScene(initialIndexFromUrl(), false);
