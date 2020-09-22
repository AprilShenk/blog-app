import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import PostCards from '../../components/PostCards/PostCards';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  );
};

export default Home;
