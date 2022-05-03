import { gql } from "@apollo/client";
import client from "../libs/apollo";
import { GET_ALL_GENRE } from "../graphql/query";

const Home = ({ genres }) => {
  
  const genreCards = genres.map((v) => {
    return <h6>
      {v.name}
    </h6>
  });
  return (<div>
    <h1>all genres</h1>
    {genreCards}
    </div>
  )
}

export async function getStaticProps() {
  
  const { data } = await client.query({
    query: GET_ALL_GENRE
  });

  return {
    props: {
      genres: data?.genres,
    }
  };

}
export default Home