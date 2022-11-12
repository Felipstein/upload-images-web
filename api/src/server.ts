import { app } from "./app";

export const port = process.env.PORT ?? 3333;

app.listen(port, () => console.log(`Server started at port ${port}`));