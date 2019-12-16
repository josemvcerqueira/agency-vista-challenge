import { hexToRGB } from "../utils";

export default {
  datasets: [
    {
      labels: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      borderColor: "#fff",
      fill: false,
      data: [50, 20, 15, 10],
      backgroundColor: [
        hexToRGB("#FD5359", 1),
        hexToRGB("#FD5359", 0.5),
        hexToRGB("#FD5359", 0.3),
        hexToRGB("#FD5359", 0.1)
      ],
      borderWidth: 2,
      weight: 10
    }
  ]
};
