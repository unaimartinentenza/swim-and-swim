const topicLibrary = {
  crol: {
    title: 'Crol desde cero',
    description: 'Empieza por los movimientos básicos y construye tu crol paso a paso.',
    lessons: [
      ['01', 'La posición del cuerpo', 'Encuentra una postura larga y relajada en el agua.'],
      ['02', 'La patada de crol', 'Practica una patada suave que nace desde la cadera.'],
      ['03', 'Brazada y entrada de la mano', 'Conoce el recorrido de cada brazo, de principio a fin.'],
      ['04', 'Coordina el movimiento completo', 'Une patada, brazada y respiración a tu ritmo.']
    ]
  },
  respiracion: {
    title: 'Respira con calma',
    description: 'Practica la respiración en el agua y coordínala con tu brazada.',
    lessons: [
      ['01', 'Suelta el aire bajo el agua', 'Aprende a espirar de forma continua y sin tensión.'],
      ['02', 'Gira para tomar aire', 'Descubre cómo respirar hacia un lado manteniendo el equilibrio.'],
      ['03', 'Respiración y brazada', 'Coordina el giro de la cabeza con el movimiento del brazo.'],
      ['04', 'Encuentra tu propio ritmo', 'Practica una respiración cómoda para nadar con confianza.']
    ]
  },
  fluidez: {
    title: 'Más fluidez, menos esfuerzo',
    description: 'Pequeños cambios en tu técnica pueden ayudarte a deslizarte mejor.',
    lessons: [
      ['01', 'Deslízate después de cada brazada', 'Aprovecha cada movimiento para avanzar con calma.'],
      ['02', 'La entrada de la mano', 'Mejora la dirección de la mano al entrar en el agua.'],
      ['03', 'Agarre y tracción', 'Siente cómo apoyar el agua para impulsarte hacia delante.'],
      ['04', 'Rota el cuerpo al nadar', 'Usa la rotación para dar continuidad y alcance a tu brazada.']
    ]
  },
  equilibrio: {
    title: 'Posición y equilibrio',
    description: 'Trabaja la confianza en el agua, la postura y el control de tu cuerpo.',
    lessons: [
      ['01', 'Flota y encuentra el equilibrio', 'Familiarízate con la posición horizontal en el agua.'],
      ['02', 'Alinea cabeza y cadera', 'Practica una postura cómoda que reduzca la resistencia.'],
      ['03', 'Gira sin perder la postura', 'Mantén el control corporal mientras rotas para respirar.'],
      ['04', 'Deslízate desde la pared', 'Practica una salida sencilla y una posición más alargada.']
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const requestedTopic = params.get('tema');
const topic = topicLibrary[requestedTopic] || topicLibrary.crol;

document.title = `${topic.title} — Swim&Swim`;
document.querySelector('#topic-title').textContent = topic.title;
document.querySelector('#topic-description').textContent = topic.description;
document.querySelector('#breadcrumb-topic').textContent = topic.title;
document.querySelector('#video-list-title').textContent = `Lecciones de ${topic.title.toLowerCase()}`;
document.querySelector('#video-count').textContent = `${topic.lessons.length} ESPACIOS PARA VÍDEOS`;

document.querySelector('#video-grid').innerHTML = topic.lessons.map(([number, title, description]) => `
  <article class="video-card">
    <div class="video-placeholder" role="img" aria-label="Espacio reservado para el vídeo: ${title}">
      <span class="placeholder-play" aria-hidden="true">▶</span>
      <span class="placeholder-label">AQUÍ IRÁ EL VÍDEO</span>
      <span class="placeholder-number">${number}</span>
    </div>
    <div class="video-card-info">
      <span class="lesson-number">LECCIÓN ${number}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  </article>
`).join('');
