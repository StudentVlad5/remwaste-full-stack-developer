import imageConstruction from "../../../assets/images/under-construction-website.png";

type Props = {
  title: string;
};

export const UnderConstraction = ({title}:Props) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{color:"#2F5597", fontWeight:"800"}}>PAGE {title} Under Construction</h1>
      <p>We are working hard to bring you new features. Stay tuned!</p>
      <img src={imageConstruction} alt="Under Constraction" style={{ maxWidth: '100%', maxHeight: '400px' }} />
      <h2>Move to Select Skip Page</h2>
      <p>Thank you</p>
    </div>
  );

};
