import React,{useState,useEffect,useRef} from 'react'

const images=[
    'https://thumbs.dreamstime.com/b/dessert-cut-pieces-delicious-mouth-watering-birthday-cake-dessert-cut-pieces-delicious-mouth-watering-birthday-cake-created-272675778.jpg',
     'https://as1.ftcdn.net/v2/jpg/05/83/48/70/1000_F_583487090_Ihv7Co03evx4LuVGi7TDASDIX5nSZFGB.jpg',
     'http://thumbs.dreamstime.com/b/delicious-mouth-watering-cake-surrounded-fluttering-butterflies-delicious-mouth-watering-cake-surrounded-fluttering-269140518.jpg',
];
function Hero({onExploreClick}) {
   
    const [index,setIndex]= useState(0);
     useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // change image every 3 seconds

    return () => clearInterval(timer); // cleanup
  }, []);

  const Styles={
container:{
    backgroundColor:'#fff0f5',
    paddingTop: '80px',
    textAlign:'center',
},
heading:{
 fontSize: '36px',
      color: '#d6336c',
      marginBottom: '20px',
},
sub:{
    fontSize: '18px',
      color: '#555',
      marginBottom: '30px',
},
button:{
     backgroundColor: '#d6336c',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '8px',
      cursor: 'pointer',
},
image:{
     marginTop: '30px',
      width: '300px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom:'30px',
},      

    }
  return (
   <section style={Styles.container}>
     <h2 style={Styles.heading}>Freshly Baked Happiness🍪</h2>
     <p style={Styles.sub}> Delicious cakes, cookies & more delivered to your door!</p>
     <button onClick={onExploreClick} style={Styles.button}>Explore Menu</button>
     <div>
        <img src={images[index]}
        alt='Bakery'
        style={Styles.image}
        />
     </div>
   </section>
  )
}

export default Hero
