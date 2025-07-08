import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Ayesha K.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Absolutely loved the chocolate cake! Rich and fresh!❤️",
    rating: 5,
  },
  {
    name: "Sara B.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Best bakery in town. The cupcakes are to die for!❤️",
    rating: 4,
  },
  {
    name: "Fatima Z.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "I ordered pastries and got them warm and delicious. Thank you!❤️",
    rating: 5,
  },
  {
    name: "Hina M.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "Loved the variety! The staff was also super sweet.❤️",
    rating: 4,
  },
];

const Hero = () => {
  const words = ["We", "Bake", "What", "You", "Crave🧁"];
  const [index, setIndex] = useState(0);
  const [showFullLine, setShowFullLine] = useState(false);

  useEffect(() => {
    let timer;

    if (index < words.length) {
      timer = setTimeout(() => setIndex((prev) => prev + 1), 700);
    } else if (!showFullLine) {
      // Show full line after "Crave" is alone
      timer = setTimeout(() => setShowFullLine(true), 1000);
    } else {
      // Restart after showing full line
      timer = setTimeout(() => {
        setIndex(0);
        setShowFullLine(false);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [index, showFullLine]);

  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1
          style={{
            ...styles.heading,
            transform: showFullLine ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          {showFullLine ? (
            words.map((word, i) => (
              <span key={i} style={{ ...styles.word, opacity: 1 }}>
                {word}
              </span>
            ))
          ) : (
            words.map((word, i) => (
              <span
                key={i}
                style={{
                  ...styles.word,
                  opacity: i === index - 1 ? 1 : 0.2,
                  transform: i === index - 1 ? "scale(1.3)" : "scale(1)",
                }}
              >
                {word}
              </span>
            ))
          )}
        </h1>
      </div>

      <div style={styles.right}>
        <div style={styles.reviewCard}>
          <img
            src={reviews[reviewIndex].image}
            alt="user"
            style={styles.avatar}
          />
          <p style={styles.quote}>&ldquo;{reviews[reviewIndex].quote}&rdquo;</p>
          <div style={styles.stars}>
            {Array.from({ length: reviews[reviewIndex].rating }).map(
              (_, i) => (
                <span key={i} style={styles.star}>
                  ★
                </span>
              )
            )}
          </div>
          <p style={styles.name}>- {reviews[reviewIndex].name}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    background: "#fff0f5",
    fontFamily: "sans-serif",
    padding: "0 5%",
  },
  left: {
    flex: 1,
  },
  heading: {
    fontSize: "4rem",
    color: "#d6336c",
    fontWeight: "bold",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  word: {
    transition: "all 0.5s ease",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: "350px",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #d6336c",
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "1rem",
    color: "#555",
  },
  stars: {
    color: "#d6336c",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  star: {
    margin: "0 2px",
  },
  name: {
    fontWeight: "bold",
    color: "#333",
  },
};

export default Hero;
