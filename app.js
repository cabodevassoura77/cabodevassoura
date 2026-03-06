const seedPosts = [
  {
    author: 'ana_produto',
    title: 'Como conseguir os primeiros 10 usuários pagantes?',
    content:
      'Lancei meu MVP para gestão de consultas e estou com tráfego baixo. Quais estratégias práticas vocês recomendam para validar canal e converter rápido?',
    comments: ['Faça entrevistas 1:1 com nicho local e ofereça onboarding gratuito.'],
    likes: 4
  },
  {
    author: 'dev_rafa',
    title: 'Dúvida sobre precificação de assinatura mensal',
    content:
      'Meu SaaS economiza tempo de freelancers. Estou em dúvida entre plano único ou 3 níveis. Como testariam preço sem afastar os primeiros clientes?',
    comments: ['Teste 2 faixas de preço por 2 semanas e compare retenção + churn inicial.'],
    likes: 2
  }
];

const feed = document.querySelector('#feed');
const postTemplate = document.querySelector('#postTemplate');
const postForm = document.querySelector('#postForm');
const titleInput = document.querySelector('#postTitle');
const contentInput = document.querySelector('#postContent');
const dmModal = document.querySelector('#dmModal');
const callModal = document.querySelector('#callModal');
const openDmBtn = document.querySelector('#openDmBtn');
const startCallBtn = document.querySelector('#startCallBtn');
const sendDmBtn = document.querySelector('#sendDmBtn');
const dmInput = document.querySelector('#dmInput');

function timeLabel() {
  return new Date().toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function renderPosts(posts) {
  feed.innerHTML = '';
  posts.forEach((post) => {
    const node = postTemplate.content.cloneNode(true);
    const card = node.querySelector('.post-card');
    node.querySelector('.post-title').textContent = post.title;
    node.querySelector('.meta').textContent = `@${post.author} • ${timeLabel()}`;
    node.querySelector('.post-content').textContent = post.content;

    const likeBtn = node.querySelector('.like-btn');
    const likeCount = likeBtn.querySelector('span');
    likeCount.textContent = post.likes;

    likeBtn.addEventListener('click', () => {
      post.likes += 1;
      likeCount.textContent = post.likes;
    });

    const commentsWrap = node.querySelector('.comments');
    const commentsList = node.querySelector('.comments-list');
    const commentToggle = node.querySelector('.comment-toggle');

    post.comments.forEach((comment) => {
      const line = document.createElement('p');
      line.textContent = `💡 ${comment}`;
      commentsList.appendChild(line);
    });

    commentToggle.addEventListener('click', () => {
      commentsWrap.classList.toggle('hidden');
    });

    const commentForm = node.querySelector('.comment-form');
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = commentForm.querySelector('input');
      const value = input.value.trim();
      if (!value) return;
      post.comments.push(value);
      const line = document.createElement('p');
      line.textContent = `💡 ${value}`;
      commentsList.appendChild(line);
      input.value = '';
    });

    node.querySelector('.dm-inline').addEventListener('click', () => dmModal.showModal());

    feed.appendChild(card);
  });
}

postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  if (!title || !content) return;

  seedPosts.unshift({
    author: 'voce_agora',
    title,
    content,
    comments: [],
    likes: 0
  });

  renderPosts(seedPosts);
  postForm.reset();
});

openDmBtn.addEventListener('click', () => dmModal.showModal());
startCallBtn.addEventListener('click', () => callModal.showModal());

sendDmBtn.addEventListener('click', () => {
  const value = dmInput.value.trim();
  if (!value) return;
  alert('Mensagem enviada com sucesso! Lembre-se: conteúdo impróprio é proibido.');
  dmInput.value = '';
});

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-close');
    const modal = document.getElementById(id);
    modal.close();
  });
});

renderPosts(seedPosts);
