const express = require("express");
const router = express.Router();

const anthropic = require("./antrophic");

router.post("/open-ai-response", async (req, res) => {
  const { destination, budget, areaOfInterest, from } = req.body;

  console.log(destination);
  console.log(budget);
  console.log(areaOfInterest);
  console.log(from);

  const interests = await areaOfInterest
    .map((interest) => interest.name)
    .join(", ");

  const stringResult = `I am planning a trip from ${from} to ${destination} and have a budget of rupees ${budget} and I am interested in ${interests}. Create a detailed travel itinerary including transportation and dining options that maximize my experience within budget and align with my interests .with html Format . Provide a day-by-day plan including any special considerations or preferences.`;
  const result = await anthropic(stringResult);

  res.status(201).json({
    status: 201,
    response: result,
  });
});

module.exports = router;
