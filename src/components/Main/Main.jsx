import Card from '../Card/Card';
import './Main.css';

export const posts = [
  {
    id: 1,
    title: 'Titolo 1',
    image: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html', 'css'],
    published: true,
  },
  {
    id: 2,
    title: 'Titolo 2',
    image: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['js', 'css'],
    published: true,
  },
  {
    id: 3,
    title: 'Titolo 3',
    image: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['js', 'php'],
    published: true,
  },
  {
    id: 4,
    title: 'Titolo 4',
    image: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html'],
    published: false,
  },
];

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          {posts.map((p, i) => (
            <Card
              key={`postCard${i}`}
              title={p.title}
              image={p.image}
              content={p.content}
              tags={p.tags}
              published={p.published}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
