import Hangers from "../assets/hangers.png";
import ShoppingBags from "../assets/shopping-bags.png";

export default [
  {
    img: ShoppingBags,
    title: "client size",
    subtitle:
      "View all the business sizes this agency current manages, as \n well as which business size they choose to work with the most.",
    expertise: [
      {
        name: "Small Business(Less than $1M in revenue)",
        value: 0
      },
      {
        name: "Medium Business($1M-$10M)",
        value: 10
      },
      {
        name: "Large Business($10M-$1B)",
        value: 60
      },
      {
        name: "Enterprise($1B+)",
        value: 20
      }
    ],
    card: {
      title: "Nice!",
      star: false,
      color: "#2D9CDB",
      border: true,
      description: "Ogilvy is managing businesses of a similar size to yours."
    }
  },
  {
    img: Hangers,
    title: "industry focus",
    subtitle:
      "See which industries this agency has the most \n experience and expertise in.",
    expertise: [
      {
        name: "Healthcare",
        value: 50
      },
      {
        name: "Business Services",
        value: 20
      },
      {
        name: "Automotive",
        value: 15
      },
      {
        name: "Financial Services",
        value: 10
      }
    ],
    card: {
      title: "Things are looking good!",
      star: true,
      border: false,
      color: "#2D9CDB",
      description:
        "Ogilvy has experience working with the same type of business as yours."
    }
  }
];
