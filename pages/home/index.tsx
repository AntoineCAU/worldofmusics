export interface Aliases {
  id: number;
  name: string;
  resource_url: string;
}

export interface Groups {
  active: boolean;
  id: number;
  name: string;
  resource_url: string;
}

export interface Images {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
}

export interface ArtistProps {
  data: {
    aliases: Aliases[];
    data_quality: string;
    groups: Groups[];
    id: number;
    images: Images[];
    name: string;
    namevariations: string[];
    profile: string;
    releases_url: string;
    resource_url: string;
    uri: string;
    urls: string[];
  };
}

const Home = ({ data }: ArtistProps): JSX.Element => {
  const { aliases, name, profile } = data;

  console.log(aliases);
  return (
    <>
      <p className='text-xl font-medium'>Nom : {name}</p>
      {aliases.map(({ name }, index) => {
        return <p key={index}>Alias : {name}</p>;
      })}
      <p>{profile}</p>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://api.discogs.com/artists/2815922`);
  const data = await res.json();
  return { props: { data } };
}

export default Home;
