const Bottle = ({ bottle,handler }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottles-card bg-white">
      <figure>
        <img src={img} alt="" className="bottle-img" />
      </figure>
      <h3 className="text-elips text-align-left text-black">{name}</h3>
      <p className=" text-align-left text-black">price ${price}</p>
      <button onClick={()=> handler(bottle)} >Buy Now</button>
    </div>
  );
};

export default Bottle;
