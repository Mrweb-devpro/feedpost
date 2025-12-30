import { Router } from "express";
import { oauth } from "../../config/oauth.config";

const oauthRouter = Router();

// Only OAuth endpoints
oauthRouter.use("/", oauth.handler);

export default oauthRouter;
