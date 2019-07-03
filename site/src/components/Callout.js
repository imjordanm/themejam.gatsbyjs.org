/** @jsx jsx */
import { jsx } from 'theme-ui';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

const Callout = ({ node }) => {
  return (
    <div
      sx={{
        position: `relative`,
        backgroundColor: `#FCFAFF`,
        minHeight: `100px`,
        marginTop: 6,
        marginBottom: 6,
        padding: [4, 5],
        '&::before': {
          position: `absolute`,
          zIndex: `-1`,
          width: `100px`,
          height: `100px`,
          right: 0,
          transform: `translate(1.75rem,-5.75rem)`,
          content: '""',
          backgroundImage: `linear-gradient(45deg, #B17ACC 16.67%, #ffffff 16.67%, #ffffff 50%, #B17ACC 50%, #B17ACC 66.67%, #ffffff 66.67%, #ffffff 100%)`,
          backgroundSize: `4.24px 4.24px`,
        },
        '&::after': {
          position: `absolute`,
          content: '""',
          bottom: 0,
          left: 0,
          transform: `rotate(135deg) translate(21px, -3px)`,
          borderLeft: `20px solid transparent`,
          borderRight: `20px solid transparent`,
          borderTop: `20px solid #B17ACC`,
        },
        'h2:first-of-type': {
          marginTop: 0,
        },
      }}
    >
      <PortableText blocks={node.content} />
    </div>
  );
};

export default Callout;
