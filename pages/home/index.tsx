const groups = [
  'System of a Down',
  'Sum 41',
  "Gun's and Roses",
  'Red Hot Chili Peppers',
];

const Home = (): JSX.Element => {
  return (
    <>
      <p className='text-xl font-medium'>Voici ma première liste de groupe</p>
      <ul>
        {groups.map((group, index) => {
          return <li key={index}>{group}</li>;
        })}
      </ul>
    </>
  );
};

export default Home;
