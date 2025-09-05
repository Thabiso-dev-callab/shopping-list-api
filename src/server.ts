import express from "express";
import itemRoutes from "./routes/items";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON body
app.use("/items", itemRoutes);

app.use(errorHandler); // global error handler

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
