import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { routes } from "../../../../lib/routes";
import GatsbyImage from "gatsby-image";
import { styled } from "linaria/react";

export type LogoLinkProps = React.HTMLAttributes<HTMLElement>;

const LogoLinkInner: React.FC<LogoLinkProps> = (props: LogoLinkProps) => {
  const { file } = useStaticQuery(graphql`
    query Logo {
      file(absolutePath: {}, relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 180, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <Link to={routes.home.to} className={props.className}>
      <GatsbyImage fixed={file.childImageSharp.fixed} />
    </Link>
  );
};

export const LogoLink = styled(LogoLinkInner)``;
