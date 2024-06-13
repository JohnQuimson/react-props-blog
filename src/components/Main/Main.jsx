import './Main.css';
import Card from '../Card/Card';
import Tags from '../Tags/Tags';

export const posts = [
  {
    id: 1,
    title: 'Titolo 1',
    image: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html', 'css', 'html'],
    published: true,
  },
  {
    id: 2,
    title: 'Titolo 2',
    image: 'https://dummyimage.com/600x400/000/fff',
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
  const allTags = posts.map((post) => post.tags).flat();
  const filterTags = [...new Set(allTags)];
  return (
    <>
      <main className="main">
        <div className="container">
          <Tags tags={filterTags} />
        </div>

        <div className="container-main">
          {posts.map((p, i) => (
            <Card
              key={`postCard${i}`}
              title={p.title}
              imageUrl={p.image}
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
