import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import { SEO } from "../components/Shared/SEO/SEO";
import { styled } from "linaria/react";

const Intro = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8.2rem;

  span {
    width: 70%;
    margin: auto;
    text-align: center;
    font-weight: 700;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title={"home"} description="This is an index page" />
    <Intro>
      <span>Hello this is a Momentum. starter</span>
    </Intro>
  </Layout>
);

export default IndexPage;
